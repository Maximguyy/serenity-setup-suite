import { useMemo } from 'react';
import { format, addDays, isSameDay, isToday, isBefore, startOfDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { clientConfig } from '@/config/client-config';
import { cn } from '@/lib/utils';

interface BookingDatePickerProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  onDateChange: (date: Date | null) => void;
  onTimeChange: (time: string | null) => void;
}

const BookingDatePicker = ({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange
}: BookingDatePickerProps) => {
  const { hours } = clientConfig;

  // Parse opening hours from config
  const parseHours = (hoursString: string): { open: string; close: string } | null => {
    if (hoursString === 'Fermé') return null;
    const match = hoursString.match(/(\d{1,2}h\d{2})\s*-\s*(\d{1,2}h\d{2})/);
    if (!match) return null;
    return { open: match[1], close: match[2] };
  };

  // Get day name from date
  const getDayKey = (date: Date): keyof typeof hours => {
    const days: (keyof typeof hours)[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[date.getDay()];
  };

  // Check if date is a closed day
  const isClosedDay = (date: Date): boolean => {
    const dayKey = getDayKey(date);
    return hours[dayKey] === 'Fermé';
  };

  // Generate time slots for selected date
  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];

    const dayKey = getDayKey(selectedDate);
    const dayHours = parseHours(hours[dayKey]);
    if (!dayHours) return [];

    const slots: string[] = [];
    const parseTime = (time: string) => {
      const [h, m] = time.replace('h', ':').split(':').map(Number);
      return h * 60 + (m || 0);
    };

    const openMinutes = parseTime(dayHours.open);
    const closeMinutes = parseTime(dayHours.close);

    // Generate slots every 30 minutes
    for (let minutes = openMinutes; minutes < closeMinutes - 30; minutes += 30) {
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      slots.push(`${h.toString().padStart(2, '0')}h${m.toString().padStart(2, '0')}`);
    }

    return slots;
  }, [selectedDate, hours]);

  // Disable past dates and closed days
  const disabledDays = (date: Date) => {
    return isBefore(date, startOfDay(new Date())) || isClosedDay(date);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-base font-semibold text-foreground">
        Date et heure
      </h3>

      {/* Calendar */}
      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={selectedDate || undefined}
          onSelect={(date) => {
            onDateChange(date || null);
            onTimeChange(null); // Reset time when date changes
          }}
          disabled={disabledDays}
          locale={fr}
          className="pointer-events-auto rounded-lg border border-border"
          classNames={{
            day_selected: 'bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground',
            day_today: 'bg-muted text-foreground'
          }}
        />
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="space-y-3">
          <p className="font-body text-sm text-muted-foreground">
            Créneaux disponibles le{' '}
            <span className="font-medium text-foreground">
              {format(selectedDate, 'EEEE d MMMM', { locale: fr })}
            </span>
          </p>

          {timeSlots.length > 0 ? (
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => onTimeChange(time)}
                  className={cn(
                    'rounded-lg border px-3 py-2 font-body text-sm font-medium transition-all',
                    selectedTime === time
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-background text-foreground hover:border-accent hover:bg-accent/10'
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <p className="py-4 text-center font-body text-sm text-muted-foreground">
              Aucun créneau disponible ce jour
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingDatePicker;

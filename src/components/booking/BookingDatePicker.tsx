import { useMemo, useState } from 'react';
import { format, isBefore, startOfDay, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
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
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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

  // Generate time slots for selected date - grouped by period
  const timeSlotGroups = useMemo(() => {
    if (!selectedDate) return { morning: [], afternoon: [] };

    const dayKey = getDayKey(selectedDate);
    const dayHours = parseHours(hours[dayKey]);
    if (!dayHours) return { morning: [], afternoon: [] };

    const morning: string[] = [];
    const afternoon: string[] = [];
    
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
      const slot = `${h.toString().padStart(2, '0')}h${m.toString().padStart(2, '0')}`;
      
      if (h < 12) {
        morning.push(slot);
      } else {
        afternoon.push(slot);
      }
    }

    return { morning, afternoon };
  }, [selectedDate, hours]);

  // Disable past dates only (not closed days - user can still select them to see "fermé")
  const disabledDays = (date: Date) => {
    return isBefore(date, startOfDay(new Date()));
  };

  const handleDateSelect = (date: Date | undefined) => {
    onDateChange(date || null);
    onTimeChange(null);
    setIsCalendarOpen(false);
  };

  const hasTimeSlots = timeSlotGroups.morning.length > 0 || timeSlotGroups.afternoon.length > 0;

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-base font-semibold text-foreground">
        Date et heure
      </h3>

      {/* Date picker button */}
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal h-12',
              !selectedDate && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-3 h-5 w-5 text-accent" />
            {selectedDate ? (
              <span className="font-medium">
                {format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}
              </span>
            ) : (
              <span>Choisir une date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="z-[1002] w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate || undefined}
            onSelect={handleDateSelect}
            disabled={disabledDays}
            locale={fr}
            className="pointer-events-auto"
            classNames={{
              day_selected: 'bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground',
              day_today: 'bg-muted text-foreground',
              day_disabled: 'text-muted-foreground opacity-50'
            }}
          />
        </PopoverContent>
      </Popover>

      {/* Time slots */}
      {selectedDate && (
        <div className="space-y-4">
          {isClosedDay(selectedDate) ? (
            <div className="rounded-lg border border-border bg-muted/30 p-4 text-center">
              <p className="font-body text-sm text-muted-foreground">
                L'institut est fermé le{' '}
                <span className="font-medium text-foreground">
                  {format(selectedDate, 'EEEE', { locale: fr })}
                </span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Veuillez choisir un autre jour
              </p>
            </div>
          ) : hasTimeSlots ? (
            <>
              {/* Morning slots */}
              {timeSlotGroups.morning.length > 0 && (
                <div className="space-y-2">
                  <p className="font-body text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Matin
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {timeSlotGroups.morning.map((time) => (
                      <button
                        key={time}
                        onClick={() => onTimeChange(time)}
                        className={cn(
                          'rounded-full border px-4 py-2 font-body text-sm font-medium transition-all',
                          selectedTime === time
                            ? 'border-accent bg-accent text-accent-foreground'
                            : 'border-border bg-background text-foreground hover:border-accent hover:bg-accent/10'
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Afternoon slots */}
              {timeSlotGroups.afternoon.length > 0 && (
                <div className="space-y-2">
                  <p className="font-body text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Après-midi
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {timeSlotGroups.afternoon.map((time) => (
                      <button
                        key={time}
                        onClick={() => onTimeChange(time)}
                        className={cn(
                          'rounded-full border px-4 py-2 font-body text-sm font-medium transition-all',
                          selectedTime === time
                            ? 'border-accent bg-accent text-accent-foreground'
                            : 'border-border bg-background text-foreground hover:border-accent hover:bg-accent/10'
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
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

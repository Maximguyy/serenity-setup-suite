import { useState, useMemo, useEffect } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { BookingState, ClientInfo, ServiceItem, initialBookingState } from './types';
import BookingServicePicker from './BookingServicePicker';
import BookingDatePicker from './BookingDatePicker';
import BookingClientForm from './BookingClientForm';
import BookingNotes from './BookingNotes';
import { cn } from '@/lib/utils';
import { z } from 'zod';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialService?: ServiceItem | null;
}

// Validation schema
const clientInfoSchema = z.object({
  firstName: z.string().trim().min(1, 'Prénom requis').max(50, 'Prénom trop long'),
  lastName: z.string().trim().min(1, 'Nom requis').max(50, 'Nom trop long'),
  email: z.string().trim().email('Email invalide').max(100, 'Email trop long'),
  phone: z.string().trim().min(10, 'Téléphone invalide').max(20, 'Téléphone trop long')
    .regex(/^[0-9\s+()-]+$/, 'Format de téléphone invalide')
});

const BookingModal = ({ open, onOpenChange, initialService = null }: BookingModalProps) => {
  const [bookingState, setBookingState] = useState<BookingState>(initialBookingState);
  const [errors, setErrors] = useState<Partial<Record<keyof ClientInfo, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setBookingState({
        ...initialBookingState,
        selectedServices: initialService ? [initialService] : []
      });
      setErrors({});
    }
  }, [open, initialService]);

  // Calculate total price
  const totalPrice = useMemo(() => {
    return bookingState.selectedServices.reduce((sum, service) => {
      const price = parseFloat(service.price.replace('€', '').replace(',', '.'));
      return sum + (isNaN(price) ? 0 : price);
    }, 0);
  }, [bookingState.selectedServices]);

  // Calculate total duration
  const totalDuration = useMemo(() => {
    return bookingState.selectedServices.reduce((sum, service) => {
      const match = service.duration.match(/(\d+)/);
      return sum + (match ? parseInt(match[1]) : 0);
    }, 0);
  }, [bookingState.selectedServices]);

  const handleServicesChange = (services: ServiceItem[]) => {
    setBookingState(prev => ({ ...prev, selectedServices: services }));
  };

  const handleDateChange = (date: Date | null) => {
    setBookingState(prev => ({ ...prev, selectedDate: date }));
  };

  const handleTimeChange = (time: string | null) => {
    setBookingState(prev => ({ ...prev, selectedTime: time }));
  };

  const handleClientInfoChange = (clientInfo: ClientInfo) => {
    setBookingState(prev => ({ ...prev, clientInfo }));
    // Clear errors when user types
    setErrors({});
  };

  const handleNotesChange = (notes: string) => {
    setBookingState(prev => ({ ...prev, notes }));
  };

  const validateForm = (): boolean => {
    // Validate client info
    const result = clientInfoSchema.safeParse(bookingState.clientInfo);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ClientInfo, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ClientInfo;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }

    return true;
  };

  const isFormValid = useMemo(() => {
    return (
      bookingState.selectedServices.length > 0 &&
      bookingState.selectedDate !== null &&
      bookingState.selectedTime !== null &&
      bookingState.clientInfo.firstName.trim() !== '' &&
      bookingState.clientInfo.lastName.trim() !== '' &&
      bookingState.clientInfo.email.trim() !== '' &&
      bookingState.clientInfo.phone.trim() !== ''
    );
  }, [bookingState]);

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call - in production this would send to a backend
    console.log('Booking submitted:', bookingState);
    
    // For now, just close the modal after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenChange(false);
      // Could show a success toast here
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          'flex h-[90vh] max-h-[90vh] w-full max-w-2xl flex-col gap-0 overflow-hidden p-0',
          'sm:rounded-2xl'
        )}
      >
        {/* Sticky header */}
        <div className="shrink-0 border-b border-border bg-background px-6 py-4">
          <DialogTitle className="font-heading text-xl font-semibold">
            Réserver une séance
          </DialogTitle>
          {bookingState.selectedServices.length > 0 && (
            <p className="mt-1 font-body text-sm text-muted-foreground">
              {bookingState.selectedServices.length} prestation{bookingState.selectedServices.length > 1 ? 's' : ''} • {totalDuration} min
            </p>
          )}
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-8">
            {/* Step 1: Services */}
            <BookingServicePicker
              selectedServices={bookingState.selectedServices}
              onServicesChange={handleServicesChange}
            />

            {/* Step 2: Date & Time */}
            <BookingDatePicker
              selectedDate={bookingState.selectedDate}
              selectedTime={bookingState.selectedTime}
              onDateChange={handleDateChange}
              onTimeChange={handleTimeChange}
            />

            {/* Step 3: Client Info */}
            <BookingClientForm
              clientInfo={bookingState.clientInfo}
              onClientInfoChange={handleClientInfoChange}
              errors={errors}
            />

            {/* Step 4: Notes */}
            <BookingNotes
              notes={bookingState.notes}
              onNotesChange={handleNotesChange}
            />
          </div>
        </div>

        {/* Sticky footer */}
        <div className="shrink-0 border-t border-border bg-background px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Total */}
            <div>
              <p className="font-body text-sm text-muted-foreground">Total</p>
              <p className="font-heading text-2xl font-bold text-foreground">
                {totalPrice.toFixed(0)}€
              </p>
            </div>

            {/* Summary & CTA */}
            <div className="flex flex-col items-end gap-2">
              {bookingState.selectedDate && bookingState.selectedTime && (
                <p className="font-body text-xs text-muted-foreground">
                  {format(bookingState.selectedDate, 'EEEE d MMMM', { locale: fr })} à {bookingState.selectedTime}
                </p>
              )}
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                className="min-w-[180px]"
              >
                {isSubmitting ? 'Confirmation...' : 'Confirmer la réservation'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

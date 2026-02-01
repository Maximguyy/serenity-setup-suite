import { useState, useMemo, useEffect } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { BookingState, ClientInfo, ServiceItem, initialBookingState } from './types';
import BookingServicePicker from './BookingServicePicker';
import BookingDatePicker from './BookingDatePicker';
import BookingClientForm from './BookingClientForm';
import BookingNotes from './BookingNotes';
import { cn } from '@/lib/utils';
import { z } from 'zod';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

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
    setErrors({});
  };

  const handleNotesChange = (notes: string) => {
    setBookingState(prev => ({ ...prev, notes }));
  };

  const validateForm = (): boolean => {
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
    console.log('Booking submitted:', bookingState);
    
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay 
          className="fixed inset-0 z-[1000] bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
        />
        
        <Dialog.Content
          className={cn(
            'fixed inset-x-0 bottom-0 z-[1001] flex h-[90vh] max-h-[90vh] w-full flex-col gap-0 overflow-hidden bg-background p-0 shadow-xl',
            'rounded-t-2xl sm:inset-x-auto sm:left-1/2 sm:max-w-2xl sm:-translate-x-1/2 sm:rounded-2xl sm:bottom-4',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
            'sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95'
          )}
        >
          <Dialog.Close className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-muted/80 shadow-md ring-offset-background transition-all hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-5 w-5 text-foreground" />
            <span className="sr-only">Fermer</span>
          </Dialog.Close>

          <div className="shrink-0 border-b border-border bg-background px-4 py-4 sm:px-6">
            <Dialog.Title className="font-heading text-lg font-semibold sm:text-xl">
              Réserver une séance
            </Dialog.Title>
            {bookingState.selectedServices.length > 0 && (
              <p className="mt-1 font-body text-sm text-muted-foreground">
                {bookingState.selectedServices.length} prestation{bookingState.selectedServices.length > 1 ? 's' : ''} • {totalDuration} min
              </p>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
            <div className="space-y-6 sm:space-y-8">
              <BookingServicePicker
                selectedServices={bookingState.selectedServices}
                onServicesChange={handleServicesChange}
              />

              <BookingDatePicker
                selectedDate={bookingState.selectedDate}
                selectedTime={bookingState.selectedTime}
                onDateChange={handleDateChange}
                onTimeChange={handleTimeChange}
              />

              <BookingClientForm
                clientInfo={bookingState.clientInfo}
                onClientInfoChange={handleClientInfoChange}
                errors={errors}
              />

              <BookingNotes
                notes={bookingState.notes}
                onNotesChange={handleNotesChange}
              />
            </div>
          </div>

          <div className="shrink-0 border-t border-border bg-background px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="shrink-0">
                <p className="font-body text-xs text-muted-foreground sm:text-sm">Total</p>
                <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                  {totalPrice.toFixed(0)}€
                </p>
              </div>

              <div className="flex flex-col items-end gap-1 sm:gap-2">
                {bookingState.selectedDate && bookingState.selectedTime && (
                  <p className="hidden font-body text-xs text-muted-foreground sm:block">
                    {format(bookingState.selectedDate, 'EEEE d MMMM', { locale: fr })} à {bookingState.selectedTime}
                  </p>
                )}
                <Button
                  onClick={handleSubmit}
                  disabled={!isFormValid || isSubmitting}
                  className="whitespace-nowrap text-sm sm:min-w-[180px]"
                >
                  {isSubmitting ? 'Confirmation...' : 'Confirmer'}
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BookingModal;

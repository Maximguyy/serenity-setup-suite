import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ConfirmationState {
  clientName: string;
  selectedDate: string;
  selectedTime: string;
  servicesCount: number;
}

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ConfirmationState | null;

  // If no state, redirect to home
  if (!state) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <p className="mb-4 text-center font-body text-muted-foreground">
          Cette page n'est pas accessible directement.
        </p>
        <Button asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md text-center">
        {/* Animated success circle */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-28 w-28 animate-[scale-in_0.5s_ease-out] items-center justify-center rounded-full bg-accent shadow-lg sm:h-32 sm:w-32">
            <Check className="h-14 w-14 text-accent-foreground sm:h-16 sm:w-16" strokeWidth={3} />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 animate-[fade-in_0.5s_ease-out_0.2s_both] font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Réservation confirmée !
        </h1>

        {/* Personal message */}
        {state.clientName && (
          <p className="mb-2 animate-[fade-in_0.5s_ease-out_0.3s_both] font-body text-lg text-foreground">
            Merci <span className="font-semibold">{state.clientName}</span> !
          </p>
        )}

        {/* Description */}
        <p className="mb-6 animate-[fade-in_0.5s_ease-out_0.4s_both] font-body text-muted-foreground">
          Vous allez recevoir un email de confirmation dans les prochaines minutes avec tous les détails de votre rendez-vous.
        </p>

        {/* Booking summary card */}
        {(state.selectedDate || state.selectedTime) && (
          <div className="mb-8 animate-[fade-in_0.5s_ease-out_0.5s_both] rounded-xl border border-border bg-card p-4 shadow-sm">
            <p className="font-body text-sm text-muted-foreground">Votre rendez-vous</p>
            <p className="mt-1 font-heading text-lg font-semibold text-foreground">
              {state.selectedDate}
              {state.selectedTime && ` à ${state.selectedTime}`}
            </p>
            {state.servicesCount > 0 && (
              <p className="mt-1 font-body text-sm text-muted-foreground">
                {state.servicesCount} prestation{state.servicesCount > 1 ? 's' : ''}
              </p>
            )}
          </div>
        )}

        {/* CTA Button */}
        <div className="animate-[fade-in_0.5s_ease-out_0.6s_both]">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;

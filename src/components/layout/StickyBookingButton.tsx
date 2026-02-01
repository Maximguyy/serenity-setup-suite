import { Calendar } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

const StickyBookingButton = () => {
  const { booking } = clientConfig;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999] hidden p-4 pb-[calc(12px+env(safe-area-inset-bottom,0px))] max-md:block">
      <a
        href={booking.url}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent font-body text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
      >
        <Calendar className="h-4 w-4 shrink-0" />
        <span>{booking.buttonText || 'Réserver'}</span>
      </a>
    </div>
  );
};

export default StickyBookingButton;

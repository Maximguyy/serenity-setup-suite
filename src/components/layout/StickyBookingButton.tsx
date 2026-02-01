import { Calendar } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

const StickyBookingButton = () => {
  const { booking } = clientConfig;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999] hidden p-4 pb-[calc(16px+env(safe-area-inset-bottom,0px))] max-md:block">
      <a
        href={booking.url}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-accent font-body text-base font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
      >
        <Calendar className="h-5 w-5 shrink-0" />
        <span>{booking.buttonText || 'Réserver'}</span>
      </a>
    </div>
  );
};

export default StickyBookingButton;

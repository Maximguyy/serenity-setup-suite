import { Calendar } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

interface StickyBookingButtonProps {
  onClick?: () => void;
}

const StickyBookingButton = ({ onClick }: StickyBookingButtonProps) => {
  const { booking } = clientConfig;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999] hidden p-4 pb-[calc(12px+env(safe-area-inset-bottom,0px))] max-md:block">
      <a
        href={onClick ? '#' : booking.url}
        target={onClick ? undefined : '_blank'}
        rel={onClick ? undefined : 'noopener noreferrer'}
        onClick={handleClick}
        className="pointer-events-auto flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent font-body text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
      >
        <Calendar className="h-4 w-4 shrink-0" />
        <span>{booking.buttonText || 'Réserver'}</span>
      </a>
    </div>
  );
};

export default StickyBookingButton;

import { X, Clock } from 'lucide-react';
import { ServiceItem } from './types';
import { cn } from '@/lib/utils';

interface SelectedServiceCardProps {
  service: ServiceItem;
  onRemove: () => void;
}

const SelectedServiceCard = ({ service, onRemove }: SelectedServiceCardProps) => {
  return (
    <div className="relative flex gap-4 rounded-xl border border-border bg-background p-3 shadow-sm">
      {/* Image thumbnail */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover"
        />
        {/* Duration badge */}
        <div className="absolute left-1 top-1 flex items-center gap-1 rounded-full bg-background/90 px-2 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
          <Clock className="h-3 w-3" />
          {service.duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center">
        <span className="text-xs font-medium text-muted-foreground">
          {service.categoryName}
        </span>
        <h4 className="font-heading text-base font-semibold text-foreground">
          {service.name}
        </h4>
        <span className="mt-1 font-body text-sm font-semibold text-accent">
          {service.price}
        </span>
      </div>

      {/* Remove button */}
      <button
        onClick={onRemove}
        className={cn(
          'absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full',
          'bg-foreground text-background shadow-md transition-all',
          'hover:scale-110 hover:bg-foreground/90'
        )}
        aria-label={`Retirer ${service.name}`}
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default SelectedServiceCard;

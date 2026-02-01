import { useState } from 'react';
import { Plus } from 'lucide-react';
import { ServiceItem } from './types';
import SelectedServiceCard from './SelectedServiceCard';
import ServiceSearchDialog from './ServiceSearchDialog';
import { cn } from '@/lib/utils';

interface BookingServicePickerProps {
  selectedServices: ServiceItem[];
  onServicesChange: (services: ServiceItem[]) => void;
  maxServices?: number;
}

const BookingServicePicker = ({
  selectedServices,
  onServicesChange,
  maxServices = 6
}: BookingServicePickerProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleAddService = (service: ServiceItem) => {
    if (selectedServices.length < maxServices) {
      onServicesChange([...selectedServices, service]);
    }
  };

  const handleRemoveService = (index: number) => {
    const newServices = selectedServices.filter((_, i) => i !== index);
    onServicesChange(newServices);
  };

  const canAddMore = selectedServices.length < maxServices;

  return (
    <div className="space-y-3">
      <h3 className="font-heading text-base font-semibold text-foreground">
        Prestations
      </h3>

      {/* Selected services list */}
      <div className="space-y-3">
        {selectedServices.map((service, index) => (
          <SelectedServiceCard
            key={`${service.name}-${index}`}
            service={service}
            onRemove={() => handleRemoveService(index)}
          />
        ))}
      </div>

      {/* Add service button */}
      {canAddMore && (
        <button
          onClick={() => setIsSearchOpen(true)}
          className={cn(
            'mx-auto flex w-[80%] items-center justify-center gap-2 rounded-xl',
            'border-2 border-dashed border-border bg-muted/30 px-4 py-4',
            'font-body text-sm font-medium text-muted-foreground',
            'transition-all hover:border-accent hover:bg-accent/5 hover:text-accent'
          )}
        >
          <Plus className="h-5 w-5" />
          <span>Ajouter une prestation</span>
        </button>
      )}

      {/* Search dialog */}
      <ServiceSearchDialog
        open={isSearchOpen}
        onOpenChange={setIsSearchOpen}
        onSelectService={handleAddService}
        selectedServices={selectedServices}
      />
    </div>
  );
};

export default BookingServicePicker;

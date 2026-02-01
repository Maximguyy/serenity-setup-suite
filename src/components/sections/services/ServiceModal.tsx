import { Phone, Calendar } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ServiceItem as BookingServiceItem } from '@/components/booking/types';

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
  image?: string;
  description?: string;
}

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookService?: (service: BookingServiceItem) => void;
  categoryName?: string;
  categorySlug?: string;
}

const ServiceModal = ({ 
  service, 
  isOpen, 
  onClose, 
  onBookService,
  categoryName = '',
  categorySlug = ''
}: ServiceModalProps) => {
  const { contact, ui } = clientConfig;

  if (!service) return null;

  const phoneNumber = contact.phone.replace(/\s/g, '');

  const handleBookClick = () => {
    if (onBookService && service) {
      const bookingService: BookingServiceItem = {
        name: service.name,
        duration: service.duration,
        price: service.price,
        image: service.image || '',
        categoryName: categoryName,
        categorySlug: categorySlug
      };
      onBookService(bookingService);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[85vh] max-w-[90vw] overflow-y-auto rounded-xl p-3 sm:max-w-md sm:p-4">
        {/* Service Image */}
        {service.image && (
          <div className="relative -mx-3 -mt-3 mb-1 aspect-[16/9] overflow-hidden rounded-t-xl sm:-mx-4 sm:-mt-4 sm:aspect-[2/1]">
            <img
              src={service.image}
              alt={service.name}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <DialogHeader className="text-left">
          <DialogTitle className="font-heading text-lg font-semibold text-foreground sm:text-xl">
            {service.name}
          </DialogTitle>
        </DialogHeader>

        {/* Description */}
        <p className="mt-0.5 font-body text-xs leading-relaxed text-secondary sm:text-sm">
          {service.description || clientConfig.services.defaultDescription}
        </p>

        {/* Price */}
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-heading text-2xl font-bold text-accent sm:text-3xl">
            {service.price}
          </span>
          <span className="font-body text-xs text-muted-foreground sm:text-sm">
            / {service.duration}
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          {/* Call Button - Mobile: opens dialer, Desktop: shows number */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex-1 md:hidden"
          >
            <Button
              variant="outline"
              className="w-full gap-2 border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {ui.callButton}
            </Button>
          </a>

          {/* Desktop: Display phone number beautifully */}
          <div className="hidden flex-1 md:block">
            <div className="flex h-10 items-center justify-center gap-2 rounded-md border border-accent bg-accent/5 px-4">
              <Phone className="h-4 w-4 text-accent" />
              <span className="font-body text-sm font-semibold tracking-wide text-accent">
                {contact.phone}
              </span>
            </div>
          </div>

          {/* Book Button */}
          <Button 
            onClick={handleBookClick}
            className="w-full flex-1 gap-2 bg-accent text-white hover:bg-accent-hover"
          >
            <Calendar className="h-4 w-4" />
            {ui.bookButton}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;

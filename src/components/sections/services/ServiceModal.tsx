import { Phone, Calendar } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const { contact, booking } = clientConfig;

  if (!service) return null;

  const phoneNumber = contact.phone.replace(/\s/g, '');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[85vh] max-w-[90vw] overflow-y-auto p-3 sm:max-w-md sm:p-4">
        {/* Service Image */}
        {service.image && (
          <div className="relative -mx-3 -mt-3 mb-3 aspect-[16/9] overflow-hidden rounded-t-lg sm:-mx-4 sm:-mt-4 sm:aspect-[2/1]">
            <img
              src={service.image}
              alt={service.name}
              className="h-full w-full object-cover"
            />
            {/* Duration Tag */}
            <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2.5 py-1 font-body text-[10px] font-medium text-white sm:text-xs">
              {service.duration}
            </span>
          </div>
        )}

        <DialogHeader className="text-left">
          <DialogTitle className="font-heading text-lg font-semibold text-foreground sm:text-xl">
            {service.name}
          </DialogTitle>
        </DialogHeader>

        {/* Description */}
        <p className="mt-1.5 font-body text-xs leading-relaxed text-secondary sm:text-sm">
          {service.description || 
            "Offrez-vous un moment de détente et de bien-être avec ce soin réalisé par nos expertes. Une expérience unique adaptée à vos besoins."}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-heading text-2xl font-bold text-accent sm:text-3xl">
            {service.price}
          </span>
          <span className="font-body text-xs text-muted-foreground sm:text-sm">
            / {service.duration}
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
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
              Nous appeler
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
          <a
            href={booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full gap-2 bg-accent text-white hover:bg-accent-hover">
              <Calendar className="h-4 w-4" />
              Réserver cette séance
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;

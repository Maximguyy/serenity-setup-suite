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
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        {/* Service Image */}
        {service.image && (
          <div className="relative -mx-6 -mt-6 mb-4 aspect-[4/3] overflow-hidden rounded-t-lg">
            <img
              src={service.image}
              alt={service.name}
              className="h-full w-full object-cover"
            />
            {/* Duration Tag */}
            <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1.5 font-body text-xs font-medium text-white">
              {service.duration}
            </span>
          </div>
        )}

        <DialogHeader className="text-left">
          <DialogTitle className="font-heading text-2xl font-semibold text-foreground">
            {service.name}
          </DialogTitle>
        </DialogHeader>

        {/* Description */}
        <p className="mt-2 font-body text-sm leading-relaxed text-secondary">
          {service.description || 
            "Offrez-vous un moment de détente et de bien-être avec ce soin réalisé par nos expertes. Une expérience unique adaptée à vos besoins."}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-heading text-3xl font-bold text-accent">
            {service.price}
          </span>
          <span className="font-body text-sm text-muted-foreground">
            / {service.duration}
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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

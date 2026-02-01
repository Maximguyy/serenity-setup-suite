import { clientConfig } from '@/config/client-config';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { SectionWrapper } from '@/components/core';
import { cn } from '@/lib/utils';

const hoursLabels: Record<string, string> = {
  monday: 'Lundi',
  tuesday: 'Mardi',
  wednesday: 'Mercredi',
  thursday: 'Jeudi',
  friday: 'Vendredi',
  saturday: 'Samedi',
  sunday: 'Dimanche',
};

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" background="white">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-[42px]">
          Où nous retrouver ?
        </h2>

        {/* Social Links */}
        <div className="mb-6 flex justify-center gap-4">
          <a
            href={clientConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white max-md:h-11 max-md:w-11"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 max-md:h-5 max-md:w-5" />
          </a>
          <a
            href={clientConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white max-md:h-11 max-md:w-11"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6 max-md:h-5 max-md:w-5" />
          </a>
          <a
            href={clientConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white max-md:h-11 max-md:w-11"
            aria-label="Google"
          >
            <MapPin className="h-6 w-6 max-md:h-5 max-md:w-5" />
          </a>
        </div>

        {/* Quick Contact Info */}
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-8">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clientConfig.contact.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 font-body text-sm text-foreground/80 transition-colors hover:text-accent md:text-[15px]"
          >
            <MapPin className="h-[18px] w-[18px] shrink-0 text-accent max-md:h-[16px] max-md:w-[16px]" />
            <span>
              {clientConfig.contact.address.street}, {clientConfig.contact.address.postalCode} {clientConfig.contact.address.city}, France
            </span>
          </a>
          <a
            href={`tel:${clientConfig.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2.5 font-body text-sm text-foreground/80 transition-colors hover:text-accent md:text-[15px]"
          >
            <Phone className="h-[18px] w-[18px] shrink-0 text-accent max-md:h-[16px] max-md:w-[16px]" />
            <span>{clientConfig.contact.phone}</span>
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
        {/* Map */}
        <div className="min-h-[280px] overflow-hidden rounded-xl border border-border shadow-sm md:min-h-[450px]">
          <iframe
            src={clientConfig.map.embedUrl}
            title="Carte Google Maps de notre institut"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-full w-full border-none"
          />
        </div>

        {/* Hours */}
        <div className="flex h-full flex-col rounded-xl border border-border bg-muted p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Clock className="h-7 w-7 shrink-0 text-accent" />
            <h3 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
              Horaires d'ouverture
            </h3>
          </div>

          <ul className="flex flex-1 list-none flex-col justify-between p-0">
            {Object.entries(clientConfig.hours).map(([day, hours]) => (
              <li
                key={day}
                className={cn(
                  'flex justify-between border-b border-border py-2.5 font-body text-sm text-foreground/80 last:border-b-0 md:py-3 md:text-[15px]',
                  hours === 'Fermé' && 'opacity-50'
                )}
              >
                <span className="font-semibold">{hoursLabels[day]}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

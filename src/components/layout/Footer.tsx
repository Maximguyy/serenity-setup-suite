import { clientConfig } from '@/config/client-config';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] px-6 pb-[calc(160px+env(safe-area-inset-bottom,0px))] pt-16 md:px-8 md:pb-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center md:grid-cols-2 md:gap-8 md:text-left lg:grid-cols-4 lg:gap-12">
        {/* Column 1: Location */}
        <div>
          <h4 className="mb-4 font-body text-base font-semibold uppercase tracking-wide text-white">
            Nous trouver
          </h4>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clientConfig.contact.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start gap-2.5 text-white/80 transition-colors hover:text-accent"
          >
            <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" />
            <span className="font-body text-sm leading-relaxed">
              {clientConfig.contact.address.street}
              <br />
              {clientConfig.contact.address.postalCode} {clientConfig.contact.address.city}
            </span>
          </a>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h4 className="mb-4 font-body text-base font-semibold uppercase tracking-wide text-white">
            Nous contacter
          </h4>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a
              href={`tel:${clientConfig.contact.phone.replace(/\s/g, '')}`}
              className="group inline-flex items-center gap-2.5 text-white/80 transition-colors hover:text-accent"
            >
              <Phone className="h-[18px] w-[18px] shrink-0 text-accent" />
              <span className="font-body text-sm">{clientConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${clientConfig.contact.email}`}
              className="group inline-flex items-center gap-2.5 text-white/80 transition-colors hover:text-accent"
            >
              <Mail className="h-[18px] w-[18px] shrink-0 text-accent" />
              <span className="font-body text-sm">{clientConfig.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="mb-4 font-body text-base font-semibold uppercase tracking-wide text-white">
            Informations légales
          </h4>
          <div className="flex flex-col items-center gap-2.5 md:items-start">
            {clientConfig.footer.legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-white/80 transition-all hover:text-accent hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 4: Social */}
        <div>
          <h4 className="mb-4 font-body text-base font-semibold uppercase tracking-wide text-white">
            Nos réseaux
          </h4>
          <div className="flex justify-center gap-4 md:justify-start">
            <a
              href={clientConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-[#1A1A1A]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={clientConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-[#1A1A1A]"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={clientConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-[#1A1A1A]"
              aria-label="Google"
            >
              <MapPin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center md:mt-12">
        <p className="font-body text-[13px] text-white/60">
          {clientConfig.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

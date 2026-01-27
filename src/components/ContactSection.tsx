import { clientConfig } from '@/config/client-config';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const hoursLabels: Record<string, string> = {
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
  };

  return (
    <section id="contact" className="contact-section">
      <style>{`
        .contact-section {
          background: #FFFFFF;
          padding: 80px 32px;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .contact-title {
          font-family: 'Bitter', serif;
          font-size: 42px;
          font-weight: 600;
          color: #1A1A1A;
          margin: 0 0 24px 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: #F8F8F8;
          border-radius: 50%;
          transition: all 300ms ease;
          color: #1A1A1A;
        }

        .social-link:hover {
          background: var(--color-accent, #C9A87C);
          transform: translateY(-2px);
          color: #FFFFFF;
        }

        .social-link svg {
          width: 24px;
          height: 24px;
        }

        .quick-contact {
          display: flex;
          flex-direction: row;
          gap: 32px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .quick-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          color: #333333;
          text-decoration: none;
          transition: color 200ms ease;
        }

        .quick-contact-item:hover {
          color: var(--color-accent, #C9A87C);
        }

        .quick-contact-item svg {
          width: 20px;
          height: 20px;
          color: var(--color-accent, #C9A87C);
          flex-shrink: 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: stretch;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #E5E5E5;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          height: 100%;
          min-height: 450px;
        }

        .map-container iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: none;
        }

        .hours-block {
          background: #F8F8F8;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid #E5E5E5;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .hours-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .hours-header svg {
          width: 28px;
          height: 28px;
          color: var(--color-accent, #C9A87C);
          flex-shrink: 0;
        }

        .hours-header h3 {
          font-family: 'Bitter', serif;
          font-size: 24px;
          font-weight: 600;
          color: #1A1A1A;
          margin: 0;
        }

        .hours-list {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #E5E5E5;
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          color: #333333;
        }

        .hours-item:last-child {
          border-bottom: none;
        }

        .hours-day {
          font-weight: 600;
        }

        .hours-time {
          font-weight: 400;
        }

        .hours-item.closed {
          opacity: 0.5;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .contact-section {
            padding: 60px 16px;
          }

          .contact-title {
            font-size: 32px;
          }

          .social-links {
            margin-bottom: 20px;
          }

          .quick-contact {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }

          .quick-contact-item {
            font-size: 14px;
          }

          .quick-contact-item svg {
            width: 18px;
            height: 18px;
          }

          .contact-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .map-container {
            min-height: 280px;
            height: 280px;
          }

          .hours-block {
            padding: 24px;
          }

          .hours-header h3 {
            font-size: 20px;
          }

          .hours-item {
            padding: 10px 0;
            font-size: 14px;
          }

          .social-link {
            width: 44px;
            height: 44px;
          }

          .social-link svg {
            width: 20px;
            height: 20px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-grid {
            gap: 32px;
          }

          .map-container {
            min-height: 400px;
          }

          .hours-block {
            padding: 24px;
          }
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Où nous retrouver ?</h2>
          <div className="social-links">
            <a
              href={clientConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href={clientConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href={clientConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Google"
            >
              <MapPin />
            </a>
          </div>

          {/* Mobile quick contact info */}
          <div className="quick-contact">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clientConfig.contact.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-contact-item"
            >
              <MapPin />
              <span>
                {clientConfig.contact.address.street}, {clientConfig.contact.address.postalCode} {clientConfig.contact.address.city}, France
              </span>
            </a>
            <a
              href={`tel:${clientConfig.contact.phone.replace(/\s/g, '')}`}
              className="quick-contact-item"
            >
              <Phone />
              <span>{clientConfig.contact.phone}</span>
            </a>
          </div>
        </div>

        <div className="contact-grid">
          <div className="map-container">
            <iframe
              src={clientConfig.map.embedUrl}
              title="Carte Google Maps de notre institut"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="hours-block">
            <div className="hours-header">
              <Clock />
              <h3>Horaires d'ouverture</h3>
            </div>
            <ul className="hours-list">
              {Object.entries(clientConfig.hours).map(([day, hours]) => (
                <li
                  key={day}
                  className={`hours-item ${hours === 'Fermé' ? 'closed' : ''}`}
                >
                  <span className="hours-day">{hoursLabels[day]}</span>
                  <span className="hours-time">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

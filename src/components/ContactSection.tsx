import { clientConfig } from '@/config/client-config';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

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

        .contact-grid {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 48px;
          align-items: start;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #E5E5E5;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .map-container iframe {
          display: block;
          width: 100%;
          height: 450px;
          border: none;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .info-block {
          background: #F8F8F8;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid #E5E5E5;
        }

        .info-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .info-header svg {
          width: 24px;
          height: 24px;
          color: var(--color-accent, #C9A87C);
          flex-shrink: 0;
        }

        .info-header h3 {
          font-family: 'Raleway', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #1A1A1A;
          margin: 0;
        }

        .info-content {
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #333333;
          line-height: 1.6;
          margin: 0;
          padding-left: 36px;
        }

        .info-link {
          color: var(--color-accent, #C9A87C);
          text-decoration: none;
          transition: all 200ms ease;
        }

        .info-link:hover {
          text-decoration: underline;
          color: #B8956A;
        }

        .hours-list {
          list-style: none;
          padding: 0 0 0 36px;
          margin: 0;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #E5E5E5;
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
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

          .contact-grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }

          .map-container iframe {
            height: 300px;
          }

          .info-block {
            padding: 20px;
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
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }

          .map-container iframe {
            height: 400px;
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

          <div className="contact-info">
            {/* Adresse */}
            <div className="info-block">
              <div className="info-header">
                <MapPin />
                <h3>Adresse</h3>
              </div>
              <p className="info-content">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clientConfig.contact.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  {clientConfig.contact.address.street}<br />
                  {clientConfig.contact.address.postalCode} {clientConfig.contact.address.city}
                </a>
              </p>
            </div>

            {/* Téléphone */}
            <div className="info-block">
              <div className="info-header">
                <Phone />
                <h3>Téléphone</h3>
              </div>
              <p className="info-content">
                <a
                  href={`tel:${clientConfig.contact.phone.replace(/\s/g, '')}`}
                  className="info-link"
                  aria-label={`Appeler l'institut au ${clientConfig.contact.phone}`}
                >
                  {clientConfig.contact.phone}
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="info-block">
              <div className="info-header">
                <Mail />
                <h3>Email</h3>
              </div>
              <p className="info-content">
                <a
                  href={`mailto:${clientConfig.contact.email}`}
                  className="info-link"
                >
                  {clientConfig.contact.email}
                </a>
              </p>
            </div>

            {/* Horaires */}
            <div className="info-block">
              <div className="info-header">
                <Clock />
                <h3>Horaires</h3>
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
      </div>
    </section>
  );
};

export default ContactSection;

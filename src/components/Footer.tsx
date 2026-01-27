import { clientConfig } from '@/config/client-config';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background: #1A1A1A;
          padding: 60px 32px 32px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
        }

        .footer-column h4 {
          font-family: 'Raleway', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 16px 0;
        }

        .footer-content {
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
        }

        .footer-link {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 200ms ease;
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        .footer-link:hover {
          color: #C9A87C;
        }

        .footer-link svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          margin-top: 2px;
          color: #C9A87C;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .legal-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          transition: all 200ms ease;
        }

        .legal-link:hover {
          color: #C9A87C;
          text-decoration: underline;
        }

        .social-icons {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.8);
          transition: all 300ms ease;
        }

        .social-icon:hover {
          background: #C9A87C;
          color: #1A1A1A;
          transform: scale(1.1);
        }

        .social-icon svg {
          width: 20px;
          height: 20px;
        }

        .footer-copyright {
          max-width: 1200px;
          margin: 48px auto 0;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-family: 'Raleway', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Mobile */
        @media (max-width: 767px) {
          .footer {
            padding: 48px 24px 24px;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
          }

          .footer-link {
            justify-content: center;
          }

          .contact-items {
            align-items: center;
          }

          .legal-links {
            align-items: center;
          }

          .social-icons {
            justify-content: center;
          }

          .footer-copyright {
            margin-top: 32px;
            padding-top: 20px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Colonne 1 : Nous trouver */}
        <div className="footer-column">
          <h4>Nous trouver</h4>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clientConfig.contact.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <MapPin />
            <span>
              {clientConfig.contact.address.street}<br />
              {clientConfig.contact.address.postalCode} {clientConfig.contact.address.city}
            </span>
          </a>
        </div>

        {/* Colonne 2 : Nous contacter */}
        <div className="footer-column">
          <h4>Nous contacter</h4>
          <div className="contact-items">
            <a
              href={`tel:${clientConfig.contact.phone.replace(/\s/g, '')}`}
              className="footer-link"
            >
              <Phone />
              <span>{clientConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${clientConfig.contact.email}`}
              className="footer-link"
            >
              <Mail />
              <span>{clientConfig.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Colonne 3 : Informations légales */}
        <div className="footer-column">
          <h4>Informations légales</h4>
          <div className="legal-links">
            {clientConfig.footer.legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="legal-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 4 : Nos réseaux */}
        <div className="footer-column">
          <h4>Nos réseaux</h4>
          <div className="social-icons">
            <a
              href={clientConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href={clientConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href={clientConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Google"
            >
              <MapPin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        {clientConfig.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;

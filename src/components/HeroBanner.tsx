import { useEffect, useState } from 'react';
import { clientConfig } from '@/config/client-config';
import Header from './Header';

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { hero, booking, usps } = clientConfig;

  return (
    <section
      id="accueil"
      className="hero-banner"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Header intégré au hero */}
      <Header />
      {/* Background Image */}
      <div
        className="hero-background"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={hero.backgroundImage.desktop}
          />
          <img
            src={hero.backgroundImage.mobile}
            alt="Salon de beauté élégant avec ambiance zen"
            loading="eager"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </picture>
      </div>

      {/* Gradient Overlay */}
      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          padding: '80px 32px',
          textAlign: 'center',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        {/* Title */}
        <h1
          className="hero-title"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '60px',
            fontWeight: 'var(--font-semibold)',
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            marginBottom: '24px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 800ms ease-out 200ms, transform 800ms ease-out 200ms',
          }}
        >
          {hero.title}
        </h1>

        {/* Subtitle */}
        {hero.subtitle && (
          <p
            className="hero-subtitle"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              fontWeight: 'var(--font-light)',
              color: '#FFFFFF',
              opacity: isVisible ? 0.95 : 0,
              lineHeight: 1.6,
              letterSpacing: '0.01em',
              maxWidth: '600px',
              margin: '0 auto 40px',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 800ms ease-out 400ms, transform 800ms ease-out 400ms',
            }}
          >
            {hero.subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div
          className="hero-buttons"
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 800ms ease-out 600ms, transform 800ms ease-out 600ms',
          }}
        >
          {/* Primary Button */}
          <a
            href={booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
            aria-label="Réserver une séance dans notre institut"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 32px',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 'var(--font-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#FFFFFF',
              backgroundColor: 'var(--color-accent)',
              border: 'none',
              borderRadius: 'var(--border-radius-sm)',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: 'all var(--transition-normal)',
            }}
          >
            {booking.buttonText}
          </a>

          {/* Secondary Button */}
          <a
            href={booking.giftCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-secondary"
            aria-label="Offrir un soin cadeau"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 32px',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 'var(--font-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#FFFFFF',
              backgroundColor: 'transparent',
              border: '2px solid #FFFFFF',
              borderRadius: 'var(--border-radius-sm)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all var(--transition-normal)',
            }}
          >
            {booking.giftCardText}
          </a>
        </div>
      </div>

      {/* USP Bar */}
      <div
        className="usp-bar"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 800ms ease-out 800ms, transform 800ms ease-out 800ms',
        }}
      >
        <div
          className="usp-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 'var(--container-max-width)',
            margin: '0 auto',
            padding: '20px 48px',
            gap: '48px',
          }}
        >
          {/* USP 1: Femmes satisfaites */}
          <div
            className="usp-item usp-item-left"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '2px',
            }}
          >
            <span
              className="usp-count"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '32px',
                fontWeight: 'var(--font-bold)',
                color: '#FFFFFF',
                lineHeight: 1.1,
              }}
            >
              {usps.satisfiedClients.count}
            </span>
            <span
              className="usp-label"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 'var(--font-normal)',
                color: '#FFFFFF',
                opacity: 0.9,
              }}
            >
              {usps.satisfiedClients.label}
            </span>
          </div>

          {/* Separator */}
          <div
            className="usp-separator"
            style={{
              width: '1px',
              height: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}
          />

          {/* USP 2: Google Reviews */}
          <div
            className="usp-item usp-item-right"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <img
              src={usps.googleReviews.logo}
              alt="Google Reviews"
              className="usp-logo"
              style={{
                height: '56px',
                width: 'auto',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '2px',
              }}
            >
              <span
                className="usp-rating"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  fontWeight: 'var(--font-semibold)',
                  color: '#FFFFFF',
                }}
              >
                Excellent
              </span>
              <span
                className="usp-reviews"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-normal)',
                  color: '#FFFFFF',
                  opacity: 0.85,
                }}
              >
                {usps.googleReviews.count}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for hover states and responsive */}
      <style>{`
        .hero-btn-primary:hover {
          background-color: var(--color-accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(201, 168, 124, 0.4) !important;
        }

        .hero-btn-primary:active {
          transform: translateY(0);
        }

        .hero-btn-secondary:hover {
          background-color: #FFFFFF !important;
          color: #1A1A1A !important;
          border-color: #FFFFFF !important;
        }

        .hero-btn-secondary:active {
          background-color: rgba(255, 255, 255, 0.9) !important;
        }

        .hero-background img {
          transition: transform 8s ease-out;
        }

        .hero-banner:hover .hero-background img {
          transform: scale(1.03);
        }

        /* Tablet */
        @media (max-width: 1023px) {
          .hero-title {
            font-size: 48px !important;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .hero-banner {
            min-height: 85vh !important;
          }

          .hero-content {
            padding: 40px 24px 100px !important;
          }

          .hero-title {
            font-size: 36px !important;
            margin-bottom: 16px !important;
          }

          .hero-subtitle {
            font-size: 16px !important;
            margin-bottom: 32px !important;
          }

          .hero-buttons {
            flex-direction: column !important;
            width: 100%;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100% !important;
            text-align: center;
          }

          .usp-container {
            padding: 16px 20px !important;
            gap: 24px !important;
          }

          .usp-item-left {
            align-items: flex-end !important;
          }

          .usp-item-right {
            gap: 12px !important;
          }

          .usp-count {
            font-size: 24px !important;
          }

          .usp-label {
            font-size: 13px !important;
          }

          .usp-logo {
            height: 28px !important;
          }

          .usp-rating {
            font-size: 14px !important;
          }

          .usp-reviews {
            font-size: 12px !important;
          }

          .usp-separator {
            height: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;

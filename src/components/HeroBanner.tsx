import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { hero, booking } = clientConfig;

  return (
    <section
      id="accueil"
      className="hero-banner"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 114px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
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

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          opacity: isVisible ? 0.7 : 0,
          transition: 'opacity 800ms ease-out 800ms',
        }}
      >
        <ChevronDown
          size={32}
          color="#FFFFFF"
          className="scroll-arrow"
        />
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

        .scroll-arrow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(10px);
          }
          60% {
            transform: translateY(5px);
          }
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
            min-height: calc(100vh - 100px) !important;
          }

          .hero-content {
            padding: 40px 24px !important;
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

          .scroll-indicator {
            bottom: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;

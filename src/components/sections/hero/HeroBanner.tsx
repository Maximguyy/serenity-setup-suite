import { useEffect, useState } from 'react';
import { clientConfig } from '@/config/client-config';
import { Header } from '@/components/layout';
import { cn } from '@/lib/utils';

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { hero, booking } = clientConfig;

  return (
    <section
      id="accueil"
      className="relative flex min-h-[72vh] flex-col overflow-hidden max-md:min-h-[75svh]"
      style={{ marginTop: 'calc(-1 * env(safe-area-inset-top, 0px))' }}
    >
      {/* Header intégré au hero */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={hero.backgroundImage.desktop} />
          <img
            src={hero.backgroundImage.mobile}
            alt="Salon de beauté élégant avec ambiance zen"
            loading="eager"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] mx-auto flex flex-1 max-w-[900px] flex-col items-center justify-center px-6 py-10 text-center md:px-8 md:pt-[120px]">
        {/* Title */}
        <h1
          className={cn(
            'mt-20 font-heading text-4xl font-semibold text-white drop-shadow-md transition-all duration-800 md:text-5xl lg:text-[60px]',
            'leading-tight tracking-tight',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          {hero.title}
        </h1>

        {/* Subtitle */}
        {hero.subtitle && (
          <p
            className={cn(
              'mx-auto mb-8 mt-4 max-w-[600px] font-body text-base font-light leading-relaxed text-white/95 transition-all duration-800 md:mb-10 md:mt-6 md:text-xl',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
            style={{ transitionDelay: '400ms' }}
          >
            {hero.subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div
          className={cn(
            'flex w-full flex-col items-center justify-center gap-4 transition-all duration-800 md:w-auto md:flex-row',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          {/* Primary Button */}
          <a
            href={booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-8 py-3.5 font-body text-[15px] font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl md:w-auto"
            aria-label="Réserver une séance dans notre institut"
          >
            {booking.buttonText}
          </a>

          {/* Secondary Button */}
          <a
            href={booking.giftCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-sm border-2 border-white bg-transparent px-8 py-3.5 font-body text-[15px] font-semibold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white hover:text-foreground md:w-auto"
            aria-label="Offrir un soin cadeau"
          >
            {booking.giftCardText}
          </a>
        </div>
      </div>

      {/* USP Section */}
      <div
        className={cn(
          'relative z-[2] flex flex-row items-start justify-center gap-12 px-6 py-5 transition-opacity duration-800',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        style={{ transitionDelay: '800ms' }}
      >
        {/* USP 1 */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-heading text-[28px] font-semibold text-white drop-shadow-md">
            +1200
          </span>
          <span className="font-body text-sm font-light tracking-wide text-white/90">
            Femmes satisfaites
          </span>
        </div>

        {/* USP 2 */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-heading text-[28px] font-semibold text-white drop-shadow-md">
            +10
          </span>
          <span className="font-body text-sm font-light tracking-wide text-white/90">
            Ans d'expérience
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

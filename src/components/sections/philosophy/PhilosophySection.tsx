import { Leaf, Sparkles, Heart } from 'lucide-react';
import { SectionWrapper, SectionTitle } from '@/components/core';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const values = [
  {
    icon: Leaf,
    title: 'Naturel',
    description: 'Des produits sélectionnés avec soin pour respecter votre peau',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'Un savoir-faire reconnu et des techniques innovantes',
  },
  {
    icon: Heart,
    title: 'Bien-être',
    description: 'Votre détente et votre satisfaction sont notre priorité',
  },
];

const PhilosophySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <SectionWrapper id="philosophie" background="white">
      <SectionTitle title="Notre Philosophie" />

      {/* Desktop Grid */}
      <div className="hidden grid-cols-3 gap-12 md:grid">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <article key={index} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <Icon className="h-12 w-12 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-secondary">
                {value.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article
                  key={index}
                  className="min-w-0 flex-[0_0_100%] px-4"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-12 w-12 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="font-body text-base leading-relaxed text-secondary">
                      {value.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {values.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-2 w-2 rounded-full transition-all duration-300',
                selectedIndex === index
                  ? 'w-6 bg-accent'
                  : 'bg-accent/30'
              )}
              aria-label={`Aller à la valeur ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PhilosophySection;

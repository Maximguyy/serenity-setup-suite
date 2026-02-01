import { Sparkles, Heart, Leaf, Gem, LucideIcon } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { SectionWrapper, SectionTitle } from '@/components/core';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  heart: Heart,
  leaf: Leaf,
  gem: Gem,
};

const ServicesSection = () => {
  const { services, booking } = clientConfig;

  return (
    <SectionWrapper id="prestations" background="white">
      <SectionTitle title={services.sectionTitle} subtitle={services.sectionSubtitle} />

      {/* Categories */}
      <div className="space-y-12 md:space-y-16">
        {services.categories.map((category, categoryIndex) => {
          const IconComponent = iconMap[category.icon] || Sparkles;

          return (
            <div key={category.name}>
              {/* Category Header */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <IconComponent size={24} className="text-accent" />
                  <h3 className="font-body text-xl font-semibold text-foreground md:text-2xl">
                    {category.name}
                  </h3>
                </div>
                <a
                  href={booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-medium text-accent underline transition-colors hover:text-accent-hover"
                >
                  Tout afficher →
                </a>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-3 max-md:flex max-md:gap-3 max-md:overflow-x-auto max-md:pb-4 max-md:scrollbar-hide">
                {category.items.slice(0, 4).map((item) => (
                  <a
                    key={item.name}
                    href={booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'group block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300',
                      'hover:scale-[1.02] hover:shadow-lg',
                      'max-md:w-40 max-md:shrink-0 max-md:snap-start'
                    )}
                  >
                    {/* Card Image */}
                    <div className="relative aspect-square overflow-hidden bg-muted max-md:aspect-auto max-md:h-[120px]">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <IconComponent size={48} className="text-accent/50" />
                        </div>
                      )}
                      {/* Duration Tag */}
                      <span className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 font-body text-[10px] font-medium text-white md:text-[11px]">
                        {item.duration}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-3 md:p-4">
                      <h4 className="mb-1.5 font-body text-sm font-semibold leading-tight text-foreground md:text-base">
                        {item.name}
                      </h4>
                      <p className="font-body text-[15px] font-semibold text-accent md:text-base">
                        {item.price}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;

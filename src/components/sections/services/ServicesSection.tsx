import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Leaf, Gem, LucideIcon } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { SectionWrapper, SectionTitle } from '@/components/core';
import { cn } from '@/lib/utils';
import ServiceModal from './ServiceModal';

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  heart: Heart,
  leaf: Leaf,
  gem: Gem,
};

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
  image?: string;
  description?: string;
}

// Constants for grid calculation
const CARD_WIDTH = 180; // px - width of each card
const GAP = 16; // px - gap between cards (gap-4)

const getGridConfig = (itemCount: number) => {
  const displayCount = Math.min(itemCount, 6);
  if (displayCount >= 6) return { columns: 6, cardCount: 6 };
  if (displayCount >= 4) return { columns: displayCount, cardCount: displayCount };
  // For 2-3 cards, use wider cards in a flex layout
  return { columns: displayCount, cardCount: displayCount, useWideCards: true };
};

const getContainerWidth = (columns: number) => {
  return columns * CARD_WIDTH + (columns - 1) * GAP;
};

const ServicesSection = () => {
  const { services, ui } = clientConfig;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (item: ServiceItem) => {
    setSelectedService(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <SectionWrapper id="prestations" background="white">
      <SectionTitle title={services.sectionTitle} subtitle={services.sectionSubtitle} />

      {/* Categories */}
      <div className="space-y-12 md:space-y-16">
        {services.categories.map((category) => {
          const IconComponent = iconMap[category.icon] || Sparkles;
          const gridConfig = getGridConfig(category.items.length);
          const containerWidth = getContainerWidth(gridConfig.columns);

          return (
            <div key={category.name}>
              {/* Desktop: Adaptive container */}
              <div 
                className="mx-auto hidden lg:block"
                style={{ maxWidth: `${containerWidth}px` }}
              >
                {/* Category Header - aligned with grid */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconComponent size={24} className="text-accent" />
                    <h3 className="font-body text-xl font-semibold text-foreground md:text-2xl">
                      {category.name}
                    </h3>
                  </div>
                  <Link
                    to={`/soins/${category.slug}`}
                    className="font-body text-sm font-medium text-accent underline transition-colors hover:text-accent-hover"
                  >
                    {ui.viewAllLink}
                  </Link>
                </div>

                {/* Adaptive Grid */}
                <div 
                  className="grid gap-4"
                  style={{ 
                    gridTemplateColumns: `repeat(${gridConfig.columns}, 1fr)`,
                  }}
                >
                {category.items.slice(0, 6).map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleServiceClick(item)}
                    className={cn(
                      'group block overflow-hidden rounded-xl bg-white text-left shadow-sm transition-all duration-300',
                      'hover:scale-[1.02] hover:shadow-lg'
                    )}
                  >
                    {/* Card Image */}
                    <div className="relative aspect-square overflow-hidden bg-muted">
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
                      <span className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 font-body text-[10px] font-medium text-white">
                        {item.duration}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-3">
                      <h4 className="mb-1 font-body text-sm font-semibold leading-tight text-foreground">
                        {item.name}
                      </h4>
                      <p className="font-body text-sm font-semibold text-accent">
                        {item.price}
                      </p>
                    </div>
                  </button>
                ))}
                </div>
              </div>

              {/* Tablet/Mobile: Category Header */}
              <div className="mb-5 flex items-center justify-between lg:hidden">
                <div className="flex items-center gap-3">
                  <IconComponent size={24} className="text-accent" />
                  <h3 className="font-body text-xl font-semibold text-foreground md:text-2xl">
                    {category.name}
                  </h3>
                </div>
                <Link
                  to={`/soins/${category.slug}`}
                  className="hidden font-body text-sm font-medium text-accent underline transition-colors hover:text-accent-hover md:block"
                >
                  {ui.viewAllLink}
                </Link>
              </div>

              {/* Tablet: 3 cards scroll */}
              <div className="hidden gap-4 overflow-x-auto pb-4 scrollbar-hide md:flex lg:hidden">
                {category.items.slice(0, 6).map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleServiceClick(item)}
                    className={cn(
                      'group block w-44 shrink-0 snap-start overflow-hidden rounded-xl bg-white text-left shadow-sm transition-all duration-300',
                      'hover:scale-[1.02] hover:shadow-lg'
                    )}
                  >
                    {/* Card Image */}
                    <div className="relative aspect-square overflow-hidden bg-muted">
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
                      <span className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 font-body text-[10px] font-medium text-white">
                        {item.duration}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-3">
                      <h4 className="mb-1 font-body text-sm font-semibold leading-tight text-foreground">
                        {item.name}
                      </h4>
                      <p className="font-body text-sm font-semibold text-accent">
                        {item.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile: 2 cards scroll */}
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide md:hidden">
                {category.items.slice(0, 4).map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleServiceClick(item)}
                    className={cn(
                      'group block w-40 shrink-0 snap-start overflow-hidden rounded-xl bg-white text-left shadow-sm transition-all duration-300',
                      'hover:scale-[1.02] hover:shadow-lg'
                    )}
                  >
                    {/* Card Image */}
                    <div className="relative h-[120px] overflow-hidden bg-muted">
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
                      <span className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 font-body text-[10px] font-medium text-white">
                        {item.duration}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-3">
                      <h4 className="mb-1 font-body text-sm font-semibold leading-tight text-foreground">
                        {item.name}
                      </h4>
                      <p className="font-body text-sm font-semibold text-accent">
                        {item.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile: "Tout afficher" below cards */}
              <Link
                to={`/soins/${category.slug}`}
                className="mt-3 block text-center font-body text-sm font-medium text-accent underline transition-colors hover:text-accent-hover md:hidden"
              >
                {ui.viewAllLink}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </SectionWrapper>
  );
};

export default ServicesSection;

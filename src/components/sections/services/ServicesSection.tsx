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

const ServicesSection = () => {
  const { services, booking } = clientConfig;
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
                <Link
                  to={`/soins/${category.slug}`}
                  className="font-body text-sm font-medium text-accent underline transition-colors hover:text-accent-hover"
                >
                  Tout afficher →
                </Link>
              </div>

              {/* Desktop: 6 cards grid | Tablet: 3 cards horizontal scroll | Mobile: 2 cards horizontal scroll */}
              <div className="hidden gap-4 lg:grid lg:grid-cols-6">
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

              {/* Tablet: 3 cards scroll */}
              <div className="hidden gap-4 overflow-x-auto pb-4 scrollbar-hide max-lg:flex md:max-lg:flex">
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

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Heart, Leaf, Gem, LucideIcon } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { Header, Footer, MobileStickyBadge, StickyBookingButton } from '@/components/layout';
import { SectionWrapper, SectionTitle } from '@/components/core';
import ServiceModal from '@/components/sections/services/ServiceModal';
import { cn } from '@/lib/utils';

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

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { services } = clientConfig;
  
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the category by slug
  const category = services.categories.find((cat) => cat.slug === slug);

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground">
              Catégorie non trouvée
            </h1>
            <Link 
              to="/#prestations" 
              className="mt-4 inline-flex items-center gap-2 font-body text-accent hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux prestations
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = iconMap[category.icon] || Sparkles;

  const handleServiceClick = (item: ServiceItem) => {
    setSelectedService(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  // Get display title based on category
  const getDisplayTitle = () => {
    switch (category.slug) {
      case 'visage':
        return 'Soins Du Visage';
      case 'corps':
        return 'Soins Du Corps';
      case 'epilations':
        return 'Nos Épilations';
      default:
        return category.name;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header forceScrolledStyle />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Banner */}
        <section className="relative h-32 w-full overflow-hidden md:h-48">
          <img
            src={category.heroImage}
            alt={category.name}
            className="h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Title */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <h1 className="font-heading text-2xl font-bold text-white drop-shadow-lg md:text-4xl">
              {getDisplayTitle()}
            </h1>
          </div>
        </section>

        <SectionWrapper id="category" background="white" className="py-8 md:py-12">
          {/* Back Link */}
          <Link 
            to="/#prestations" 
            className="mb-6 inline-flex items-center gap-2 font-body text-sm text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux prestations
          </Link>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {category.items.map((item) => (
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
              </button>
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer />

      {/* Mobile Sticky UI */}
      <MobileStickyBadge />
      <StickyBookingButton />

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CategoryPage;

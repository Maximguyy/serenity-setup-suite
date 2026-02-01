import { useState, useMemo } from 'react';
import { Search, Clock, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { clientConfig } from '@/config/client-config';
import { ServiceItem } from './types';
import { cn } from '@/lib/utils';

interface ServiceSearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectService: (service: ServiceItem) => void;
  selectedServices: ServiceItem[];
}

const ServiceSearchDialog = ({
  open,
  onOpenChange,
  onSelectService,
  selectedServices
}: ServiceSearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { services } = clientConfig;

  // Flatten all services with category info
  const allServices = useMemo(() => {
    return services.categories.flatMap(category =>
      category.items.map(item => ({
        ...item,
        categoryName: category.name,
        categorySlug: category.slug
      }))
    );
  }, [services.categories]);

  // Filter services based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return services.categories;
    }

    const query = searchQuery.toLowerCase();
    return services.categories
      .map(category => ({
        ...category,
        items: category.items.filter(
          item =>
            item.name.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query)
        )
      }))
      .filter(category => category.items.length > 0);
  }, [services.categories, searchQuery]);

  const isServiceSelected = (serviceName: string) => {
    return selectedServices.some(s => s.name === serviceName);
  };

  const handleSelectService = (item: typeof services.categories[0]['items'][0], category: typeof services.categories[0]) => {
    const service: ServiceItem = {
      ...item,
      categoryName: category.name,
      categorySlug: category.slug
    };
    onSelectService(service);
    onOpenChange(false);
    setSearchQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[80vh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="border-b border-border px-4 py-4">
          <DialogTitle className="font-heading text-lg">
            Choisir une prestation
          </DialogTitle>
        </DialogHeader>

        {/* Search input */}
        <div className="border-b border-border px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher une prestation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                'w-full rounded-lg border border-border bg-muted/30 py-2.5 pl-10 pr-10',
                'font-body text-sm text-foreground placeholder:text-muted-foreground',
                'focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
              )}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Services list */}
        <div className="flex-1 overflow-y-auto p-4">
          {filteredCategories.length === 0 ? (
            <p className="py-8 text-center font-body text-sm text-muted-foreground">
              Aucune prestation trouvée
            </p>
          ) : (
            <div className="space-y-6">
              {filteredCategories.map((category) => (
                <div key={category.slug}>
                  <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map((item) => {
                      const isSelected = isServiceSelected(item.name);
                      return (
                        <button
                          key={item.name}
                          onClick={() => !isSelected && handleSelectService(item, category)}
                          disabled={isSelected}
                          className={cn(
                            'flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all',
                            isSelected
                              ? 'cursor-not-allowed border-accent/30 bg-accent/10 opacity-60'
                              : 'border-border bg-background hover:border-accent hover:bg-accent/5'
                          )}
                        >
                          {/* Thumbnail */}
                          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1">
                            <h4 className="font-body text-sm font-semibold text-foreground">
                              {item.name}
                            </h4>
                            <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{item.duration}</span>
                            </div>
                          </div>

                          {/* Price */}
                          <span className="font-body text-sm font-semibold text-accent">
                            {item.price}
                          </span>

                          {isSelected && (
                            <span className="text-xs font-medium text-accent">
                              Ajouté
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceSearchDialog;

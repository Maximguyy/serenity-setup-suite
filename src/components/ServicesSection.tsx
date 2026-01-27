import { Sparkles, Heart, Leaf, Gem, LucideIcon } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  heart: Heart,
  leaf: Leaf,
  gem: Gem,
};

const ServicesSection = () => {
  const { services, booking } = clientConfig;

  return (
    <section
      id="prestations"
      className="services-section"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 32px',
      }}
    >
      <div
        className="services-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div
          className="section-header"
          style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <h2
            className="section-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '42px',
              fontWeight: 'var(--font-semibold)',
              color: '#1A1A1A',
              marginBottom: '16px',
            }}
          >
            {services.sectionTitle}
          </h2>
          <p
            className="section-subtitle"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 'var(--font-normal)',
              color: '#6B6B6B',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {services.sectionSubtitle}
          </p>
        </div>

        {/* Categories */}
        {services.categories.map((category, categoryIndex) => {
          const IconComponent = iconMap[category.icon] || Sparkles;

          return (
            <div
              key={category.name}
              className="service-category"
              style={{
                marginBottom: categoryIndex < services.categories.length - 1 ? '60px' : '0',
              }}
            >
              {/* Category Header */}
              <div
                className="category-header"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div
                  className="category-title-wrapper"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <IconComponent size={24} className="category-icon" style={{ color: 'var(--color-accent)' }} />
                  <h3
                    className="category-title"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '24px',
                      fontWeight: 'var(--font-semibold)',
                      color: '#1A1A1A',
                      margin: 0,
                    }}
                  >
                    {category.name}
                  </h3>
                </div>
                <a
                  href={booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="category-link"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-medium)',
                    color: 'var(--color-accent)',
                    textDecoration: 'underline',
                    transition: 'color 200ms ease',
                  }}
                >
                  Tout afficher →
                </a>
              </div>

              {/* Services Grid / Scroll */}
              <div className="services-grid">
                {category.items.slice(0, 4).map((item) => (
                  <a
                    key={item.name}
                    href={booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-card"
                    style={{
                      display: 'block',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
                      transition: 'all 300ms ease',
                    }}
                  >
                    {/* Card Image */}
                    <div
                      className="card-image"
                      style={{
                        aspectRatio: '1 / 1',
                        backgroundColor: '#F8F8F8',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 300ms ease',
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconComponent size={48} style={{ color: 'var(--color-accent)', opacity: 0.5 }} />
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div
                      className="card-content"
                      style={{
                        padding: '16px',
                      }}
                    >
                      <h4
                        className="card-title"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '16px',
                          fontWeight: 'var(--font-semibold)',
                          color: '#1A1A1A',
                          margin: '0 0 6px 0',
                          lineHeight: 1.3,
                        }}
                      >
                        {item.name}
                      </h4>
                      <p
                        className="card-duration"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          fontWeight: 'var(--font-normal)',
                          color: '#6B6B6B',
                          margin: '0 0 8px 0',
                        }}
                      >
                        {item.duration}
                      </p>
                      <p
                        className="card-price"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '16px',
                          fontWeight: 'var(--font-semibold)',
                          color: 'var(--color-accent)',
                          margin: 0,
                        }}
                      >
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

      {/* CSS for grid and responsive */}
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .service-card:hover {
          border-color: var(--color-accent) !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12) !important;
          transform: translateY(-4px);
        }

        .service-card:hover .card-image img {
          transform: scale(1.05);
        }

        .category-link:hover {
          color: #B8956A !important;
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-section {
            padding: 60px 24px !important;
          }

          .section-title {
            font-size: 36px !important;
          }

          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px !important;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .services-section {
            padding: 60px 16px !important;
          }

          .section-title {
            font-size: 32px !important;
          }

          .section-subtitle {
            font-size: 16px !important;
          }

          .category-title {
            font-size: 20px !important;
          }

          .services-grid {
            display: flex !important;
            gap: 12px !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            padding-bottom: 16px !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }

          .services-grid::-webkit-scrollbar {
            display: none !important;
          }

          .service-card {
            flex: 0 0 160px !important;
            scroll-snap-align: start !important;
          }

          .card-image {
            height: 120px !important;
            aspect-ratio: auto !important;
          }

          .card-content {
            padding: 12px !important;
          }

          .card-title {
            font-size: 14px !important;
          }

          .card-duration {
            font-size: 12px !important;
          }

          .card-price {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;

import { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
const ReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const {
    reviews,
    social
  } = clientConfig;
  const renderStars = (rating: number, size: number = 18) => {
    return Array.from({
      length: 5
    }, (_, i) => <Star key={i} size={size} fill={i < rating ? '#FBBC04' : 'transparent'} color={i < rating ? '#FBBC04' : '#E5E5E5'} strokeWidth={1.5} />);
  };
  return (
    <section
      id="avis"
      ref={sectionRef}
      style={{
        padding: '80px 0',
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto',
          padding: '0 var(--container-padding)',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-3xl)',
            fontWeight: 'var(--font-semibold)',
            color: 'var(--color-primary)',
            marginBottom: '16px',
          }}
        >
          Avis Clients
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', gap: '2px' }}>
            {renderStars(Math.round(reviews.averageRating))}
          </div>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              fontWeight: 'var(--font-semibold)',
              color: 'var(--color-primary)',
            }}
          >
            {reviews.averageRating}/5
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-secondary)',
            }}
          >
            ({reviews.totalReviews} avis)
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          }}
        >
          {reviews.featured.slice(0, 3).map((review, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--color-background-alt)',
                borderRadius: 'var(--border-radius-md)',
                padding: '24px',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
                {renderStars(review.rating, 16)}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text)',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                "{review.text}"
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'var(--color-primary)',
                  }}
                >
                  {review.author}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-secondary)',
                  }}
                >
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <a
          href={social.google}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '32px',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-medium)',
            color: 'var(--color-accent)',
            textDecoration: 'none',
          }}
        >
          Voir tous les avis sur Google
        </a>
      </div>
    </section>
  );
};
export default ReviewsSection;
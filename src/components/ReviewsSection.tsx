import { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

const ReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const { reviews, social } = clientConfig;

  const renderStars = (rating: number, size: number = 18) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={size}
        fill={i < rating ? '#FBBC04' : 'transparent'}
        color={i < rating ? '#FBBC04' : '#E5E5E5'}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="reviews-section">
      <style>{`
        .reviews-section {
          background: #F8F8F8;
          padding: 80px 32px;
        }

        .reviews-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .reviews-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .reviews-title {
          font-family: 'Bitter', serif;
          font-size: 42px;
          font-weight: 600;
          color: #1A1A1A;
          margin: 0 0 32px 0;
        }

        /* Google Badge */
        .google-badge {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          background: #FFFFFF;
          padding: 20px 32px;
          border-radius: 12px;
          border: 1px solid #E5E5E5;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .badge-logo {
          height: 40px;
          width: auto;
        }

        .badge-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .badge-rating-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .badge-score {
          font-family: 'Raleway', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #1A1A1A;
        }

        .badge-stars {
          display: flex;
          gap: 2px;
        }

        .badge-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .badge-excellent {
          font-family: 'Raleway', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #1A1A1A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .badge-count {
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #6B6B6B;
        }

        /* Reviews Grid */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .review-card {
          background: #FFFFFF;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #E5E5E5;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
          transition: all 300ms ease;
        }

        .review-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .review-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 16px;
        }

        .review-text {
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          font-weight: 400;
          font-style: italic;
          color: #333333;
          line-height: 1.6;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .review-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .review-name {
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #1A1A1A;
        }

        .review-date {
          font-family: 'Raleway', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #999999;
        }

        /* CTA Link */
        .reviews-cta {
          text-align: center;
        }

        .reviews-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #C9A87C;
          text-decoration: none;
          transition: all 200ms ease;
        }

        .reviews-link:hover {
          color: #B8956A;
          text-decoration: underline;
        }

        /* Animations */
        .review-card {
          opacity: 0;
          transform: translateY(20px);
        }

        .review-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile */
        @media (max-width: 767px) {
          .reviews-section {
            padding: 60px 16px;
          }

          .reviews-title {
            font-size: 32px;
            margin-bottom: 24px;
          }

          .google-badge {
            flex-direction: column;
            gap: 16px;
            padding: 20px;
            width: 100%;
            max-width: 300px;
          }

          .badge-content {
            align-items: center;
          }

          .badge-score {
            font-size: 28px;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .review-card {
            padding: 20px;
          }

          .review-text {
            font-size: 14px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
      `}</style>

      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">Ce que nos clientes disent</h2>
          
          <div className="google-badge">
            <img 
              src="/assets/google-reviews-logo.png" 
              alt="Google Reviews" 
              className="badge-logo"
            />
            <div className="badge-content">
              <div className="badge-rating-row">
                <span className="badge-score">{reviews.averageRating}</span>
                <div className="badge-stars">
                  {renderStars(Math.round(reviews.averageRating), 22)}
                </div>
              </div>
              <div className="badge-text">
                <span className="badge-excellent">Excellent</span>
                <span className="badge-count">Basé sur {reviews.totalReviews} avis</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.featured.map((review, index) => (
            <div
              key={index}
              className={`review-card ${isVisible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transition: 'opacity 500ms ease-out, transform 500ms ease-out',
              }}
            >
              <div className="review-stars">
                {renderStars(review.rating, 18)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <span className="review-name">{review.author}</span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a
            href={social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-link"
          >
            Voir tous les avis sur Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

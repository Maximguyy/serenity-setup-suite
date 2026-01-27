import { Star } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

const MobileStickyBadge = () => {
  const { reviews, social } = clientConfig;

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < Math.round(reviews.averageRating) ? '#C9A87C' : 'transparent'}
        color={i < Math.round(reviews.averageRating) ? '#C9A87C' : '#E5E5E5'}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <>
      <style>{`
        .mobile-sticky-badge {
          display: none;
        }

        @media (max-width: 767px) {
          .mobile-sticky-badge {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          }

          .badge-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 6px;
            background: #FFFFFF;
            padding: 12px 20px;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
            text-decoration: none;
          }

          .badge-top-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .google-icon {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }

          .rating-value {
            font-family: 'Raleway', sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #1A1A1A;
          }

          .rating-stars {
            display: flex;
            gap: 2px;
          }

          .reviews-count {
            font-family: 'Raleway', sans-serif;
            font-size: 12px;
            font-weight: 400;
            color: #6B6B6B;
          }
        }
      `}</style>

      <div className="mobile-sticky-badge">
        <a
          href={social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="badge-inner"
        >
          <div className="badge-top-row">
            {/* Google Icon */}
            <svg 
              className="google-icon" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <path 
                fill="#4285F4" 
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path 
                fill="#34A853" 
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path 
                fill="#FBBC05" 
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path 
                fill="#EA4335" 
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>

            <span className="rating-value">{reviews.averageRating}</span>

            <div className="rating-stars">
              {renderStars()}
            </div>
          </div>

          <span className="reviews-count">Basé sur {reviews.totalReviews} avis Google</span>
        </a>
      </div>
    </>
  );
};

export default MobileStickyBadge;

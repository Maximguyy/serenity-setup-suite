import { useState } from 'react';
import { Star, X, ExternalLink } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MobileStickyBadge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { reviews, social, institutName } = clientConfig;

  const renderStars = (size: number = 14) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={size}
        fill={i < Math.round(reviews.averageRating) ? '#C9A87C' : 'transparent'}
        color={i < Math.round(reviews.averageRating) ? '#C9A87C' : '#E5E5E5'}
        strokeWidth={1.5}
      />
    ));
  };

  const renderReviewStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        fill={i < rating ? '#C9A87C' : 'transparent'}
        color={i < rating ? '#C9A87C' : '#E5E5E5'}
        strokeWidth={1.5}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleBadgeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <style>{`
        .mobile-sticky-badge {
          display: none;
        }

        @media (max-width: 767px) {
          .mobile-sticky-badge {
            display: flex;
            justify-content: center;
            position: fixed;
            bottom: 16px;
            left: 0;
            right: 0;
            z-index: 1000;
          }

          .badge-inner {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: #FFFFFF;
            padding: 12px 20px;
            border-radius: 50px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            text-decoration: none;
            cursor: pointer;
            border: none;
          }

          .google-icon {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
          }

          .badge-rating {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .rating-value {
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #1A1A1A;
          }

          .rating-stars {
            display: flex;
            gap: 2px;
          }

          .reviews-count {
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #6B6B6B;
          }

          /* Modal Overlay */
          .reviews-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1001;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
          }

          .reviews-modal-overlay.open {
            opacity: 1;
            visibility: visible;
          }

          /* Modal Container */
          .reviews-modal {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80vh;
            background: #FFFFFF;
            border-radius: 24px 24px 0 0;
            z-index: 1002;
            transform: translateY(100%);
            transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .reviews-modal.open {
            transform: translateY(0);
          }

          /* Modal Handle */
          .modal-handle {
            width: 40px;
            height: 4px;
            background: #E5E5E5;
            border-radius: 2px;
            margin: 12px auto 0;
            flex-shrink: 0;
          }

          /* Modal Header */
          .modal-header {
            padding: 16px 20px 20px;
            text-align: center;
            border-bottom: 1px solid #F0F0F0;
            flex-shrink: 0;
            position: relative;
          }

          .modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 32px;
            height: 32px;
            border: none;
            background: #F5F5F5;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.2s ease;
          }

          .modal-close:hover {
            background: #E5E5E5;
          }

          .modal-close svg {
            width: 16px;
            height: 16px;
            color: #666;
          }

          .modal-rating-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 8px;
          }

          .modal-rating-value {
            font-family: 'Bitter', serif;
            font-size: 48px;
            font-weight: 600;
            color: #1A1A1A;
            line-height: 1;
          }

          .modal-rating-stars {
            display: flex;
            gap: 4px;
          }

          .modal-source {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 8px;
          }

          .modal-google-icon {
            width: 20px;
            height: 20px;
          }

          .modal-source-text {
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            color: #6B6B6B;
          }

          .modal-reviews-count {
            font-family: 'Raleway', sans-serif;
            font-size: 13px;
            color: #999;
            margin-top: 4px;
          }

          /* Leave Review CTA */
          .leave-review-cta {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin: 16px 20px;
            padding: 14px 24px;
            background: var(--color-accent, #C9A87C);
            color: #FFFFFF;
            border: none;
            border-radius: 50px;
            font-family: 'Raleway', sans-serif;
            font-size: 15px;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.2s ease;
            flex-shrink: 0;
          }

          .leave-review-cta:hover {
            background: #B8976B;
            transform: translateY(-1px);
          }

          .leave-review-cta svg {
            width: 16px;
            height: 16px;
          }

          /* Reviews List */
          .reviews-list {
            flex: 1;
            overflow-y: auto;
            padding: 0 20px 20px;
            -webkit-overflow-scrolling: touch;
          }

          .review-card {
            padding: 16px 0;
            border-bottom: 1px solid #F0F0F0;
          }

          .review-card:last-child {
            border-bottom: none;
          }

          .review-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;
          }

          .review-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #C9A87C 0%, #B8976B 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #FFFFFF;
            flex-shrink: 0;
          }

          .review-author-info {
            flex: 1;
          }

          .review-author-name {
            font-family: 'Raleway', sans-serif;
            font-size: 15px;
            font-weight: 600;
            color: #1A1A1A;
            margin: 0 0 4px 0;
          }

          .review-meta {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .review-stars {
            display: flex;
            gap: 2px;
          }

          .review-date {
            font-family: 'Raleway', sans-serif;
            font-size: 12px;
            color: #999;
          }

          .review-text {
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
            margin: 0;
          }
        }

        /* Hide modal on desktop */
        @media (min-width: 768px) {
          .reviews-modal-overlay,
          .reviews-modal {
            display: none !important;
          }
        }
      `}</style>

      {/* Sticky Badge */}
      <div className="mobile-sticky-badge">
        <button
          onClick={handleBadgeClick}
          className="badge-inner"
          aria-label="Voir les avis Google"
        >
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

          <div className="badge-rating">
            <span className="rating-value">{reviews.averageRating}</span>
            <div className="rating-stars">
              {renderStars()}
            </div>
          </div>

          <span className="reviews-count">({reviews.totalReviews})</span>
        </button>
      </div>

      {/* Modal Overlay */}
      <div 
        className={`reviews-modal-overlay ${isModalOpen ? 'open' : ''}`}
        onClick={handleOverlayClick}
      />

      {/* Modal */}
      <div className={`reviews-modal ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-handle" />
        
        <div className="modal-header">
          <button 
            className="modal-close" 
            onClick={handleCloseModal}
            aria-label="Fermer"
          >
            <X />
          </button>
          
          <div className="modal-rating-header">
            <span className="modal-rating-value">{reviews.averageRating}</span>
            <div className="modal-rating-stars">
              {renderStars(24)}
            </div>
          </div>
          
          <div className="modal-source">
            <svg 
              className="modal-google-icon" 
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
            <span className="modal-source-text">Google Avis</span>
          </div>
          
          <p className="modal-reviews-count">({reviews.totalReviews} avis)</p>
        </div>

        <a 
          href={social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="leave-review-cta"
        >
          <ExternalLink />
          Laissez-nous un avis sur Google
        </a>

        <div className="reviews-list">
          {reviews.featured.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <Avatar className="review-avatar">
                  <AvatarFallback className="bg-gradient-to-br from-[#C9A87C] to-[#B8976B] text-white text-sm font-semibold">
                    {getInitials(review.author)}
                  </AvatarFallback>
                </Avatar>
                <div className="review-author-info">
                  <p className="review-author-name">{review.author}</p>
                  <div className="review-meta">
                    <div className="review-stars">
                      {renderReviewStars(review.rating)}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileStickyBadge;

import { useState } from 'react';
import { Star, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

interface ReviewCardProps {
  author: string;
  rating: number;
  text: string;
  date: string;
}

const ReviewCard = ({ author, rating, text, date }: ReviewCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LINES = 4;
  const LINE_HEIGHT = 22;
  const MAX_HEIGHT = MAX_LINES * LINE_HEIGHT;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderReviewStars = (starRating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        fill={i < starRating ? '#C9A87C' : 'transparent'}
        color={i < starRating ? '#C9A87C' : '#E5E5E5'}
        strokeWidth={1.5}
      />
    ));
  };

  const needsTruncation = text.length > 120;

  return (
    <div style={{
      padding: '16px 0',
      borderBottom: '1px solid #F0F0F0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '10px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #C9A87C 0%, #B8976B 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Raleway', sans-serif",
          fontSize: '14px',
          fontWeight: 600,
          color: '#FFFFFF',
          flexShrink: 0
        }}>
          {getInitials(author)}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            color: '#1A1A1A',
            margin: '0 0 4px 0'
          }}>{author}</p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {renderReviewStars(rating)}
            </div>
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '12px',
              color: '#999'
            }}>{date}</span>
          </div>
        </div>
      </div>
      <div style={{
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        maxHeight: !isExpanded && needsTruncation ? `${MAX_HEIGHT}px` : '1000px',
        position: 'relative'
      }}>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: '14px',
          lineHeight: '22px',
          color: '#333',
          margin: 0
        }}>{text}</p>
        {!isExpanded && needsTruncation && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '24px',
            background: 'linear-gradient(transparent, #FFFFFF)'
          }} />
        )}
      </div>
      {needsTruncation && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            marginTop: '8px',
            padding: 0,
            background: 'none',
            border: 'none',
            fontFamily: "'Raleway', sans-serif",
            fontSize: '13px',
            fontWeight: 600,
            color: '#C9A87C',
            cursor: 'pointer'
          }}
        >
          {isExpanded ? (
            <>Voir moins <ChevronUp size={14} /></>
          ) : (
            <>Voir plus <ChevronDown size={14} /></>
          )}
        </button>
      )}
    </div>
  );
};

const MobileStickyBadge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { reviews, social } = clientConfig;

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
        .mobile-sticky-badge-container {
          display: none;
        }

        .reviews-modal-overlay {
          display: none;
        }

        .reviews-modal-container {
          display: none;
        }

        @media (max-width: 767px) {
          .mobile-sticky-badge-container {
            display: flex;
            justify-content: center;
            position: fixed;
            bottom: 16px;
            left: 0;
            right: 0;
            z-index: 1000;
          }

          .badge-btn {
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

          .reviews-modal-overlay {
            display: block;
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

          .reviews-modal-container {
            display: flex;
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
            flex-direction: column;
            overflow: hidden;
          }

          .reviews-modal-container.open {
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Sticky Badge */}
      <div className="mobile-sticky-badge-container">
        <button
          onClick={handleBadgeClick}
          className="badge-btn"
          aria-label="Voir les avis Google"
        >
          <svg 
            style={{ width: '24px', height: '24px', flexShrink: 0 }}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#1A1A1A'
            }}>{reviews.averageRating}</span>
            <div style={{ display: 'flex', gap: '2px' }}>
              {renderStars()}
            </div>
          </div>

          <span style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: '#6B6B6B'
          }}>({reviews.totalReviews})</span>
        </button>
      </div>

      {/* Modal Overlay */}
      <div 
        className={`reviews-modal-overlay ${isModalOpen ? 'open' : ''}`}
        onClick={handleOverlayClick}
      />

      {/* Modal */}
      <div className={`reviews-modal-container ${isModalOpen ? 'open' : ''}`}>
        {/* Handle */}
        <div style={{
          width: '40px',
          height: '4px',
          background: '#E5E5E5',
          borderRadius: '2px',
          margin: '12px auto 0',
          flexShrink: 0
        }} />
        
        {/* Header */}
        <div style={{
          padding: '16px 20px 20px',
          textAlign: 'center',
          borderBottom: '1px solid #F0F0F0',
          flexShrink: 0,
          position: 'relative'
        }}>
          <button 
            onClick={handleCloseModal}
            aria-label="Fermer"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '32px',
              height: '32px',
              border: 'none',
              background: '#F5F5F5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={16} color="#666" />
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <span style={{
              fontFamily: "'Bitter', serif",
              fontSize: '48px',
              fontWeight: 600,
              color: '#1A1A1A',
              lineHeight: 1
            }}>{reviews.averageRating}</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {renderStars(24)}
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '8px'
          }}>
            <svg 
              style={{ width: '20px', height: '20px' }}
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '14px',
              color: '#6B6B6B'
            }}>Google Avis</span>
          </div>
          
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '13px',
            color: '#999',
            marginTop: '4px'
          }}>({reviews.totalReviews} avis)</p>
        </div>

        {/* CTA Button */}
        <a 
          href={social.google}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            margin: '16px 20px',
            padding: '14px 24px',
            background: '#C9A87C',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '50px',
            fontFamily: "'Raleway', sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            textDecoration: 'none',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          <ExternalLink size={16} />
          Laissez-nous un avis sur Google
        </a>

        {/* Reviews List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0 20px 20px',
          WebkitOverflowScrolling: 'touch'
        }}>
          {reviews.featured.map((review, index) => (
            <ReviewCard
              key={index}
              author={review.author}
              rating={review.rating}
              text={review.text}
              date={review.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileStickyBadge;

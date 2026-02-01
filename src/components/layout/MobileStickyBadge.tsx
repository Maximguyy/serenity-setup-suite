import { useState } from 'react';
import { Star, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  author: string;
  rating: number;
  text: string;
  date: string;
}

const ReviewCard = ({ author, rating, text, date }: ReviewCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderReviewStars = (starRating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        fill={i < starRating ? 'hsl(var(--accent))' : 'transparent'}
        color={i < starRating ? 'hsl(var(--accent))' : '#E5E5E5'}
        strokeWidth={1.5}
      />
    ));
  };

  const needsTruncation = text.length > 120;

  return (
    <div className="border-b border-border-light py-4">
      <div className="mb-2.5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-hover font-body text-sm font-semibold text-white">
          {getInitials(author)}
        </div>
        <div className="flex-1">
          <p className="mb-1 font-body text-[15px] font-semibold text-foreground">{author}</p>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">{renderReviewStars(rating)}</div>
            <span className="font-body text-xs text-muted-foreground">{date}</span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'relative overflow-hidden transition-all duration-300',
          !isExpanded && needsTruncation ? 'max-h-[88px]' : 'max-h-[1000px]'
        )}
      >
        <p className="font-body text-sm leading-[22px] text-foreground/80">{text}</p>
        {!isExpanded && needsTruncation && (
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 inline-flex items-center gap-1 border-none bg-transparent p-0 font-body text-[13px] font-semibold text-accent"
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

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const MobileStickyBadge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { reviews, social } = clientConfig;

  const renderStars = (size: number = 14) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={size}
        fill={i < Math.round(reviews.averageRating) ? 'hsl(var(--accent))' : 'transparent'}
        color={i < Math.round(reviews.averageRating) ? 'hsl(var(--accent))' : '#E5E5E5'}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <>
      {/* Sticky Badge - Mobile Only */}
      <div className="fixed bottom-[calc(88px+env(safe-area-inset-bottom,0px))] left-0 right-0 z-[1000] hidden justify-center max-md:flex">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-3 rounded-full border-none bg-white px-5 py-3 shadow-lg"
          aria-label="Voir les avis Google"
        >
          <GoogleIcon className="h-6 w-6 shrink-0" />
          <div className="flex items-center gap-2">
            <span className="font-body text-lg font-bold text-foreground">{reviews.averageRating}</span>
            <div className="flex gap-0.5">{renderStars()}</div>
          </div>
          <span className="font-body text-sm text-secondary">({reviews.totalReviews})</span>
        </button>
      </div>

      {/* Modal Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[1001] hidden bg-black/60 transition-all duration-300 max-md:block',
          isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={() => setIsModalOpen(false)}
      />

      {/* Modal */}
      <div
        className={cn(
          'fixed inset-x-0 bottom-0 z-[1002] hidden h-[80vh] flex-col overflow-hidden rounded-t-3xl bg-white transition-transform duration-350 ease-[cubic-bezier(0.32,0.72,0,1)] max-md:flex',
          isModalOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        {/* Handle */}
        <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-border" />

        {/* Header */}
        <div className="relative shrink-0 border-b border-border-light px-5 pb-5 pt-4 text-center">
          <button
            onClick={() => setIsModalOpen(false)}
            aria-label="Fermer"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-none bg-muted"
          >
            <X size={16} className="text-secondary" />
          </button>

          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="font-heading text-5xl font-semibold text-foreground">{reviews.averageRating}</span>
            <div className="flex gap-1">{renderStars(24)}</div>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <GoogleIcon className="h-5 w-5" />
            <span className="font-body text-sm text-secondary">Google Avis</span>
          </div>

          <p className="mt-1 font-body text-[13px] text-muted-foreground">({reviews.totalReviews} avis)</p>
        </div>

        {/* CTA Button */}
        <a
          href={social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-5 my-4 flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-body text-[15px] font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
        >
          <ExternalLink size={16} />
          Laissez-nous un avis sur Google
        </a>

        {/* Reviews List */}
        <div className="flex-1 overflow-y-auto px-5 pb-5">
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

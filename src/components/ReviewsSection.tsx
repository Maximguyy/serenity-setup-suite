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
  return;
};
export default ReviewsSection;
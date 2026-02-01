import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Gift, Sparkles, LucideIcon } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'announcement-dismissed';

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  gift: Gift,
  sparkles: Sparkles,
};

interface AnnouncementBarProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

const AnnouncementBar = ({ onVisibilityChange }: AnnouncementBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const { announcement } = clientConfig;

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed === 'true') {
      setIsDismissed(true);
      onVisibilityChange?.(false);
    } else {
      setTimeout(() => {
        setIsVisible(true);
        onVisibilityChange?.(true);
      }, 100);
    }
  }, [onVisibilityChange]);

  useEffect(() => {
    if (isDismissed) {
      onVisibilityChange?.(false);
    }
  }, [isDismissed, onVisibilityChange]);

  if (!announcement.enabled || isDismissed) {
    return null;
  }

  const IconComponent = iconMap[announcement.icon] || Heart;

  const barClasses = cn(
    'relative z-[200] flex min-h-[44px] items-center justify-between bg-black px-4 py-2 transition-all duration-400 md:px-6',
    isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
  );

  return (
    <div className={barClasses}>
      {/* Icon + Text group */}
      <div className="flex flex-1 items-center gap-2 md:flex-none md:gap-2.5">
        <IconComponent className="h-4 w-4 shrink-0 text-white md:h-5 md:w-5" />
        {/* Mobile: single line with responsive text */}
        <span className="whitespace-nowrap font-body text-[3.2vw] font-medium text-white xs:text-[13px] md:hidden">
          {announcement.text}
        </span>
        {/* Desktop: full text with optional suffix */}
        <span className="hidden whitespace-nowrap font-body text-sm font-medium text-white md:block">
          {announcement.text}
          {announcement.textDesktopOnly && announcement.textDesktopOnly}
        </span>
      </div>

      {/* CTA Button */}
      {announcement.ctaText && announcement.ctaLink && (
        <Link
          to={announcement.ctaLink}
          className="ml-3 shrink-0 rounded-sm bg-white px-3 py-1.5 font-body text-xs font-semibold text-black transition-all hover:bg-white/90 md:px-4 md:py-1.5 md:text-sm"
        >
          {announcement.ctaText}
        </Link>
      )}
    </div>
  );
};

export default AnnouncementBar;

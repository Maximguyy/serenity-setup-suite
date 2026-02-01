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
    'relative z-[200] grid min-h-[44px] grid-cols-[auto_1fr_auto] items-center gap-3 bg-black px-4 py-2 transition-all duration-400 md:gap-6 md:px-6',
    isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
  );

  return (
    <div className={barClasses}>
      {/* Column 1: Icon */}
      <div className="flex items-center justify-center">
        <IconComponent className="h-5 w-5 text-white" />
      </div>

      {/* Column 2: Text (centered) */}
      <div className="flex items-center justify-center text-center">
        <span className="font-body text-[13px] font-medium leading-tight text-white md:text-sm">
          {announcement.text}
          {announcement.textDesktopOnly && (
            <span className="hidden md:inline">{announcement.textDesktopOnly}</span>
          )}
        </span>
      </div>

      {/* Column 3: CTA Button */}
      {announcement.ctaText && announcement.ctaLink && (
        <Link
          to={announcement.ctaLink}
          className="shrink-0 rounded-sm bg-white px-3 py-1.5 font-body text-xs font-semibold text-black transition-all hover:bg-white/90 md:px-4 md:py-1.5 md:text-sm"
        >
          {announcement.ctaText}
        </Link>
      )}
    </div>
  );
};

export default AnnouncementBar;

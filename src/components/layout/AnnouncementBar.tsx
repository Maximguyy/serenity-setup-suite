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
    'relative z-[200] flex min-h-[44px] items-center justify-between bg-black px-4 py-2 transition-all duration-400 md:justify-center md:gap-6 md:px-6',
    isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
  );

  return (
    <div className={barClasses}>
      {/* Text content */}
      <div className="flex flex-1 items-center gap-2 md:flex-none md:justify-center">
        <IconComponent className="h-4 w-4 shrink-0 text-accent" />
        <span className="font-body text-[13px] font-medium leading-tight text-white md:text-sm">
          {announcement.text}
          {announcement.textDesktopOnly && (
            <span className="hidden md:inline">{announcement.textDesktopOnly}</span>
          )}
        </span>
      </div>

      {/* CTA Button */}
      {announcement.ctaText && announcement.ctaLink && (
        <Link
          to={announcement.ctaLink}
          className="ml-3 shrink-0 rounded-sm bg-white px-3 py-1.5 font-body text-xs font-semibold text-black transition-all hover:bg-white/90 md:ml-0 md:px-4 md:py-1.5 md:text-sm"
        >
          {announcement.ctaText}
        </Link>
      )}
    </div>
  );
};

export default AnnouncementBar;

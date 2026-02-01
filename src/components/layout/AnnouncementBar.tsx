import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'announcement-dismissed';
const ANNOUNCEMENT_HEIGHT = 44; // px - used for CSS variable

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

  // Notify parent when visibility changes
  useEffect(() => {
    if (isDismissed) {
      onVisibilityChange?.(false);
    }
  }, [isDismissed, onVisibilityChange]);

  if (!announcement.enabled || isDismissed) {
    return null;
  }

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
      localStorage.setItem(STORAGE_KEY, 'true');
    }, 200);
  };

  const content = (
    <div className="flex flex-1 items-center justify-center text-center">
      <span className="font-body text-[13px] font-medium tracking-wide text-white md:text-sm">
        {announcement.emoji && (
          <span className="mr-2" aria-hidden="true">
            {announcement.emoji}
          </span>
        )}
        {announcement.text}
        {announcement.textDesktopOnly && (
          <span className="hidden md:inline">{announcement.textDesktopOnly}</span>
        )}
        {announcement.highlight && (
          <span className="ml-1 font-bold">{announcement.highlight}</span>
        )}
      </span>
    </div>
  );

  const barClasses = cn(
    'relative z-[200] flex min-h-[40px] items-center justify-center bg-black px-10 py-2.5 transition-all duration-400 md:min-h-[44px] md:px-12',
    isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
  );

  const closeButton = (
    <button
      onClick={handleDismiss}
      aria-label="Fermer l'annonce"
      className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-sm bg-transparent text-white opacity-70 transition-all hover:bg-white/10 hover:opacity-100 md:right-4"
    >
      <X size={16} />
    </button>
  );

  if (announcement.link) {
    return (
      <a href={announcement.link} className={cn(barClasses, 'cursor-pointer no-underline')}>
        {content}
        {closeButton}
      </a>
    );
  }

  return (
    <div className={barClasses}>
      {content}
      {closeButton}
    </div>
  );
};

export default AnnouncementBar;

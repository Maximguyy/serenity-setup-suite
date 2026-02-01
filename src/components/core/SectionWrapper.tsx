import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type BackgroundVariant = 'white' | 'light' | 'dark';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: BackgroundVariant;
}

const backgroundStyles: Record<BackgroundVariant, string> = {
  white: 'bg-white',
  light: 'bg-muted',
  dark: 'bg-primary text-primary-foreground',
};

const SectionWrapper = ({
  id,
  children,
  className,
  background = 'white',
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 px-4 md:py-20 md:px-8 lg:py-24',
        backgroundStyles[background],
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  promoTag?: {
    text: string;
    textDesktopOnly?: string;
  };
}

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className,
  promoTag,
}: SectionTitleProps) => {
  return (
    <header
      className={cn(
        'mb-10 md:mb-14',
        centered && 'text-center',
        className
      )}
    >
      {promoTag && (
        <div className={cn('mb-4', centered && 'flex justify-center')}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-1.5 font-body text-sm font-medium text-white">
            <span>❤️</span>
            <span>{promoTag.text}</span>
            {promoTag.textDesktopOnly && (
              <span className="hidden md:inline">{promoTag.textDesktopOnly}</span>
            )}
          </span>
        </div>
      )}
      <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl font-body text-base font-normal leading-relaxed text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default SectionTitle;

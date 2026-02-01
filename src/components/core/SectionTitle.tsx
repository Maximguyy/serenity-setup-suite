import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) => {
  return (
    <header
      className={cn(
        'mb-10 md:mb-14',
        centered && 'text-center',
        className
      )}
    >
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

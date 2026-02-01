import { clientConfig } from '@/config/client-config';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout';
import { SectionWrapper, SectionTitle } from '@/components/core';
import { TeamSection } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AboutPage = () => {
  const { about, booking } = clientConfig;

  return (
    <>
      <Header forceScrolledStyle />
      
      <main className="pt-[70px]">
        {/* Section 1 */}
        <SectionWrapper id="about-intro" background="white">
          <div className={cn(
            'flex flex-col items-center gap-8 lg:flex-row lg:gap-16',
            'lg:flex-row'
          )}>
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={about.sections[0].image}
                  alt={about.sections[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                {about.sections[0].title}
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-secondary md:text-lg">
                {about.sections[0].text}
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-hover">
                <a href={booking.url}>{about.sections[0].cta}</a>
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* Team Section (duplicated from home) */}
        <TeamSection />

        {/* Section 2 */}
        <SectionWrapper id="about-expertise" background="white">
          <div className={cn(
            'flex flex-col items-center gap-8 lg:flex-row lg:gap-16',
            'lg:flex-row-reverse'
          )}>
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={about.sections[1].image}
                  alt={about.sections[1].title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                {about.sections[1].title}
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-secondary md:text-lg">
                {about.sections[1].text}
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-hover">
                <a href={booking.url}>{about.sections[1].cta}</a>
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 3 */}
        <SectionWrapper id="about-experience" background="light">
          <div className={cn(
            'flex flex-col items-center gap-8 lg:flex-row lg:gap-16',
            'lg:flex-row'
          )}>
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={about.sections[2].image}
                  alt={about.sections[2].title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                {about.sections[2].title}
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-secondary md:text-lg">
                {about.sections[2].text}
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-hover">
                <a href={booking.url}>{about.sections[2].cta}</a>
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;

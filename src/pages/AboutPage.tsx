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
        {/* Section Header */}
        <SectionWrapper id="about-header" background="white" className="py-8 md:py-10 lg:py-12">
          <SectionTitle 
            title={about.sectionTitle} 
            subtitle={about.sectionSubtitle} 
          />
        </SectionWrapper>

        {/* Section 1 */}
        <SectionWrapper id="about-intro" background="white" className="pt-0 md:pt-0 lg:pt-0">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
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
              <h2 className="mb-4 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                {about.sections[0].title}
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-secondary">
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
          <div className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-16">
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
              <h2 className="mb-4 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                {about.sections[1].title}
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-secondary">
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
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
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
              <h2 className="mb-4 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                {about.sections[2].title}
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-secondary">
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

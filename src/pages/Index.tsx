import { AnnouncementBar, Footer, MobileStickyBadge, StickyBookingButton } from '@/components/layout';
import { HeroBanner, ServicesSection, PhilosophySection, TeamSection, ContactSection, GoogleReviewsCarousel } from '@/components/sections';

const Index = () => {
  return (
    <>
      <AnnouncementBar />
      <HeroBanner />
      <ServicesSection />
      <PhilosophySection />
      <GoogleReviewsCarousel />
      <TeamSection />
      <ContactSection />
      <Footer />
      <MobileStickyBadge />
      <StickyBookingButton />
    </>
  );
};

export default Index;

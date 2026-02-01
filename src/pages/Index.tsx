import { AnnouncementBar, Footer, MobileStickyBadge, StickyBookingButton } from '@/components/layout';
import { HeroBanner, ServicesSection, TeamSection, ContactSection, GoogleReviewsCarousel } from '@/components/sections';

const Index = () => {
  return (
    <>
      <AnnouncementBar />
      <HeroBanner />
      <ServicesSection />
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

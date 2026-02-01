import { AnnouncementBar, Footer, MobileStickyBadge, StickyBookingButton } from '@/components/layout';
import { HeroBanner, ServicesSection, TeamSection, ContactSection } from '@/components/sections';

const Index = () => {
  return (
    <>
      <AnnouncementBar />
      <HeroBanner />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <MobileStickyBadge />
      <StickyBookingButton />
    </>
  );
};

export default Index;

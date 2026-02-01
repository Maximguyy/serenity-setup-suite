import { useState } from 'react';
import { AnnouncementBar, Footer, MobileStickyBadge, StickyBookingButton } from '@/components/layout';
import { HeroBanner, ServicesSection, PhilosophySection, TeamSection, ContactSection, GoogleReviewsCarousel } from '@/components/sections';
import { BookingModal } from '@/components/booking';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <AnnouncementBar />
      <HeroBanner onBookingClick={() => setIsBookingOpen(true)} />
      <ServicesSection />
      <PhilosophySection />
      <GoogleReviewsCarousel />
      <TeamSection />
      <ContactSection />
      <Footer />
      <MobileStickyBadge />
      <StickyBookingButton onClick={() => setIsBookingOpen(true)} />
      
      {/* Booking Modal */}
      <BookingModal
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
      />
    </>
  );
};

export default Index;

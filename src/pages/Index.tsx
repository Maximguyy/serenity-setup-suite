import { useState } from 'react';
import { AnnouncementBar, Footer, MobileStickyBadge, StickyBookingButton } from '@/components/layout';
import { HeroBanner, ServicesSection, PhilosophySection, TeamSection, ContactSection, GoogleReviewsCarousel } from '@/components/sections';
import { BookingModal } from '@/components/booking';
import { ServiceItem } from '@/components/booking/types';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = () => {
    setPreselectedService(null);
    setIsBookingOpen(true);
  };

  const handleBookService = (service: ServiceItem) => {
    setPreselectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <>
      <AnnouncementBar />
      <HeroBanner onBookingClick={handleOpenBooking} />
      <ServicesSection onBookService={handleBookService} />
      <PhilosophySection />
      <GoogleReviewsCarousel />
      <TeamSection />
      <ContactSection />
      <Footer />
      <MobileStickyBadge />
      <StickyBookingButton onClick={handleOpenBooking} />
      
      {/* Booking Modal */}
      <BookingModal
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
        initialService={preselectedService}
      />
    </>
  );
};

export default Index;

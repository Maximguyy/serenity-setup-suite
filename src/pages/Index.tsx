import { useState, useCallback } from 'react';
import { AnnouncementBar, Footer, MobileStickyBadge, StickyBookingButton } from '@/components/layout';
import { HeroBanner, ServicesSection, PhilosophySection, ContactSection, GoogleReviewsCarousel } from '@/components/sections';
import { BookingModal } from '@/components/booking';
import { ServiceItem } from '@/components/booking/types';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceItem | null>(null);
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const handleOpenBooking = () => {
    setPreselectedService(null);
    setIsBookingOpen(true);
  };

  const handleBookService = (service: ServiceItem) => {
    setPreselectedService(service);
    setIsBookingOpen(true);
  };

  const handleAnnouncementVisibilityChange = useCallback((visible: boolean) => {
    setAnnouncementVisible(visible);
  }, []);

  return (
    <>
      <AnnouncementBar onVisibilityChange={handleAnnouncementVisibilityChange} />
      <HeroBanner onBookingClick={handleOpenBooking} announcementBarVisible={announcementVisible} />
      <ServicesSection onBookService={handleBookService} />
      <PhilosophySection />
      <GoogleReviewsCarousel />
      
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

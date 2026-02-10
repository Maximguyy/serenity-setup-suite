import { useState, useCallback } from "react";
import { AnnouncementBar, Footer, MobileStickyBadge, StickyBookingButton } from "@/components/layout";
import {
  HeroBanner,
  ServicesSection,
  PhilosophySection,
  ContactSection,
  GoogleReviewsCarousel,
} from "@/components/sections";
import { clientConfig } from "@/config/client-config";

const Index = () => {
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const handleOpenBooking = () => {
    window.open(clientConfig.booking.url, "_blank", "noopener,noreferrer");
  };

  const handleAnnouncementVisibilityChange = useCallback((visible: boolean) => {
    setAnnouncementVisible(visible);
  }, []);

  return (
    <>
      <HeroBanner onBookingClick={handleOpenBooking} announcementBarVisible={announcementVisible} />
      <ServicesSection onBookService={() => handleOpenBooking()} />
      <PhilosophySection />
      <GoogleReviewsCarousel />

      <ContactSection />
      <Footer />
      <MobileStickyBadge />
      <StickyBookingButton />
    </>
  );
};

export default Index;

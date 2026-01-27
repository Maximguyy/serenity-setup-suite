import AnnouncementBar from '@/components/AnnouncementBar';
import HeroBanner from '@/components/HeroBanner';
import ReviewsSection from '@/components/ReviewsSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <AnnouncementBar />
      <HeroBanner />
      <ReviewsSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
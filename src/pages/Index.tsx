import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import PremiumSolutions from "@/components/PremiumSolutions";
import FurnishingSection from "@/components/FurnishingSection";
import HelpBanner from "@/components/HelpBanner";
import PlansSection from "@/components/PlansSection";
import LocationsSection from "@/components/LocationsSection";
import AppDownload from "@/components/AppDownload";
import Testimonials from "@/components/Testimonials";
import PropertyLinks from "@/components/PropertyLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PropertiesSection
        title="Residentials Properties Near Me"
        subtitle="Browse Verified Rental Homes Near Your Location, Listed By Real Owners With No Brokerage Involved."
      />
      <PremiumSolutions />
      <PropertiesSection
        title="Commercial Properties Near Me"
        subtitle="Browse Aadhaar-Verified Commercial Properties Near You With Transparent Pricing."
      />
      <FurnishingSection />
      <HelpBanner />
      <PlansSection />
      <LocationsSection />
      <AppDownload />
      <Testimonials />
      <PropertyLinks />
      <Footer />
    </div>
  );
};

export default Index;

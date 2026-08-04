import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import TrustedByCarousel from "@/components/TrustedByCarousel";
import TestimonialSection from "@/components/TestimonialSection";
import ProjectsSection from "@/components/ProjectSection";
import ProcessSection from "@/components/OurProcess";
import FAQSection from "@/components/ui/faq-section";
import Footer from "@/components/Footer";
import { FeatureSection } from "@/components/NewFeatures";
import TwoWaysSection from "@/components/TwoWaysSection";

export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-chai-foam via-chai-light to-chai-foam relative">
      <div className="absolute inset-0 bg-gradient-to-r from-chai-foam/90 via-transparent to-chai-foam/90"></div>
      <div className="relative z-10">
        <HeroSection />
        <TrustedByCarousel />
        <FeatureSection />
        <TwoWaysSection />
        <ProcessSection />
        <ProjectsSection />
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

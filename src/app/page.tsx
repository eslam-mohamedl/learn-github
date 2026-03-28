import Herosection from "@/components/organisms/Herosection";
import CardSection from "@/components/organisms/CardSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import FAQSection from "@/components/organisms/FAQSection";
import AboutSection from "@/components/organisms/AboutSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";

export default function page() {
  return (
    <div>
      <Herosection />
      <CardSection />
      <FeaturesSection />

      <FAQSection/>

      <AboutSection />

      <TestimonialsSection />
    </div>
  );
}
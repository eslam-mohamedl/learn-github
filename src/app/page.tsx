import Herosection from "@/components/organisms/Herosection";
import CardSection from "@/components/organisms/CardSection";
import AboutSection from "@/components/organisms/AboutSection";
import Navbar from "@/components/organisms/Navbar";
export default function page() {
  return (
    <div>
      <Herosection />
      <CardSection />
      <AboutSection />
      <Navbar/>
    </div>
  );
}

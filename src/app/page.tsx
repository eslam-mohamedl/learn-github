import Herosection from "@/components/organisms/Herosection";
import CardSection from "@/components/organisms/CardSection";
import Pricingsection from "@/components/organisms/Pricingsection";
import Footer from "@/components/organisms/Footer";
export default function page() {
  return (
    <div>
      <Herosection />
      <CardSection />
      <Pricingsection />
      <Footer />
    </div>
  );
}

import Navbar from "@/components/organisms/Navbar";
import Title from "@/components/atoms/Title";
import Footer from "@/components/organisms/Footer";
import Herosection from "@/components/organisms/Herosection";
export default function page() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
}

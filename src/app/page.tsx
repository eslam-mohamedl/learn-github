import Navbar from "@/components/organisms/Navbar";
import Title from "@/components/atoms/Title";
import Footer from "@/components/organisms/Footer";
export default function page() {
  return (
    <div>
      <Navbar />
      <Title variant="primary" size="md">
        this is title
      </Title>
      <Footer />
    </div>
  );
}

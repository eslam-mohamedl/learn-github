import Navbar from "@/components/organisms/Navbar";
import Title from "@/components/atoms/Title";

export default function page() {
  return (
    <div>
      <Navbar />
      <Title variant="primary" size="md">
        this is title
      </Title>
    </div>
  );
}

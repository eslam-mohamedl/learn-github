
import React from "react";
import TeamSection from "./teamsection";
import Herosection from "@/components/organisms/Herosection";
import CardSection from "@/components/organisms/CardSection";
import Pricingsection from "@/components/organisms/Pricingsection";
import Footer from "@/components/organisms/Footer";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import FAQSection from "@/components/organisms/FAQSection";
import AboutSection from "@/components/organisms/AboutSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ContactSection from "@/components/organisms/ContactSection";
import Testomonials from "@/components/organisms/Testemonials";
import Abderhman from "@/components/organisms/abdelrhman";  
import Leo from "@/components/organisms/Leo";
import Mo from "@/components/organisms/Mo";

export default function page() {
  return (
    <div>

      <TeamSection />
      <Herosection />
      <CardSection />
      <Pricingsection />
      <Footer />
      <FeaturesSection />
      <FAQSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Testomonials />
      <Abderhman/>
      <Leo />
      <Mo />
    </div>
  );
}

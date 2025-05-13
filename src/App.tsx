import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import MenuPreview from "./components/MenuPreview";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import NewsletterSignup from "./components/NewsletterSignup";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <HeroSection />
      <AboutUs />
      <MenuPreview />
      <WhyChooseUs />
      <Testimonials />
      <NewsletterSignup />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandsMarquee from "./components/BrandsMarquee";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import AreasWeServe from "./components/AreasWeServe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandsMarquee />
      <Services />
      <WhyUs />
      <HowItWorks />
      <AreasWeServe />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

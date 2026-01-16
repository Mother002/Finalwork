import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import StorageHighlight from "@/components/sections/StorageHighlight";
import ServicesOverview from "@/components/sections/ServicesOverview";
import AboutSection from "@/components/sections/About";
import TexasPride from "@/components/sections/TexasPride";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <StorageHighlight />
        <ServicesOverview />
        <AboutSection />
        <TexasPride />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
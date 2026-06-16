import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import UniverseSection from "./components/sections/UniverseSection";
import CoursesSection from "./components/sections/CoursesSection";
import DirectorSection from "./components/sections/DirectorSection";
import ToppersSection from "./components/sections/ToppersSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import GallerySection from "./components/sections/GallerySection";
import HindiSection from "./components/sections/HindiSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import FloatingElements from "./components/layout/FloatingElements";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <UniverseSection />
        <CoursesSection />
        <DirectorSection />
        <ToppersSection />
        <HindiSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}

export default App;

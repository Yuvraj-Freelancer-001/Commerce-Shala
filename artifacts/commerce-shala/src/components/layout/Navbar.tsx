import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#director' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-primary/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-primary/10 border-primary/30 group-hover:bg-primary/20 transition-colors">
              <span className="font-serif text-xl font-bold text-primary">CS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-white">COMMERCE SHALA</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-primary uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+918004117317" className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors">
              <PhoneCall size={16} className="text-primary" />
              <span>+91 80041 17317</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold text-black transition-transform rounded-full bg-primary hover:scale-105"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-gray-300 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/10"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-primary/10 flex flex-col gap-4">
                <a href="tel:+918004117317" className="flex items-center gap-2 text-primary">
                  <PhoneCall size={18} />
                  <span className="font-medium">+91 80041 17317</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-3 text-center font-semibold text-black rounded-lg bg-primary"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

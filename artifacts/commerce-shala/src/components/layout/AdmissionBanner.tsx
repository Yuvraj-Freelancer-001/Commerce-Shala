import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdmissionBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-primary text-black"
        >
          <div className="flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-semibold relative">
            {/* Animated shimmer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </div>

            <Sparkles size={16} className="shrink-0 animate-pulse" />

            <span className="text-center">
              <span className="hidden sm:inline">🎓 </span>
              <strong>Admissions Open — Session 2025–26</strong>
              <span className="hidden sm:inline"> &nbsp;|&nbsp; Limited Seats Available</span>
            </span>

            <a
              href="tel:+918004117317"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/15 hover:bg-black/25 transition-colors whitespace-nowrap font-bold"
            >
              📞 +91 80041 17317
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-3 py-1 rounded-full bg-black text-primary text-xs font-bold hover:bg-black/80 transition-colors whitespace-nowrap"
            >
              Book Free Demo
            </a>

            <button
              onClick={() => setVisible(false)}
              aria-label="Close banner"
              className="absolute right-3 p-1 rounded-full hover:bg-black/10 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

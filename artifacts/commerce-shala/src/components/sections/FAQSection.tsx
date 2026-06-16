import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Which boards does Commerce Shala cover?",
    a: "Commerce Shala provides expert coaching for CBSE, ISC, and UP Board commerce students in Class 11 and Class 12. Our curriculum is perfectly aligned with each board's syllabus and exam pattern."
  },
  {
    q: "Which subjects are taught?",
    a: "We specialise in three core commerce subjects: Accountancy, Economics, and Business Studies. Each subject is taught with dedicated batches, practice sheets, and board-specific strategies."
  },
  {
    q: "What are the batch timings and fee structure?",
    a: "Batches run morning and evening to suit school schedules. Call +91 80041 17317 or WhatsApp us for the current fee structure and available slots — we offer a FREE demo class before you decide."
  },
  {
    q: "Is study material provided?",
    a: "Yes. Students receive printed notes, practice question banks, previous year papers, and regular test series — all included as part of the program."
  },
  {
    q: "What results have Commerce Shala students achieved?",
    a: "Our Batch 2024 saw toppers score up to 94.2%. Nivyashree Gupta scored 94.2%, Aishwarya Gupta 94%, Akarshita Singh 93.2%, and Sunidhi Gupta 90%. Multiple students consistently score 80%+ across all boards."
  },
  {
    q: "Are online classes available?",
    a: "Our primary focus is offline classroom coaching in Kanpur for the best learning experience. Please WhatsApp or call us at +91 80041 17317 to discuss any online or hybrid arrangements."
  },
  {
    q: "How do I enroll or book a demo class?",
    a: "Simply call or WhatsApp +91 80041 17317, or fill out the inquiry form on this page. A FREE demo class is available so you can experience our teaching style before enrolling."
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
        open ? 'border-primary/50 bg-primary/5' : 'border-white/10 bg-card/50'
      }`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-base md:text-lg" itemProp="name">
          {faq.q}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-primary text-black' : 'bg-white/5 text-gray-400'}`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div
              className="px-6 pb-6 text-gray-400 text-base leading-relaxed border-t border-white/5"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p className="pt-4" itemProp="text">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-24 bg-background relative"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Common Questions</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything parents and students ask before enrolling at Commerce Shala, Kanpur.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm"
        >
          <p className="text-gray-300 text-lg mb-6">
            Still have questions? We're just a call or WhatsApp away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918004117317"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-black font-bold hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Call +91 80041 17317
            </a>
            <a
              href="https://wa.me/918004117317?text=Hi%2C%20I%20have%20a%20question%20about%20Commerce%20Shala."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#25D366]/50 text-[#25D366] font-bold hover:bg-[#25D366]/10 hover:scale-105 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

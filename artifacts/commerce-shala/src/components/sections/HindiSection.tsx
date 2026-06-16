import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const highlights = [
  { hi: 'विशेषज्ञ शिक्षक', en: 'Expert Faculty', icon: '🎓' },
  { hi: 'व्यक्तिगत मार्गदर्शन', en: 'Personal Mentorship', icon: '🌟' },
  { hi: '90%+ परिणाम', en: '90%+ Results', icon: '🏆' },
  { hi: 'नि:शुल्क डेमो क्लास', en: 'Free Demo Class', icon: '📚' },
];

const subjects = [
  {
    hi: 'लेखाशास्त्र',
    en: 'Accountancy',
    desc: 'डेबिट-क्रेडिट से लेकर वित्तीय विवरण तक — बोर्ड परीक्षा के हर प्रश्न की तैयारी।',
  },
  {
    hi: 'अर्थशास्त्र',
    en: 'Economics',
    desc: 'मांग-आपूर्ति, बाज़ार संरचना और राष्ट्रीय आय — सरल भाषा में गहरी समझ।',
  },
  {
    hi: 'व्यवसाय अध्ययन',
    en: 'Business Studies',
    desc: 'प्रबंधन, विपणन और वित्त — केस स्टडी आधारित शिक्षण पद्धति।',
  },
];

const boards = ['CBSE', 'ISC', 'UP Board'];

export default function HindiSection() {
  return (
    <section
      id="hindi"
      lang="hi"
      className="py-24 bg-background relative overflow-hidden"
      aria-label="कॉमर्स शाला — हिंदी में जानकारी"
    >
      {/* Hidden SEO text block — crawlable but visually integrated */}
      <div className="sr-only">
        <h2>कानपुर का सर्वश्रेष्ठ कॉमर्स कोचिंग संस्थान</h2>
        <p>
          कॉमर्स शाला कानपुर में CBSE, ISC और UP Board के कक्षा 11 और 12 के छात्रों के लिए
          लेखाशास्त्र, अर्थशास्त्र और व्यवसाय अध्ययन की विशेष कोचिंग प्रदान करता है।
          संस्थापक: सौरभ त्रिपाठी। पता: 117/P/761 शिवपुरी छपेड़ा पुलिया, ककदेव, कानपुर,
          उत्तर प्रदेश। फोन: +91 80041 17317। नि:शुल्क डेमो क्लास के लिए आज ही संपर्क करें।
          UP Board कॉमर्स कोचिंग कानपुर, CBSE कॉमर्स कोचिंग कानपुर, अकाउंटेंसी कोचिंग
          कानपुर, इकोनॉमिक्स कोचिंग कानपुर, बेस्ट कॉमर्स कोचिंग कानपुर।
        </p>
      </div>

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium border rounded-full border-primary/30 bg-primary/10 text-primary">
            🇮🇳 हिंदी में जानकारी
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            कानपुर का{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              सर्वश्रेष्ठ
            </span>{' '}
            कॉमर्स कोचिंग
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            <span className="text-primary font-semibold">कॉमर्स शाला</span> — जहाँ कक्षा 11 और 12 के
            छात्र लेखाशास्त्र, अर्थशास्त्र और व्यवसाय अध्ययन में महारत हासिल करते हैं।
          </p>

          {/* Board badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {boards.map((b) => (
              <span
                key={b}
                className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-bold tracking-wider"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlight pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-5 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <span className="text-3xl mb-3">{h.icon}</span>
              <p className="text-white font-bold text-base mb-1">{h.hi}</p>
              <p className="text-gray-500 text-xs">{h.en}</p>
            </motion.div>
          ))}
        </div>

        {/* Subject cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {subjects.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-7 rounded-3xl border border-white/10 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
              <div className="relative z-10">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">{s.en}</p>
                <h3 className="font-serif text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {s.hi}
                </h3>
                <div className="w-10 h-0.5 bg-primary/50 mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Director intro in Hindi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-12 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center shrink-0">
            <span className="font-serif text-3xl font-bold text-primary">ST</span>
          </div>
          <div>
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">संस्थापक एवं निदेशक</p>
            <h3 className="font-serif text-3xl font-bold text-white mb-3">सौरभ त्रिपाठी</h3>
            <blockquote className="text-gray-300 text-lg italic leading-relaxed border-l-2 border-primary/50 pl-4">
              "हम केवल किताबें नहीं पढ़ाते — हम कल के वित्तीय नेता तैयार करते हैं।
              हर छात्र हमारे लिए परिवार का हिस्सा है।"
            </blockquote>
          </div>
        </motion.div>

        {/* Address + CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            आज ही <span className="text-primary">नि:शुल्क डेमो क्लास</span> बुक करें
          </h3>
          <p className="text-gray-400 mb-3">
            📍 117/P/761 शिवपुरी छपेड़ा पुलिया, ककदेव, कानपुर, उत्तर प्रदेश
          </p>
          <p className="text-gray-400 mb-8 text-sm">
            सोमवार – शनिवार &bull; प्रातः 7 बजे से सायं 8 बजे तक
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918004117317"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-black font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
            >
              <Phone size={20} />
              अभी कॉल करें — +91 80041 17317
            </a>
            <a
              href="https://wa.me/918004117317?text=नमस्ते%2C%20मैं%20Commerce%20Shala%20में%20कॉमर्स%20कोचिंग%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।%20कृपया%20डेमो%20क्लास%20की%20जानकारी%20दें।"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#25D366]/50 text-[#25D366] font-bold text-lg hover:bg-[#25D366]/10 hover:scale-105 transition-all"
            >
              <SiWhatsapp size={20} />
              WhatsApp पर संपर्क करें
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

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

export default function HindiSection() {
  return (
    <section
      id="hindi"
      lang="hi"
      className="py-32 bg-background relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          className="absolute w-[200%] h-[200%] opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            transform: 'rotateX(70deg) translateZ(-200px)',
          }}
        />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        
        <motion.div
          initial={{ opacity: 0, translateZ: -100 }}
          whileInView={{ opacity: 1, translateZ: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-sm font-bold tracking-widest border rounded-full border-primary/30 bg-primary/10 text-primary">
            🇮🇳 हिंदी में जानकारी
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6" style={{ textShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
            कानपुर का <span className="text-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">सर्वश्रेष्ठ</span> कॉमर्स कोचिंग
          </h2>
        </motion.div>

        {/* 3D Fan Layout Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-24 h-auto md:h-96" style={{ transformStyle: 'preserve-3d' }}>
          {subjects.map((s, i) => {
            // Fan rotation logic
            const rotateY = i === 0 ? '15deg' : i === 1 ? '0deg' : '-15deg';
            const translateZ = i === 1 ? '50px' : '0px';
            const translateX = i === 0 ? '20px' : i === 2 ? '-20px' : '0px';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="w-full md:w-1/3 p-8 rounded-3xl border border-primary/30 bg-card/90 backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:!transform-none hover:z-20"
                style={{ 
                  transform: `perspective(1000px) rotateY(${rotateY}) translateZ(${translateZ}) translateX(${translateX})`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <p className="text-primary font-bold tracking-widest uppercase mb-2" style={{ transform: 'translateZ(20px)' }}>{s.en}</p>
                <h3 className="font-serif text-4xl font-bold text-white mb-4" style={{ transform: 'translateZ(30px)' }}>{s.hi}</h3>
                <div className="w-12 h-1 bg-primary mb-6" style={{ transform: 'translateZ(20px)' }} />
                <p className="text-gray-300 text-lg leading-relaxed" style={{ transform: 'translateZ(10px)' }}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 3D Push Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ transform: 'translateZ(40px)' }}>
            <a
              href="tel:+918004117317"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-black font-bold text-xl transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 rounded-full bg-primary/50 translate-y-2 blur-sm -z-10 group-hover:translate-y-4 group-hover:blur-md transition-all duration-300" />
              <Phone size={24} className="group-hover:scale-110 transition-transform" />
              अभी कॉल करें
            </a>
            <a
              href="https://wa.me/918004117317"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold text-xl bg-black/50 backdrop-blur-sm transition-all duration-300 hover:bg-[#25D366] hover:text-black"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <SiWhatsapp size={24} className="group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

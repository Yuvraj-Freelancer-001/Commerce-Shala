import { motion } from 'framer-motion';

const panels = [
  {
    title: "Accountancy",
    desc: "Master debits, credits, and financial statements. The language of business taught with clarity and precision.",
    color: "#D4AF37",
    bg: "#061A23",
    align: "left"
  },
  {
    title: "Economics",
    desc: "Understand markets, policies, and global economics. Decode the forces that shape our world.",
    color: "#B68FD8",
    bg: "#1A0B2E",
    align: "right"
  },
  {
    title: "Business Studies",
    desc: "Learn management, marketing, and entrepreneurship. Build the foundation for future enterprise leaders.",
    color: "#4CAF50",
    bg: "#0A2416",
    align: "left"
  }
];

function CSSWireframeShape({ color }: { color: string }) {
  return (
    <div className="absolute right-10 top-1/4 w-96 h-96 opacity-20 pointer-events-none" style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
      <div 
        className="w-full h-full" 
        style={{ 
          transformStyle: 'preserve-3d',
          animation: 'rotateCube 20s infinite linear'
        }}
      >
        <div className="absolute inset-0 border-4 rounded-full" style={{ borderColor: color, transform: 'rotateX(0deg)' }} />
        <div className="absolute inset-0 border-4 rounded-full" style={{ borderColor: color, transform: 'rotateX(60deg)' }} />
        <div className="absolute inset-0 border-4 rounded-full" style={{ borderColor: color, transform: 'rotateX(120deg)' }} />
        <div className="absolute inset-0 border-4 rounded-full" style={{ borderColor: color, transform: 'rotateY(60deg)' }} />
        <div className="absolute inset-0 border-4 rounded-full" style={{ borderColor: color, transform: 'rotateY(120deg)' }} />
      </div>
    </div>
  );
}

export default function UniverseSection() {
  return (
    <section id="universe" className="relative w-full bg-background flex flex-col">
      {panels.map((panel, i) => (
        <div 
          key={i} 
          className="relative w-full h-[100vh] sticky top-0 overflow-hidden flex items-center border-b border-white/5"
          style={{ backgroundColor: panel.bg, perspective: '1200px' }}
        >
          {/* 3D Room Grid Floor/Ceiling */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(${panel.color} 1px, transparent 1px), linear-gradient(90deg, ${panel.color} 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
              transform: 'rotateX(75deg) scale(3) translateZ(-200px)',
              transformStyle: 'preserve-3d'
            }}
          />

          <CSSWireframeShape color={panel.color} />

          <div className="container mx-auto px-4 relative z-10" style={{ transformStyle: 'preserve-3d' }}>
            <motion.div
              initial={{ opacity: 0, rotateX: 20, translateZ: -200 }}
              whileInView={{ opacity: 1, rotateX: 0, translateZ: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 1 }}
              className={`max-w-2xl p-10 rounded-3xl border border-white/10 backdrop-blur-md bg-black/40 shadow-2xl ${panel.align === 'right' ? 'ml-auto' : ''}`}
              style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-5deg)' }}
            >
              <h2 
                className="mb-6 font-serif text-5xl md:text-7xl font-bold text-white border-b-2 pb-6 inline-block"
                style={{ borderColor: panel.color, transform: 'translateZ(40px)' }}
              >
                {panel.title}
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed" style={{ transform: 'translateZ(20px)' }}>
                {panel.desc}
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}

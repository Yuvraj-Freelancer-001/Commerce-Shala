import { motion } from 'framer-motion';

export default function DirectorSection() {
  return (
    <section id="director" className="relative py-32 bg-background overflow-hidden border-y border-primary/10">
      <div className="container relative z-10 px-4 mx-auto" style={{ perspective: '1000px' }}>
        <div className="flex flex-col lg:flex-row items-center gap-16" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Left: 3D Rotating Podium Avatar */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Floor plane rotating rings */}
              <motion.div 
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[120%] h-[120%] rounded-full border-2 border-primary/40 border-dashed"
                style={{ transform: 'rotateX(75deg) translateZ(-50px)' }}
              />
              <motion.div 
                animate={{ rotateZ: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[100%] h-[100%] rounded-full border border-primary/20"
                style={{ transform: 'rotateX(75deg) translateZ(-40px)' }}
              />

              {/* 3D Podium Box Shadow Stack */}
              <div 
                className="absolute bottom-0 w-32 h-10 rounded-full bg-primary/20 blur-md"
                style={{ transform: 'rotateX(75deg) translateZ(-60px)' }}
              />

              {/* Avatar Box */}
              <div 
                className="relative w-48 h-48 md:w-56 md:h-56 bg-card border-2 border-primary shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center justify-center rounded-2xl overflow-hidden"
                style={{ 
                  transform: 'translateZ(50px)',
                  boxShadow: '10px 10px 0px rgba(212,175,55,0.1), 20px 20px 0px rgba(212,175,55,0.05)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <span className="font-serif text-7xl font-bold text-primary drop-shadow-[2px_2px_0px_#000]">ST</span>
              </div>

            </div>
          </motion.div>

          {/* Right: 3D Slide From Behind Text */}
          <motion.div 
            initial={{ opacity: 0, z: -100, x: 50 }}
            whileInView={{ opacity: 1, z: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="w-full lg:w-1/2"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h4 className="text-primary font-bold tracking-widest uppercase mb-2" style={{ transform: 'translateZ(20px)' }}>Meet Your Mentor</h4>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-2" style={{ transform: 'translateZ(40px)' }}>Saurabh Tripathi</h2>
            <h3 className="text-xl text-gray-400 mb-8" style={{ transform: 'translateZ(30px)' }}>Founder & Director, Commerce Shala</h3>
            
            <div style={{ transform: 'translateZ(50px)' }}>
              <blockquote className="text-2xl font-serif italic text-gray-300 mb-8 pl-6 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent py-4">
                <span className="text-primary">"</span>We don't just teach accounts; we build the financial architects of tomorrow.<span className="text-primary">"</span>
              </blockquote>
            </div>

            <ul className="space-y-4" style={{ transform: 'translateZ(20px)' }}>
              {[
                "Expert in CBSE, ISC & UP Board Commerce",
                "Proven track record of 90%+ results",
                "Personalized mentorship approach",
                "Based in Kanpur, UP"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

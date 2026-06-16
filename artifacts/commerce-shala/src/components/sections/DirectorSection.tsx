import { motion } from 'framer-motion';

export default function DirectorSection() {
  return (
    <section id="director" className="relative py-32 bg-background overflow-hidden border-y border-primary/10">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Avatar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/30 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-primary/20"
              />
              <div className="absolute inset-8 rounded-full bg-card border border-primary/50 overflow-hidden flex items-center justify-center">
                <span className="font-serif text-8xl text-primary/20">ST</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-primary font-bold tracking-widest uppercase mb-2">Meet Your Mentor</h4>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-2">Saurabh Tripathi</h2>
            <h3 className="text-xl text-gray-400 mb-8">Founder & Director, Commerce Shala</h3>
            
            <blockquote className="text-2xl font-serif italic text-gray-300 mb-8 pl-6 border-l-4 border-primary">
              <span className="text-primary">"</span>We don't just teach accounts; we build the financial architects of tomorrow.<span className="text-primary">"</span>
            </blockquote>

            <ul className="space-y-4">
              {[
                "Expert in CBSE, ISC & UP Board Commerce",
                "Proven track record of 90%+ results",
                "Personalized mentorship approach",
                "Based in Kanpur, UP"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-3 text-gray-300"
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

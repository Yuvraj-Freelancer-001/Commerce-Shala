import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

const toppers = [
  { name: "Nivyashree Gupta", score: 94.2, rank: 1 },
  { name: "Aishwarya Gupta", score: 94.0, rank: 2 },
  { name: "Akarshita Singh", score: 93.2, rank: 3 },
  { name: "Sunidhi Gupta", score: 90.0, rank: 4 },
  { name: "Purushottam Ratan", score: 88.0, rank: 5 },
  { name: "Pushkar Singh", score: 86.0, rank: 6 },
  { name: "Vanshika Trivedi", score: 86.0, rank: 7 },
  { name: "Akshita Mishra", score: 85.0, rank: 8 },
  { name: "Harsh Verma", score: 81.0, rank: 9 },
  { name: "Poorvi Shivhare", score: 81.0, rank: 10 },
  { name: "Kratigya Mishra", score: 81.0, rank: 11 },
];

function GoldRain() {
  const [particles, setParticles] = useState<{id: number, left: string, z: number, delay: number, dur: number}[]>([]);
  
  useEffect(() => {
    setParticles(
      Array.from({length: 20}).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        z: Math.random() * 200 - 100,
        delay: Math.random() * 5,
        dur: 3 + Math.random() * 3
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '800px' }}>
      {particles.map(p => (
        <div 
          key={p.id}
          className="absolute top-0 w-2 h-4 bg-gradient-to-b from-primary to-transparent rounded-full"
          style={{
            left: p.left,
            animation: `goldRain ${p.dur}s linear infinite ${p.delay}s`,
            ['--z' as any]: `${p.z}px`
          }}
        />
      ))}
    </div>
  );
}

export default function ToppersSection() {
  const top3 = toppers.slice(0, 3);
  const others = toppers.slice(3);

  // Reorder top3 for podium: 2nd, 1st, 3rd
  const podiumOrder = [top3[1], top3[0], top3[2]];

  return (
    <section id="results" className="py-32 bg-background relative overflow-hidden" style={{ perspective: '1200px' }}>
      <GoldRain />
      <div className="container px-4 mx-auto relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        
        <div className="text-center mb-24" style={{ transform: 'translateZ(50px)' }}>
          <motion.div
            initial={{ opacity: 0, y: -20, rotateY: 180 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Trophy size={40} style={{ transform: 'translateZ(20px)' }} />
          </motion.div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 0 #D4AF37, 4px 4px 0 rgba(212,175,55,0.2)' }}>
            Hall of Excellence
          </h2>
          <p className="text-2xl text-primary tracking-wide">Batch 2024 Achievers</p>
        </div>

        {/* 3D Podium for Top 3 */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-32 h-80" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(5deg)' }}>
          {podiumOrder.map((student, i) => {
            const isFirst = student.rank === 1;
            const height = isFirst ? 'h-64' : student.rank === 2 ? 'h-48' : 'h-40';
            const translateY = isFirst ? 'translateY(0)' : student.rank === 2 ? 'translateY(16px)' : 'translateY(32px)';
            const bgClass = isFirst ? 'bg-gradient-to-t from-primary/40 to-primary/80' : 'bg-gradient-to-t from-primary/10 to-primary/30';
            
            return (
              <motion.div 
                key={student.rank}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: isFirst ? 0.6 : 0.3 }}
                className={`relative flex flex-col items-center w-32 md:w-48 ${height}`}
                style={{ transformStyle: 'preserve-3d', transform: translateY }}
              >
                {/* Score Card Floating Above */}
                <div className="absolute -top-32 flex flex-col items-center" style={{ transform: `translateZ(${isFirst ? 40 : 20}px)` }}>
                  <div className={`font-serif font-bold text-white ${isFirst ? 'text-5xl' : 'text-4xl'}`}>
                    {student.score}%
                  </div>
                  <div className="text-sm md:text-base font-semibold text-center text-gray-200 mt-2">{student.name}</div>
                  <div className="w-10 h-10 mt-2 rounded-full bg-black border border-primary flex items-center justify-center text-primary font-bold shadow-lg">
                    #{student.rank}
                  </div>
                </div>
                
                {/* 3D Block */}
                <div className={`w-full h-full ${bgClass} border border-primary/50 shadow-[0_-10px_20px_rgba(212,175,55,0.2)]`} style={{ transform: 'translateZ(0)' }} />
                <div className={`absolute top-0 w-full h-8 ${bgClass} origin-top border border-primary/50`} style={{ transform: 'rotateX(-90deg)' }} />
                <div className={`absolute right-0 w-8 h-full ${bgClass} origin-right border border-primary/50`} style={{ transform: 'rotateY(90deg)' }} />
              </motion.div>
            );
          })}
        </div>

        {/* 3D Tilted Grid for Others */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg) rotateY(-5deg)' }}
        >
          {others.map((student, i) => (
            <motion.div
              key={student.rank}
              initial={{ opacity: 0, translateZ: 100 }}
              whileInView={{ opacity: 1, translateZ: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card/80 border border-primary/20 backdrop-blur-md hover:bg-primary/10 transition-colors shadow-lg"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="font-serif text-3xl font-bold text-white mb-1" style={{ transform: 'translateZ(30px)' }}>{student.score}%</div>
              <div className="text-gray-300 font-medium" style={{ transform: 'translateZ(20px)' }}>{student.name}</div>
              <div className="absolute top-4 right-4 text-xs font-bold text-primary opacity-50">#{student.rank}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

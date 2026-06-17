import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const toppers = [
  { name: "Nivyashree Gupta",  score: 94.2, rank: 1,  photo: "/toppers/topper1.jpg" },
  { name: "Aishwarya Gupta",   score: 94.0, rank: 2,  photo: "/toppers/topper2.jpg" },
  { name: "Akarshita Singh",   score: 93.2, rank: 3,  photo: "/toppers/topper3.jpg" },
  { name: "Sunidhi Gupta",     score: 90.0, rank: 4,  photo: "/toppers/topper4.jpg" },
  { name: "Purushottam Ratan", score: 88.0, rank: 5,  photo: "/toppers/topper5.jpg" },
  { name: "Pushkar Singh",     score: 86.0, rank: 6,  photo: "/toppers/topper6.jpg" },
  { name: "Vanshika Trivedi",  score: 86.0, rank: 7,  photo: "/toppers/topper7.jpg" },
  { name: "Akshita Mishra",    score: 85.0, rank: 8,  photo: "/toppers/topper8.jpg" },
  { name: "Harsh Verma",       score: 81.0, rank: 9,  photo: "/toppers/topper9.jpg" },
  { name: "Poorvi Shivhare",   score: 81.0, rank: 10, photo: "/toppers/topper10.jpg" },
  { name: "Kratigya Mishra",   score: 81.0, rank: 11, photo: "/toppers/topper11.jpg" },
  { name: "Harsh Verma",       score: 81.0, rank: 12, photo: "/toppers/topper12.jpg" },
];

const rankMedal: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' };

function GoldRain() {
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number; dur: number }[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: `${(i / 18) * 100}%`,
        delay: Math.random() * 5,
        dur: 3 + Math.random() * 3,
      }))
    );
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute top-0 w-1.5 h-5 bg-gradient-to-b from-primary to-transparent rounded-full opacity-40"
          style={{ left: p.left, animation: `goldRain ${p.dur}s linear infinite ${p.delay}s` }}
        />
      ))}
    </div>
  );
}

function Avatar({ photo, name, size = 'md' }: { photo: string | null; name: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'w-28 h-28' : size === 'md' ? 'w-20 h-20' : 'w-14 h-14';
  const textSize = size === 'lg' ? 'text-3xl' : size === 'md' ? 'text-xl' : 'text-base';
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className={`${sizeClass} rounded-full overflow-hidden border-2 border-primary/60 shadow-lg shadow-primary/20 flex-shrink-0`}>
      {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
      ) : (
        <div className={`w-full h-full bg-primary/10 flex items-center justify-center font-bold text-primary ${textSize}`}>
          {initials}
        </div>
      )}
    </div>
  );
}

function PodiumCard({ student, isCenter }: { student: typeof toppers[0]; isCenter: boolean }) {
  const podiumHeight = student.rank === 1 ? 'h-28' : student.rank === 2 ? 'h-16' : 'h-10';
  const avatarSize = isCenter ? 'lg' : 'md';
  const ringSize = isCenter ? 'ring-4' : 'ring-2';

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: isCenter ? 0.1 : student.rank === 2 ? 0.3 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col items-center ${isCenter ? '-mt-8' : ''}`}
    >
      {/* Floating info above photo */}
      <div className="flex flex-col items-center mb-3">
        <span className="text-2xl mb-1">{rankMedal[student.rank]}</span>
        <div
          className={`rounded-full overflow-hidden border-4 shadow-xl ${isCenter ? 'w-28 h-28 border-primary' : 'w-20 h-20 border-primary/50'}`}
          style={{ boxShadow: isCenter ? '0 0 30px rgba(212,175,55,0.5)' : '0 0 15px rgba(212,175,55,0.2)' }}
        >
          {student.photo ? (
            <img src={student.photo} alt={student.name} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              {student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          )}
        </div>

        <div className="mt-3 text-center">
          <div className={`font-serif font-bold text-primary ${isCenter ? 'text-3xl' : 'text-2xl'}`}>
            {student.score}%
          </div>
          <div className={`font-semibold text-white mt-0.5 ${isCenter ? 'text-base' : 'text-sm'}`}>
            {student.name}
          </div>
        </div>
      </div>

      {/* Podium block */}
      <div
        className={`w-28 md:w-36 ${podiumHeight} rounded-t-xl relative overflow-hidden flex items-center justify-center`}
        style={{
          background: isCenter
            ? 'linear-gradient(180deg, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0.2) 100%)'
            : 'linear-gradient(180deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)',
          borderTop: '2px solid rgba(212,175,55,0.6)',
          borderLeft: '1px solid rgba(212,175,55,0.3)',
          borderRight: '1px solid rgba(212,175,55,0.3)',
        }}
      >
        <span className="text-primary font-serif font-bold text-2xl opacity-40">
          #{student.rank}
        </span>
      </div>
    </motion.div>
  );
}

export default function ToppersSection() {
  const top3 = toppers.slice(0, 3);
  const others = toppers.slice(3);
  const podiumOrder = [top3[1], top3[0], top3[2]];

  return (
    <section id="results" className="py-28 bg-background relative overflow-hidden">
      <GoldRain />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 text-primary mb-6 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            <Trophy size={36} />
          </motion.div>

          <h2
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ textShadow: '0 0 40px rgba(212,175,55,0.3)' }}
          >
            Hall of{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #fff5c0 50%, #D4AF37 100%)' }}
            >
              Excellence
            </span>
          </h2>
          <p className="text-primary tracking-widest text-lg font-medium uppercase">Batch 2024 — Our Proud Achievers</p>
        </motion.div>

        {/* Podium — Top 3 */}
        <div className="flex justify-center items-end gap-6 md:gap-10 mb-20">
          {podiumOrder.map((student) => (
            <PodiumCard key={student.rank} student={student} isCenter={student.rank === 1} />
          ))}
        </div>

        {/* Others grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {others.map((student, i) => (
            <motion.div
              key={student.rank}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.04, translateY: -4 }}
              className="group relative flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              {/* Rank badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 text-xs font-bold text-primary/60">
                <Star size={10} className="fill-primary/40 text-primary/40" />
                #{student.rank}
              </div>

              {/* Photo */}
              <div
                className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/70 transition-all duration-300 mb-4 shadow-lg"
                style={{ boxShadow: '0 4px 20px rgba(212,175,55,0.1)' }}
              >
                {student.photo ? (
                  <img src={student.photo} alt={student.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>

              {/* Score */}
              <div className="font-serif font-bold text-2xl text-primary mb-1">
                {student.score}%
              </div>

              {/* Name */}
              <div className="text-white font-semibold text-sm text-center leading-snug">
                {student.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

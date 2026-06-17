import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    end: 500,
    suffix: '+',
    label: 'Students Coached',
    sublabel: 'and counting',
    icon: '👨‍🎓',
    gradient: 'from-primary via-yellow-300 to-primary',
    glow: 'rgba(212,175,55,0.35)',
  },
  {
    end: 94.2,
    suffix: '%',
    label: 'Top Score',
    sublabel: 'Board Exam',
    icon: '🏆',
    gradient: 'from-primary via-amber-300 to-primary',
    glow: 'rgba(212,175,55,0.35)',
  },
  {
    end: 25,
    suffix: '+',
    label: 'Years Excellence',
    sublabel: 'of teaching',
    icon: '🎓',
    gradient: 'from-primary via-yellow-200 to-primary',
    glow: 'rgba(212,175,55,0.35)',
  },
  {
    end: 100,
    suffix: '%',
    label: 'Success Rate',
    sublabel: 'every batch',
    icon: '🌟',
    gradient: 'from-primary via-amber-400 to-primary',
    glow: 'rgba(212,175,55,0.35)',
  },
];

function Counter({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const steps = duration / 16;
    const increment = stat.end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.end) {
        setCount(stat.end);
        clearInterval(timer);
      } else {
        setCount(stat.end % 1 !== 0 ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, stat.end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, translateY: -6 }}
      className="relative group flex flex-col items-center text-center"
    >
      {/* Glow blob behind card */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-90"
        style={{ background: stat.glow }}
      />

      {/* Card */}
      <div className="relative w-full rounded-3xl border border-primary/20 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm overflow-hidden p-8 group-hover:border-primary/50 transition-all duration-500 shadow-xl">

        {/* Shimmer sweep on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
          <motion.div
            animate={{ x: ['-120%', '220%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', repeatDelay: 0.6 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary/15 to-transparent skew-x-12"
          />
        </div>

        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/60 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/60 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/60 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/60 rounded-br-3xl" />

        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
          className="text-4xl mb-5 block"
        >
          {stat.icon}
        </motion.div>

        {/* Number */}
        <div
          className={`font-serif font-bold text-6xl md:text-7xl bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2 leading-none`}
          style={{ textShadow: 'none', filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.4))' }}
        >
          {stat.end % 1 !== 0 ? count.toFixed(count === stat.end ? 1 : 0) : count}
          {stat.suffix}
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-3" />

        {/* Label */}
        <div className="text-white font-bold text-base tracking-wide uppercase mb-1">
          {stat.label}
        </div>
        <div className="text-gray-500 text-xs tracking-widest uppercase">
          {stat.sublabel}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Top + bottom gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      {/* Floating gold particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30 pointer-events-none"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${(i / 12) * 100}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{ y: [-12, 12, -12], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase border rounded-full border-primary/30 bg-primary/10 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Numbers Speak
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Counter key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

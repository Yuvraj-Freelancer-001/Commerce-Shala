import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div 
      className="relative w-full h-48 transition-transform duration-500 ease-out group"
      style={{ perspective: '1000px' }}
    >
      <div 
        ref={ref} 
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-transform duration-500 border rounded-2xl bg-card border-primary/20 shadow-lg shadow-primary/5"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: 'rotateY(-10deg) translateZ(0)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(0deg) translateZ(20px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateY(-10deg) translateZ(0)'}
      >
        <div className="mb-2 font-serif text-5xl font-bold text-primary" style={{ transform: 'translateZ(30px)' }}>
          {count}{suffix}
        </div>
        <div className="text-sm font-semibold tracking-wider text-gray-300 uppercase" style={{ transform: 'translateZ(20px)' }}>
          {label}
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Counter end={500} suffix="+" label="Students Coached" />
          <Counter end={94.2} suffix="%" label="Top Score" />
          <Counter end={25} suffix="+" label="Years Excellence" />
          <Counter end={3} suffix="" label="Boards Covered" />
        </div>
      </div>
    </section>
  );
}

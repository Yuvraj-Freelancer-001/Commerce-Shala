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
    <div ref={ref} className="flex flex-col items-center justify-center p-8 text-center transition-transform border rounded-2xl bg-card border-card-border hover:-translate-y-2">
      <div className="mb-2 font-serif text-5xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-sm tracking-wider text-gray-400 uppercase">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Counter end={90} suffix="%+" label="Top Results" />
          <Counter end={500} suffix="+" label="Student Success Stories" />
          <Counter end={10} suffix="+" label="Years of Excellence" />
          <Counter end={100} suffix="%" label="Board Performance" />
        </div>
      </div>
    </section>
  );
}

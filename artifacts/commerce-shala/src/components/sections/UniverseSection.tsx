import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { isWebGLAvailable } from '@/lib/webgl';

gsap.registerPlugin(ScrollTrigger);

interface ZoneProps {
  title: string;
  desc: string;
  bgColor: string;
  accentColor: string;
  align?: 'left' | 'right';
  shape: 'box' | 'torus' | 'octa';
  children?: React.ReactNode;
  webglOk: boolean;
}

function ZoneCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#D4AF37" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {children}
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

function CSSShape({ shape, color }: { shape: 'box' | 'torus' | 'octa'; color: string }) {
  if (shape === 'box') {
    return (
      <motion.div
        animate={{ rotateY: [0, 360], rotateX: [5, 20, 5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="w-48 h-64 border-2 rounded-xl opacity-25"
        style={{ borderColor: color, boxShadow: `0 0 60px ${color}50`, background: `linear-gradient(135deg, ${color}10, transparent)` }}
      />
    );
  }
  if (shape === 'torus') {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="w-64 h-64 rounded-full border-[6px] opacity-25"
        style={{ borderColor: color, boxShadow: `0 0 60px ${color}50` }}
      />
    );
  }
  return (
    <motion.div
      animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      className="w-56 h-56 opacity-25"
      style={{
        background: `linear-gradient(45deg, ${color}40, transparent)`,
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        boxShadow: `0 0 60px ${color}50`,
      }}
    />
  );
}

function Zone({ title, desc, bgColor, accentColor, align = 'left', shape, children, webglOk }: ZoneProps) {
  return (
    <div
      className="universe-zone relative flex items-center w-full h-[100vh] shrink-0 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* 3D or CSS background decoration */}
      <div className="absolute inset-0 z-0 opacity-60 flex items-center justify-center">
        {webglOk ? (
          <ZoneCanvas>{children}</ZoneCanvas>
        ) : (
          <CSSShape shape={shape} color={accentColor} />
        )}
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at ${align === 'right' ? '80%' : '20%'} 50%, ${accentColor}10 0%, transparent 60%)` }}
      />

      <div
        className={`container relative z-10 px-4 mx-auto flex flex-col ${
          align === 'right' ? 'items-end text-right' : 'items-start text-left'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: align === 'right' ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl p-8 border backdrop-blur-md bg-black/30 border-white/10 rounded-3xl"
        >
          <h2
            className="mb-4 font-serif text-5xl font-bold text-white border-b-2 pb-4 inline-block"
            style={{ borderColor: '#D4AF37' }}
          >
            {title}
          </h2>
          <p className="text-xl text-gray-300">{desc}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default function UniverseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglOk, setWebglOk] = useState<boolean>(false);

  useEffect(() => {
    setWebglOk(isWebGLAvailable());
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const sections = gsap.utils.toArray<HTMLElement>('.universe-zone');
    if (sections.length < 2) return;

    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + (containerRef.current?.offsetWidth ?? 0),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="universe"
      className="relative w-full h-screen overflow-hidden flex flex-nowrap bg-background"
    >
      <div className="universe-zone flex-shrink-0 w-full h-full">
        <Zone
          title="Accountancy"
          desc="Master debits, credits, and financial statements. The language of business taught with clarity and precision."
          bgColor="#061A23"
          accentColor="#D4AF37"
          shape="box"
          webglOk={webglOk}
        >
          <mesh>
            <boxGeometry args={[4, 5, 0.5]} />
            <meshStandardMaterial color="#0a2a3b" wireframe />
          </mesh>
        </Zone>
      </div>

      <div className="universe-zone flex-shrink-0 w-full h-full">
        <Zone
          title="Economics"
          desc="Understand markets, policies, and global economics. Decode the forces that shape our world."
          bgColor="#1A0B2E"
          accentColor="#B68FD8"
          shape="torus"
          align="right"
          webglOk={webglOk}
        >
          <mesh>
            <torusKnotGeometry args={[3, 0.5, 64, 8]} />
            <meshStandardMaterial color="#3a1b5b" wireframe />
          </mesh>
        </Zone>
      </div>

      <div className="universe-zone flex-shrink-0 w-full h-full">
        <Zone
          title="Business Studies"
          desc="Learn management, marketing, and entrepreneurship. Build the foundation for future enterprise leaders."
          bgColor="#0A2416"
          accentColor="#4CAF50"
          shape="octa"
          webglOk={webglOk}
        >
          <mesh>
            <octahedronGeometry args={[3, 0]} />
            <meshStandardMaterial color="#144229" wireframe />
          </mesh>
        </Zone>
      </div>
    </section>
  );
}

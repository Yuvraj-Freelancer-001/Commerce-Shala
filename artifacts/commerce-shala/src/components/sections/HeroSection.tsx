import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { isWebGLAvailable } from '@/lib/webgl';

function ParticleSystem() {
  const count = 3000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        xFactor: -50 + Math.random() * 100,
        yFactor: -50 + Math.random() * 100,
        zFactor: -50 + Math.random() * 100,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      particle.t += particle.speed / 2;
      const { t, factor, xFactor, yFactor, zFactor } = particle;
      const a = Math.cos(t) + Math.sin(t) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        xFactor + Math.cos((t / 10) * factor) + (Math.sin(t) * factor) / 10,
        yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(a * 5, b * 5, s * 5);
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(i, dummy.matrix);
    });
    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function ThreeHero() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ParticleSystem />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

function CSSStarField() {
  const stars = useMemo(() =>
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.1,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
      isGold: Math.random() > 0.6,
    })),
  []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/80 via-[#050505] to-[#050505]" />
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            backgroundColor: s.isGold ? '#D4AF37' : '#ffffff',
            animation: `pulse ${s.duration}s ease-in-out infinite ${s.delay}s`,
          }}
        />
      ))}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#D4AF37] opacity-[0.03] blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0B1020] opacity-[0.15] blur-[80px]" />
    </div>
  );
}

export default function HeroSection() {
  const [webglOk, setWebglOk] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglOk(isWebGLAvailable());
  }, []);

  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        {webglOk === true ? <ThreeHero /> : <CSSStarField />}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-white border rounded-full backdrop-blur-md border-primary/30 bg-primary/10"
        >
          CBSE • ISC • UP Board
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mb-2 font-serif text-5xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-b from-white via-primary to-primary/50"
        >
          COMMERCE SHALA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-6 font-serif text-2xl font-light text-primary/80 md:text-3xl"
        >
          Commerce शाला
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl mb-4 text-xl tracking-wide text-gray-300 md:text-2xl"
        >
          Shaping Future Commerce Leaders
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-4 mb-10 text-sm tracking-widest uppercase text-primary/60 md:text-base"
        >
          <span>Accountancy</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <span>Economics</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <span>Business Studies</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black transition-all rounded-full bg-primary hover:bg-primary/90 hover:scale-105"
          >
            Enroll Now
          </a>
          <a
            href="#courses"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all border rounded-full border-primary/50 backdrop-blur-sm hover:bg-primary/20 hover:scale-105"
          >
            Explore Courses
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-10"
        >
          <p className="flex items-center gap-2 text-sm text-gray-400">
            <a href="tel:+918004117317" className="transition-colors hover:text-primary">
              +91 80041 17317
            </a>
            <span className="mx-2 opacity-50">|</span>
            <a
              href="https://wa.me/918004117317"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#25D366]"
            >
              WhatsApp Us
            </a>
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

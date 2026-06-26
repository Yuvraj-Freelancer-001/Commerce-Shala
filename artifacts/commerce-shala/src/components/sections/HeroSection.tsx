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

function CSSCube({ delay, x, y, z, size }: { delay: number, x: string, y: string, z: number, size: number }) {
  return (
    <div 
      className="absolute"
      style={{ 
        left: x, top: y, width: size, height: size,
        transformStyle: 'preserve-3d',
        animation: `rotateCube 10s infinite linear ${delay}s`,
        transform: `translateZ(${z}px)`
      }}
    >
      <div className="absolute inset-0 border border-primary/20 bg-primary/5" style={{ transform: `translateZ(${size/2}px)` }} />
      <div className="absolute inset-0 border border-primary/20 bg-primary/5" style={{ transform: `translateZ(${-size/2}px) rotateY(180deg)` }} />
      <div className="absolute inset-0 border border-primary/20 bg-primary/5" style={{ transform: `translateX(${size/2}px) rotateY(90deg)` }} />
      <div className="absolute inset-0 border border-primary/20 bg-primary/5" style={{ transform: `translateX(${-size/2}px) rotateY(-90deg)` }} />
      <div className="absolute inset-0 border border-primary/20 bg-primary/5" style={{ transform: `translateY(${size/2}px) rotateX(-90deg)` }} />
      <div className="absolute inset-0 border border-primary/20 bg-primary/5" style={{ transform: `translateY(${-size/2}px) rotateX(90deg)` }} />
    </div>
  );
}

function CSS3DScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]" style={{ perspective: '800px', perspectiveOrigin: '50% 50%' }}>
      {/* 3D Grid Floor */}
      <div 
        className="absolute bottom-[-50%] left-[-50%] w-[200%] h-[150%] origin-bottom"
        style={{
          transform: 'rotateX(80deg)',
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 4s linear infinite',
        }}
      />

      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
        <CSSCube delay={0} x="20%" y="30%" z={-100} size={60} />
        <CSSCube delay={2} x="80%" y="40%" z={50} size={40} />
        <CSSCube delay={5} x="10%" y="70%" z={100} size={30} />
        <CSSCube delay={1} x="70%" y="80%" z={-50} size={80} />
      </div>

      {/* Floating gold particles in 3D */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
        {Array.from({length: 40}).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float3d ${3 + Math.random()*4}s ease-in-out infinite ${Math.random()*5}s`,
              transform: `translateZ(${Math.random() * 200 - 100}px)`,
              opacity: Math.random() * 0.6 + 0.2
            }}
          />
        ))}
      </div>
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
        {webglOk === true ? <ThreeHero /> : <CSS3DScene />}
      </div>

      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pointer-events-none"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        {/* Parallax Background Text */}
        <div 
          className="absolute font-serif font-bold text-white/5 pointer-events-none select-none"
          style={{ 
            fontSize: '30vw',
            transform: 'translateZ(-400px) rotateX(10deg) rotateY(-10deg)',
            lineHeight: 0.8
          }}
        >
          CS
        </div>

        <div className="flex flex-col items-center justify-center pointer-events-auto" style={{ transformStyle: 'preserve-3d' }}>
          <motion.div
            initial={{ opacity: 0, y: 30, translateZ: 50 }}
            animate={{ opacity: 1, y: 0, translateZ: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-white border rounded-full backdrop-blur-md border-primary/30 bg-primary/10"
            style={{ transform: 'translateZ(60px)' }}
          >
            CBSE • ISC • UP Board
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mb-2 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
            style={{ 
              transform: 'translateZ(0px)',
              textShadow: `
                1px 1px 0 #8B6914,
                2px 2px 0 #7A5C12,
                3px 3px 0 #6B5010,
                4px 4px 0 #5C440E,
                5px 5px 10px rgba(0,0,0,0.5)
              `
            }}
          >
            COMMERCE SHALA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-6 font-serif text-2xl font-bold text-primary md:text-4xl"
            style={{ transform: 'translateZ(30px)' }}
          >
            Commerce शाला
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-2xl mb-8 text-xl tracking-wide text-gray-200 md:text-2xl drop-shadow-lg"
            style={{ transform: 'translateZ(50px)' }}
          >
            Shaping Future Commerce Leaders
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col gap-4 sm:flex-row"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(80px)' }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black transition-all rounded-full bg-primary hover:bg-primary/90 shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:-translate-y-1"
            >
              Enroll Now
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all border rounded-full border-primary/50 backdrop-blur-sm bg-black/40 hover:bg-primary/20 hover:-translate-y-1"
            >
              Explore Courses
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
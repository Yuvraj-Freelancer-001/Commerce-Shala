import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { MouseEvent } from 'react';
import { BookOpen, TrendingUp, Briefcase } from 'lucide-react';

const courses = [
  { title: 'Accountancy', board: 'CBSE', icon: BookOpen, desc: 'Complete syllabus coverage with focus on practical problem solving.' },
  { title: 'Economics', board: 'CBSE', icon: TrendingUp, desc: 'Macro and Micro economics simplified for board exams.' },
  { title: 'Business Studies', board: 'CBSE', icon: Briefcase, desc: 'Case study approach for maximum marks.' },
  { title: 'Accountancy', board: 'ISC', icon: BookOpen, desc: 'In-depth concepts aligned with ISC guidelines.' },
  { title: 'Economics', board: 'ISC', icon: TrendingUp, desc: 'Comprehensive coverage of economic theories.' },
  { title: 'All Subjects', board: 'UP Board', icon: Briefcase, desc: 'Specialized batch in Hindi/English medium.' },
];

function CourseCard({ course, index }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 20);
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group p-8 rounded-3xl bg-card/80 border border-card-border backdrop-blur-sm cursor-pointer"
    >
      <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent group-hover:opacity-100" />
      
      <div className="relative z-10 transform-gpu" style={{ transform: "translateZ(50px)" }}>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <course.icon size={24} />
          </div>
          <span className="px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full">
            {course.board}
          </span>
        </div>
        
        <h3 className="mb-2 font-serif text-2xl font-bold text-white group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="mb-6 text-gray-400">
          {course.desc}
        </p>
        
        <button className="text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:text-primary flex items-center gap-2 group/btn">
          Know More
          <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-background relative z-10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Academic Programs</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Elite Coaching Courses</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Specialized batches for 11th and 12th standard commerce students.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

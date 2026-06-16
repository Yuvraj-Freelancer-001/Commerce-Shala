import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Briefcase } from 'lucide-react';

const courses = [
  { title: 'Accountancy', board: 'CBSE', icon: BookOpen, desc: 'Complete syllabus coverage with focus on practical problem solving.', features: ['Daily practice sheets', 'Past year papers', 'Doubt clearing'] },
  { title: 'Economics', board: 'CBSE', icon: TrendingUp, desc: 'Macro and Micro economics simplified for board exams.', features: ['Graph analysis', 'Concept mapping', 'Current affairs'] },
  { title: 'Business Studies', board: 'CBSE', icon: Briefcase, desc: 'Case study approach for maximum marks.', features: ['Case study focus', 'Mnemonic techniques', 'Revision notes'] },
  { title: 'Accountancy', board: 'ISC', icon: BookOpen, desc: 'In-depth concepts aligned with ISC guidelines.', features: ['Strict ISC pattern', 'Project assistance', 'Weekly tests'] },
  { title: 'Economics', board: 'ISC', icon: TrendingUp, desc: 'Comprehensive coverage of economic theories.', features: ['Analytical thinking', 'Model answers', 'Concept clarity'] },
  { title: 'All Subjects', board: 'UP Board', icon: Briefcase, desc: 'Specialized batch in Hindi/English medium.', features: ['Bilingual approach', 'State board pattern', 'High score strategy'] },
];

function CourseCard({ course, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, translateZ: -100 }}
      whileInView={{ opacity: 1, y: 0, translateZ: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full h-80 group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 shadow-xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 p-8 rounded-3xl bg-card border border-primary/20 backdrop-blur-sm group-hover:[transform:rotateY(180deg)] transition-transform duration-700"
          style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
        >
          <div className="flex justify-between items-start mb-6" style={{ transform: 'translateZ(40px)' }}>
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <course.icon size={24} />
            </div>
            <span className="px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full">
              {course.board}
            </span>
          </div>
          <h3 className="mb-2 font-serif text-2xl font-bold text-white" style={{ transform: 'translateZ(50px)' }}>
            {course.title}
          </h3>
          <p className="text-gray-400" style={{ transform: 'translateZ(30px)' }}>
            {course.desc}
          </p>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 p-8 rounded-3xl bg-primary/10 border border-primary flex flex-col justify-between group-hover:[transform:rotateY(0deg)] [transform:rotateY(180deg)] transition-transform duration-700"
          style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
        >
          <div style={{ transform: 'translateZ(40px)' }}>
            <h4 className="font-bold text-white mb-4">What's included:</h4>
            <ul className="space-y-2">
              {course.features.map((f: string, i: number) => (
                <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <a 
            href="https://wa.me/918004117317"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 text-center rounded-xl bg-primary text-black font-bold text-sm hover:scale-105 transition-transform"
            style={{ transform: 'translateZ(50px)' }}
          >
            Enroll via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-background relative z-10 overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16" style={{ perspective: '500px' }}>
          <motion.h2 
            initial={{ opacity: 0, rotateX: 30 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-2"
          >
            Academic Programs
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Elite Coaching Courses
          </motion.h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

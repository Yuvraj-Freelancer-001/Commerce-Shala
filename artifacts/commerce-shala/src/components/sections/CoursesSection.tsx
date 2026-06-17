import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const boards = ['All', 'CBSE', 'ISC', 'UP Board'] as const;

const courses = [
  {
    id: 1,
    title: 'Accountancy',
    board: 'CBSE',
    icon: '📒',
    number: '01',
    tagline: 'Precision. Clarity. Marks.',
    desc: 'Complete CBSE syllabus — from basic journals to company accounts — taught with step-by-step problem solving techniques.',
    features: ['Daily practice sheets', 'Past year papers solved', 'Doubt clearing sessions', 'Chapter-wise tests'],
    waMsg: 'Hi, I want to enrol for CBSE Accountancy at Commerce Shala.',
  },
  {
    id: 2,
    title: 'Economics',
    board: 'CBSE',
    icon: '📈',
    number: '02',
    tagline: 'Think. Analyse. Score.',
    desc: 'Micro & Macro economics made simple. Real-world examples, graph mastery and exam-ready answers for CBSE board.',
    features: ['Graph analysis mastery', 'Concept mapping', 'Current affairs integration', 'Model answer writing'],
    waMsg: 'Hi, I want to enrol for CBSE Economics at Commerce Shala.',
  },
  {
    id: 3,
    title: 'Business Studies',
    board: 'CBSE',
    icon: '💼',
    number: '03',
    tagline: 'Cases. Concepts. Command.',
    desc: 'CBSE Business Studies with heavy focus on case studies, HOTS questions and the mnemonic techniques that toppers use.',
    features: ['Case study approach', 'Mnemonic techniques', 'Revision shortcuts', 'HOTS practice'],
    waMsg: 'Hi, I want to enrol for CBSE Business Studies at Commerce Shala.',
  },
  {
    id: 4,
    title: 'Accountancy',
    board: 'ISC',
    icon: '📘',
    number: '04',
    tagline: 'ISC Standard. Top Results.',
    desc: 'Rigorous ISC Accountancy preparation with full project guidance, strict marking pattern focus and weekly evaluations.',
    features: ['ISC-aligned projects', 'Weekly written tests', 'Strict marking practice', 'Examiner-style review'],
    waMsg: 'Hi, I want to enrol for ISC Accountancy at Commerce Shala.',
  },
  {
    id: 5,
    title: 'Economics',
    board: 'ISC',
    icon: '📊',
    number: '05',
    tagline: 'Depth. Breadth. Excellence.',
    desc: 'Comprehensive ISC Economics covering all theories with analytical thinking, model answers and structured note-making.',
    features: ['Analytical writing', 'Model answer formats', 'Theory deep-dives', 'Concept clarity sessions'],
    waMsg: 'Hi, I want to enrol for ISC Economics at Commerce Shala.',
  },
  {
    id: 6,
    title: 'All Subjects',
    board: 'UP Board',
    icon: '🇮🇳',
    number: '06',
    tagline: 'Hindi Medium. High Marks.',
    desc: 'All three commerce subjects for UP Board students in Hindi & English medium. State pattern focused with high-score strategy.',
    features: ['Bilingual teaching', 'UP Board exam pattern', 'High score strategy', 'Hindi medium notes'],
    waMsg: 'Hi, I want to enrol for UP Board Commerce subjects at Commerce Shala.',
  },
];

const boardColors: Record<string, string> = {
  CBSE: '#D4AF37',
  ISC: '#D4AF37',
  'UP Board': '#D4AF37',
};

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const color = boardColors[course.board];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ translateY: -8, scale: 1.02 }}
      className="group relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl"
      style={{ '--glow': color } as React.CSSProperties}
    >
      {/* Top glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% -20%, rgba(212,175,55,0.12), transparent 65%)` }}
      />

      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Number watermark */}
      <div
        className="absolute -right-3 -top-5 font-serif font-bold text-[100px] leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500"
        style={{ color }}
      >
        {course.number}
      </div>

      <div className="relative z-10 flex flex-col h-full p-7">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <motion.span
            animate={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.7 }}
            className="text-3xl"
          >
            {course.icon}
          </motion.span>

          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border"
            style={{ color, borderColor: `${color}40`, background: `${color}12` }}
          >
            {course.board}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-serif font-bold text-3xl leading-tight mb-1.5 transition-colors duration-300 group-hover:text-primary"
          style={{
            background: `linear-gradient(135deg, #ffffff 0%, #D4AF37 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {course.title}
        </h3>

        {/* Tagline */}
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary/70 mb-4">
          <span className="w-5 h-px bg-primary/50" />
          {course.tagline}
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {course.desc}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1">
          {course.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
              <CheckCircle size={14} className="text-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/918004117317?text=${encodeURIComponent(course.waMsg)}`}
          target="_blank"
          rel="noreferrer"
          className="group/btn relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-bold text-sm overflow-hidden transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, #D4AF37, #b8941f)`,
            color: '#000',
            boxShadow: '0 4px 24px rgba(212,175,55,0.2)',
          }}
        >
          <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300" />
          <SiWhatsapp size={15} className="relative z-10" />
          <span className="relative z-10">Enrol via WhatsApp</span>
          <ArrowRight size={14} className="relative z-10 opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300" />
        </a>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  const [activeBoard, setActiveBoard] = useState<typeof boards[number]>('All');

  const filtered = activeBoard === 'All' ? courses : courses.filter(c => c.board === activeBoard);

  return (
    <section id="courses" className="py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold tracking-widest uppercase border rounded-full border-primary/30 bg-primary/10 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Academic Programs
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Courses Designed to
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #fff5c0 50%, #D4AF37 100%)' }}
            >
              Make You a Topper
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Board-specific preparation with the exact strategy Saurabh sir has used to produce toppers for 25+ years.
          </p>
        </motion.div>

        {/* Board filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-3 flex-wrap mb-12"
        >
          {boards.map((board) => (
            <button
              key={board}
              onClick={() => setActiveBoard(board)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                activeBoard === board
                  ? 'bg-primary text-black border-primary shadow-lg shadow-primary/20 scale-105'
                  : 'border-white/10 text-gray-400 hover:border-primary/40 hover:text-primary bg-white/[0.03]'
              }`}
            >
              {board}
            </button>
          ))}
        </motion.div>

        {/* Course grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Can't find your board or subject? Call Saurabh sir directly.</p>
          <a
            href="tel:+918004117317"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary/40 text-primary font-bold text-sm hover:bg-primary/10 hover:scale-105 transition-all"
          >
            📞 +91 80041 17317
          </a>
        </motion.div>
      </div>
    </section>
  );
}

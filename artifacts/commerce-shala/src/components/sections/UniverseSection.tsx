import { motion } from 'framer-motion';

const subjects = [
  {
    title: 'Accountancy',
    hindi: 'लेखाशास्त्र',
    icon: '📒',
    symbol: 'Σ',
    tagline: 'The Language of Business',
    desc: 'Master debits, credits, balance sheets and financial statements. Build the analytical foundation every commerce topper needs.',
    topics: ['Journal & Ledger', 'Trial Balance', 'Financial Statements', 'Partnership Accounts', 'Company Accounts', 'Cash Flow'],
    accentColor: '#D4AF37',
    glowColor: 'rgba(212,175,55,0.15)',
    borderGlow: 'rgba(212,175,55,0.4)',
    number: '01',
  },
  {
    title: 'Economics',
    hindi: 'अर्थशास्त्र',
    icon: '📈',
    symbol: '∞',
    tagline: 'Decode the World Around You',
    desc: 'Understand markets, demand & supply, national income and global trade. See the invisible forces that move economies.',
    topics: ['Micro Economics', 'Macro Economics', 'National Income', 'Money & Banking', 'Government Budget', 'Balance of Payments'],
    accentColor: '#D4AF37',
    glowColor: 'rgba(212,175,55,0.12)',
    borderGlow: 'rgba(212,175,55,0.35)',
    number: '02',
  },
  {
    title: 'Business Studies',
    hindi: 'व्यवसाय अध्ययन',
    icon: '💼',
    symbol: '◈',
    tagline: 'Build the Mind of a Leader',
    desc: 'Learn management, marketing, finance and entrepreneurship. Transform from a student into a future business leader.',
    topics: ['Management Principles', 'Business Finance', 'Marketing Mix', 'Consumer Protection', 'Entrepreneurship', 'Stock Exchange'],
    accentColor: '#D4AF37',
    glowColor: 'rgba(212,175,55,0.12)',
    borderGlow: 'rgba(212,175,55,0.35)',
    number: '03',
  },
];

function SubjectCard({ subject, index }: { subject: typeof subjects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.025, translateY: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent cursor-default transition-all duration-500 hover:border-primary/50"
      style={{ perspective: '1000px' }}
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${subject.glowColor}, transparent 70%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${subject.accentColor}, transparent)` }}
      />
      <div
        className="absolute -right-4 -top-6 font-serif font-bold text-[120px] leading-none select-none pointer-events-none transition-all duration-500 group-hover:opacity-100"
        style={{ color: subject.accentColor, opacity: 0.04 }}
      >
        {subject.number}
      </div>
      <div
        className="absolute right-6 bottom-8 font-serif font-bold text-8xl leading-none select-none pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{ color: subject.accentColor }}
      >
        {subject.symbol}
      </div>

      <div className="relative z-10 flex flex-col h-full p-8">
        <div className="flex items-center justify-between mb-6">
          <motion.span
            animate={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.8 }}
            className="text-4xl"
          >
            {subject.icon}
          </motion.span>
          <span
            className="font-mono text-xs font-bold tracking-[0.3em] px-3 py-1.5 rounded-full border"
            style={{ color: subject.accentColor, borderColor: `${subject.accentColor}40`, background: `${subject.accentColor}10` }}
          >
            {subject.number}
          </span>
        </div>

        <div className="mb-5">
          <h3
            className="font-serif font-bold text-5xl md:text-6xl leading-none mb-1.5 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${subject.accentColor} 0%, #fff5c0 50%, ${subject.accentColor} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {subject.title}
          </h3>
          <div className="text-gray-600 text-base font-medium font-serif italic">{subject.hindi}</div>
        </div>

        <div
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5"
          style={{ color: subject.accentColor }}
        >
          <span className="w-8 h-px" style={{ background: subject.accentColor }} />
          {subject.tagline}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-7 flex-1">{subject.desc}</p>

        <div
          className="h-px w-full mb-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${subject.accentColor}, transparent)` }}
        />

        <div className="flex flex-wrap gap-2">
          {subject.topics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5"
              style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#9ca3af' }}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function UniverseSection() {
  return (
    <section id="universe" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20 pointer-events-none"
          style={{
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            left: `${8 + i * 9}%`,
            top: `${15 + (i % 5) * 15}%`,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold tracking-widest uppercase border rounded-full border-primary/30 bg-primary/10 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Subjects We Master
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Three Pillars of
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #fff5c0 50%, #D4AF37 100%)' }}
            >
              Commerce Excellence
            </span>
          </h2>

          {/* Accountancy spelled out below heading as client requested */}
          <p className="text-primary/70 text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Accountancy · Economics · Business Studies
          </p>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Every subject taught by Saurabh sir personally — with depth, clarity, and the focus that board exams demand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject, i) => (
            <SubjectCard key={i} subject={subject} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
        >
          {['CBSE Board', 'ISC Board', 'ICSE Board', 'UP Board', 'CA Foundation', 'CS Foundation', 'Class IX', 'Class X', 'Class XI', 'Class XII'].map((tag) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


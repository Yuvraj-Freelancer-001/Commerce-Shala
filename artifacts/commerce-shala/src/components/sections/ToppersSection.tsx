import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const toppers = [
  { name: "Nivyashree Gupta", score: 94.2, rank: 1 },
  { name: "Aishwarya Gupta", score: 94.0, rank: 2 },
  { name: "Akarshita Singh", score: 93.2, rank: 3 },
  { name: "Sunidhi Gupta", score: 90.0, rank: 4 },
  { name: "Purushottam Ratan", score: 88.0, rank: 5 },
  { name: "Pushkar Singh", score: 86.0, rank: 6 },
  { name: "Vanshika Trivedi", score: 86.0, rank: 7 },
  { name: "Akshita Mishra", score: 85.0, rank: 8 },
  { name: "Harsh Verma", score: 81.0, rank: 9 },
  { name: "Poorvi Shivhare", score: 81.0, rank: 10 },
  { name: "Kratigya Mishra", score: 81.0, rank: 11 },
];

function TopperCard({ student, index }: any) {
  const isTop3 = student.rank <= 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative p-6 rounded-2xl border backdrop-blur-sm flex flex-col items-center text-center ${
        isTop3 
          ? 'bg-primary/10 border-primary/50 shadow-lg shadow-primary/20' 
          : 'bg-card border-card-border'
      }`}
    >
      {isTop3 && (
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold rotate-12 shadow-lg">
          #{student.rank}
        </div>
      )}
      
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isTop3 ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400'}`}>
        <Trophy size={32} />
      </div>
      
      <div className="font-serif text-4xl font-bold text-white mb-2">
        {student.score}%
      </div>
      
      <div className="h-1 w-full bg-gray-800 rounded-full mb-4 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${student.score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + (index * 0.05) }}
          className={`h-full ${isTop3 ? 'bg-primary' : 'bg-gray-400'}`}
        />
      </div>
      
      <h3 className="font-semibold text-lg text-gray-200">{student.name}</h3>
    </motion.div>
  );
}

export default function ToppersSection() {
  return (
    <section id="results" className="py-24 bg-background relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6"
          >
            <Trophy size={32} />
          </motion.div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Hall of Excellence</h2>
          <p className="text-xl text-primary tracking-wide">Our Achievers — Batch 2024</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {toppers.map((student, i) => (
            <TopperCard key={i} student={student} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

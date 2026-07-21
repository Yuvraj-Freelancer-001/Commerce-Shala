import { motion } from 'framer-motion';
import { FileText, Download, Lock } from 'lucide-react';

const papers = [
  { title: 'CBSE Class 12 Accountancy', year: '2024', board: 'CBSE', pages: 24, subject: 'Accountancy', icon: '📒', pdfUrl: '/attached_assets/sample-papers/CBSE-CLASS-12TH ACCOUNTACY .pdf' },
  { title: 'CBSE Class 12 Economics', year: '2024', board: 'CBSE', pages: 20, subject: 'Economics', icon: '📈', pdfUrl: '/attached_assets/sample-papers/CBSE- CLASS-12TH-Economics-S.pdf' },
  { title: 'CBSE Class 10 Accountancy', year: '2024', board: 'CBSE', pages: 18, subject: 'Accountancy', icon: '💼', pdfUrl: '/attached_assets/sample-papers/CBSE-CLASS-10TH-Accountancy-.pdf' },
  { title: 'UP Board Class 12 Accountancy', year: '2024', board: 'UP Board', pages: 22, subject: 'Accountancy', icon: '📗', pdfUrl: '/attached_assets/sample-papers/UP BOARD CLASS-12 Accountancy .pdf' },
  { title: 'UP Board Class 10 Accountancy', year: '2024', board: 'UP Board', pages: 19, subject: 'Accountancy', icon: '📊', pdfUrl: '/attached_assets/sample-papers/UP BOARD -CLASS-10-Accountanc.pdf' },
  { title: 'ISC Class 12 Accountancy', year: '2024', board: 'ISC', pages: 26, subject: 'Accountancy', icon: '📘', pdfUrl: '/attached_assets/sample-papers/ISC-CLASS-12TH-Accountancy-SQ.pdf' },
  { title: 'ISC Class 12 Economics', year: '2024', board: 'ISC', pages: 21, subject: 'Economics', icon: '📙', pdfUrl: '/attached_assets/sample-papers/ISC-CLASS-12TH-Economics-SQP.pdf' },
  { title: 'CA Foundation Accounting', year: '2024', board: 'CA Foundation', pages: 30, subject: 'Accounting', icon: '📕', pdfUrl: '/attached_assets/sample-papers/CA FOUNDATION ACCOUNTING .pdf' },
  { title: 'CA Foundation Business Law', year: '2024', board: 'CA Foundation', pages: 28, subject: 'Business Law', icon: '⚖️', pdfUrl: '/attached_assets/sample-papers/CA FOUNDATION BUISNESS LAW.pdf' },
  { title: 'CA Foundation Business Economics', year: '2024', board: 'CA Foundation', pages: 25, subject: 'Economics', icon: '📉', pdfUrl: '/attached_assets/sample-papers/CA FOUNDATION-BUISNESS ECON.pdf' },
  { title: 'CA Foundation Quantitative Aptitude', year: '2024', board: 'CA Foundation', pages: 27, subject: 'Quantitative Aptitude', icon: '🔢', pdfUrl: '/attached_assets/sample-papers/CA FOUNDATION-Quantitative Aptit.pdf' },
  { title: 'CS Foundation Business Communication', year: '2024', board: 'CS Foundation', pages: 23, subject: 'Business Communication', icon: '💬', pdfUrl: '/attached_assets/sample-papers/CS FOUNDATION - Business Comm.pdf' },
  { title: 'CS Foundation Business Laws', year: '2024', board: 'CS Foundation', pages: 26, subject: 'Business Laws', icon: '📜', pdfUrl: '/attached_assets/sample-papers/CS FOUNDATION - Business Laws .pdf' },
  { title: 'CS Foundation Economics & Business', year: '2024', board: 'CS Foundation', pages: 24, subject: 'Economics', icon: '💹', pdfUrl: '/attached_assets/sample-papers/CS FOUNDATION - Economic and B.pdf' },
  { title: 'CS Foundation Fundamentals of Accounting', year: '2024', board: 'CS Foundation', pages: 29, subject: 'Accounting', icon: '📚', pdfUrl: '/attached_assets/sample-papers/CS FOUNDATION - Fundamentals o.pdf' },
  { title: 'CS Foundation Business Environment', year: '2024', board: 'CS Foundation', pages: 22, subject: 'Business Environment', icon: '🌐', pdfUrl: '/attached_assets/sample-papers/CS FOUNDATION-Business Environ.pdf' },
];

function PaperCard({ paper }: { paper: typeof papers[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, translateY: -4 }}
      className="group relative p-6 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{paper.icon}</span>
          <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
            <Lock size={10} />
            <span>Free</span>
          </div>
        </div>

        <h3 className="font-bold text-white text-base mb-1 group-hover:text-primary transition-colors">
          {paper.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">Board Exam {paper.year} &bull; {paper.pages} pages</p>

        <div className="flex items-center justify-between">
          <span className="px-2 py-1 text-xs rounded-lg bg-white/5 text-gray-400 border border-white/10">
            {paper.board}
          </span>
          <a
            href={paper.pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all"
          >
            <Download size={14} />
            Download Free
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function SamplePaperSection() {
  return (
    <section id="resources" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium border rounded-full border-primary/30 bg-primary/10 text-primary">
            <FileText size={14} /> Free Study Resources
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Download Free{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Sample Papers
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Previous year board exam papers — absolutely free. Click download and get instant access.
          </p>
        </motion.div>

        {/* Paper cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {papers.map((paper, i) => (
            <PaperCard key={i} paper={paper} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm"
        >
          All papers are provided free by Commerce Shala. No fees, no signup required.
        </motion.p>
      </div>
    </section>
  );
}

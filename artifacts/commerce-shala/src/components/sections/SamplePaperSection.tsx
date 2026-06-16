import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, X, CheckCircle, Lock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const papers = [
  { title: 'CBSE Accountancy', year: '2024', board: 'CBSE', pages: 24, subject: 'Accountancy', icon: '📒' },
  { title: 'CBSE Economics', year: '2024', board: 'CBSE', pages: 20, subject: 'Economics', icon: '📈' },
  { title: 'CBSE Business Studies', year: '2024', board: 'CBSE', pages: 18, subject: 'Business Studies', icon: '💼' },
  { title: 'UP Board Accountancy', year: '2024', board: 'UP Board', pages: 22, subject: 'Accountancy', icon: '📗' },
  { title: 'UP Board Economics', year: '2024', board: 'UP Board', pages: 19, subject: 'Economics', icon: '📊' },
  { title: 'ISC Accountancy', year: '2024', board: 'ISC', pages: 26, subject: 'Accountancy', icon: '📘' },
];

function PaperCard({ paper, onSelect }: { paper: typeof papers[0]; onSelect: (p: typeof papers[0]) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, translateY: -4 }}
      className="group relative p-6 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer"
      onClick={() => onSelect(paper)}
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
          <button className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all">
            <Download size={14} />
            Download Free
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function DownloadModal({ paper, onClose }: { paper: typeof papers[0] | null; onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!paper) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);
    const msg = `Hi! I am ${name}. My number is ${phone}. Please send me the FREE ${paper.title} (${paper.year}) sample paper. Thank you!`;
    setTimeout(() => {
      window.open(`https://wa.me/918004117317?text=${encodeURIComponent(msg)}`, '_blank');
    }, 800);
  };

  return (
    <AnimatePresence>
      {paper && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="w-full max-w-md bg-card border border-primary/30 rounded-3xl p-8 shadow-2xl shadow-primary/10 pointer-events-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400"
              >
                <X size={18} />
              </button>

              {!submitted ? (
                <>
                  <div className="text-4xl mb-3">{paper.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    Get Free Sample Paper
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    <span className="text-primary font-semibold">{paper.title} — {paper.year}</span>
                    <br />Enter your details and we'll send it to you on WhatsApp instantly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-black font-bold text-sm hover:bg-primary/90 hover:scale-[1.02] transition-all"
                    >
                      <SiWhatsapp size={16} />
                      Send Me the Paper on WhatsApp
                    </button>
                  </form>

                  <p className="text-center text-xs text-gray-600 mt-4">
                    We never spam. Your number is only used to send the paper.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle size={36} className="text-primary" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Opening WhatsApp…</h3>
                  <p className="text-gray-400 text-sm">
                    Your request is being sent to Commerce Shala. You'll receive the{' '}
                    <span className="text-primary font-semibold">{paper.title}</span> paper on WhatsApp shortly!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function SamplePaperSection() {
  const [selectedPaper, setSelectedPaper] = useState<typeof papers[0] | null>(null);

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
            Previous year board exam papers — absolutely free. Enter your WhatsApp number and we'll send it to you instantly.
          </p>
        </motion.div>

        {/* Paper cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {papers.map((paper, i) => (
            <PaperCard key={i} paper={paper} onSelect={setSelectedPaper} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm"
        >
          All papers are sent directly to your WhatsApp by Commerce Shala team. 100% free, no fees.
        </motion.p>
      </div>

      {/* Modal */}
      <DownloadModal paper={selectedPaper} onClose={() => setSelectedPaper(null)} />
    </section>
  );
}

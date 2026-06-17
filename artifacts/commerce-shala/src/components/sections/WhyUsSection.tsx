import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Minus } from 'lucide-react';

const features = [
  {
    label: 'Expert Faculty',
    us: { value: 'Saurabh Tripathi — 10+ yrs experience', status: 'yes' },
    others: { value: 'Often junior/part-time teachers', status: 'no' },
  },
  {
    label: 'Batch Size',
    us: { value: 'Max 30 students — personal attention', status: 'yes' },
    others: { value: '60–100+ students per batch', status: 'no' },
  },
  {
    label: 'Boards Covered',
    us: { value: 'CBSE, ISC & UP Board all in one', status: 'yes' },
    others: { value: 'Usually only 1 board', status: 'no' },
  },
  {
    label: 'Subjects Offered',
    us: { value: 'Accountancy, Economics, Business Studies', status: 'yes' },
    others: { value: 'Often only 1–2 subjects', status: 'partial' },
  },
  {
    label: 'Doubt Clearing',
    us: { value: 'Daily dedicated doubt sessions', status: 'yes' },
    others: { value: 'By appointment only / extra fees', status: 'no' },
  },
  {
    label: 'Free Sample Papers',
    us: { value: 'Previous year papers sent free on WhatsApp', status: 'yes' },
    others: { value: 'Charged separately', status: 'no' },
  },
  {
    label: 'Monthly Test Series',
    us: { value: 'Included in all batches', status: 'yes' },
    others: { value: 'Extra cost or not offered', status: 'no' },
  },
  {
    label: 'Board Exam Strategy',
    us: { value: 'Dedicated board prep sessions & notes', status: 'yes' },
    others: { value: 'Generic study plan only', status: 'partial' },
  },
  {
    label: 'Proven Results',
    us: { value: '95%+ students score above 90 marks', status: 'yes' },
    others: { value: 'Results not publicly shared', status: 'no' },
  },
  {
    label: 'Direct Teacher Access',
    us: { value: 'WhatsApp/call Saurabh sir directly', status: 'yes' },
    others: { value: 'Admin / coordinator in between', status: 'no' },
  },
];

const highlights = [
  { number: '25+', label: 'Years Excellence', icon: '🎓' },
  { number: '500+', label: 'Students Taught', icon: '👨‍🎓' },
  { number: '3', label: 'Boards Covered', icon: '📋' },
  { number: '95%', label: 'Score 90+ Marks', icon: '🏆' },
];

function StatusIcon({ status }: { status: string }) {
  if (status === 'yes') return <CheckCircle size={18} className="text-primary shrink-0" />;
  if (status === 'no') return <XCircle size={18} className="text-red-500/70 shrink-0" />;
  return <Minus size={18} className="text-yellow-500/70 shrink-0" />;
}

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium border rounded-full border-primary/30 bg-primary/10 text-primary">
            ⚔️ Commerce Shala vs Others
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Why Parents Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Commerce Shala
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            See exactly what sets us apart from every other coaching institute in Kanpur.
          </p>
        </motion.div>

        {/* Highlight stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl border border-primary/20 bg-primary/5"
            >
              <div className="text-3xl mb-2">{h.icon}</div>
              <div className="font-serif text-3xl font-bold text-primary mb-1">{h.number}</div>
              <div className="text-gray-400 text-sm">{h.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison table — desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden md:block rounded-3xl border border-primary/20 overflow-hidden shadow-2xl shadow-primary/5"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-primary/10 border-b border-primary/20">
            <div className="py-4 px-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Feature</div>
            <div className="py-4 px-6 text-sm font-bold text-primary uppercase tracking-widest text-center border-l border-primary/10 bg-primary/10">
              ✦ Commerce Shala
            </div>
            <div className="py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-widest text-center border-l border-white/5">
              Other Institutes
            </div>
          </div>

          {/* Rows */}
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`grid grid-cols-3 border-b last:border-b-0 border-white/5 hover:bg-white/[0.02] transition-colors ${
                i % 2 === 0 ? 'bg-white/[0.01]' : 'bg-transparent'
              }`}
            >
              <div className="py-4 px-6 font-medium text-gray-300 flex items-center text-sm">
                {f.label}
              </div>
              <div className="py-4 px-6 border-l border-primary/10 bg-primary/[0.03] flex items-start gap-2.5">
                <StatusIcon status={f.us.status} />
                <span className="text-sm text-white">{f.us.value}</span>
              </div>
              <div className="py-4 px-6 border-l border-white/5 flex items-start gap-2.5">
                <StatusIcon status={f.others.status} />
                <span className="text-sm text-gray-500">{f.others.value}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison cards — mobile */}
        <div className="md:hidden space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="px-4 py-2.5 bg-white/5 border-b border-white/10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{f.label}</span>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 bg-primary/5 border-r border-white/5">
                  <div className="text-xs font-bold text-primary mb-2">✦ Commerce Shala</div>
                  <div className="flex items-start gap-2">
                    <StatusIcon status={f.us.status} />
                    <span className="text-xs text-white leading-relaxed">{f.us.value}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-gray-500 mb-2">Others</div>
                  <div className="flex items-start gap-2">
                    <StatusIcon status={f.others.status} />
                    <span className="text-xs text-gray-500 leading-relaxed">{f.others.value}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to give your child the best shot at <span className="text-primary font-semibold">90+ marks</span>?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918004117317?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Commerce%20Shala%20and%20enrol%20my%20child."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-black font-bold text-sm hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
            >
              📲 Enrol on WhatsApp
            </a>
            <a
              href="tel:+918004117317"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-primary font-bold text-sm hover:bg-primary/10 hover:scale-105 transition-all"
            >
              📞 Call Saurabh Sir
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

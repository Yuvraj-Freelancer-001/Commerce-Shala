import { motion } from 'framer-motion';
import { Clock, Users, CheckCircle, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const batches = [
  {
    name: 'Morning Batch',
    time: '7:00 AM – 9:00 AM',
    days: 'Monday to Saturday',
    icon: '🌅',
    seatsTotal: 30,
    seatsFilled: 26,
    subjects: ['Accountancy', 'Economics', 'Business Studies'],
    boards: ['CBSE', 'ISC', 'UP Board'],
    highlight: false,
    badge: 'Early Bird',
    color: '#D4AF37',
  },
  {
    name: 'Afternoon Batch',
    time: '2:00 PM – 4:00 PM',
    days: 'Monday to Saturday',
    icon: '☀️',
    seatsTotal: 25,
    seatsFilled: 18,
    subjects: ['Accountancy', 'Economics', 'Business Studies'],
    boards: ['CBSE', 'UP Board'],
    highlight: true,
    badge: 'Most Popular',
    color: '#D4AF37',
  },
  {
    name: 'Evening Batch',
    time: '5:00 PM – 7:00 PM',
    days: 'Monday to Saturday',
    icon: '🌆',
    seatsTotal: 30,
    seatsFilled: 24,
    subjects: ['Accountancy', 'Economics', 'Business Studies'],
    boards: ['CBSE', 'ISC', 'UP Board'],
    highlight: false,
    badge: 'Evening',
    color: '#D4AF37',
  },
  {
    name: 'Weekend Batch',
    time: '10:00 AM – 1:00 PM',
    days: 'Saturday & Sunday',
    icon: '📅',
    seatsTotal: 20,
    seatsFilled: 14,
    subjects: ['Accountancy', 'Economics', 'Business Studies'],
    boards: ['CBSE', 'ISC', 'UP Board'],
    highlight: false,
    badge: 'Weekend Only',
    color: '#D4AF37',
  },
];

function SeatBar({ filled, total, highlight }: { filled: number; total: number; highlight: boolean }) {
  const pct = Math.round((filled / total) * 100);
  const remaining = total - filled;
  const isAlmostFull = remaining <= 5;

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className={`font-medium ${isAlmostFull ? 'text-red-400' : 'text-gray-400'}`}>
          {isAlmostFull ? `⚠️ Only ${remaining} seats left!` : `${remaining} seats available`}
        </span>
        <span className="text-gray-500">{filled}/{total} filled</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`h-full rounded-full ${
            isAlmostFull ? 'bg-red-500' : highlight ? 'bg-primary' : 'bg-primary/70'
          }`}
        />
      </div>
    </div>
  );
}

function BatchCard({ batch, index }: { batch: typeof batches[0]; index: number }) {
  const waMsg = `Hi, I am interested in the ${batch.name} (${batch.time}) at Commerce Shala. Please share more details about available seats and fees.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, translateY: -4 }}
      className={`relative flex flex-col p-7 rounded-3xl border transition-all duration-300 ${
        batch.highlight
          ? 'border-primary/60 bg-primary/5 shadow-xl shadow-primary/10'
          : 'border-white/10 bg-card/60 hover:border-primary/30'
      }`}
      style={{ perspective: '800px' }}
    >
      {/* Badge */}
      <div className="absolute -top-3 left-6">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          batch.highlight ? 'bg-primary text-black' : 'bg-white/10 text-gray-300'
        }`}>
          {batch.badge}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-5 mt-2">
        <div>
          <span className="text-3xl mb-2 block">{batch.icon}</span>
          <h3 className="font-serif text-xl font-bold text-white">{batch.name}</h3>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1.5 text-primary font-bold text-lg">
            <Clock size={18} />
            <span>{batch.time}</span>
          </div>
          <p className="text-gray-500 text-xs mt-1">{batch.days}</p>
        </div>
      </div>

      {/* Subjects */}
      <div className="flex flex-wrap gap-2 mb-4">
        {batch.subjects.map(s => (
          <span key={s} className="px-2 py-1 text-xs rounded-lg bg-white/5 text-gray-400 border border-white/10">
            {s}
          </span>
        ))}
      </div>

      {/* Boards */}
      <div className="flex flex-wrap gap-2 mb-5">
        {batch.boards.map(b => (
          <span key={b} className="px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary font-semibold border border-primary/20">
            {b}
          </span>
        ))}
      </div>

      {/* Seat bar */}
      <div className="mb-6">
        <SeatBar filled={batch.seatsFilled} total={batch.seatsTotal} highlight={batch.highlight} />
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-1">
        {['Daily practice sheets', 'Monthly test series', 'Doubt clearing sessions', 'Board exam strategy'].map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle size={14} className="text-primary shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`https://wa.me/918004117317?text=${encodeURIComponent(waMsg)}`}
        target="_blank"
        rel="noreferrer"
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 ${
          batch.highlight
            ? 'bg-primary text-black hover:bg-primary/90'
            : 'bg-white/5 text-white border border-white/10 hover:bg-primary/10 hover:border-primary/40'
        }`}
      >
        <SiWhatsapp size={16} className={batch.highlight ? 'text-black' : 'text-[#25D366]'} />
        Reserve My Seat
      </a>
    </motion.div>
  );
}

export default function BatchScheduleSection() {
  return (
    <section id="batches" className="py-24 bg-background relative overflow-hidden">
      {/* 3D perspective grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{ perspective: '400px' }}>
        <div
          className="absolute bottom-0 left-0 right-0 h-64 opacity-10"
          style={{
            transform: 'rotateX(70deg)',
            transformOrigin: 'bottom center',
            backgroundImage: 'linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium border rounded-full border-primary/30 bg-primary/10 text-primary">
            <Clock size={14} /> Batch Timings — Session 2025–26
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Batch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Select the time that fits your school schedule. Limited seats per batch to ensure personalised attention.
          </p>

          {/* Urgency alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Seats filling fast — Batch 2025–26 is now open
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {batches.map((batch, i) => (
            <BatchCard key={i} batch={batch} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 p-7 rounded-3xl border border-primary/20 bg-primary/5 text-center"
        >
          <div>
            <p className="text-white font-semibold text-lg">Not sure which batch suits you?</p>
            <p className="text-gray-400 text-sm">Call Saurabh sir directly — he'll guide you to the right batch.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+918004117317"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-black font-bold text-sm hover:bg-primary/90 hover:scale-105 transition-all"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href="https://wa.me/918004117317?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20batch%20at%20Commerce%20Shala."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#25D366]/50 text-[#25D366] font-bold text-sm hover:bg-[#25D366]/10 hover:scale-105 transition-all"
            >
              <SiWhatsapp size={16} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

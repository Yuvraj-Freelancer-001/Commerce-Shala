import { motion } from 'framer-motion';
import { Phone, MapPin, Send, Navigation } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactSection() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const studentClass = formData.get('class');
    const board = formData.get('board');
    const subject = formData.get('subject');
    const phone = formData.get('phone');
    const text = `Hi, I am ${name} (Class ${studentClass}, ${board} – ${subject}). My number is ${phone}. I want to book a free demo class at Commerce Shala, Kanpur.`;
    window.open(`https://wa.me/918004117317?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pattern-dots" />

      <div className="container px-4 mx-auto relative z-10 space-y-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Get In Touch</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Start Your Commerce Journey</h3>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Enroll in Kanpur's premier commerce institute and secure your academic future.
          </p>
        </motion.div>

        {/* Contact card + Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row bg-card border border-card-border rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Left Panel */}
          <div className="w-full lg:w-5/12 bg-card border-b lg:border-b-0 lg:border-r border-card-border p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <a href="tel:+918004117317" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Admission Helpline</div>
                  <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors">+91 80041 17317</div>
                </div>
              </a>

              <a href="https://wa.me/918004117317" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-black transition-colors shrink-0">
                  <SiWhatsapp size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">WhatsApp Chat</div>
                  <div className="text-xl font-bold text-white group-hover:text-[#25D366] transition-colors">Message Us Instantly</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-base text-white leading-relaxed">
                    117/P/761 Shivpuri Chhapeda Puliya,<br />
                    Kakadeo, Kanpur, UP
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-sm text-gray-500 mb-3">Quick Actions</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+918004117317"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-black font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                  <a
                    href="https://wa.me/918004117317?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class%20at%20Commerce%20Shala."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-black font-semibold text-sm hover:bg-[#25D366]/90 transition-all hover:scale-105"
                  >
                    <SiWhatsapp size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel — Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-14">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Send size={20} className="text-primary" /> Book Free Demo Class
            </h3>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Student Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                  placeholder="Enter full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Class</label>
                  <select name="class" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Board</label>
                  <select name="board" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option value="CBSE">CBSE</option>
                    <option value="ISC">ISC</option>
                    <option value="UP Board">UP Board</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject Interest</label>
                <select name="subject" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                  <option value="All Subjects">All Subjects</option>
                  <option value="Accountancy">Accountancy</option>
                  <option value="Economics">Economics</option>
                  <option value="Business Studies">Business Studies</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
              >
                Start My Journey
              </button>
              <p className="text-xs text-center text-gray-600">
                Tapping the button opens WhatsApp to confirm your free demo booking.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl overflow-hidden border border-card-border shadow-2xl shadow-black/50"
        >
          {/* Map header bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-card border-b border-card-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Navigation size={18} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Commerce Shala</p>
                <p className="text-gray-500 text-xs">Shivpuri Chhapeda Puliya, Kakadeo, Kanpur, UP</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/Kakadeo,+Kanpur,+Uttar+Pradesh/@26.4505,80.3182,15z"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-primary border border-primary/30 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
            >
              Open in Maps
            </a>
          </div>

          {/* iframe */}
          <div className="relative w-full h-80 md:h-[420px]">
            <iframe
              title="Commerce Shala Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.07!2d80.3182!3d26.4505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3792af41c5b5%3A0x1a68ae88af7b3547!2sKakadeo%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Dark overlay tint handled by CSS filter above; add gold pin overlay */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

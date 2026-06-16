import { motion } from 'framer-motion';
import { Phone, MapPin, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactSection() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const studentClass = formData.get('class');
    const board = formData.get('board');
    const text = `Hi, I am ${name} (Class ${studentClass}, ${board}). I want to book a free demo class.`;
    window.open(`https://wa.me/918004117317?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pattern-dots" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 bg-card border border-card-border rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
          
          {/* Left Panel */}
          <div className="w-full lg:w-5/12 bg-card border-r border-card-border p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Start Your Commerce Journey</h2>
              <p className="text-gray-400 text-lg mb-12">Enroll in Kanpur's premier commerce institute and secure your academic future.</p>
              
              <div className="space-y-8">
                <a href="tel:+918004117317" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Admission Helpline</div>
                    <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors">+91 80041 17317</div>
                  </div>
                </a>
                
                <a href="https://wa.me/918004117317" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-black transition-colors shrink-0">
                    <SiWhatsapp size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">WhatsApp Chat</div>
                    <div className="text-xl font-bold text-white group-hover:text-[#25D366] transition-colors">Message Us</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-lg text-white">117/P/761 Shivpuri Chhapeda Puliya, Kakadeo, Kanpur, UP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-16">
            <h3 className="text-2xl font-bold text-white mb-8">Book Free Demo Class</h3>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Student Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter full name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Class</label>
                  <select name="class" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Board</label>
                  <select name="board" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
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
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="+91"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject Interest</label>
                <select name="subject" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="All Subjects">All Subjects</option>
                  <option value="Accountancy">Accountancy</option>
                  <option value="Economics">Economics</option>
                  <option value="Business Studies">Business Studies</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-4"
              >
                <span>🚀 Start My Journey</span>
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">This will open WhatsApp to confirm your booking.</p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}

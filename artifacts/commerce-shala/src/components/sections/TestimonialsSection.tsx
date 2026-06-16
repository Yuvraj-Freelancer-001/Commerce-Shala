import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rohan K.",
    role: "Student, CBSE 12th",
    text: "Saurabh sir's teaching method is exceptional. Accountancy used to be my weakest subject, but now it's my strongest. Scored 95 in boards!",
    rating: 5
  },
  {
    name: "Mrs. Sharma",
    role: "Parent",
    text: "The personal attention given to each student at Commerce Shala is unmatched in Kanpur. The regular mock tests built great confidence in my daughter.",
    rating: 5
  },
  {
    name: "Aditya V.",
    role: "Student, ISC",
    text: "The way Economics is taught here connects theory with real-world examples. It makes learning so much more interesting. Highly recommended.",
    rating: 5
  },
  {
    name: "Sneha M.",
    role: "Student, UP Board",
    text: "Best commerce coaching. The study material is concise and covers everything needed for the exams perfectly.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      <div className="container px-4 mx-auto text-center relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Testimonials</h2>
        <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-16">What Parents & Students Say</h3>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-card-border p-10 md:p-16 rounded-3xl backdrop-blur-sm relative"
            >
              <div className="absolute top-10 left-10 text-primary/20">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 font-serif italic mb-8 relative z-10 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary text-primary flex items-center justify-center font-bold text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-gray-400">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border border-card-border bg-card hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-card-border bg-card hover:border-primary hover:text-primary transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const images = [
  { src: "/images/gallery-1.png", caption: "Our Proud Topper", tag: "Achievement" },
  { src: "/images/gallery-2.png", caption: "Excellence Celebrated", tag: "Success" },
  { src: "/images/gallery-3.png", caption: "Focused & Determined", tag: "Study" },
  { src: "/images/gallery-4.png", caption: "Learning in Action", tag: "Classroom" },
  { src: "/images/gallery-5.png", caption: "Batch 2024 Achievers", tag: "Results" },
  { src: "/images/gallery-6.png", caption: "Late Night Hustle", tag: "Dedication" },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-xs font-semibold tracking-widest uppercase border rounded-full border-primary/30 bg-primary/10 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Gallery
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Life at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Commerce Shala
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Where hard work meets celebration — moments that define our students' journey.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Tag top left */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-primary text-black">
                  {image.tag}
                </span>
              </div>

              {/* Caption bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-semibold text-sm tracking-wide">{image.caption}</p>
                <div className="w-8 h-0.5 bg-primary mt-1.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-sm mt-12 italic"
        >
          ✦ Every success story at Commerce Shala starts with dedication ✦
        </motion.p>
      </div>
    </section>
  );
}

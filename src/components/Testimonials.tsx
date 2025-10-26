import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "StavoraX Labs transformed our legacy system into a modern, scalable platform. Their technical expertise and strategic approach exceeded our expectations. The team's dedication to understanding our business needs made all the difference.",
      author: "Sarah Chen",
      position: "CTO",
      company: "TechCorp Global",
      image: "https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTM4NzMzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5
    },
    {
      quote: "Working with StavoraX Labs was a game-changer for our digital transformation. They delivered a solution that not only met our requirements but anticipated future needs. The ROI has been exceptional.",
      author: "Michael Rodriguez",
      position: "VP of Digital Innovation",
      company: "GlobalBank Corp",
      image: "https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTM4NzMzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5
    },
    {
      quote: "The level of professionalism and technical depth StavoraX Labs brings is unmatched. They don't just build products—they build partnerships. Our platform now serves millions of users seamlessly.",
      author: "Emily Watson",
      position: "Chief Product Officer",
      company: "MediCare Solutions",
      image: "https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTM4NzMzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30 relative overflow-hidden">
      {/* Floating orb */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 mb-4 uppercase tracking-widest text-sm">Client Testimonials</p>
          <h2 className="text-white">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm p-12 lg:p-16 rounded-2xl border border-gray-800/50 overflow-hidden"
        >
          <motion.div
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Quote className="text-cyan-400/20 absolute top-8 left-8" size={48} />
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(current.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star className="text-cyan-400 fill-cyan-400" size={20} />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl text-gray-200 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                "{current.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 border-2 border-cyan-400/20"
                >
                  <ImageWithFallback
                    src={current.image}
                    alt={current.author}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="text-left">
                  <div className="text-white">{current.author}</div>
                  <div className="text-gray-400">{current.position}</div>
                  <div className="text-cyan-400">{current.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-4 justify-center mt-10">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 255, 255, 0.1)", borderColor: "rgba(0, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-gray-700 flex items-center justify-center transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-400" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 255, 255, 0.1)", borderColor: "rgba(0, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-gray-700 flex items-center justify-center transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-400" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                animate={{
                  width: index === currentIndex ? 32 : 8,
                  backgroundColor: index === currentIndex ? "#00ffff" : "#4b5563"
                }}
                className="h-2 rounded-full transition-all"
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
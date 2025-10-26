import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of projects does StavoraX Labs specialize in?",
      answer: "We specialize in enterprise-grade digital products including web applications, mobile apps, SaaS platforms, data analytics solutions, and digital transformation initiatives. Our expertise spans healthcare, fintech, e-commerce, and enterprise software."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A typical MVP can be delivered in 8-12 weeks, while comprehensive enterprise solutions may take 4-6 months. We follow agile methodologies with regular sprints and deliverables to ensure transparency and flexibility."
    },
    {
      question: "How do you ensure code quality and security?",
      answer: "We implement rigorous quality assurance processes including code reviews, automated testing, security audits, and compliance checks. Our development follows industry best practices like OWASP guidelines, and we conduct regular penetration testing for critical applications."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and continuous improvement. We provide flexible support packages ranging from basic maintenance to dedicated team extensions based on your needs."
    },
    {
      question: "What is your approach to project pricing?",
      answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. Pricing is determined based on project scope, complexity, and timeline. We provide detailed estimates after thorough discovery and requirements gathering."
    },
    {
      question: "How do you handle project communication and collaboration?",
      answer: "We maintain transparent communication through regular status updates, sprint reviews, and dedicated project managers. We use modern collaboration tools and can adapt to your preferred communication channels. You'll have direct access to our team throughout the project lifecycle."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 mb-4 uppercase tracking-widest text-sm">FAQ</p>
          <h2 className="text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ x: 5 }}
              className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-cyan-500/30 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                >
                  {openIndex === index ? (
                    <Minus className="text-cyan-400" size={20} />
                  ) : (
                    <Plus className="text-gray-400" size={20} />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <h3 className="text-white mb-3 relative z-10">Still have questions?</h3>
          <p className="text-gray-400 mb-6 relative z-10">
            Our team is here to help you find the right solution for your needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 text-black px-8 py-3 rounded-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 relative z-10"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
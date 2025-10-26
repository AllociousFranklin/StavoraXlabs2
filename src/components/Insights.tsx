import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Insights() {
  const insights = [
    {
      category: "Product Strategy",
      title: "The Future of Enterprise SaaS: Trends Shaping 2025",
      excerpt: "Explore how AI integration, API-first architectures, and vertical SaaS are transforming the enterprise software landscape.",
      date: "Oct 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MTM3NjEyOHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "UX Design",
      title: "Design Systems at Scale: Building Consistency Across Products",
      excerpt: "Learn how to create and maintain design systems that support growing product portfolios and distributed teams.",
      date: "Oct 10, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMzUyMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "Engineering",
      title: "Microservices Architecture: When and How to Scale",
      excerpt: "A practical guide to transitioning from monolithic applications to microservices without disrupting business operations.",
      date: "Oct 5, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1758411897888-3ca658535fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTQxOTU1NHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 to-black relative overflow-hidden">
      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
        >
          <div>
            <p className="text-cyan-400 mb-4 uppercase tracking-widest text-sm">Latest Insights</p>
            <h2 className="text-white">Thought Leadership & Resources</h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 group"
          >
            View All Articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 255, 255, 0.15)",
              }}
              className="group bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${insight.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/90 text-black rounded-full text-xs uppercase tracking-wider"
                >
                  {insight.category}
                </motion.span>
              </div>
              
              <div className="p-6">
                <h3 className="text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{insight.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{insight.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

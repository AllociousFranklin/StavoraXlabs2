import { ArrowRight, TrendingUp, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Healthcare Platform",
      client: "MediCare Solutions",
      category: "Healthcare Technology",
      challenge: "Streamlining patient data management across 50+ hospitals",
      solution: "Cloud-based platform with real-time analytics and HIPAA compliance",
      results: [
        "40% reduction in administrative overhead",
        "99.9% system uptime achieved",
        "500K+ patients served monthly"
      ],
      image: "https://images.unsplash.com/photo-1758411897888-3ca658535fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTQxOTU1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "AWS", "Healthcare"],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      accentColor: "rgba(168, 85, 247, 0.3)"
    },
    {
      title: "FinTech Analytics Dashboard",
      client: "GlobalBank Corp",
      category: "Financial Services",
      challenge: "Creating intuitive analytics for complex financial data",
      solution: "Real-time dashboard with predictive insights and customizable reports",
      results: [
        "3x faster decision-making",
        "85% user satisfaction score",
        "$2M+ annual cost savings"
      ],
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjEzMTk2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "D3.js", "Python", "Finance"],
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      accentColor: "rgba(6, 182, 212, 0.3)"
    },
    {
      title: "E-Commerce Mobile App",
      client: "RetailPro Inc",
      category: "Retail & E-Commerce",
      challenge: "Building a seamless omnichannel shopping experience",
      solution: "Native iOS/Android apps with AI-powered recommendations",
      results: [
        "200% increase in mobile sales",
        "4.8★ app store rating",
        "1M+ app downloads"
      ],
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMzUyMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "GraphQL", "AI/ML", "E-Commerce"],
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      accentColor: "rgba(139, 92, 246, 0.3)"
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Colorful animated particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: ['#a855f7', '#06b6d4', '#ec4899', '#f59e0b', '#10b981'][i % 5],
            opacity: 0.1,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="mb-4 uppercase tracking-widest text-sm"
            animate={{
              backgroundImage: [
                "linear-gradient(to right, #a855f7, #ec4899)",
                "linear-gradient(to right, #ec4899, #f59e0b)",
                "linear-gradient(to right, #f59e0b, #a855f7)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Case Studies
          </motion.p>
          <h2 className="mb-6 text-white max-w-3xl mx-auto">
            Real-World{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore how we've helped leading organizations transform their digital presence 
            and achieve measurable business outcomes.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Glowing background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />
              
              <div className={`relative grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-3xl border-2 border-gray-700/50 hover:border-transparent overflow-hidden transition-all duration-500`}>
                {/* Image side - alternating left/right */}
                <div className={`relative h-80 lg:h-full overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-black/70 via-black/30 to-transparent`} />
                  
                  {/* Category badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${study.gradient} rounded-full text-white text-xs uppercase tracking-wider shadow-lg`}
                  >
                    {study.category}
                  </motion.div>

                  {/* Decorative corner element */}
                  <motion.div
                    className={`absolute bottom-6 right-6 w-16 h-16 border-2 border-white/20 rounded-tr-2xl rounded-bl-2xl`}
                    animate={{
                      rotate: [0, 90, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                    }}
                  />
                </div>
                
                {/* Content side */}
                <div className={`p-10 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.h3 
                    className={`text-white mb-2 bg-gradient-to-r ${study.gradient} bg-clip-text group-hover:text-transparent transition-all duration-500`}
                  >
                    {study.title}
                  </motion.h3>
                  <p className="text-gray-500 mb-8 text-lg">{study.client}</p>
                  
                  <div className="space-y-5 mb-8">
                    <div className="relative pl-6">
                      <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${study.gradient} rounded-full`} />
                      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Challenge</div>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="relative pl-6">
                      <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${study.gradient} rounded-full`} />
                      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Solution</div>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-xs text-gray-500 mb-4 uppercase tracking-wider">Key Results</div>
                    <div className="grid grid-cols-1 gap-3">
                      {study.results.map((result, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 group/result"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 180 }}
                            className={`mt-1 bg-gradient-to-br ${study.gradient} p-1.5 rounded-lg`}
                          >
                            <TrendingUp size={14} className="text-white" />
                          </motion.div>
                          <span className="text-gray-300 group-hover/result:text-white transition-colors">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.15, y: -3 }}
                        className={`px-4 py-2 bg-gradient-to-r ${study.gradient} bg-opacity-10 text-transparent bg-clip-text rounded-xl text-sm border border-gray-700 hover:border-transparent cursor-pointer relative overflow-hidden group/tag`}
                      >
                        <span className={`absolute inset-0 bg-gradient-to-r ${study.gradient} opacity-0 group-hover/tag:opacity-10 transition-opacity`} />
                        <span className="relative z-10">{tag}</span>
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 10, scale: 1.05 }}
                    className={`inline-flex items-center gap-2 group/btn`}
                  >
                    <span className={`bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                      View Full Case Study
                    </span>
                    <ExternalLink size={16} className="text-purple-400 group-hover/btn:text-cyan-400 transition-colors" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-5 rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
            <div className="absolute inset-0.5 bg-gray-900 group-hover:bg-gray-800 transition-colors" />
            <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent inline-flex items-center gap-2">
              View All Case Studies
              <ArrowRight size={20} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

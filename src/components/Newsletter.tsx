import { Send, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Newsletter() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${5 + Math.random() * 15}px`,
              height: `${5 + Math.random() * 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#a855f7', '#06b6d4', '#ec4899'][i % 3],
              opacity: 0.1,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl p-12 lg:p-16 rounded-3xl border-2 border-gray-700/50 overflow-hidden">
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #06b6d4, #ec4899, #f59e0b)',
                backgroundSize: '400% 400%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            />

            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-10 right-10 text-purple-400/20"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            >
              <Sparkles size={60} />
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 left-10 text-cyan-400/20"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
              }}
            >
              <Sparkles size={50} />
            </motion.div>
            
            <div className="text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <motion.h2 
                  className="mb-4 text-white"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.3)",
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  Stay Ahead with{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Exclusive Insights
                  </span>
                </motion.h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Join 10,000+ product leaders and get the latest trends, case studies, and actionable tips 
                  delivered straight to your inbox. No spam, just value.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6"
              >
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="flex-1 relative group"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/5 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-sm"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity pointer-events-none"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(168, 85, 247, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 rounded-xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
                  <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 group-hover:inset-0 transition-all duration-300" />
                  <span className="relative z-10 text-white font-medium inline-flex items-center gap-2">
                    Subscribe
                    <motion.div
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <Send size={18} />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Weekly updates</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span>Expert insights</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span>Unsubscribe anytime</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

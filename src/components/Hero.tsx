import { ArrowRight, CheckCircle, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-black via-indigo-950/20 to-black">
      {/* Complex geometric animation - simplifying over time */}
      <div className="absolute inset-0">
        {/* Animated rotating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: '100px',
              height: '100px',
            }}
            initial={{
              rotate: 0,
              opacity: 0.3,
              scale: 1,
            }}
            animate={{
              rotate: 360,
              opacity: [0.3, 0.1, 0],
              scale: [1, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <div className="w-full h-full border-2 border-blue-400/30 rounded-lg" 
                 style={{ 
                   background: `linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(14, 165, 233, 0.1))`,
                   transform: `rotate(${i * 45}deg)`
                 }} 
            />
          </motion.div>
        ))}
        
        {/* Complex lines simplifying to single point */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos(i * 30 * Math.PI / 180) * 40}%`}
              y2={`${50 + Math.sin(i * 30 * Math.PI / 180) * 40}%`}
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0.6 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 6,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Professional gradient orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.2), rgba(14, 165, 233, 0.1), transparent)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1), transparent)'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Professional particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: ['#0ea5e9', '#6366f1', '#8b5cf6', '#3b82f6', '#06b6d4'][i % 5],
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge with professional gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 backdrop-blur-sm relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-purple-500/20"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <Sparkles className="text-blue-400 animate-pulse" size={16} />
            <span className="text-sm bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent relative z-10">
              Trusted by 50+ Global Brands
            </span>
            <Zap className="text-indigo-400 animate-pulse" size={16} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-white"
          >
            Transform{" "}
            <motion.span 
              className="inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Complex Challenges
            </motion.span>
            {" "}into{" "}
            <motion.span 
              className="inline-block relative"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(14, 165, 233, 0.5)",
                  "0 0 40px rgba(79, 70, 229, 0.5)",
                  "0 0 20px rgba(14, 165, 233, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Intuitive Solutions
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            StavoraX Labs combines deep domain expertise with user-centric design to deliver 
            world-class digital products that drive measurable business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(14, 165, 233, 0.6), 0 0 60px rgba(79, 70, 229, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient" />
              <div className="absolute inset-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 group-hover:inset-0 transition-all duration-300" />
              <span className="relative z-10 text-black font-medium inline-flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(79, 70, 229, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 text-white px-8 py-4 rounded-lg transition-all border-2 border-indigo-500/30 inline-flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Case Studies
            </motion.button>
          </motion.div>

          {/* Key benefits with professional colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: CheckCircle, text: "10+ Years Experience", color: "from-blue-400 to-sky-500" },
              { icon: CheckCircle, text: "50+ Successful Projects", color: "from-indigo-400 to-purple-500" },
              { icon: CheckCircle, text: "1M+ Active Users", color: "from-purple-400 to-violet-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 10px 40px rgba(79, 70, 229, 0.3)",
                }}
                className="relative flex items-center justify-center gap-3 text-gray-300 p-5 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(14, 165, 233, 0.1))`
                  }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${item.color} p-2 rounded-lg`}
                >
                  <item.icon size={20} className="text-white" />
                </motion.div>
                <span className="relative z-10">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
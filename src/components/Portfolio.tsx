import { TrendingUp, Users, Award, Globe, Sparkles, Zap, Rocket, Target } from "lucide-react";
import { motion } from "motion/react";

export function Portfolio() {
  const stats = [
    {
      icon: Award,
      value: "2+",
      label: "Years of Excellence",
      description: "Delivering innovative solutions",
      gradient: "from-blue-400 to-indigo-500",
      iconBg: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      value: "20+",
      label: "Satisfied Clients",
      description: "Across diverse industries",
      gradient: "from-indigo-400 to-purple-500",
      iconBg: "from-indigo-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      value: "10K+",
      label: "Active Users",
      description: "Using our products daily",
      gradient: "from-cyan-400 to-blue-500",
      iconBg: "from-cyan-500 to-blue-600"
    },
    {
      icon: Globe,
      value: "10+",
      label: "Countries",
      description: "Global reach and impact",
      gradient: "from-teal-400 to-cyan-500",
      iconBg: "from-teal-500 to-cyan-600"
    }
  ];

  const highlights = [
    { icon: Sparkles, title: "User-Centric", desc: "Every decision backed by research and data", color: "from-indigo-400 to-purple-400" },
    { icon: Rocket, title: "Scalable", desc: "Built to grow with your business", color: "from-blue-400 to-cyan-400" },
    { icon: Target, title: "Future-Proof", desc: "Using cutting-edge technologies", color: "from-purple-400 to-violet-400" }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 via-black to-gray-900/20 relative overflow-hidden">
      {/* Animated colorful background elements */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.4), rgba(139, 92, 246, 0.2), transparent)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), rgba(59, 130, 246, 0.2), transparent)'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -80, 0],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="mb-4 uppercase tracking-widest text-sm inline-flex items-center gap-2"
            animate={{
              backgroundImage: [
                "linear-gradient(to right, #0ea5e9, #6366f1)",
                "linear-gradient(to right, #6366f1, #8b5cf6)",
                "linear-gradient(to right, #8b5cf6, #3b82f6)",
                "linear-gradient(to right, #3b82f6, #0ea5e9)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <Zap size={16} className="text-indigo-400" />
            Our Impact
            <Zap size={16} className="text-indigo-400" />
          </motion.p>
          <h2 className="mb-6 text-white max-w-3xl mx-auto">
            Proven Track Record of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine behavioral science with business strategy to transform complex 
            challenges into intuitive digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="text-center relative group"
              >
                {/* Card with gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-gray-700/50 hover:border-transparent transition-all duration-500 overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10`}
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                    }}
                  />
                  
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${stat.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  
                  <motion.div 
                    className={`text-5xl mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent relative z-10`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white mb-2 relative z-10">{stat.label}</div>
                  <p className="text-sm text-gray-500 relative z-10">{stat.description}</p>

                  {/* Decorative corner accents */}
                  <motion.div
                    className={`absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 rounded-tr-xl opacity-20 group-hover:opacity-60 transition-opacity`}
                    style={{
                      borderImage: `linear-gradient(to right, ${stat.gradient}) 1`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition with creative layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative group"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
          
          <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl p-12 rounded-3xl border-2 border-gray-700/50 overflow-hidden">
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(14, 165, 233, 0.2), rgba(139, 92, 246, 0.2))',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            
            {/* Floating decorative elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ['#6366f1', '#0ea5e9', '#8b5cf6', '#3b82f6', '#14b8a6'][i],
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 70}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h3 className="mb-6 text-white">
                Why Leading Organizations Choose{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  StavoraX Labs
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                We don't just write code—we deliver clarity. Our domain-rich, user-obsessed 
                approach ensures every solution is tailored to your unique business needs and 
                designed for long-term success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.05,
                      }}
                      className="relative text-center p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-700/50 hover:border-transparent transition-all overflow-hidden group/item"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover/item:opacity-10 transition-opacity`} />
                      
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center relative z-10`}
                      >
                        <ItemIcon className="text-white" size={24} />
                      </motion.div>
                      
                      <div className={`mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent relative z-10`}>
                        {item.title}
                      </div>
                      <p className="text-sm text-gray-500 relative z-10">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
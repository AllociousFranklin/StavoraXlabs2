import { motion } from "motion/react";

export function TechnologyStack() {
  const technologies = {
    "Frontend": ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Python", "Java", "Express", "FastApi", "REST APIs"],
    "Mobile": ["React Native", "Flutter", "iOS Native", "Android Native", "Expo"],
    "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    "Database": ["MySQL", "MongoDB", "Supabase", "DynamoDB", "Firebase", "NoSQL"],
    "AI & ML": ["TensorFlow", "PyTorch", "LLMs", "Scikit-learn", "NLP", "Computer Vision"]
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '30px 30px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
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
          <p className="text-cyan-400 mb-4 uppercase tracking-widest text-sm">Technology Stack</p>
          <h2 className="mb-6 text-white max-w-3xl mx-auto">
            Built with Modern, Battle-Tested Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We leverage industry-leading tools and frameworks to build scalable, 
            secure, and future-proof solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 40px rgba(0, 255, 255, 0.1)",
              }}
              className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              <motion.h3
                className="text-white mb-6 pb-4 border-b border-gray-800"
                whileHover={{ color: "#00ffff" }}
              >
                {category}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.03 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(0, 255, 255, 0.1)",
                      color: "#00ffff",
                      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                    }}
                    className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm transition-all cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Don't see your preferred technology? We're always expanding our expertise.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, color: "#00ffff" }}
            className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
          >
            Discuss Your Requirements →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

export function ClientLogos() {
  const clients = [
    "TechCorp", "InnovateLabs", "DataFlow", "CloudNine", 
    "NexGen", "DigitalFirst", "SmartSystems", "FutureScale"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30 relative overflow-hidden">
      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mb-8 uppercase tracking-widest text-sm"
        >
          Trusted by Industry Leaders
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                color: "#00ffff",
              }}
              className="flex items-center justify-center h-12 text-gray-600 transition-colors cursor-pointer"
            >
              <span className="tracking-wider">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

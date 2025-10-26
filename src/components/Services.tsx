import { Code, Smartphone, Layout, BarChart3, Cog, Users } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: Layout,
      title: "Product Strategy & Design",
      description: "Transform business requirements into user-centric product strategies with comprehensive UX research, design systems, and prototyping.",
      features: ["UX Research & Strategy", "UI/UX Design", "Design Systems", "Prototyping"],
      gradient: "from-indigo-500 to-purple-500",
      glowColor: "rgba(79, 70, 229, 0.3)"
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Build scalable, performant web applications using modern frameworks and cloud-native architectures.",
      features: ["React & Next.js", "Microservices", "API Development", "Cloud Infrastructure"],
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "rgba(14, 165, 233, 0.3)"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
      gradient: "from-purple-500 to-violet-500",
      glowColor: "rgba(139, 92, 246, 0.3)"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Unlock actionable insights with advanced analytics, business intelligence, and data visualization solutions.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Real-time Dashboards"],
      gradient: "from-sky-500 to-blue-600",
      glowColor: "rgba(14, 165, 233, 0.3)"
    },
    {
      icon: Cog,
      title: "Agentic AI & Automation",
      description: "Agentic systems automate deployments, optimize cloud infrastructure for reliability, scalability, and security.",
      features: ["Autonomous Agent Architectures", "GTM Agents", "Intelligent Supply Chain Optimization", "HR Policy & Knowledge Agents"],
      gradient: "from-teal-500 to-cyan-500",
      glowColor: "rgba(20, 184, 166, 0.3)"
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description: "Guide your organization through digital transformation with strategic consulting and implementation support.",
      features: ["Legacy Modernization", "Process Automation", "Change Management", "Technology Consulting"],
      gradient: "from-blue-600 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.3)"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/30 to-black relative overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `radial-gradient(circle, ${['rgba(79, 70, 229, 0.1)', 'rgba(14, 165, 233, 0.1)', 'rgba(139, 92, 246, 0.1)'][i % 3]}, transparent)`,
              borderRadius: '50%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="mb-4 uppercase tracking-widest text-sm inline-block"
            animate={{
              backgroundImage: [
                "linear-gradient(to right, #0ea5e9, #6366f1)",
                "linear-gradient(to right, #6366f1, #8b5cf6)",
                "linear-gradient(to right, #8b5cf6, #0ea5e9)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Services
          </motion.p>
          <h2 className="mb-6 text-white max-w-3xl mx-auto">
            End-to-End Solutions for{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We deliver comprehensive digital solutions that combine strategic thinking, 
            cutting-edge technology, and user-centered design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
                whileHover={{ 
                  y: -15,
                  rotate: 2,
                  boxShadow: `0 25px 50px ${service.glowColor}`,
                }}
                className="group bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-gray-700/50 hover:border-transparent transition-all duration-500 relative overflow-hidden cursor-pointer"
              >
                {/* Animated gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                  style={{ padding: '2px' }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl" />
                
                {/* Floating gradient orb */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                  }}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -10, 10, -10, 0],
                    boxShadow: `0 10px 30px ${service.glowColor}`,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                
                <h3 className="mb-4 text-white relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${service.gradient.includes('indigo') && service.gradient.includes('purple') ? '#6366f1, #8b5cf6' : service.gradient.includes('blue') && service.gradient.includes('cyan') ? '#3b82f6, #06b6d4' : service.gradient.includes('purple') && service.gradient.includes('violet') ? '#8b5cf6, #7c3aed' : service.gradient.includes('sky') ? '#0ea5e9, #2563eb' : service.gradient.includes('teal') ? '#14b8a6, #06b6d4' : '#2563eb, #4f46e5'})`
                    }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed relative z-10">{service.description}</p>
                
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="text-sm text-gray-400 flex items-center gap-3 group/item"
                    >
                      <motion.div 
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            `0 0 0px ${service.glowColor}`,
                            `0 0 10px ${service.glowColor}`,
                            `0 0 0px ${service.glowColor}`,
                          ],
                        }}
                        transition={{ 
                          duration: 2,
                          delay: idx * 0.3,
                          repeat: Infinity,
                        }}
                      />
                      <span className="group-hover/item:text-gray-200 transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative corner elements */}
                <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gray-700 group-hover:border-${service.gradient.split(' ')[1].replace('to-', '')} rounded-tr-2xl opacity-30 group-hover:opacity-100 transition-all`} />
                <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gray-700 group-hover:border-${service.gradient.split(' ')[1].replace('to-', '')} rounded-bl-2xl opacity-30 group-hover:opacity-100 transition-all`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

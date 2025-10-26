import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@stavoraxlabs.com",
      link: "mailto:contact@stavoraxlabs.com",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (234) 567-890",
      link: "tel:+1234567890",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Innovation Drive, Tech Hub, CA 94000, United States",
      link: null,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 via-purple-950/10 to-black relative overflow-hidden">
      {/* Colorful background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p 
            className="mb-4 uppercase tracking-widest text-sm inline-flex items-center gap-2"
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
            <MessageCircle size={16} />
            Get in Touch
          </motion.p>
          <h2 className="mb-6 text-white max-w-3xl mx-auto">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to transform your digital vision into reality? Our team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info - Creative cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    x: 10, 
                    boxShadow: "0 10px 40px rgba(168, 85, 247, 0.3)" 
                  }}
                  className="group bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-gray-700/50 hover:border-transparent transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mb-4 relative z-10 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>
                  
                  <h3 className={`text-white mb-2 relative z-10 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent ${method.gradient}`}>
                    {method.title}
                  </h3>
                  
                  {method.link ? (
                    <a 
                      href={method.link} 
                      className="text-gray-400 hover:text-purple-400 transition-colors relative z-10 block"
                    >
                      {method.info}
                    </a>
                  ) : (
                    <p className="text-gray-400 relative z-10">{method.info}</p>
                  )}

                  {/* Decorative corner */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-gray-700/30 group-hover:border-purple-500/50 rounded-br-lg transition-all" />
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form - More creative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border-2 border-gray-700/50 overflow-hidden">
              <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-300 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Application Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="design">Product Strategy & Design</option>
                  <option value="data">Data & Analytics</option>
                  <option value="transformation">Digital Transformation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, and requirements..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative px-8 py-4 rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
                <div className="absolute inset-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:inset-0 transition-all duration-300" />
                <span className="relative z-10 text-white font-medium inline-flex items-center justify-center gap-2">
                  Send Message
                  <Send size={20} />
                </span>
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                We'll respond within 24 hours. Your information is kept confidential.
              </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
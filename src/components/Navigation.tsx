import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <Sparkles className="text-purple-400" size={20} />
            </motion.div>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              StavoraX Labs
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["services", "portfolio", "Live sites", "insights"].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                whileHover={{ scale: 1.05, color: "#a855f7" }}
                className="text-gray-300 hover:text-purple-400 transition-colors capitalize relative group"
              >
                {section.replace("-", " ")}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
              <div className="absolute inset-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:inset-0 transition-all duration-300" />
              <span className="relative z-10 text-white font-medium">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                Live Sites
              </button>
              <button
                onClick={() => scrollToSection("insights")}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                Insights
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full bg-cyan-500 text-black px-6 py-2.5 rounded-md hover:bg-cyan-400 transition-all mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
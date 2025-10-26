import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-cyan-400 mb-4 tracking-tight">StavoraX Labs</div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transforming complex business challenges into intuitive digital solutions. 
              We combine deep technical expertise with user-centric design to deliver 
              enterprise-grade products.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-gray-400 hover:text-cyan-400" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="text-gray-400 hover:text-cyan-400" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="text-gray-400 hover:text-cyan-400" size={18} />
              </a>
              <a
                href="mailto:contact@stavoraxlabs.com"
                className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="text-gray-400 hover:text-cyan-400" size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Product Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Data & Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} StavoraX Labs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
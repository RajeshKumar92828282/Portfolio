import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-purple-500/20 bg-[#0B0F19]/80 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4"
            >
              Rajesh Kumar Behera
            </motion.div>
            <p className="text-gray-400 text-sm mb-4">
              MERN Stack Developer passionate about building scalable web applications and exploring AI integration.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:rajesh@example.com"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: rb3302436@gmail.com</li>
              <li>Location: India</li>
              <li>Available for freelance work</li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Rajesh Kumar Behera. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> and React
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-sm"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

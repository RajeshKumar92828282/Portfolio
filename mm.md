import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { FaReact, FaNode, FaDatabase, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTypescript } from "react-icons/si";

export default function Hero() {
  const techIcons = [
    { Icon: FaReact, color: "#61DAFB", delay: 0 },
    { Icon: FaNode, color: "#339933", delay: 0.1 },
    { Icon: SiMongodb, color: "#47A248", delay: 0.2 },
    { Icon: SiExpress, color: "#FFFFFF", delay: 0.3 },
    { Icon: SiJavascript, color: "#F7DF1E", delay: 0.4 },
    { Icon: SiTypescript, color: "#3178C6", delay: 0.5 },
    { Icon: FaPython, color: "#3776AB", delay: 0.6 },
    { Icon: FaDatabase, color: "#00758F", delay: 0.7 },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Rajesh Kumar 
              </span>
            </motion.h1>

            <div className="h-20 flex items-center">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Cyber Security",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300"
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 max-w-xl"
            >
              BCA student passionate about building scalable web applications and exploring AI integration. Experienced in Cyber Security and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105"
              >
                View Projects
              </button>
              <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rb3302436@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
              ></motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-8 border-2 border-blue-500/30 rounded-full"
              ></motion.div>

              <div className="absolute inset-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 flex items-center justify-center overflow-hidden">
                <div className="text-8xl">👨‍💻</div>
              </div>

              {techIcons.map(({ Icon, color, delay }, index) => {
                const angle = (index * 360) / techIcons.length;
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay + 0.8, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 p-3 bg-white/5 backdrop-blur-xl rounded-lg border border-purple-500/30"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <Icon size={24} color={color} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

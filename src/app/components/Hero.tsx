import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
} from 'lucide-react';

import {
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

const techIcons = [
  { Icon: FaReact, color: '#61DAFB', delay: 0 },
  { Icon: FaNodeJs, color: '#68A063', delay: 0.2 },
  { Icon: SiExpress, color: '#ffffff', delay: 0.4 },
  { Icon: SiMongodb, color: '#47A248', delay: 0.6 },
];

const socialLinks = [
  {
    Icon: Github,
    link: "https://github.com/RajeshKumar92828282",
  },
  {
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/rajesh-kumar-b93391365",
  },
  {
    Icon: Mail,
    link: "rb3302436@gmail.com",
  },
];

export default function HeroSection() {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070B14] text-white flex items-center justify-center px-6 lg:px-20"
    >

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.2),transparent_30%)]"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center max-w-7xl w-full pt-24">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(168,85,247,0.2)]">

            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <span className="text-sm text-gray-300">
              Welcome to my futuristic portfolio
            </span>

          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Hi, I’m

            <span className="block bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Rajesh Kumar
            </span>

           

          </motion.h1>

          {/* Typing */}
          <div className="mt-8 h-20 flex items-center">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Backend Developer',
                2000,
                'Cyber Security Explorer',
                2000,
                'AI Enthusiast',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-4xl font-bold text-gray-200"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-gray-400 max-w-xl leading-8"
          >
            Passionate about building scalable backend systems,
            modern web applications, AI-powered solutions,
            and cyber security inspired digital experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 mt-10"
          >

            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
            >
              View Projects
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400 transition-all duration-300 flex items-center gap-2">


   
  
              <Download
              
               size={18} />
              Download Resume

            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-400 transition-all duration-300"
            >
              Contact Me
            </button>

          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-5 mt-10"
          >

            {socialLinks.map(({ Icon, link }, index) => (

              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-4
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  shadow-[0_0_30px_rgba(168,85,247,0.15)]
                  hover:border-purple-500
                "
              >
                <Icon size={22} />
              </motion.a>

            ))}

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >

          <div className="relative w-full aspect-square max-w-[620px] flex items-center justify-center">

            {/* Main Glow */}
            <div className="absolute w-[520px] h-[520px] bg-purple-600/30 blur-[140px] rounded-full animate-pulse"></div>

            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-full h-full rounded-full border border-purple-500/20"
            />

            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[82%] h-[82%] rounded-full border border-cyan-400/20"
            />

            {/* Inner Glow */}
            <div className="absolute w-[68%] h-[68%] rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-3xl border border-white/10 shadow-[0_0_120px_rgba(168,85,247,0.55)]"></div>

            {/* Image */}
            <motion.img
              src="/src/imports/d50650c9-e4da-4a02-95d6-adddcf17e0a5.png"
              alt="Rajesh Kumar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="
                relative
                z-10
                w-[52%]
                h-[72%]
                object-cover
                object-top
                rounded-full
                border border-purple-400/30
                shadow-[0_0_80px_rgba(168,85,247,0.7)]
              "
            />

            {/* Floating Icons */}
            {techIcons.map(({ Icon, color, delay }, index) => {

              const angle = (index * 360) / techIcons.length;

              const radius = 320;

              const x =
                Math.cos((angle * Math.PI) / 180) * radius;

              const y =
                Math.sin((angle * Math.PI) / 180) * radius;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: delay,
                    duration: 0.8,
                  }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >

                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: delay,
                    }}
                    className="
                      p-4
                      rounded-2xl
                      bg-white/5
                      backdrop-blur-xl
                      border border-white/10
                      shadow-[0_0_30px_rgba(168,85,247,0.3)]
                    "
                  >
                    <Icon size={30} color={color} />
                  </motion.div>

                </motion.div>

              );
            })}

          </div>

        </motion.div>

      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >

        <span className="text-sm">
          Scroll Down
        </span>

        <ChevronDown size={26} />

      </motion.div>

    </section>
  );
}
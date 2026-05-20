import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}

      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[#070B14]/80
        backdrop-blur-xl
        border-b
        border-white/10
      "
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}

            className="
              text-3xl
              font-black
              bg-gradient-to-r
              from-purple-400
              via-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
              cursor-pointer
            "
          >
            AIDEN
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            {navItems.map((item, index) => (

              <motion.button
                key={index}

                whileHover={{
                  scale: 1.05,
                }}

                onClick={() => scrollToSection(item)}

                className="
                  relative
                  text-gray-300
                  hover:text-white
                  transition-colors
                  duration-300
                  font-medium
                "
              >

                {item}

              </motion.button>

            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"

            onClick={() => setIsOpen(!isOpen)}
          >

            {isOpen ? <X size={30} /> : <Menu size={30} />}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            y: -20,
          }}

          className="
            md:hidden
            bg-[#070B14]/95
            backdrop-blur-2xl
            border-t
            border-white/10
          "
        >

          <div className="flex flex-col py-6 px-6 gap-5">

            {navItems.map((item, index) => (

              <button
                key={index}

                onClick={() => scrollToSection(item)}

                className="
                  text-left
                  text-lg
                  text-gray-300
                  hover:text-cyan-400
                  transition-colors
                  duration-300
                "
              >

                {item}

              </button>

            ))}

          </div>

        </motion.div>

      )}

    </motion.nav>
  );
}
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const projects = [
    {
      title: "NeuroVault Memory Network",

      description:
        "Production-ready decentralized AI memory storage platform built on Arbitrum Stylus WASM smart contracts with multi-chain deployment, IPFS storage, deterministic AI embeddings, and full-stack integration.",

      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

      tags: [
        "React",
        "TypeScript",
        "FastAPI",
        "Stylus WASM",
        "Arbitrum",
        "IPFS",
      ],

      github:
        "https://github.com/RajeshKumar92828282/neurovault",

      demo: "#",

      gradient:
        "from-violet-600 to-fuchsia-600",
    },

    {
      title: "Gamify222",

      description:
        "Smart education platform with gamification features, quizzes, progress tracking, and interactive learning modules.",

      image:
        "https://images.unsplash.com/photo-1673515334386-2b24073bb22f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
      ],

      github:
        "https://github.com/RajeshKumar92828282/gamify222",

      demo: "#",

      gradient:
        "from-blue-600 to-cyan-600",
    },

    {
      title: "GDG Hackathon Project",

      description:
        "Innovative solution developed during Google Developer Groups Hackathon focused on solving real-world problems using AI.",

      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

      tags: [
        "React",
        "Firebase",
        "AI",
        "Tailwind CSS",
      ],

      github:
        "https://github.com/RajeshKumar92828282/GDG_HACKATHON",

      demo:
        "https://gdg-hackathon-alpha.vercel.app/",

      gradient:
        "from-cyan-600 to-blue-600",
    },

    {
      title: "E-Commerce Platform",

      description:
        "Full-stack e-commerce web application with authentication, product management, shopping cart, and responsive UI.",

      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
      ],

      github:
        "https://github.com/RajeshKumar92828282/E-commerce",

      demo: "#",

      gradient:
        "from-pink-600 to-red-600",
    },

    {
      title: "Job Portal Backend",

      description:
        "Backend system for a job portal with authentication, job posting, filtering, and REST API integration.",

      image:
        "https://images.unsplash.com/photo-1653038417332-6db0ff9d4bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST API",
      ],

      github:
        "https://github.com/RajeshKumar92828282/job-portal-backend",

      demo: "#",

      gradient:
        "from-purple-600 to-pink-600",
    },

    {
      title: "DSA Practice",

      description:
        "Collection of Data Structures and Algorithms implementations with optimized problem-solving approaches.",

      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

      tags: [
        "C++",
        "Java",
        "DSA",
        "Algorithms",
      ],

      github:
        "https://github.com/RajeshKumar92828282/DSA-Practice",

      demo: "#",

      gradient:
        "from-green-600 to-emerald-600",
    },
  ];

  return (

    <section
      id="projects"
      ref={ref}

      className="
        relative
        pt-28
        pb-24
        md:pt-32
        md:pb-32
        z-10
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.4,
          }}

          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">

            Featured{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my best work and futuristic digital experiences
          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/10
                hover:border-cyan-400/50
                transition-all
                duration-300
                shadow-[0_0_40px_rgba(168,85,247,0.15)]
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden h-56">

                <img
                  src={project.image}
                  alt={project.title}

                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/20 to-transparent"></div>

              </div>

              {/* Content */}
              <div className="relative p-6">

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    mb-3
                    group-hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  {project.title}
                </h3>

                <p className="text-gray-200 leading-7 text-sm mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tags.map((tag, tagIndex) => (

                    <span
                      key={tagIndex}

                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-white/10
                        border
                        border-cyan-400/20
                        text-xs
                        text-white
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a
                    href={project.github}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-white/10
                      hover:bg-white/20
                      border
                      border-white/10
                      hover:border-cyan-400
                      text-white
                      transition-all
                      duration-300
                    "
                  >

                    <Github size={18} />

                    Code

                  </a>

                  <a
                    href={project.demo}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-purple-600
                      hover:scale-105
                      text-white
                      shadow-lg
                      shadow-purple-500/30
                      transition-all
                      duration-300
                    "
                  >

                    <ExternalLink size={18} />

                    Demo

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
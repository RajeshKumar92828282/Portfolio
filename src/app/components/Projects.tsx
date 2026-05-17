import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Gamify222",
      description: "Smart Education Platform with gamification features, interactive learning modules, and real-time progress tracking for enhanced student engagement.",
      image: "https://images.unsplash.com/photo-1673515334386-2b24073bb22f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Job Portal Backend",
      description: "Comprehensive job portal backend system with advanced search, filtering, application tracking, and real-time notifications for seamless recruitment.",
      image: "https://images.unsplash.com/photo-1653038417332-6db0ff9d4bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["Node.js", "Express", "MySQL", "REST API"],
      github: "#",
      demo: "#",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "GDG Hackathon Project",
      description: "Innovative solution developed during Google Developer Groups hackathon, focusing on solving real-world problems with modern tech stack.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "TypeScript", "Firebase", "Tailwind"],
      github: "#",
      demo: "#",
      gradient: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative overflow-hidden h-48">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent"></div>
              </div>

              <div className="relative p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-white/5 backdrop-blur-sm rounded-full border border-purple-500/20 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>

              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.gradient} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

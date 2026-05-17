import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "QSkill Virtual Internship Program",
      period: "2024 - Present",
      description: "Working on backend development, building RESTful APIs, and implementing real-time workflows using Node.js and Express. Gained hands-on experience in database design and server-side architecture.",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Real-time Systems"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="absolute left-5 top-2 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-[#0B0F19] shadow-lg shadow-purple-500/50"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-ping opacity-20"></div>
                </motion.div>

                <div className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg border border-purple-500/30">
                          <Briefcase className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs bg-white/5 backdrop-blur-sm rounded-full border border-purple-500/20 text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

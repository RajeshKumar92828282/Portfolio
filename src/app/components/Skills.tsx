import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

import {
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaShieldAlt,
  FaBug,
  FaRobot,
  FaBrain,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiHuggingface,
  SiTensorflow,
} from "react-icons/si";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });


const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB", level: 85 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85 },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 90 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNode, color: "#339933", level: 85 },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF", level: 80 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },
      { name: "REST APIs", icon: FaDatabase, color: "#00758F", level: 85 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85 },
      { name: "Python", icon: FaPython, color: "#3776AB", level: 75 },
      { name: "Java", icon: FaJava, color: "#007396", level: 70 },
      { name: "C++", icon: SiCplusplus, color: "#00599C", level: 70 },
    ],
  },
  {
    title: "Cyber Security",
    skills: [
      { name: "Cyber Security", icon: FaShieldAlt, color: "#00FFAA", level: 75 },
      { name: "Bug Hunting", icon: FaBug, color: "#FF4D4D", level: 70 },
      { name: "Git", icon: FaGitAlt, color: "#F05032", level: 80 },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF", level: 85 },
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "LLMs", icon: FaBrain, color: "#8B5CF6", level: 80 },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E", level: 75 },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", level: 70 },
      { name: "Prompt Engineering", icon: FaRobot, color: "#06B6D4", level: 80 },
    ],
  },
];
  return (
    <section id="skills" className="relative py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20"
            >
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                          <skill.icon size={20} color={skill.color} />
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

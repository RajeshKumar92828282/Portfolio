import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

 const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    issuer: "Oracle",
    date: "2025",
    icon: "☁️",
    gradient: "from-red-600 to-orange-600",
  },

  {
    title: "JPMorgan Chase Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    date: "2025",
    icon: "💼",
    gradient: "from-blue-600 to-cyan-600",
  },

  {
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "AWS & Forage",
    date: "2026",
    icon: "☁️",
    gradient: "from-orange-600 to-yellow-600",
  },

  {
    title: "TATA Cybersecurity Analyst Job Simulation",
    issuer: "TATA & Forage",
    date: "2026",
    icon: "🛡️",
    gradient: "from-blue-700 to-cyan-600",
  },

  {
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte & Forage",
    date: "2025",
    icon: "🔐",
    gradient: "from-green-600 to-emerald-600",
  },

  {
    title: "Back-End Development Virtual Internship",
    issuer: "QSkill & SR India",
    date: "2026",
    icon: "⚙️",
    gradient: "from-purple-600 to-pink-600",
  },

  {
    title: "Cyber Security Workshop",
    issuer: "Thetechunique Academy",
    date: "2024",
    icon: "🧠",
    gradient: "from-indigo-600 to-blue-600",
  },

  {
    title: "National Coding League 2024",
    issuer: "Scaler School of Technology",
    date: "2024",
    icon: "💻",
    gradient: "from-violet-600 to-fuchsia-600",
  },

  {
    title: "Google Developer Groups Hackathon Participant",
    issuer: "Google Developer Groups",
    date: "2025",
    icon: "🚀",
    gradient: "from-cyan-600 to-blue-600",
  },

  {
    title: "AI & Prompt Engineering",
    issuer: "DeepLearning.AI",
    date: "2025",
    icon: "🤖",
    gradient: "from-violet-600 to-fuchsia-600",
  },
];
  const achievements = [
    {
      title: "1st Position - Code Golf Competition 2025",
      description: "Secured first place in the prestigious Code Golf Competition, demonstrating exceptional problem-solving skills and code optimization.",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "National Coding League 2024 - Regional Qualifier",
      description: "Qualified for the national round by excelling in the regional competition, showcasing strong algorithmic thinking and coding expertise.",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="certifications" className="relative py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and milestones in my journey
          </p>
        </motion.div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <Award className="text-purple-400" />
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.gradient} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{cert.title}</h4>
                  <p className="text-purple-400 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <Award className="text-purple-400" />
            Achievements
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.gradient} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-white">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

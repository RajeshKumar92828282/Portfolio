import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Code, Database, Zap, Trophy } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { icon: Code, label: "Projects", value: 15, suffix: "+" },
    { icon: Database, label: "Technologies", value: 20, suffix: "+" },
    { icon: Zap, label: "Hackathons", value: 5, suffix: "+" },
    { icon: Trophy, label: "Achievements", value: 10, suffix: "+" },
  ];

  const features = [
  {
    title: "BCA Student",
    description:
      "Pursuing Bachelor of Computer Applications at Centurion University, building strong foundations in computer science and software development.",
    icon: "🎓",
  },
  {
    title: "Cyber Security & Bug Hunting",
    description:
      "Passionate about ethical hacking, vulnerability assessment, and bug hunting to improve the security of modern web applications.",
    icon: "🛡️",
  },
  {
    title: "MERN Stack Developer",
    description:
      "Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js with scalable backend systems and modern UI/UX.",
    icon: "💻",
  },
  {
    title: "AI Enthusiast",
    description:
      "Exploring AI tools, automation, and intelligent web solutions to create innovative digital experiences.",
    icon: "🤖",
  },
];


  return (
    <section id="about" className="relative py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <CounterCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ icon: Icon, label, value, suffix, delay, isInView }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay }}
      className="relative group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 text-center">
        <Icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
        <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {count}
          {suffix}
        </div>
        <div className="text-gray-400 text-sm">{label}</div>
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Send, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:rajesh@example.com",
      color: "from-red-500 to-orange-500",
      handle: "rajesh@example.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "from-gray-500 to-gray-700",
      handle: "@rajeshkumarbehera",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "from-blue-500 to-blue-700",
      handle: "Rajesh Kumar Behera",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-purple-400" />
                Connect With Me
              </h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these platforms.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} shadow-lg`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{link.name}</div>
                    <div className="text-sm text-gray-400">{link.handle}</div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <Send className="w-5 h-5 text-purple-400" />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-6 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-20"></div>
              <div className="relative">
                <p className="text-gray-300 italic">
                  "Looking for opportunities to contribute to innovative projects and grow as a developer. Let's create something impactful together!"
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 transition-colors text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 transition-colors text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 transition-colors text-white placeholder-gray-500 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

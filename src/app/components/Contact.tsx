
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

import {
  Mail,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // SUCCESS POPUP STATE
  const [successMessage, setSuccessMessage] = useState("");

  // FORM SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key: (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY,

            name: formData.name,

            email: formData.email,

            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        // SUCCESS MESSAGE
        setSuccessMessage("Message Sent Successfully 🚀");

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        // RESET FORM
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSuccessMessage("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);

      setSuccessMessage("Failed to send message ❌");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:rb3302436@gmail.com",
      color: "from-red-500 to-orange-500",
      handle: "cybers93992@gmail.com",
    },

    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/RajeshKumar92828282",
      color: "from-gray-500 to-gray-700",
      handle: "@RajeshKumar92828282",
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
    <section
      id="contact"
      className="relative py-20 md:py-32"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Let’s collaborate and build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-purple-400" />
                Connect With Me
              </h3>

              <p className="text-gray-400 mb-8">
                I’m always open to discussing projects,
                opportunities, and creative ideas.
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
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${link.color}`}
                  >
                    <link.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <div className="font-medium text-white">
                      {link.name}
                    </div>

                    <div className="text-sm text-gray-400">
                      {link.handle}
                    </div>
                  </div>

                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <Send className="w-5 h-5 text-purple-400" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.6 }}
            className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>

            {/* SUCCESS POPUP */}
            {successMessage && (
              <div className="mb-6 flex items-center justify-center gap-2 p-4 rounded-xl bg-green-500/20 border border-green-500/40 text-green-300 backdrop-blur-xl">
                <CheckCircle className="w-5 h-5" />

                <span>{successMessage}</span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white outline-none focus:border-purple-500/50"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white outline-none focus:border-purple-500/50"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white resize-none outline-none focus:border-purple-500/50"
              />

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>Send Message</span>

                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
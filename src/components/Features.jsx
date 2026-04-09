import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🤖",
    title: "AI Coding Built In",
    description: "Inline completions, Quick Edit, and a full AI agent panel. Powered by your Windy Fly agent or 10+ AI providers — including free options."
  },
  {
    icon: "💬",
    title: "Chat Without Leaving",
    description: "Windy Chat lives in your sidebar. Message your team, your AI agent, or anyone — encrypted and translated in real time. No window switching."
  },
  {
    icon: "📧",
    title: "Email Without Leaving",
    description: "Windy Mail in the sidebar. Read, compose, and manage email right where you code. Your AI agent can handle email on your behalf."
  },
  {
    icon: "🎤",
    title: "Voice Mode",
    description: "Press a shortcut and speak. Dictate code, give voice commands to your AI, or send voice messages. Stop typing through a straw."
  },
  {
    icon: "🌍",
    title: "199 Languages",
    description: "Translate comments, docs, and error messages instantly. Work with international teams without language barriers."
  },
  {
    icon: "🦋",
    title: "Agent-First Design",
    description: "Every action you can take, your Windy Fly agent can take. Give it instructions from your phone and it operates the editor for you."
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need. <span className="gradient-text">One Window.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Other editors give you code. Windy Code gives you code, communication, AI, voice, translation, and your personal agent — all under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-violet/10 rounded-2xl p-8 hover:border-windy-violet/30 transition-all duration-500 card-shimmer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

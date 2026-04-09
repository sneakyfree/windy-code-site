import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🤖",
    title: "AI Coding Built In",
    description: "Inline completions, Quick Edit, and a full AI agent panel. Choose from Gemini, Groq, DeepSeek, Mistral, Claude, GPT-4o, OpenRouter, Together, Grok, Ollama — or bring your own. Switch providers in one click."
  },
  {
    icon: "💬",
    title: "Chat Without Leaving",
    description: "Windy Chat lives in the Windy Sidebar — one tab away from your code. Message your team, your AI agent, or anyone — encrypted and translated in real time. No window switching, ever."
  },
  {
    icon: "📧",
    title: "Email Without Leaving",
    description: "Windy Mail is another tab in the same sidebar. Read, compose, and manage email right where you code. Your AI agent gets its own inbox on day one and handles correspondence on your behalf."
  },
  {
    icon: "🎤",
    title: "Voice Mode",
    description: "Press a shortcut and speak. Dictate code, give voice commands to your AI, or send voice messages to Chat. Stop typing through a straw — your voice is the fastest input you have."
  },
  {
    icon: "🌍",
    title: "199 Languages",
    description: "Translate comments, docs, and error messages instantly via 3,500+ specialized translation models. Work with international teams without language barriers — in the editor, in Chat, everywhere."
  },
  {
    icon: "🦋",
    title: "Agent-First Architecture",
    description: "Every button you click has a matching command your Windy Fly agent can call programmatically — open files, write code, run terminals, send messages, compose emails. Give it instructions from your phone and come back to a pull request."
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
            Other editors bolt on AI as a plugin. Windy Code has AI, Chat, Mail, Voice, Translation, and a personal AI agent built into the core — all accessible from one unified sidebar with five tabs.
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

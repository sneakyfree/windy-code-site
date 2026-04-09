import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "Is Windy Code free?",
    answer: "Yes. The full editor, AI coding via free-tier providers (Gemini, Groq, DeepSeek), Chat sidebar, Mail sidebar, voice-to-code, and 199-language translation are all free. No credit card, no trial timer. Upgrade to Pro only if you want premium AI models like Claude and GPT-4o."
  },
  {
    question: "What AI models does it support?",
    answer: "Windy Code supports 10+ AI providers out of the box. Free tier includes Gemini, Groq, and DeepSeek. Pro unlocks Claude, GPT-4o, and other premium models. You can switch providers at any time — no vendor lock-in."
  },
  {
    question: "Can I use it without signing up for anything?",
    answer: "The editor works as a standalone code editor without any account. But signing in with a free Windy account unlocks Chat, Mail, AI features, voice mode, and Cloud Sync — and your AI agent hatches automatically."
  },
  {
    question: "How is this different from other code editors?",
    answer: "Other editors bolt on AI as a plugin. Windy Code has AI, Chat, Mail, Voice, Translation, and a personal AI agent built into the core. One window replaces your editor, messaging app, email client, and AI chat tool. No other editor has an integrated ecosystem."
  },
  {
    question: "Can my AI agent really operate the editor?",
    answer: "Yes. Every action you can take in Windy Code — opening files, writing code, running terminal commands, sending chat messages, composing emails — your Windy Fly agent can do programmatically. You can give it instructions from your phone via Windy Chat and it operates the IDE for you."
  },
  {
    question: "Does it work on Mac, Windows, and Linux?",
    answer: "Yes. Windy Code is a full desktop application available for macOS, Windows, and Linux. Your settings, keybindings, and workspaces sync across all your devices via Windy Cloud."
  },
  {
    question: "What about extensions?",
    answer: "Windy Code supports thousands of extensions through the Open VSX marketplace. Your favorite themes, language support, and tools are available. The Windy ecosystem features (Chat, Mail, Fly, Voice) are built in — they're not extensions, they're core."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-windy-violet/10 rounded-xl overflow-hidden hover:border-windy-violet/20 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-windy-dark/40 hover:bg-windy-dark/60 transition-colors duration-200"
      >
        <span className="font-semibold text-white pr-4">{faq.question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-windy-violet flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 bg-windy-dark/40">
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Windy Code.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

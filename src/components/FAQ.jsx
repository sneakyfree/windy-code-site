import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "Is Windy Code free?",
    answer: "Yes. The full editor, AI coding via free-tier providers (Gemini, Groq, DeepSeek), the Windy Sidebar with Chat, Mail, Voice, and Cloud tabs, voice-to-code, and 199-language translation are all free. No credit card, no trial timer. Upgrade to Pro only when you want premium AI models like Claude and GPT-4o."
  },
  {
    question: "What AI models does it support?",
    answer: "Windy Code has a built-in provider registry supporting Gemini, Groq, DeepSeek, Mistral, OpenAI (GPT-4o), Anthropic (Claude), OpenRouter, Together, Grok, Ollama, and custom endpoints. Free tier auto-configures Gemini with zero API keys. You can switch providers with one click in settings — no vendor lock-in, ever."
  },
  {
    question: "Can I use it without signing up for anything?",
    answer: "Absolutely. The editor works as a full standalone code editor with no account required. When services aren't connected, the Windy Sidebar shows a friendly \"Connect to Windy\" prompt instead of breaking. Signing in with a free Windy account unlocks Chat, Mail, AI, Voice, and Cloud Sync — and your AI agent hatches automatically."
  },
  {
    question: "How is this different from other code editors?",
    answer: "Other editors bolt on AI as a plugin. Windy Code has AI, Chat, Mail, Voice, Translation, and a personal AI agent built into the core — accessible from one unified sidebar with five tabs. One window replaces your editor, messaging app, email client, and AI chat tool. Plus, Windy Code syncs with the latest upstream improvements every month, so you never fall behind on language support or security patches."
  },
  {
    question: "Can my AI agent really operate the editor?",
    answer: "Yes. Windy Code has a production-ready Agent Bus with commands spanning 12 namespaces — editor, terminal, git, AI, chat, mail, voice, cloud, and more. Every button you click has a matching command your Windy Fly agent can call programmatically. Agents authenticate with verified Eternitas passports — no CAPTCHAs, just cryptographic trust. Give it instructions from your phone via Windy Chat and come back to a pull request."
  },
  {
    question: "Does it work on Mac, Windows, and Linux?",
    answer: "Yes. Windy Code is a full desktop application available for macOS, Windows, and Linux. Your settings, keybindings, extensions, and workspaces sync across all your devices via Windy Cloud."
  },
  {
    question: "What about extensions?",
    answer: "Windy Code supports thousands of extensions through the Open VSX marketplace (Eclipse Foundation). Your favorite themes, language support, and developer tools are available. The Windy ecosystem features — Chat, Mail, Fly, Voice, Cloud — are built into the core, not extensions. They're first-class citizens, not afterthoughts."
  },
  {
    question: "Will Windy Code fall behind on updates?",
    answer: "No. Windy Code is architecturally designed for longevity. All ecosystem code lives in isolated directories, and only 8 core files were modified — every change documented and reversible. The codebase merges the latest upstream improvements monthly. You get the newest language support, security patches, and performance upgrades automatically."
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

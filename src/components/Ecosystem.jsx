import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const flywheelSteps = [
  {
    brand: "Windy Word",
    icon: "🎤",
    verb: "You speak.",
    hook: "Voice-to-text intelligence. Record a meeting, dictate a note, or speak your code into existence. Your voice becomes data — searchable, permanent, powerful.",
    desire: "Every midnight breakthrough captured. Every standup transcribed. Your voice, your data.",
    link: "https://windyword.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "Windy Clone",
    icon: "🧬",
    verb: "You become.",
    hook: "Your digital twin. Voice clone, visual avatar, personality soul file. One button — and suddenly there are two of you working on the project.",
    desire: "Your clone handles the demo while you keep coding.",
    link: "https://windyclone.com",
    color: "from-purple-500 to-pink-500",
    ring: "ring-purple-500/30"
  },
  {
    brand: "Windy Chat",
    icon: "💬",
    verb: "You connect.",
    hook: "Encrypted multilingual messaging. Talk to your team, your clients, anyone on Earth — in your own voice, in any language, translated in real time.",
    desire: "Imagine pair programming with a developer in Tokyo. In Japanese. In your voice.",
    link: "https://windychat.com",
    color: "from-green-500 to-teal-500",
    ring: "ring-green-500/30"
  },
  {
    brand: "Windy Traveler",
    icon: "✈️",
    verb: "You explore.",
    hook: "Your AI travel companion with 3,500+ specialized translation models. Offline language packs, local guides, and instant translations — even without internet.",
    desire: "Land anywhere. Understand everything. Translate comments and docs in 199 languages.",
    link: "https://windytraveler.com",
    color: "from-amber-500 to-orange-500",
    ring: "ring-amber-500/30"
  },
  {
    brand: "Windy Translate",
    icon: "🔧",
    verb: "The engine.",
    hook: "3,500+ purpose-built translation models. Not general-purpose — laser-focused specialists for every language pair. The invisible force powering every Windy product.",
    desire: "Enterprise-grade translation. The Intel Inside of language AI.",
    link: "https://windytranslate.com",
    color: "from-indigo-500 to-blue-500",
    ring: "ring-indigo-500/30"
  },
  {
    brand: "Windy Mail",
    icon: "📧",
    verb: "You communicate.",
    hook: "Email built for humans and AI agents. Your Windy Fly agent gets its own inbox on day one. Send, receive, and manage — your agent handles the rest.",
    desire: "Client emails, code review notifications, deploys — all handled without leaving Windy Code.",
    link: "https://windymail.ai",
    color: "from-red-500 to-rose-500",
    ring: "ring-red-500/30"
  },
  {
    brand: "Windy Fly",
    icon: "🦋",
    verb: "You automate.",
    hook: "Your personal AI agent. Born connected to Chat, Mail, Code, and Cloud. Give it a task and walk away. It codes, chats, emails, and deploys on your behalf.",
    desire: "Tell it to fix the bug from your phone. Come back to a pull request waiting for review.",
    link: "https://windyfly.ai",
    color: "from-sky-500 to-blue-500",
    ring: "ring-sky-500/30"
  },
  {
    brand: "Windy Cloud",
    icon: "☁️",
    verb: "You store.",
    hook: "Settings, workspaces, models, voice data, extensions — synced across every device. The backbone of the entire Windy ecosystem.",
    desire: "Open Windy Code on any machine. Everything is already there.",
    link: "https://windycloud.com",
    color: "from-blue-400 to-cyan-500",
    ring: "ring-blue-400/30"
  },
  {
    brand: "Eternitas",
    icon: "🛡️",
    verb: "You trust.",
    hook: "Verified identity for AI agents. The passport system that proves your agent is yours. No CAPTCHAs — just trust, built into the foundation.",
    desire: "Your agent is a citizen, not a guest. Verified, trusted, authorized.",
    link: "https://eternitas.ai",
    color: "from-gray-400 to-white",
    ring: "ring-gray-400/30"
  }
];

function FlywheelCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-windy-dark/40 backdrop-blur-sm border border-windy-violet/10 rounded-2xl p-8 hover:border-windy-violet/30 transition-all duration-500 card-shimmer ring-1 ${step.ring}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500`} />

      <div className="relative flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex items-start gap-4">
          <div className="text-5xl md:text-6xl font-black text-white/[0.06] leading-none">{String(index + 1).padStart(2, '0')}</div>
          <div className="text-5xl">{step.icon}</div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">{step.verb}</h3>
            <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.brand}</span>
          </div>
          <p className="text-gray-300 mb-3 leading-relaxed">{step.hook}</p>
          <p className="text-gray-500 text-sm italic mb-4">"{step.desire}"</p>

          <a
            href={step.link}
            className="inline-flex items-center text-sm text-windy-violet/70 hover:text-windy-violet transition-colors group/link"
          >
            Explore {step.brand}
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {index < flywheelSteps.length - 1 && (
        <div className="hidden md:flex justify-center mt-6 -mb-2">
          <motion.svg
            className="w-6 h-6 text-windy-violet/30"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      )}
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Editor. <span className="gradient-text">Nine Superpowers Built In.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Windy Code isn't just an editor — it's the cockpit for the entire Windy ecosystem.
            Every product below is accessible from <span className="text-white font-medium">one window, one account, one click</span>.
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {flywheelSteps.map((step, index) => (
            <FlywheelCard key={index} step={step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-windy-violet/10 via-windy-dark/50 to-windy-indigo/10 border-2 border-windy-violet/30 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-windy-violet/5 to-transparent rounded-3xl" />

          <div className="relative">
            <div className="text-6xl mb-4">💻</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              And It All Converges Here.
              <br />
              <span className="gradient-text">In Windy Code.</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Chat with your team. Email a client. Ask your AI to refactor. Dictate code with your voice.
              Translate documentation into 199 languages. Sync everything to the cloud.
              <span className="text-white font-semibold"> All without leaving the editor.</span>
            </p>
            <p className="text-windy-violet/60 text-sm italic">
              "Other editors have plugins. Windy Code has an ecosystem."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

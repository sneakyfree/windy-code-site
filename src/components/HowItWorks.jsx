import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Download and Open",
    description: "Grab Windy Code for Mac, Windows, or Linux. It's free — no credit card, no trial timer. Open it up and you're home.",
    icon: "📥"
  },
  {
    number: "02",
    title: "Sign In Once",
    description: "One Windy account unlocks everything — Chat, Mail, AI, Voice, Cloud Sync. Your AI agent hatches automatically the moment you sign in.",
    icon: "🔑"
  },
  {
    number: "03",
    title: "Start Building",
    description: "Write code with AI completions. Chat with your team in the sidebar. Send an email without leaving. Speak a command and watch it happen.",
    icon: "🚀"
  },
  {
    number: "04",
    title: "Let Your Agent Take Over",
    description: "Give Windy Fly instructions from anywhere — even your phone. It reads your messages, writes code, sends emails, and operates the editor on your behalf.",
    icon: "🦋"
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Up and Running in <span className="gradient-text">Under a Minute</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No config files. No API keys. No setup wizards. Just download, sign in, and go.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex items-start gap-6 bg-windy-dark/40 backdrop-blur-sm border border-windy-violet/10 rounded-2xl p-8 hover:border-windy-violet/30 transition-all duration-500 card-shimmer"
            >
              <div className="flex-shrink-0 flex items-center gap-3">
                <span className="text-4xl font-black text-windy-violet/20">{step.number}</span>
                <span className="text-3xl">{step.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

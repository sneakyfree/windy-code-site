import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start coding with AI. No credit card required.",
    features: [
      "Full-featured code editor",
      "AI via Gemini, Groq, and DeepSeek",
      "Inline completions and Quick Edit",
      "Windy Chat sidebar",
      "Windy Mail sidebar",
      "Voice-to-code (Windy Word)",
      "199-language translation",
      "Windy Fly agent (basic)",
      "Cloud sync (5 GB)"
    ],
    cta: "Download Free",
    popular: false
  },
  {
    name: "Windy Code Pro",
    price: "$20",
    period: "/month",
    description: "Premium AI models and unlimited agent operations for serious builders.",
    features: [
      "Everything in Free, plus:",
      "Claude, GPT-4o, and premium models",
      "Priority AI completions",
      "Unlimited Windy Fly operations",
      "Advanced agent memory",
      "Voice command priority",
      "Cloud sync (100 GB)",
      "Priority support"
    ],
    cta: "Start Pro",
    popular: true
  },
  {
    name: "Windy Code Teams",
    price: "$30",
    period: "/user/month",
    description: "Shared workspaces, team chat, and fleet management for your organization.",
    features: [
      "Everything in Pro, plus:",
      "Shared team workspaces",
      "Team Chat channels",
      "Admin controls and analytics",
      "Fleet management (device policies)",
      "SSO and team provisioning",
      "Cloud sync (unlimited)",
      "Dedicated support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Free to Start. <span className="gradient-text">Powerful When You're Ready.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            No trial timers. No feature gates on the editor itself. Upgrade when you want premium AI models and unlimited agent power.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-windy-dark/40 backdrop-blur-sm border rounded-2xl p-8 flex flex-col ${
                tier.popular
                  ? 'border-windy-violet/40 popular-ring'
                  : 'border-windy-violet/10 hover:border-windy-violet/30'
              } transition-all duration-500`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-windy-violet to-windy-indigo rounded-full text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-windy-violet mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                className={`block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-windy-violet to-windy-indigo text-white cta-glow hover:shadow-lg hover:shadow-windy-violet/30'
                    : 'border-2 border-windy-violet/30 text-windy-violet hover:bg-windy-violet/10 hover:border-windy-violet'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tier.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

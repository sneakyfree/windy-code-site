import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    icon: "🔄",
    title: "Monthly Upstream Sync",
    description: "Windy Code merges the latest upstream improvements every month. You get the newest language support, security patches, and performance upgrades — automatically. This isn't a dead fork. It's a living product.",
    stat: "Monthly",
    statLabel: "Sync Cycle"
  },
  {
    icon: "🎯",
    title: "Surgical Integration",
    description: "The entire Windy ecosystem runs from isolated directories. Only 8 core files were touched to wire everything in — and every change is documented, reversible, and designed for zero merge conflicts.",
    stat: "8",
    statLabel: "Files Modified"
  },
  {
    icon: "🔌",
    title: "Works Without the Cloud",
    description: "No internet? No Windy account? The editor works perfectly as a standalone code editor. Ecosystem features show a friendly \"Connect to Windy\" prompt instead of breaking. Everything degrades gracefully.",
    stat: "100%",
    statLabel: "Offline Capable"
  },
  {
    icon: "🔓",
    title: "No Vendor Lock-In",
    description: "Switch AI providers in one click. Export your settings anytime. Your extensions work everywhere. We built Windy Code to earn your loyalty, not trap you. The provider registry is open and extensible.",
    stat: "10+",
    statLabel: "AI Providers"
  }
];

export default function BuiltToLast() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built to Last. <span className="gradient-text">Built to Stay Current.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Windy Code is engineered for longevity. We sync with the latest upstream improvements monthly, keep our modifications surgical, and never lock you in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-violet/10 rounded-2xl p-8 hover:border-windy-violet/30 transition-all duration-500 card-shimmer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{pillar.icon}</div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-windy-violet stat-glow">{pillar.stat}</div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider">{pillar.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

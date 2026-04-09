import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Switching. <span className="gradient-text">Start Building.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            One editor. AI coding, team chat, email, voice commands, and your personal agent — all in one window.
            Download Windy Code and see what happens when your IDE comes alive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              href="#pricing"
              className="px-10 py-4 bg-gradient-to-r from-windy-violet to-windy-indigo text-white rounded-lg font-semibold text-lg cta-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Free — Mac, Windows, Linux
            </motion.a>
          </div>

          <p className="text-gray-600 text-sm">
            Free forever. No credit card. No trial timer. Just open it and go.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

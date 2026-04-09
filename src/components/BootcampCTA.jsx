import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BootcampCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-windy-violet/10 via-windy-dark/50 to-windy-indigo/10 border-2 border-windy-violet/30 rounded-3xl p-10 md:p-14 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-windy-violet/5 to-transparent rounded-3xl" />

          <div className="relative">
            <div className="text-6xl mb-6">🎓</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Coded Before?
              <br />
              <span className="gradient-text">That's the Point.</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
              Open Windy Code. Sign in. Your AI agent just hatched. It has chat, email, and can code for you.
            </p>
            <p className="text-xl text-white font-semibold mb-8">
              Let's build your first app.
            </p>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
              Speak your ideas out loud. Your AI writes the code. Ask questions in plain English.
              Your agent deploys it when you're ready. Coding has never been this human.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#pricing"
                className="px-8 py-4 bg-gradient-to-r from-windy-violet to-windy-indigo text-white rounded-lg font-semibold text-lg cta-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Windy Code — It's Free
              </motion.a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✓ No coding experience needed</span>
              <span>✓ Voice commands built in</span>
              <span>✓ AI agent does the heavy lifting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

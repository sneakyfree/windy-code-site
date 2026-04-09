import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "I'd never written a line of code in my life. I opened Windy Code, said 'build me a personal website,' and my AI agent started coding. I spoke corrections out loud instead of typing. My site was live in twenty minutes. I cried.",
    name: "Maria Chen",
    role: "Bootcamp Student",
    avatar: "🎓"
  },
  {
    quote: "I used to have VS Code, Slack, Superhuman, and ChatGPT open simultaneously. Now I have one window. Chat on the right, code in the center, email in a tab. My AI agent handles pull request reviews while I focus on architecture. I can't go back.",
    name: "James Okafor",
    role: "Senior Software Engineer",
    avatar: "👨‍💻"
  },
  {
    quote: "My Windy Fly agent reads client emails, drafts responses, and starts code reviews before I even open my laptop. I gave it access to my inbox and my repos. It handles the busywork so I can focus on building. Best $20/month I've ever spent.",
    name: "Sophie Laurent",
    role: "Freelance Developer",
    avatar: "💼"
  }
];

export default function Testimonials() {
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
            Builders Who <span className="gradient-text">Made the Switch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From first-time coders to senior engineers — Windy Code meets you where you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-windy-dark/40 backdrop-blur-sm border border-windy-violet/10 rounded-2xl p-8 hover:border-windy-violet/30 transition-all duration-500 card-shimmer flex flex-col"
            >
              <div className="flex-1">
                <svg className="w-8 h-8 text-windy-violet/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-windy-violet/10">
                <div className="w-10 h-10 rounded-full bg-windy-violet/10 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

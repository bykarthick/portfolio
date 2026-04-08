import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Modern Web Learning',
    description: 'A responsive React curated learning website built with Tailwind and Vite. Offers curated learning paths built from the best free content on the internet. Step-by-step sessions, embedded video guides, and progress tracking — all in your browser.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    github: 'https://karthickragavr.github.io/BrainWave/',
  },
  {
    title: 'PlayMangatha',
    description: 'PlayMangatha is a premium, casino-style web application built on a modern stack (MERN-like + Supabase). It features a robust collection of classic casino games, real-time multiplayer functionality, and a seamless user experience powered by React and Tailwind CSS. The platform supports user authentication, persistent wallets, betting history, and social features.',
    tags: ['Node.js', 'Socket.io', 'React', 'Express'],
    github: 'https://casino.playmangatha.com',
  },
  {
    title: 'Personal Finance Service (Coming Soon)',
    description: 'Microservice-based high-throughput application, implements user authentication, transaction categorization, and account aggregation endpoints — directly mirroring the back-end patterns used in fintech consolidation platforms like Wealthsimple.',
    tags: ['Ruby on Rails', 'Supabase', 'REST APIs','React'],
    github: 'https://github.com/karthickragavr',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-white mb-12 text-center"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col h-full relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="p-3 glass rounded-xl bg-primary-light/50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-blue">
                    <path d="M22 19V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 15L12 2L22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 15L12 8L22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-purple transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 relative z-10 font-heading">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow relative z-10 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

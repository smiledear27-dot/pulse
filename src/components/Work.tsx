import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

type Project = {
  client: string;
  category: string;
  result: string;
  metric: string;
  gradient: string;
};

const projects: Project[] = [
  {
    client: 'Nova Commerce',
    category: 'SEO + CRO',
    result: 'Organic revenue',
    metric: '+312%',
    gradient: 'from-primary/25 to-primary/0',
  },
  {
    client: 'Vertex SaaS',
    category: 'Paid Acquisition',
    result: 'Qualified pipeline',
    metric: '+184%',
    gradient: 'from-secondary/25 to-secondary/0',
  },
  {
    client: 'Orbit Finance',
    category: 'Brand + Content',
    result: 'Inbound leads',
    metric: '+267%',
    gradient: 'from-primary/25 to-secondary/0',
  },
  {
    client: 'Helix Health',
    category: 'Full Funnel',
    result: 'CAC reduction',
    metric: '−41%',
    gradient: 'from-secondary/25 to-primary/0',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-base py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Selected <span className="text-gradient">work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-gray-400"
          >
            A snapshot of campaigns we've engineered across commerce, SaaS, and finance.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-colors hover:border-white/20"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl`}
              />
              <div className="relative flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                    <TrendingUp className="h-3.5 w-3.5 text-primary" />
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    {p.client}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{p.result}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="relative mt-6 font-display text-4xl font-bold tracking-tight">
                <span className="text-gradient">{p.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

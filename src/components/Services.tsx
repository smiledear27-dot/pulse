import { motion } from 'framer-motion';
import { Briefcase, LineChart, ShieldCheck } from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Strategic Advisory',
    description:
      'C-suite-level guidance on market positioning, M&A strategy, and long-term value creation — grounded in rigorous analysis.',
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Capital Structuring',
    description:
      'Optimize your capital stack with debt, equity, and alternative financing strategies tailored to your growth trajectory.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Operational Excellence',
    description:
      'Streamline operations, tighten governance, and embed resilience so your organization scales without friction.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            What we do
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Services engineered for <span className="text-gold-500">impact</span>
          </h2>
          <p className="mt-4 text-navy-500">
            A focused portfolio of advisory and execution capabilities, each delivered with
            the precision your enterprise demands.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-canvas p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover"
            >
              {/* gold top border accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient transition-all duration-300" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-gradient text-gold-400 transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-navy-900">
                {s.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-navy-900">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-500">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

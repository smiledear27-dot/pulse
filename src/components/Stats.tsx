import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

const stats: Stat[] = [
  { label: 'Projects Delivered', value: 847, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
  { label: 'Global Clients', value: 320, suffix: '+' },
];

function useCountUp(target: number, run: boolean, duration = 1700) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return Math.round(val).toString();
}

function StatCard({ stat, index, run }: { stat: Stat; index: number; run: boolean }) {
  const display = useCountUp(stat.value, run);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={run ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-card transition-shadow duration-300 hover:shadow-cardHover sm:p-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-12 bg-gold-500 transition-all duration-300 group-hover:w-24" />
      <div className="font-serif text-5xl font-bold tracking-tight text-navy-900 sm:text-6xl">
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div className="mt-3 text-sm font-medium uppercase tracking-widest text-navy-400">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            By the numbers
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            A track record of <span className="text-gold-500">excellence</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} run={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

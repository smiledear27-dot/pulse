import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const stats: Stat[] = [
  { label: 'Projects Delivered', value: 847, suffix: '+' },
  { label: 'Happy Clients', value: 320, suffix: '+' },
  { label: 'Revenue Generated', value: 50, prefix: '$', suffix: 'M+' },
];

function useCountUp(target: number, run: boolean, duration = 1800, decimals = 0) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo for a satisfying settle
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return decimals === 0 ? Math.round(val).toString() : val.toFixed(decimals);
}

function StatCard({ stat, index, run }: { stat: Stat; index: number; run: boolean }) {
  const display = useCountUp(stat.value, run, 1800, stat.decimals ?? 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={run ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-2xl glass p-8 text-center sm:p-10"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        <span className="text-gradient">
          {stat.prefix}
          {display}
          {stat.suffix}
        </span>
      </div>
      <div className="mt-3 text-sm font-medium uppercase tracking-widest text-gray-400">
        {stat.label}
      </div>
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="relative bg-base py-20 sm:py-28">
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={ inView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Numbers that <span className="text-gradient">speak louder</span> than promises
          </h2>
          <p className="mt-4 text-gray-400">
            Real outcomes for real brands — measured, not promised.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} run={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const rotatingWords = ['Premium', 'Elite', 'Exclusive'];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)' }}
    >
      {/* subtle decorative accents */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-gold-100 blur-[120px] opacity-60" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-crimson-50 blur-[120px] opacity-60" />

      {/* faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            A premier corporate consultancy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-7 font-serif text-4xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-6xl lg:text-7xl"
          >
            We deliver{' '}
            <span className="relative inline-block align-bottom">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={rotatingWords[idx]}
                  initial={{ y: '0.5em', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: '-0.5em', opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-gold-500"
                >
                  {rotatingWords[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            corporate solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-navy-500"
          >
            Strategic advisory, capital structuring, and operational excellence for
            organizations that refuse to settle for ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-7 py-4 text-sm font-semibold text-navy-900 shadow-gold transition-all duration-200 hover:scale-[1.04] hover:shadow-lift"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-7 py-4 text-sm font-semibold text-navy-900 transition-all duration-200 hover:border-gold-400 hover:bg-gold-50"
            >
              <Phone className="h-4 w-4 text-gold-600" />
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
    </section>
  );
}

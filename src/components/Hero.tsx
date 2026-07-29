import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import ParticleField from './ParticleField';
import Cube3D from './Cube3D';
import BrandLogos from './BrandLogos';

const rotatingWords = ['Convert', 'Rank', 'Sell'];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-base">
      {/* layered backgrounds */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />
      <ParticleField />
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-gray-300"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Digital marketing, engineered for growth
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              We help brands{' '}
              <span className="relative inline-block align-bottom">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={rotatingWords[idx]}
                    initial={{ y: '0.6em', opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: '-0.6em', opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-gradient"
                    style={{ transformOrigin: 'bottom' }}
                  >
                    {rotatingWords[idx]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400"
            >
              Pulse is a full-funnel marketing agency blending data, design, and
              relentless testing to turn attention into revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-base shadow-[0_8px_30px_-8px_rgba(0,240,255,0.5)] transition-transform hover:scale-[1.04]"
              >
                View Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-primary" />
                Book a Call
              </a>
            </motion.div>
          </div>

          {/* Right: 3D cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="animate-float">
              <Cube3D />
            </div>
          </motion.div>
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20"
        >
          <p className="mb-5 text-center text-sm font-medium uppercase tracking-widest text-gray-500">
            Trusted by 50+ brands
          </p>
          <BrandLogos className="opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}

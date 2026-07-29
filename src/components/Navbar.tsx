import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Stats', href: '#stats' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled
            ? 'mt-3 rounded-2xl glass py-3 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
            : 'mt-0 py-5'
        }`}
      >
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_-4px_rgba(0,240,255,0.6)]">
            <Zap className="h-5 w-5 text-base" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Pulse
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-base transition-transform hover:scale-[1.03]"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass-strong md:hidden"
          >
            <nav className="flex flex-col p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-center text-base font-semibold text-base"
              >
                Book a Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

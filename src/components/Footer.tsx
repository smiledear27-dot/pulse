import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-base py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Zap className="h-4 w-4 text-base" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold text-white">Pulse</span>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pulse Agency. Engineered for growth.
          </p>

          <div className="flex items-center gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

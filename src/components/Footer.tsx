import { Crown, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-canvas py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-gradient">
              <Crown className="h-4 w-4 text-gold-400" strokeWidth={2} />
            </span>
            <span className="font-serif text-lg font-bold text-navy-900">Meridian</span>
          </div>

          <p className="text-sm text-navy-400">
            © {new Date().getFullYear()} Meridian Advisory. Excellence, by design.
          </p>

          <div className="flex items-center gap-3">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-100 text-navy-400 transition-colors hover:border-gold-400 hover:text-gold-600"
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

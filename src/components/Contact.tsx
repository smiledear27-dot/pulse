import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import MessageList from './MessageList';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Get in touch
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Let's begin the <span className="text-gold-500">conversation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-500">
            Share your goals and we'll prepare a tailored perspective before our first call.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactForm />

            <div className="grid gap-3 sm:grid-cols-3">
              <InfoTile icon={<Mail className="h-4 w-4" />} label="Email" value="partners@meridian.co" />
              <InfoTile icon={<MapPin className="h-4 w-4" />} label="Based in" value="New York · London" />
              <InfoTile icon={<Clock className="h-4 w-4" />} label="Reply time" value="< 1 business day" />
            </div>
          </div>

          <MessageList />
        </div>
      </div>
    </section>
  );
}

function InfoTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-canvas px-4 py-3">
      <div className="flex items-center gap-2 text-gold-600">{icon}</div>
      <div className="mt-2 text-xs uppercase tracking-wider text-navy-400">{label}</div>
      <div className="text-sm font-medium text-navy-900">{value}</div>
    </div>
  );
}

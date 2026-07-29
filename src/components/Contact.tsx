import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import MessageList from './MessageList';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-base py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's <span className="text-gradient">build</span> something that scales
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Whether you're scaling paid or starting from zero, we'd love to hear your plan.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactForm />

            <div className="grid gap-3 sm:grid-cols-3">
              <InfoTile icon={<Mail className="h-4 w-4" />} label="Email" value="hello@pulse.agency" />
              <InfoTile icon={<MapPin className="h-4 w-4" />} label="Based in" value="Remote / NYC" />
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
    <div className="rounded-xl glass px-4 py-3">
      <div className="flex items-center gap-2 text-primary">{icon}</div>
      <div className="mt-2 text-xs uppercase tracking-wider text-gray-500">{label}</div>
      <div className="text-sm font-medium text-white">{value}</div>
    </div>
  );
}

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase
      .from('contacts')
      .insert({ name, email, message });

    if (error) {
      setStatus('error');
      setErrorMsg(error.message || 'Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setName('');
    setEmail('');
    setMessage('');
    // notify sibling list to refresh
    window.dispatchEvent(new CustomEvent('contacts:updated'));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl glass p-6 sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold text-white">Start a conversation</h3>
      <p className="mt-2 text-sm text-gray-400">
        Tell us about your goals — we'll reply within one business day.
      </p>

      <div className="mt-6 space-y-5">
        <Field label="Name">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={inputCls}
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            className={inputCls}
          />
        </Field>

        <Field label="Message">
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What are you trying to grow?"
            rows={4}
            className={`${inputCls} resize-none`}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-base transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
        >
          <CheckCircle2 className="h-4 w-4" />
          Thanks! Your message has been received.
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center gap-2 rounded-xl border border-secondary/40 bg-secondary/10 px-4 py-3 text-sm text-secondary"
        >
          <AlertCircle className="h-4 w-4" />
          {errorMsg}
        </motion.div>
      )}
    </motion.form>
  );
}

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-400">
        {label}
      </span>
      {children}
    </label>
  );
}

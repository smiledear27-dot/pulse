import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Inbox, Loader2, RefreshCw } from 'lucide-react';
import { supabase, type Contact } from '@/lib/supabase';

export default function MessageList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('contacts')
      .select('id, name, email, message, created_at')
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      setError(error.message);
    } else {
      setContacts(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
    const onUpdate = () => fetchContacts();
    window.addEventListener('contacts:updated', onUpdate);
    return () => window.removeEventListener('contacts:updated', onUpdate);
  }, []);

  return (
    <div className="rounded-2xl border border-navy-100 bg-canvas p-6 shadow-card sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-navy-900">Inquiries received</h3>
          <p className="mt-2 text-sm text-navy-500">
            Submissions stored in your database, newest first.
          </p>
        </div>
        <button
          onClick={fetchContacts}
          className="inline-flex items-center gap-2 rounded-lg border border-navy-100 px-3 py-2 text-xs font-medium text-navy-500 transition-colors hover:bg-white hover:text-navy-900"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Refresh
        </button>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-12 text-navy-400">
            <Loader2 className="h-5 w-5 animate-spin" />
            Loading messages…
          </div>
        ) : error ? (
          <div className="rounded-lg border border-crimson-200 bg-crimson-50 px-4 py-3 text-sm text-crimson-700">
            Couldn't load messages: {error}
          </div>
        ) : contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-12 text-navy-300">
            <Inbox className="h-8 w-8" />
            <p className="text-sm text-navy-400">No inquiries yet. Be the first to reach out.</p>
          </div>
        ) : (
          <ul className="space-y-3">
            <AnimatePresence initial={false}>
              {contacts.map((c) => (
                <motion.li
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-navy-100 bg-white p-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-semibold text-navy-900">{c.name}</span>
                    <span className="text-xs text-navy-400">
                      {new Date(c.created_at).toLocaleString()}
                    </span>
                  </div>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-sm text-gold-600 hover:text-gold-700"
                  >
                    {c.email}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{c.message}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </div>
  );
}

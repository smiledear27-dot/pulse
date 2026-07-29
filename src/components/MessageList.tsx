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
    <div className="rounded-2xl glass p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-white">Latest messages</h3>
          <p className="mt-2 text-sm text-gray-400">
            Submissions stored in your database, newest first.
          </p>
        </div>
        <button
          onClick={fetchContacts}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-white/5"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Refresh
        </button>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-12 text-gray-400">
            <Loader2 className="h-5 w-5 animate-spin" />
            Loading messages…
          </div>
        ) : error ? (
          <div className="rounded-xl border border-secondary/40 bg-secondary/10 px-4 py-3 text-sm text-secondary">
            Couldn't load messages: {error}
          </div>
        ) : contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-12 text-gray-500">
            <Inbox className="h-8 w-8" />
            <p className="text-sm">No messages yet. Be the first to reach out.</p>
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
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-semibold text-white">{c.name}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(c.created_at).toLocaleString()}
                    </span>
                  </div>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-sm text-primary/90 hover:text-primary"
                  >
                    {c.email}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">{c.message}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </div>
  );
}

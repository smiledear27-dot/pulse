import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Meridian restructured our capital and sharpened our strategy in a single quarter. The clarity they brought was worth ten times the engagement fee — we've never operated with this much precision.",
    name: 'James Whitford',
    role: 'CEO, Atlas Industrial',
    photo:
      'https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    quote:
      "Their advisory team didn't hand us a slide deck and leave. They sat beside our leadership through every hard decision. The result: a 40% margin improvement and a board that finally trusts the plan.",
    name: 'Elena Marchetti',
    role: 'CFO, Veridian Group',
    photo:
      'https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Client voices
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Trusted by leaders who <span className="text-gold-500">expect more</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-cardHover sm:p-10"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-gold-100" />

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>

              <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-navy-700">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-gold-200"
                />
                <div>
                  <div className="font-semibold text-navy-900">{t.name}</div>
                  <div className="text-sm text-navy-400">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

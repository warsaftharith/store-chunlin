import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLang } from '../../context/LangContext';
import { testimonials } from '../../data/testimonials';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

export function Testimonials() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionTitle
            label={t.testimonials.label}
            title={t.testimonials.title}
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <Card>
                <Quote className="mb-5 text-honey" size={28} />

                <p className="text-sm leading-7 text-muted">
                  “{item.text}”
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-ink">{item.name}</h3>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
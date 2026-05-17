import { PackageCheck, BadgeDollarSign, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLang } from '../../context/LangContext';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

export function About() {
  const { t } = useLang();
  const icons = [PackageCheck, BadgeDollarSign, Zap];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
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
            label={t.about.label}
            title={t.about.title}
            description={t.about.description}
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.about.highlights.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item.title}
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
                  <Icon className="mb-5 text-leaf" size={30} />
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
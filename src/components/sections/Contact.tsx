import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLang } from '../../context/LangContext';
import { storeInfo, whatsappUrl } from '../../data/content';
import { Button } from '../ui/Button';

export function Contact() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="section-padding bg-cream overflow-hidden"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-[2rem] border border-line bg-white p-8 text-center shadow-sm md:p-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex rounded-full border border-line bg-[#faf7f2] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-leaf"
          >
            {t.contact.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            {t.contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-4 max-w-2xl leading-7 text-muted"
          >
            {t.contact.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
              <Button href={whatsappUrl} target="_blank" rel="noreferrer" className="gap-2">
                <MessageCircle size={18} /> {t.contact.cta}
              </Button>
            </motion.div>

            <span className="text-sm font-semibold text-muted">{storeInfo.phone}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
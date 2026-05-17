import { motion } from 'framer-motion';
import comingSoonGif from '../../assets/coming-soon.gif';

import { useLang } from '../../context/LangContext';
import { SectionTitle } from '../ui/SectionTitle';

export function Documentation() {
  const { t, lang } = useLang();

  const content = {
    id: {
      title: 'Segera Hadir',
      description:
        'Dokumentasi warung sedang dipersiapkan dan akan segera tersedia dengan tampilan yang lebih lengkap dan menarik.',
      badge: 'Pantau terus',
    },

    en: {
      title: 'Coming Soon',
      description:
        'Store documentation is being prepared and will be available soon with a more complete and attractive appearance.',
      badge: 'Stay tuned',
    },
  };

  const current = content[lang];

  return (
    <section
      id="documentation"
      className="section-padding bg-white overflow-hidden"
    >
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
            label={t.docs.label}
            title={t.docs.title}
            description={t.docs.description}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-cream px-8 py-16 shadow-sm">
            <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-leaf/10 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-wheat/30 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="mb-6 overflow-hidden rounded-3xl  "
              >
                <img
                  src={comingSoonGif}
                  alt="Coming Soon"
                  className="h-24 w-24 object-cover"
                />
              </motion.div>

              <h3 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {current.title}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {current.description}
              </p>

              <div className="mt-8 rounded-full border border-line bg-white px-5 py-2 text-sm font-semibold text-leaf shadow-sm">
                {current.badge}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
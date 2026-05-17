import { motion } from 'framer-motion';

import { useLang } from '../../context/LangContext';
import { SectionTitle } from '../ui/SectionTitle';

import storeFront from '../../assets/store-front.svg';
import products from '../../assets/products.svg';
import doc1 from '../../assets/documentation-1.svg';
import doc2 from '../../assets/documentation-2.svg';
import doc3 from '../../assets/documentation-3.svg';

const photos = [storeFront, products, doc1, doc2, doc3, products];

export function Documentation() {
  const { t } = useLang();

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
            >
              <img
                src={photo}
                alt={`Dokumentasi toko ${index + 1}`}
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
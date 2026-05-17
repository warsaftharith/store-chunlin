import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLang } from '../../context/LangContext';
import { whatsappUrl } from '../../data/content';

import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

import berasImg from '../../assets/product/product-sukun.png';
import minyakImg from '../../assets/product/product-minyak.png';
import gulaImg from '../../assets/product/product-kripik-pisang.png';

export function Promo() {
  const { t, lang } = useLang();

  const promoImages = [berasImg, minyakImg, gulaImg];

  return (
    <section id="promo" className="section-padding bg-cream overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          <SectionTitle
            label={t.promo.label}
            title={t.promo.title}
            description={t.promo.description}
          />
        </motion.div>

        <div className="mb-6 flex items-center justify-end">
          <Link
            to="/products"
            className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-100"
          >
            {t.promo.viewAll}
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.promo.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: 'easeOut',
              }}
              className="relative overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-cream px-3 py-1 text-[11px] font-bold text-leaf">
                <Sparkles size={13} />
                Promo
              </div>

              <div className="flex h-48 items-center justify-center rounded-2xl bg-cream">
                <img
                  src={promoImages[index]}
                  alt={item.name}
                  className="h-36 w-full object-contain"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold text-ink">
                  {item.name}
                </h3>

                <div className="mt-3 flex items-end gap-2">
                  <p className="text-2xl font-bold text-ink">
                    {item.price}
                  </p>

                  <p className="pb-1 text-sm text-muted line-through">
                    {item.oldPrice}
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {lang === 'id'
                    ? 'Stok terbatas, cocok untuk kebutuhan harian rumah.'
                    : 'Limited stock, perfect for daily household needs.'}
                </p>

                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  className="mt-5 w-full gap-2"
                >
                  <MessageCircle size={16} />
                  {lang === 'id' ? 'Tanya Promo' : 'Ask Promo'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
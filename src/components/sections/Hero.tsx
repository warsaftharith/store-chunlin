import { CheckCircle2, MessageCircle, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import { storeInfo, whatsappUrl } from '../../data/content';
import { Button } from '../ui/Button';
import storeFront from '../../assets/store.jpeg';

import berasImg from '../../assets/promo/promo-sukun.png';

export function Hero() {
  const { t } = useLang();
  const infos = [t.hero.open, t.hero.topup, t.hero.price];

  return (
    <section id="home" className="section-padding overflow-hidden">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-leaf shadow-sm"
          >
            {t.hero.badge}
          </motion.span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="gap-2"
            >
              <MessageCircle size={18} />
              {t.hero.primaryCta}
            </Button>

            <Button href="#products" variant="ghost">
              {t.hero.secondaryCta}
            </Button>

            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-2xl border border-line bg-white px-5 py-3 text-sm font-semibold text-leaf shadow-sm transition hover:bg-wheat/40"
            >
              {t.products.viewAll}
            </Link>

            
          </div>

          <motion.a
            href="#promo"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{
              x: [0, -5, 5, -5, 5, 0],
            }}
            transition={{
              x: {
                duration: 0.35,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'linear',
              },
            }}
            className="relative mt-5 flex max-w-md items-center gap-4 rounded-3xl border border-line bg-white p-3 shadow-sm hover:shadow-md"
          >
            <div className="absolute -right-2 -top-2 flex items-center gap-1 rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg">
              <Flame size={12} className="fill-white" />
              {t.hero.promoCard.badge}
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cream">
              <img
                src={berasImg}
                alt={t.hero.promoCard.alt}
                className="h-12 w-12 object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-bold text-ink">
                {t.hero.promoCard.title}
              </h3>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-muted line-through">
                  {t.hero.promoCard.oldPrice}
                </span>

                <span className="text-sm font-bold text-red-500">
                  {t.hero.promoCard.price}
                </span>
              </div>

              <p className="mt-1 text-[11px] text-muted">
                {t.hero.promoCard.note}
              </p>
            </div>
          </motion.a>

          <p className="mt-1 inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-[11px] font-semibold text-red-500">
            {t.hero.promoCard.promoHint}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {infos.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  delay: 0.2 + index * 0.08,
                  ease: 'easeOut',
                }}
                className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-muted shadow-sm"
              >
                <CheckCircle2 className="text-leaf" size={18} />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-wheat/45 blur-2xl" />

          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-md"
          >
            <img
              src={storeFront}
              alt={storeInfo.name}
              className="aspect-[16/9] w-full rounded-[1.5rem] object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
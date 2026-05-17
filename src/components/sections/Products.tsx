import { motion } from 'framer-motion';

import { useLang } from '../../context/LangContext';
import { SectionTitle } from '../ui/SectionTitle';

import berasIcon from '../../assets/icons/beras.svg';
import minyakIcon from '../../assets/icons/minyak.svg';
import gulaIcon from '../../assets/icons/gula.svg';
import telurIcon from '../../assets/icons/telur.svg';
import mieIcon from '../../assets/icons/mie.svg';
import bumbuIcon from '../../assets/icons/bumbu.svg';
import snackIcon from '../../assets/icons/snack.svg';
import rokokIcon from '../../assets/icons/rokok.svg';
import walletIcon from '../../assets/icons/wallet.svg';


export function Products() {
  const { t } = useLang();

  const icons = [
    berasIcon,
    minyakIcon,
    gulaIcon,
    telurIcon,
    mieIcon,
    bumbuIcon,
    snackIcon,
    walletIcon,
    rokokIcon,
  ];

  return (
    <section id="products" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          label={t.products.label}
          title={t.products.title}
          description={t.products.description}
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {t.products.items.map((item, index) => {
            const direction = index % 4 < 2 ? -60 : 60;
            const icon = icons[index] || berasIcon;

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="
                  rounded-2xl
                  border
                  border-line
                  bg-cream
                  p-5
                  will-change-transform
                  hover:border-leaf/30
                  hover:bg-wheat/30
                "
              >
                <motion.div
                  initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
                  whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <img
                    src={icon}
                    alt={item}
                    className="mb-4 h-[28px] w-[28px] object-contain"
                    loading="lazy"
                  />
                </motion.div>

                <h3 className="font-semibold text-ink">{item}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
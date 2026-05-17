import { ShoppingBasket, Smartphone, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLang } from '../../context/LangContext';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

import danaIcon from '../../assets/payment/dana.svg';
import shopepayIcon from '../../assets/payment/shopeepay.svg';
import ovoIcon from '../../assets/payment/ovo.svg';
import gopayIcon from '../../assets/payment/gopay.svg';

import mieIcon from '../../assets/icons/mie.svg';
import snackIcon from '../../assets/icons/snack.svg';
import berasIcon from '../../assets/icons/beras.svg';
import minyakIcon from '../../assets/icons/minyak.svg';

export function Services() {
  const { t } = useLang();
  const icons = [ShoppingBasket, Smartphone, Lightbulb];

  const paymentIcons = [danaIcon, shopepayIcon, ovoIcon, gopayIcon];

  const sembakoIcons = [
    mieIcon,
    snackIcon,
    berasIcon,
    minyakIcon,
  ];

  return (
    <section id="services" className="section-padding overflow-hidden">
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
            label={t.services.label}
            title={t.services.title}
            description={t.services.description}
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item}
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
                <Card className="h-full transition hover:shadow-md">
                  <Icon className="mb-5 text-honey" size={30} />

                  <h3 className="font-bold leading-6 text-ink">
                    {item}
                  </h3>

                  {index === 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {sembakoIcons.map((icon) => (
                        <div
                          key={icon}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white shadow-sm"
                        >
                          <img
                            src={icon}
                            alt="Sembako icon"
                            className="h-6 w-6 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {index === 1 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {paymentIcons.map((icon) => (
                        <div
                          key={icon}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white shadow-sm"
                        >
                          <img
                            src={icon}
                            alt="Payment icon"
                            className="h-6 w-6 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
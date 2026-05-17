import { Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLang } from '../../context/LangContext';
import { storeInfo } from '../../data/content';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

export function Location() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-white overflow-hidden">
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
            label={t.location.label}
            title={t.location.title}
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="soft-card p-6"
          >
            <div className="space-y-5">
              <p className="flex gap-3 text-muted">
                <MapPin className="shrink-0 text-leaf" />
                <span>
                  <b className="block text-ink">{t.location.address}</b>
                  {storeInfo.street}
                </span>
              </p>

              <p className="flex gap-3 text-muted">
                <Clock className="shrink-0 text-leaf" />
                <span>
                  <b className="block text-ink">{t.location.hours}</b>
                  {t.location.openHours}
                </span>
              </p>

              <p className="flex gap-3 text-muted">
                <Phone className="shrink-0 text-leaf" />
                <span>
                  <b className="block text-ink">{t.location.contact}</b>
                  {storeInfo.phone}
                </span>
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                href={storeInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 w-full"
              >
                {t.location.maps}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
          >
            <iframe
              title="Google Maps"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                storeInfo.street
              )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="h-[360px] w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
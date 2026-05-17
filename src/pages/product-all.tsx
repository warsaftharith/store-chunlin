import { useEffect, useMemo, useState } from 'react';
import { ProductAllSkeleton } from '../components/ui/ProductAllSkeleton';
import { ArrowLeft, Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { Layout } from '../components/layout/Layout';
import { useLang } from '../context/LangContext';

import { whatsappUrl } from '../data/content';
import { productAllContent } from '../data/product-all';

import berasImg from '../assets/product/product-beras.png';
import minyakImg from '../assets/product/product-minyak.png';
import gulaImg from '../assets/product/product-gula.png';
import telurImg from '../assets/product/product-telur.png';
import mieImg from '../assets/product/product-mie.png';
import bumbuImg from '../assets/product/product-bumbu.png';
import snackImg from '../assets/product/product-snack.png';
import walletImg from '../assets/product/product-wallet.png';
import rokokImg from '../assets/product/product-sukun.png';
import kripikImg from '../assets/product/product-kripik-pisang.png'; 

export default function ProductAll() {
  const { lang } = useLang();

  const content = productAllContent[lang];

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  const productImages = [
    berasImg,
    minyakImg,
    gulaImg,
    telurImg,
    mieImg,
    bumbuImg,
    snackImg,
    walletImg,
    rokokImg,
    kripikImg,
  ];

  const filteredProducts = useMemo(() => {
    return content.items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [content.items, search]);

  if (loading) {
    return (
      <Layout>
        <ProductAllSkeleton />
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="min-h-screen overflow-hidden bg-cream py-10 sm:py-12">
        <div className="container-custom">
          <Link
            to="/#products"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-leaf shadow-sm transition hover:bg-wheat/40"
          >
            <ArrowLeft size={18} />
            Kembali
          </Link>
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
            }}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-leaf shadow-sm">
              {content.label}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {content.heading}
            </h1>

            <p className="mt-4 text-base leading-7 text-muted">
              {content.cardDescription}
            </p>
          </motion.div>

          {/* SEARCH */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.08,
            }}
            className="mt-6"
          >
            <div className="relative max-w-xl">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                type="text"
                placeholder={content.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-14 w-full rounded-2xl border border-line bg-white pl-12 pr-4 text-sm text-ink shadow-sm outline-none transition focus:border-leaf"
              />
            </div>
          </motion.div>

          {/* PRODUCT GRID */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                className="overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex h-48 items-center justify-center rounded-2xl bg-cream">
                  <img
                    src={productImages[index] || berasImg}
                    alt={item}
                    className="h-36 w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-bold text-ink">
                    {item}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {content.cardDescription}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-leaf px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <MessageCircle size={16} />
                    {content.detailButton}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* EMPTY */}
          {filteredProducts.length === 0 && (
            <div className="mt-14 rounded-3xl border border-dashed border-line bg-white p-10 text-center">
              <h3 className="text-lg font-bold text-ink">
                {content.emptyTitle}
              </h3>

              <p className="mt-2 text-sm text-muted">
                {content.emptyDescription}
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
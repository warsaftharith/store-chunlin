import { useEffect, useState } from 'react';

import { Layout } from './components/layout/Layout';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Products } from './components/sections/Products';
import { Promo } from './components/sections/Promo';
import { Documentation } from './components/sections/Documentation';
import { Testimonials } from './components/sections/Testimonials';
import { Location } from './components/sections/Location';
import { Contact } from './components/sections/Contact';

import { HeroSkeleton } from './components/ui/PageSkeleton';

import logo from './assets/logo.svg';
import storeFront from './assets/store.png';
import promoSukun from './assets/promo/promo-sukun.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [logo, storeFront, promoSukun];

    const preloadImages = images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();

        img.src = src;

        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    });

    Promise.all(preloadImages).then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  if (loading) {
    return <HeroSkeleton />;
  }

  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Products />
      <Promo />
      <Documentation />
      <Testimonials />
      <Location />
      <Contact />
    </Layout>
  );
}

export default App;
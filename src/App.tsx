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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  if (loading) {
    return (
      <Layout>
        <HeroSkeleton />
      </Layout>
    );
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
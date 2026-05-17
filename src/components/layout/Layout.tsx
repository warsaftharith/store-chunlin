import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }: { children: ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main>{children}</main>

      <Footer />

      {/* BACK TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-leaf text-white shadow-lg"
            aria-label="Back to top"
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

import { useLang, type Lang } from '../../context/LangContext';
import { storeInfo, whatsappUrl } from '../../data/content';
import { Button } from '../ui/Button';

import logo from '../../assets/logo.svg';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const navItems = [
    { label: t.nav.home, href: '/#home' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.products, href: '/#products' },
    { label: t.promo.label, href: '/#promo' },
    { label: t.nav.gallery, href: '/#documentation' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-md">
      <nav className="container-custom flex h-20 items-center justify-between">
        <a href="/#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt={storeInfo.name}
            className="h-11 w-11 rounded-2xl object-cover"
          />

          <div className="leading-tight">
            <p className="text-sm font-bold text-leaf">{storeInfo.name}</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-leaf"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-2xl border border-line bg-white p-1">
            {(['id', 'en'] as Lang[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLang(item)}
                className={`rounded-xl px-3 py-2 text-xs font-bold uppercase transition ${
                  lang === item
                    ? 'bg-leaf text-white'
                    : 'text-muted hover:text-leaf'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="gap-2"
          >
            <MessageCircle size={16} />
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-2xl border border-line bg-white p-3 text-leaf transition hover:bg-wheat/40 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <div
        className={`block overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open ? 'max-h-[650px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
  <div className="container-custom pb-5">
    <div className="soft-card grid gap-2 p-3">
      {navItems.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          style={{ transitionDelay: open ? `${index * 45}ms` : '0ms' }}
          className={`rounded-xl px-4 py-3 text-sm font-medium text-muted transition-all duration-300 hover:bg-cream hover:text-leaf ${
            open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}
        >
          {item.label}
        </a>
      ))}

      <div
        style={{ transitionDelay: open ? `${navItems.length * 45}ms` : '0ms' }}
        className={`flex gap-2 px-2 py-2 transition-all duration-300 ${
          open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
        }`}
      >
        {(['id', 'en'] as Lang[]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLang(item)}
            className={`flex-1 rounded-xl py-2 text-sm font-bold transition ${
              lang === item
                ? 'bg-leaf text-white'
                : 'bg-cream text-muted hover:text-leaf'
            }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      <div
        style={{
          transitionDelay: open ? `${(navItems.length + 1) * 45}ms` : '0ms',
        }}
        className={`transition-all duration-300 ${
          open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
        }`}
      >
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full gap-2"
        >
          <MessageCircle size={16} />
          WhatsApp
        </Button>
      </div>
    </div>
  </div>
</div>
    </header>
  );
}
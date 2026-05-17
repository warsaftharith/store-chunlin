import {Menu,X,MessageCircle,Search,ArrowLeft,} from 'lucide-react';
import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang, type Lang } from '../../context/LangContext';
import { storeInfo, whatsappUrl } from '../../data/content';
import { Button } from '../ui/Button';
import logo from '../../assets/logo.svg';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('searchHistory') || '[]');
  });

  const navigate = useNavigate();
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

  const productSuggestions = [
    'beras',
    'minyak',
    'gula',
    'telur',
    'mie',
    'bumbu',
    'snack',
    'rokok',
    'top up',
    'dana',
    'gopay',
    'ovo',
    'shopeepay',
  ];

  const filteredSuggestions = useMemo(() => {
    const keyword = searchValue.trim().toLowerCase();

    if (!keyword) return searchHistory;

    return productSuggestions
      .filter((item) => item.toLowerCase().includes(keyword))
      .slice(0, 5);
  }, [searchValue, searchHistory]);

  const goToSearch = (keyword: string) => {
    const finalKeyword = keyword.trim();
    if (!finalKeyword) return;

    const newHistory = [
      finalKeyword,
      ...searchHistory.filter(
        (item) => item.toLowerCase() !== finalKeyword.toLowerCase(),
      ),
    ].slice(0, 5);

    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));

    setSearchOpen(false);
    setOpen(false);
    setSearchValue('');

    navigate(`/products?q=${encodeURIComponent(finalKeyword)}`);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goToSearch(searchValue);
  };

  const removeHistoryItem = (keyword: string) => {
  const updatedHistory = searchHistory.filter(
      (item) => item !== keyword,
    );

    setSearchHistory(updatedHistory);

    localStorage.setItem(
      'searchHistory',
      JSON.stringify(updatedHistory),
    );
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchValue('');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-md">
      <nav className="container-custom relative flex h-20 items-center justify-between">
        {searchOpen && (
          <div className="absolute inset-x-0 top-0 z-20 bg-cream/95 backdrop-blur-md">
            <form
              onSubmit={handleSearchSubmit}
              className="flex h-20 items-center gap-2 px-4 sm:px-0"
            >
              <button
                type="button"
                onClick={closeSearch}
                className="rounded-xl border border-line bg-white p-2.5 text-leaf transition hover:bg-wheat/40"
                aria-label="Close search"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Cari produk..."
                  autoFocus
                  className="h-10 w-full rounded-xl border border-line bg-white px-3 pr-10 text-[16px] text-ink shadow-sm outline-none transition focus:border-leaf lg:text-sm"
                />

                {searchValue && (
                  <button
                    type="button"
                    onClick={() => setSearchValue('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-leaf"
                    aria-label="Clear search"
                  >
                    <X size={17} />
                  </button>
                )}

                {(searchValue.trim() || filteredSuggestions.length > 0) && (
                  <div className="absolute left-0 right-0 top-12 overflow-hidden rounded-2xl border border-line bg-white shadow-xl">
                    {!searchValue && (
                      <p className="px-4 pt-3 text-xs font-bold uppercase tracking-wide text-muted">
                        Terakhir dicari
                      </p>
                    )}

                    <div className="p-2">
                      {searchValue.trim() && (
                        <button
                          type="button"
                          onClick={() => goToSearch(searchValue)}
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-ink transition hover:bg-cream hover:text-leaf"
                        >
                          <Search size={16} />
                          <span>
                            Cari <b>{searchValue}</b>
                          </span>
                        </button>
                      )}

                      {filteredSuggestions.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-xl px-2 py-1 transition hover:bg-cream"
                        >
                          <button
                            type="button"
                            onClick={() => goToSearch(item)}
                            className="flex flex-1 items-center gap-3 rounded-xl px-2 py-2 text-left text-sm text-muted transition hover:text-leaf"
                          >
                            <Search size={16} />
                            <span>{item}</span>
                          </button>

                          {!searchValue && (
                            <button
                              type="button"
                              onClick={() => removeHistoryItem(item)}
                              className="rounded-lg p-1.5 text-muted transition hover:bg-white hover:text-red-500"
                              aria-label="Remove history"
                            >
                              <X size={15} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="rounded-xl bg-leaf p-2.5 text-white transition hover:opacity-90"
                aria-label="Search product"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}

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
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="rounded-xl border border-line bg-white p-2.5 text-leaf transition hover:bg-wheat/40"
            aria-label="Open search"
          >
            <Search size={18} />
          </button>

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

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => {
              setSearchOpen(true);
              setOpen(false);
            }}
            className="rounded-2xl border border-line bg-white p-3 text-leaf transition hover:bg-wheat/40"
            aria-label="Open search"
          >
            <Search size={20} />
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setSearchOpen(false);
            }}
            className="rounded-2xl border border-line bg-white p-3 text-leaf transition hover:bg-wheat/40"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
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
                  open
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div
              style={{
                transitionDelay: open ? `${navItems.length * 45}ms` : '0ms',
              }}
              className={`flex gap-2 px-2 py-2 transition-all duration-300 ${
                open
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-4 opacity-0'
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
                transitionDelay: open
                  ? `${(navItems.length + 1) * 45}ms`
                  : '0ms',
              }}
              className={`transition-all duration-300 ${
                open
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-4 opacity-0'
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
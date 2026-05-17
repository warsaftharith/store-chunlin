import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { content } from '../data/content';

export type Lang = 'id' | 'en';

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof content.id;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');
  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used inside LangProvider');
  return context;
}

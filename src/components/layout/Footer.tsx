import { storeInfo } from '../../data/content';
import { useLang } from '../../context/LangContext';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-custom grid gap-6 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><h3 className="font-bold text-leaf">{storeInfo.name}</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted">{t.footer.description}</p></div>
        <div><p className="font-semibold text-ink">Alamat</p><p className="mt-3 text-sm text-muted">{storeInfo.street}</p></div>
        <div><p className="font-semibold text-ink">Kontak</p><p className="mt-3 text-sm text-muted">{storeInfo.phone}</p></div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">© {new Date().getFullYear()} {storeInfo.name}. All rights reserved.</div>
    </footer>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTiktok, FaYoutube, FaTelegram, FaWhatsapp, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { siteConfig as config } from './config';

const Arrow = () => <span aria-hidden="true">&#8599;</span>;
const languages = [['am', 'አማርኛ'], ['en', 'English'], ['om', 'Afaan Oromoo'], ['ti', 'ትግርኛ']];
const languageFlags = { am: '🇪🇹', en: '🇬🇧', om: '🇪🇹', ti: '🇪🇷' };

const socialLinks = [
  { label: 'Telegram', url: config.telegramUrl, icon: FaTelegram },
  { label: 'Instagram', url: config.socials.Instagram, icon: FaInstagram },
  { label: 'TikTok', url: config.socials.TikTok, icon: FaTiktok },
  { label: 'YouTube', url: config.socials.YouTube, icon: FaYoutube },
  { label: 'WhatsApp', url: config.whatsappUrl, icon: FaWhatsapp },
  { label: 'Facebook', url: config.socials.Facebook || '#', icon: FaFacebookF },
  { label: 'X', url: config.socials.X || '#', icon: FaXTwitter },
].filter(link => link.url && link.url !== '#');

function Logo() { const { t } = useTranslation(); return <a className="logo" href="#home" aria-label={t('brand.home')}><span>{config.agencyShortName}</span><b>{t('brand.name')}</b></a>; }
function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const currentLabel = languages.find(([code]) => code === i18n.language)?.[1] ?? 'English';

  return <div className={`language-switcher ${open ? 'is-open' : ''}`} ref={dropdownRef}>
    <button type="button" className="language-switcher__trigger" onClick={() => setOpen(prev => !prev)} aria-label={t('actions.language')} aria-expanded={open} aria-haspopup="listbox">
      <span className="language-switcher__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="8.5"></circle>
          <path d="M3.7 12h16.6M12 3.5c2.9 2.5 4.5 5.4 4.5 8.5S14.9 17.9 12 20.5C9.1 17.9 7.5 15 7.5 12S9.1 6 12 3.5Z"></path>
        </svg>
      </span>
      <span className="language-switcher__label">{currentLabel}</span>
      <span className="language-switcher__caret" aria-hidden="true">▾</span>
    </button>

    <div className="language-switcher__panel" role="listbox" aria-label={t('actions.language')}>
      {languages.map(([code, label]) => {
        const selected = i18n.language === code;
        return <button
          type="button"
          key={code}
          className={`language-switcher__option ${selected ? 'is-selected' : ''}`}
          role="option"
          aria-selected={selected}
          onClick={() => {
            i18n.changeLanguage(code);
            setOpen(false);
          }}
        >
          <span className="language-switcher__option-main">
            <span className="language-switcher__flag" aria-hidden="true">{languageFlags[code] || '🌍'}</span>
            <span>{label}</span>
          </span>
          {selected && <span className="language-switcher__check" aria-hidden="true">✓</span>}
        </button>;
      })}
    </div>
  </div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return <header className="navbar"><div className="nav-inner"><Logo /><nav className={`nav-menu ${open ? 'is-open' : ''}`}><a href="#home" onClick={() => setOpen(false)}>{t('nav.home')}</a><a href="#process" onClick={() => setOpen(false)}>{t('nav.process')}</a><a href="#creators" onClick={() => setOpen(false)}>{t('nav.creators')}</a><LanguageSwitcher /></nav><button className={`menu-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label={t('actions.toggleNavigation')} aria-expanded={open}><i></i><i></i><i></i></button></div></header>;
}

function Hero() { const { t } = useTranslation(); return <section className="hero section" id="home"><div className="hero-copy reveal"><p className="eyebrow"><span className="eyebrow-dot"></span> {t('brand.agency')}</p><h1>{t('hero.title', { name: t('brand.name') })}</h1><p className="hero-lede">{t('hero.lede')}</p><div className="hero-actions"><LanguageSwitcher /></div><div className="hero-proof"><div className="hero-social-links" aria-label={t('hero.social')}>
            {socialLinks.map(({ label, url, icon: Icon }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} title={label} className={`social-link social-link--${label.toLowerCase()}`}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div><span><strong>{t('hero.join')}</strong><small>{t('hero.money')}</small></span></div></div><div className="hero-visual reveal"><div className="visual-ring"></div><div className="hero-image image-a"><img src={config.heroImage.src} alt={t('hero.alt')} /></div><div className="float-card live-card"><span className="live-dot"></span><div><b>{t('hero.agentId')}</b><small>000000000</small></div></div><div className="float-card support-card"><span className="float-icon">✦</span><div><b>{t('hero.agent')}</b><small>000000000</small></div></div><span className="visual-label">{t('hero.visual')}</span></div></section>; }

function Process() { const { t } = useTranslation(); const steps = t('process.steps', { returnObjects: true }); return <section className="section process" id="process"><div className="section-heading split-heading"><div><p className="eyebrow">{t('process.eyebrow')}</p><h2>{t('process.title')}</h2></div><p>{t('process.description')}</p></div><div className="steps">{steps.map((step, index) => <article className="step" key={step.title}><div className="step-top"><span>{String(index + 1).padStart(2, '0')}</span>{index < steps.length - 1 && <i></i>}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>; }

function Creators() { const { t } = useTranslation(); const names = t('creators.names', { returnObjects: true }); const categories = t('creators.categories', { returnObjects: true }); return <section className="section creators" id="creators"><div className="section-heading"><p className="eyebrow">{t('creators.eyebrow')}</p><h2>{t('creators.title')}<br /><em>{t('creators.emphasis')}</em></h2></div><div className="creator-grid">{config.creatorImages.map((creator, index) => <article className="creator-card" key={index}><img src={creator.image} alt={t('creators.alt', { name: names[index] })} loading="lazy" /><div className="creator-overlay"><span className="tag">{categories[index]}</span><h3>{names[index]}</h3><p><span className="live-dot"></span> {t('creators.live')}</p></div></article>)}</div><p className="placeholder-note">{t('creators.note')}</p></section>; }

function Support() { const { t } = useTranslation(); const ways = t('support.ways', { returnObjects: true }); return <section className="section support"><div className="support-image"><img src={config.supportImage} alt={t('support.alt')} loading="lazy" /><div className="support-caption"><span>01</span><strong>{t('support.caption')}</strong></div></div><div className="support-copy"><p className="eyebrow">{t('support.eyebrow')}</p><h2>{t('support.title')}</h2><p>{t('support.description')}</p><ul>{ways.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul></div></section>; }

function Footer() { const { t } = useTranslation(); return <footer><div className="footer-top"><div className="designer-intro"><Logo /><p>{t('footer.designer')}</p><a className="designer-phone" href={`tel:${config.phone.replace(/\s/g, '')}`}>{t('footer.phone')}: {config.phone}</a></div><div className="footer-links" aria-label={t('hero.social')}><div><small>{t('footer.social')}</small><a href={config.telegramUrl}><span className="social-mark" aria-hidden="true">✈</span>{t('footer.telegram')}</a><a href={config.socials.Instagram}><span className="social-mark" aria-hidden="true">◎</span>Instagram</a><a href={config.socials.TikTok}><span className="social-mark" aria-hidden="true">♪</span>TikTok</a><a href={config.socials.YouTube}><span className="social-mark" aria-hidden="true">▶</span>YouTube</a><a href={config.whatsappUrl}><span className="social-mark" aria-hidden="true">✆</span>{t('footer.whatsapp')}</a></div></div></div><div className="footer-bottom"><span>© 2026 {t('brand.name')}. {t('footer.copyright')}</span><span>{t('footer.privacy')}&nbsp;&nbsp; {t('footer.terms')}&nbsp;&nbsp; {t('footer.cookies')}</span></div></footer>; }

export default function App() { return <><Navbar /><main><Hero /><Process /><Creators />{/* <Earnings /> */}<Support /></main><Footer /></>; }
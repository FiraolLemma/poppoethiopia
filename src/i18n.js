import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import am from './locales/am/translation.json';
import en from './locales/en/translation.json';
import om from './locales/om/translation.json';
import ti from './locales/ti/translation.json';

const supportedLanguages = ['am', 'en', 'om', 'ti'];
const savedLanguage = localStorage.getItem('language');
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'am';

i18n.use(initReactI18next).init({
  resources: { am: { translation: am }, en: { translation: en }, om: { translation: om }, ti: { translation: ti } },
  lng: initialLanguage,
  fallbackLng: 'am',
  interpolation: { escapeValue: false }
});

i18n.on('languageChanged', language => localStorage.setItem('language', language));

export default i18n;

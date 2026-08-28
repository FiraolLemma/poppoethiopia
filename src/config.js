import heroImageOne from './assets/images/hero (1).jpg';
import heroImageTwo from './assets/images/hero (2).jpg';
import heroImageThree from './assets/images/hero (3).jpg';
import logoImage from './assets/images/logo.jpg';
import fraolImage from './assets/images/fraol.jpg';
import loginImage from './assets/images/login.png';
import loginTwoImage from './assets/images/login2.jpg';
import settingTwoImage from './assets/images/setting2.jpg';
import agentImage from './assets/images/agent.png';

export const siteConfig = {
  agencyName: 'Agent Fraol',
  agencyShortName: 'FA',
  whatsapp: '+251 925 259 294',
  whatsappUrl: 'https://wa.me/251925259294',
  telegram: '@nomoreboundary',
  telegramUrl: 'https://t.me/nomoreboundary',
  email: 'fraollemma0506@gmail.com',
  phone: '+251 925 259 294',
  registrationUrl: 'https://example.com/poppo-registration',
  downloadUrl: 'https://example.com/poppo-download',
  socials: { Instagram: '#', TikTok: '#', YouTube: '#', Facebook: '#', X: '#', LinkedIn: '#' },
  heroImage: { src: logoImage, alt: 'Agent Fraol logo' },
  supportImage: fraolImage,
  heroImages: [
    { src: heroImageOne, alt: 'Creator smiling during a live stream' },
    { src: heroImageTwo, alt: 'Creator posing for a portrait' },
    { src: heroImageThree, alt: 'Creator in colorful studio lighting' }
  ],
  creatorImages: [
    { name: 'Login Page', category: '', image: loginTwoImage },
    { name: 'Setting Page', category: 'Lifestyle', image: settingTwoImage },
    { name: 'Agent Page', category: 'Authenticate', image: agentImage }
  ]
};
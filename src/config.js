import heroImageOne from './assets/images/hero (1).jpg';
import heroImageTwo from './assets/images/hero (2).jpg';
import heroImageThree from './assets/images/hero (3).jpg';
import logoImage from './assets/images/logo.jpg';
import loginImage from './assets/images/login.png';
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
  socials: { Instagram: '#', TikTok: '#', YouTube: '#' },
  heroImage: { src: logoImage, alt: 'Agent Fraol logo' },
  heroImages: [
    { src: heroImageOne, alt: 'Creator smiling during a live stream' },
    { src: heroImageTwo, alt: 'Creator posing for a portrait' },
    { src: heroImageThree, alt: 'Creator in colorful studio lighting' }
  ],
  creatorImages: [
    { name: 'Creator Name', category: '', image: loginImage },
    { name: 'Creator Name', category: 'Lifestyle', image: agentImage },
    { name: 'Creator Name', category: 'Authenticate', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80' }
  ]
};
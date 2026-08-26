import heroImageOne from './assets/images/hero (1).jpg';
import heroImageTwo from './assets/images/hero (2).jpg';
import heroImageThree from './assets/images/hero (3).jpg';

export const siteConfig = {
  agencyName: 'Luma House',
  agencyShortName: 'LH',
  whatsapp: '+251 XXX XXX XXX',
  whatsappUrl: 'https://wa.me/251000000000',
  telegram: '@youragency',
  telegramUrl: 'https://t.me/youragency',
  email: 'hello@example.com',
  phone: '+251 XXX XXX XXX',
  registrationUrl: 'https://example.com/poppo-registration',
  downloadUrl: 'https://example.com/poppo-download',
  socials: { Instagram: '#', TikTok: '#', YouTube: '#' },
  heroImages: [
    { src: heroImageOne, alt: 'Creator smiling during a live stream' },
    { src: heroImageTwo, alt: 'Creator posing for a portrait' },
    { src: heroImageThree, alt: 'Creator in colorful studio lighting' }
  ],
  creatorImages: [
    { name: 'Creator Name', category: 'Entertainment', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80' },
    { name: 'Creator Name', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80' },
    { name: 'Creator Name', category: 'Music & Chat', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80' }
  ]
};
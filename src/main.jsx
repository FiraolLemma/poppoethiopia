import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import App from './App';
import './index.css';
import './creator-card.css';
import './hero-social.css';
import './language-switcher.css';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
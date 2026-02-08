
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLng = i18n.language === 'ta' ? 'en' : 'ta';
    i18n.changeLanguage(newLng);
    localStorage.setItem('lng', newLng);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-maroon-700 bg-white text-maroon-800 hover:bg-maroon-50 transition-colors shadow-sm text-sm font-medium"
      style={{ borderColor: '#800000', color: '#800000' }}
    >
      <span className={i18n.language === 'ta' ? 'font-bold' : ''}>தமிழ்</span>
      <span className="text-slate-300">|</span>
      <span className={i18n.language === 'en' ? 'font-bold' : ''}>EN</span>
    </button>
  );
};


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DownloadAppButton } from './DownloadAppButton';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_login'), path: '/login', isLogin: true },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_sevai'), path: '/engal-sevai' },
    { name: t('nav_members'), path: '/members' },
    { name: t('nav_thodarbukku'), path: '/thodarbukku' },
  ];

  // Refined line variants for a perfect "X"
  const lineVariants = {
    closed: (i: number) => ({
      rotate: 0,
      y: i === 0 ? -8 : i === 2 ? 8 : 0,
      opacity: 1,
      width: "24px",
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }),
    open: (i: number) => {
      if (i === 0) return { rotate: 45, y: 0, width: "28px", transition: { type: "spring", stiffness: 260, damping: 20 } };
      if (i === 1) return { opacity: 0, width: "0px", transition: { duration: 0.1 } };
      if (i === 2) return { rotate: -45, y: 0, width: "28px", transition: { type: "spring", stiffness: 260, damping: 20 } };
      return {};
    }
  };

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group relative z-[110]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#800000] flex items-center justify-center text-[#D4AF37] font-bold text-lg sm:text-xl shadow-md group-hover:rotate-6 transition-transform">
            A
          </div>
          <span className="text-sm sm:text-lg font-black tracking-tighter text-slate-800 uppercase">
            AGAMUDAIYAR <span className="text-[#800000]">Matrimony</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                link.isLogin ? 'text-[#800000] font-black' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="font-tamil">{link.name}</span>
            </Link>
          ))}
          <div className="flex items-center gap-3 border-l border-slate-200 pl-6 ml-2">
            <LanguageSwitcher />
            <DownloadAppButton className="text-xs px-4 py-2" />
          </div>
        </nav>

        {/* Mobile Header Controls */}
        <div className="lg:hidden flex items-center gap-4 relative z-[110]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center focus:outline-none bg-slate-50 rounded-full"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={lineVariants}
                  animate={isOpen ? "open" : "closed"}
                  className={`absolute h-[2.5px] rounded-full ${isOpen ? 'bg-[#800000]' : 'bg-slate-900'}`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Full-Screen Top-to-Bottom Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[100] lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Menu Content */}
            <div className="flex-grow flex flex-col items-center justify-center px-6 py-20 space-y-8">
              <nav className="w-full max-w-sm flex flex-col items-center gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.2 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-3xl font-black uppercase tracking-tight font-tamil border-b border-slate-50 ${
                        link.isLogin ? 'text-[#800000]' : 'text-slate-800'
                      } hover:text-[#800000] transition-colors`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-8 w-full max-w-sm pt-8"
              >
                <div className="flex flex-col items-center gap-3 w-full">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Select Language</p>
                  <LanguageSwitcher />
                </div>
                
                <DownloadAppButton className="w-full py-5 text-lg rounded-2xl shadow-xl shadow-maroon-900/20" />
                
                <div className="pt-8 border-t border-slate-100 w-full flex justify-center">
                  <Link 
                    to="/admin/login" 
                    className="flex items-center gap-3 text-slate-400 font-bold uppercase text-xs tracking-[0.3em] hover:text-[#800000] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {t('admin_login')}
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Bottom Footer Decoration */}
            <div className="p-10 bg-slate-50/50 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 opacity-40">
                <div className="w-6 h-6 rounded bg-[#800000] flex items-center justify-center text-[#D4AF37] font-bold text-[10px]">A</div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Agamudaiyar Matrimony</span>
              </div>
              <p className="text-[9px] text-slate-300 font-medium uppercase tracking-widest">© 2024 AGAMUDAIYAR Traditional Services</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Brand & Address */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <h2 className="text-2xl font-bold tracking-tighter uppercase">
              {t("footer.brand")}
            </h2>
          </Link>
          <div className="text-slate-400 space-y-4 font-tamil">
            <p className="font-bold text-white text-lg">
              {t("footer.subbrand")}
            </p>
            <p className="leading-relaxed">
              {t("footer.address.line1")}
              <br />
              {t("footer.address.line2")}
              <br />
              {t("footer.address.line3")}
              <br />
              {t("footer.address.line4")}
              <br />
              {t("footer.address.line5")}
              <br />
              {t("footer.address.line6")}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-[#D4AF37] font-bold uppercase tracking-wider text-sm">
              {t("footer.links_title")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors font-tamil"
                >
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-slate-400 hover:text-white transition-colors uppercase"
                >
                  {t("footer.login")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-white transition-colors font-tamil"
                >
                  {t("footer.profile")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/login"
                  className="text-slate-400 hover:text-[#D4AF37] transition-colors text-xs uppercase tracking-widest"
                >
                  {t("admin_login")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-slate-900">.</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/engal-sevai"
                  className="text-slate-400 hover:text-white transition-colors font-tamil"
                >
                  {t("footer.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/members"
                  className="text-slate-400 hover:text-white transition-colors font-tamil"
                >
                  {t("footer.directory")}
                </Link>
              </li>
              <li>
                <Link
                  to="/thodarbukku"
                  className="text-slate-400 hover:text-white transition-colors font-tamil"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Branding/Logo Info */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <img
            src="/logo.png"
            alt="Footer Logo"
            className="w-16 h-16 object-contain mb-6 filter brightness-110"
          />
          <p className="text-slate-500 text-xs tracking-widest uppercase text-center md:text-left">
            {t("footer.legacy")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">{t("footer.copyright")}</p>
        <div className="flex gap-6 text-xs text-slate-600 uppercase tracking-widest">
          <Link to="/about" className="hover:text-slate-400">
            {t("footer.privacy")}
          </Link>
          <Link to="/contact" className="hover:text-slate-400">
            {t("footer.terms")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

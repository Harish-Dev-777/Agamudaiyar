import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Thodarbukku: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4 font-tamil uppercase">
          {t("nav_thodarbukku")}
        </h1>
        <div className="w-24 h-2 bg-[#800000] mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          {/* Address Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#800000] font-tamil border-b pb-4 border-slate-200">
              தொடர்புக்கு:
            </h2>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-maroon-900/5 leading-relaxed text-xl font-tamil text-slate-700">
              <p>பேருந்து நிலைய சாலை,</p>
              <p>நடிமுத்து நகர்,</p>
              <p>பட்டுக்கோட்டை,</p>
              <p>தமிழ்நாடு - 614 601.</p>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <svg
                className="w-6 h-6 text-[#800000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Phone Numbers
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Office Ph
                </div>
                <div className="text-2xl font-black text-slate-800 tracking-tighter">
                  04373 - 255545
                </div>
              </div>
              <div className="p-6 bg-maroon-50 rounded-2xl border border-[#800000]/10">
                <div className="text-sm font-bold text-[#800000]/60 uppercase tracking-widest mb-1">
                  Cell
                </div>
                <div className="space-y-1 text-2xl font-black text-[#800000] tracking-tighter">
                  <p>90803 89082</p>
                  <p>99761 50545</p>
                </div>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                <div className="text-sm font-bold text-green-600 uppercase tracking-widest mb-1">
                  WhatsApp
                </div>
                <div className="text-2xl font-black text-green-700 tracking-tighter">
                  <p>99446 68890</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="relative group">
            <div className="bg-slate-200 aspect-video lg:aspect-square rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white">
              <iframe
                title="Agamudaiyar Matrimony Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Pattukkottai%20Bus%20Stand%20Rd,%20Nadimuthu%20Nagar,%20Pattukkottai&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                className="transition-all duration-700"
              ></iframe>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-500/20">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 leading-tight">
                        Agamudaiyar Matrimony
                      </h3>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                        Bus Stand Rd, Nadimuthu Nagar
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Pattukkottai+Bus+Stand+Rd,+Nadimuthu+Nagar,+Pattukkottai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 bg-[#800000] text-white text-sm font-bold rounded-xl hover:bg-maroon-900 transition-all text-center flex items-center justify-center"
                    >
                      Directions
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Pattukkottai+Bus+Stand+Rd,+Nadimuthu+Nagar,+Pattukkottai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition-all text-center flex items-center justify-center"
                    >
                      View large map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center gap-6">
            <img
              src="/logo.png"
              alt="Brand Logo"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h4 className="text-xl font-black text-slate-900 uppercase">
                AGAMUDAIYAR
              </h4>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Matrimony Organization
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Thodarbukku;

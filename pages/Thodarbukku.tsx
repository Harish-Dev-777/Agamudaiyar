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
            {/* Map Placeholder UI */}
            <div className="bg-slate-200 aspect-video lg:aspect-square rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-sm border border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
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
                      <h3 className="font-bold text-slate-900">
                        Kamatchi Mess
                      </h3>
                      <p className="text-xs text-slate-500">
                        Nadimuthu Nagar, Pattukkottai
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-yellow-400">
                      {"★★★★☆".split("").map((s, i) => (
                        <span key={i}>{s}</span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-600">
                      4.1 (932 reviews)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors">
                      Directions
                    </button>
                    <button className="py-3 border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors">
                      View larger map
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center gap-6">
            <div className="w-20 h-20 bg-[#800000] rounded-3xl flex items-center justify-center text-[#D4AF37] font-bold text-3xl shadow-lg">
              A
            </div>
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

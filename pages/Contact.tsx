import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-8 font-tamil">
            {t("contact_us")}
          </h1>

          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-maroon-50 rounded-2xl flex items-center justify-center text-[#800000] shrink-0 shadow-sm">
                <svg
                  className="w-6 h-6"
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
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{t("phone")}</h4>
                <p className="text-slate-600">+91 90803 89082</p>
                <p className="text-slate-600">+91 99761 50545</p>
                <p className="text-slate-600 font-bold text-green-600">
                  WhatsApp: +91 99446 68890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-maroon-50 rounded-2xl flex items-center justify-center text-[#800000] shrink-0 shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{t("email")}</h4>
                <p className="text-slate-600">contact@arulmigumatrimony.com</p>
                <p className="text-slate-600">support@arulmigumatrimony.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-maroon-50 rounded-2xl flex items-center justify-center text-[#800000] shrink-0 shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{t("address")}</h4>
                <p className="text-slate-600 leading-relaxed font-tamil">
                  பேருந்து நிலைய சாலை, நடிமுத்து நகர்,
                  <br />
                  பட்டுக்கோட்டை - 614 601,
                  <br />
                  தமிழ்நாடு, இந்தியா.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                {t("name")}
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000] transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                {t("email")}
              </label>
              <input
                type="email"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000] transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                {t("message")}
              </label>
              <textarea
                rows={4}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000] transition-all"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button className="w-full py-5 bg-[#800000] text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-maroon-900/20 hover:bg-maroon-900 transition-all">
              {t("send_message")}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

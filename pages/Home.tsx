import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { DownloadAppButton } from "../components/DownloadAppButton";

const Home: React.FC = () => {
  const { t } = useTranslation();

  // The three specific images provided for the traditional gallery
  const galleryItems = [
    {
      url: "/assets/our_legacy/quote.png",
      title: "மனத்தோடு மாங்கல்யம்",
      subtitle: "Traditional Values",
    },
    {
      url: "/assets/our_legacy/office_admin.png",
      title: "நிர்வாகி",
      subtitle: "Office Administration",
    },
    {
      url: "/assets/our_legacy/loc_image.png",
      title: "தொடர்பு முகவரி",
      subtitle: "Visit Our Location",
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter"
          >
            {t("hero_title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t("hero_subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <DownloadAppButton className="py-4 px-8 text-lg rounded-2xl w-full sm:w-auto" />
            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-4 border-2 border-[#800000] text-[#800000] font-bold rounded-2xl hover:bg-[#800000] hover:text-white transition-all"
            >
              {t("nav_signup")}
            </Link>
          </motion.div>
        </div>

        {/* Decorative background gradients */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#800000]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      </section>

      {/* Member Search (Gender Selection) Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="mb-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-tamil mb-6 tracking-tight">
            உறுப்பினர் தேடல் / Member Search
          </h2>
          <div className="w-24 h-2 bg-[#800000] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Groom Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="group"
          >
            <Link
              to="/mappillai"
              className="block relative h-[550px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white"
            >
              <img
                src="/assets/groom_and_bride/groom.jpeg"
                alt="Groom"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full text-white">
                <div className="text-4xl lg:text-6xl font-bold mb-6 font-tamil drop-shadow-2xl uppercase">
                  {t("groom_title")}
                </div>
                <div className="flex items-center gap-4 text-xl lg:text-2xl font-bold opacity-90 group-hover:gap-6 transition-all uppercase tracking-widest">
                  {t("view_groom_profiles")}
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Bride Selection */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="group"
          >
            <Link
              to="/penn"
              className="block relative h-[550px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white"
            >
              <img
                src="/assets/groom_and_bride/bride.jpeg"
                alt="Bride"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full text-white">
                <div className="text-4xl lg:text-6xl font-bold mb-6 font-tamil drop-shadow-2xl uppercase">
                  {t("bride_title")}
                </div>
                <div className="flex items-center gap-4 text-xl lg:text-2xl font-bold opacity-90 group-hover:gap-6 transition-all uppercase tracking-widest">
                  {t("view_bride_profiles")}
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Traditional Gallery Section - Properly Styled */}
      <section className="bg-slate-50 py-24 lg:py-32 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-tamil mb-6">
              பாரம்பரியம் / Our Legacy
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Trusted by generations, serving the community with honor.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
          >
            {galleryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group flex flex-col bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-200 transition-all"
              >
                <div className="relative bg-white p-6 md:p-8 flex items-center justify-center min-h-[450px] lg:min-h-[550px]">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="max-w-full h-auto rounded-2xl shadow-sm transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-maroon-900 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
                </div>

                <div className="p-10 bg-white text-center border-t border-slate-50 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1.5 bg-[#800000] rounded-full" />
                  <div className="text-2xl font-black text-slate-900 font-tamil mb-2 group-hover:text-[#800000] transition-colors uppercase">
                    {item.title}
                  </div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                    {item.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

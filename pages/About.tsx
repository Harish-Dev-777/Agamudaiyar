import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const { t } = useTranslation();

  const galleryImages = [
    "/assets/aboutImages/image_1.png",
    "/assets/aboutImages/image_2.png",
    "/assets/aboutImages/image_3.png",
    "/assets/aboutImages/image_4.png",
    "/assets/aboutImages/image_5.png",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-slate-900 mb-6 font-tamil">
          {t("about_us")}
        </h1>
        <div className="w-24 h-1.5 bg-[#800000] mx-auto rounded-full" />
      </motion.div>

      <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-slate-100 space-y-8 mb-20">
        <p className="text-xl text-slate-700 leading-relaxed font-tamil">
          {t("about_desc")}
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#800000] mb-2">1000+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-widest">
              Happy Unions
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#800000] mb-2">10+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-widest">
              Years Service
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#800000] mb-2">24/7</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-widest">
              Member Support
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 font-tamil mb-4">
            நமது நிகழ்வுகள் / Our Gallery
          </h2>
          <div className="w-12 h-1 bg-[#800000]/20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-[2rem] shadow-lg border border-slate-100 group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

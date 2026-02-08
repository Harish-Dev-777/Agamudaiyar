
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EngalSevai: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-tamil">
          {t('engalSevai.title')}
        </h1>
        <div className="w-24 h-1.5 bg-[#800000] mx-auto rounded-full" />
      </motion.div>

      <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 transform rotate-12 scale-150">
          <span className="text-9xl text-[#800000]">ॐ</span>
        </div>
        
        <div className="space-y-10 text-xl text-slate-700 leading-relaxed font-tamil">
          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[#800000] font-bold text-2xl">•</span>
            <p>{t('engalSevai.point1')}</p>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[#800000] font-bold text-2xl">•</span>
            <p>{t('engalSevai.point2')}</p>
          </div>

          <div className="flex items-start gap-4 p-6 bg-[#800000]/5 rounded-2xl border border-[#800000]/10">
            <span className="text-[#800000] font-bold text-2xl">•</span>
            <p className="font-bold text-slate-900 italic">{t('engalSevai.point3')}</p>
          </div>

          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[#800000] font-bold text-2xl">•</span>
            <p>{t('engalSevai.point4')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngalSevai;

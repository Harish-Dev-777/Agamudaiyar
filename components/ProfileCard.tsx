
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Profile } from '../data/profiles';

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link 
        to={`/profile/${profile.id}`}
        className="block bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
      >
        <div className="aspect-[3/4] overflow-hidden relative group">
          <img 
            src={profile.image} 
            alt={profile.id.toString()}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#800000] shadow-sm">
            #{profile.id}
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-xl font-bold text-slate-800">{profile.id}</h3>
             <span className={`text-xs px-2 py-0.5 rounded-md font-semibold ${profile.gender === 'male' ? 'bg-blue-50 text-blue-700' : 'bg-pink-50 text-pink-700'}`}>
               {profile.gender === 'male' ? t('groom') : t('bride')}
             </span>
          </div>

          <div className="space-y-2.5 text-sm">
            <div className="flex gap-2">
              <span className="text-slate-500 w-24 shrink-0">{t('dob')}</span>
              <span className="text-slate-400">:</span>
              <span className="text-slate-800 font-medium">{profile.dob}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-500 w-24 shrink-0">{t('education')}</span>
              <span className="text-slate-400">:</span>
              <span className="text-slate-800 font-medium truncate">{profile.education}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-500 w-24 shrink-0">{t('star')}</span>
              <span className="text-slate-400">:</span>
              <span className="text-slate-800 font-medium">{profile.star}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

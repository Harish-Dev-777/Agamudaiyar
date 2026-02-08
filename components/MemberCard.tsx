
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Member } from '../data/members';

interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link 
        to={`/profile/${member.id}`}
        className="block bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all group"
      >
        <div className="aspect-[4/5] overflow-hidden relative">
          <img 
            src={member.image} 
            alt={member.id.toString()}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="text-xl font-bold text-slate-900 mb-3">{member.id}</div>
          
          <div className="space-y-1 text-[13px] leading-relaxed">
            <div className="flex whitespace-pre">
              <span className="text-slate-500 w-24 shrink-0 font-tamil">{t('dob')}</span>
              <span className="text-slate-400 mr-2">:</span>
              <span className="text-slate-800 font-semibold">{member.dob}</span>
            </div>
            <div className="flex whitespace-pre">
              <span className="text-slate-500 w-24 shrink-0 font-tamil">{t('education')}</span>
              <span className="text-slate-400 mr-2">:</span>
              <span className="text-slate-800 font-semibold truncate">{member.education}</span>
            </div>
            <div className="flex whitespace-pre">
              <span className="text-slate-500 w-24 shrink-0 font-tamil">{t('star')}</span>
              <span className="text-slate-400 mr-2">:</span>
              <span className="text-slate-800 font-semibold font-tamil">{member.star}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

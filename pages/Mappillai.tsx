
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Member } from '../data/members';
import { MemberCard } from '../components/MemberCard';
import { motion } from 'framer-motion';

interface MappillaiProps {
  members: Member[];
}

const Mappillai: React.FC<MappillaiProps> = ({ members }) => {
  const { t } = useTranslation();
  const maleMembers = members.filter(p => p.gender === 'male');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 border-l-4 border-[#800000] pl-6"
      >
        <h1 className="text-4xl font-bold text-slate-900 font-tamil mb-2">{t('groom_title')}</h1>
        <p className="text-slate-500">{maleMembers.length} profiles found</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {maleMembers.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Mappillai;


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Member } from '../data/members';
import { MemberCard } from '../components/MemberCard';
import { GenderFilter } from '../components/GenderFilter';
import { motion } from 'framer-motion';

interface MembersProps {
  members: Member[];
}

const Members: React.FC<MembersProps> = ({ members }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'male' | 'female'>('all');

  const filteredMembers = members.filter(m => filter === 'all' || m.gender === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Info */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-700 text-sm leading-relaxed font-bold font-tamil text-center md:text-left">
          86/10, ஸ்டார் டவர்,<br />
          முதல் மாடி, சின்னையா தெரு,<br />
          பட்டுக்கோட்டை - 614 601.
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('back')}
        </button>
      </div>

      <div className="flex flex-col gap-6 mb-6">
        <h1 className="text-3xl font-bold text-slate-900 border-l-4 border-[#800000] pl-6 uppercase tracking-tight font-tamil">
          {t('nav_members')}
        </h1>
        
        <div className="flex justify-start">
          <GenderFilter currentFilter={filter} setFilter={setFilter} />
        </div>
      </div>

      <hr className="mb-8 border-slate-200" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMembers.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-20 text-slate-400 font-tamil">
          தேர்ந்தெடுக்கப்பட்ட பாலினத்தில் உறுப்பினர்கள் இல்லை.
        </div>
      )}
    </div>
  );
};

export default Members;

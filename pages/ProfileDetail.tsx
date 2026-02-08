
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Member } from '../data/members';
import { motion } from 'framer-motion';

interface ProfileDetailProps {
  members: Member[];
  onContactRequest?: (id: number) => void;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ members, onContactRequest }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Fixed: Destructured i18n from useTranslation to use it for language-based logic
  const { t, i18n } = useTranslation();
  const [requested, setRequested] = useState(false);
  
  const member = members.find(p => p.id === Number(id));

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h2 className="text-2xl font-bold mb-4">Profile not found</h2>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-[#800000] text-white rounded-lg"
        >
          {t('back')}
        </button>
      </div>
    );
  }

  const handleRequest = () => {
    if (onContactRequest) {
      onContactRequest(member.id);
      setRequested(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-[#800000] transition-colors mb-8 font-medium"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {t('back')}
      </button>

      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="grid lg:grid-cols-2">
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[500px] lg:min-h-[700px] overflow-hidden"
          >
            <img 
              src={member.image} 
              alt={member.id.toString()}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Details Container */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 lg:p-16"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 ${member.gender === 'male' ? 'bg-blue-50 text-blue-700' : 'bg-pink-50 text-pink-700'}`}>
                  {member.gender === 'male' ? t('groom') : t('bride')}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">{member.name || member.id}</h1>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-sm mb-1">{t('profile_id')}</div>
                <div className="text-xl font-bold text-[#D4AF37]">#ID-{member.id}</div>
              </div>
            </div>

            <div className="grid gap-6 mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{t('dob')}</span>
                  <span className="text-lg font-bold text-slate-800">{member.dob}</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{t('education')}</span>
                  <span className="text-lg font-bold text-slate-800">{member.education}</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{t('star')}</span>
                  <span className="text-lg font-bold text-slate-800 font-tamil">{member.star}</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{t('occupation')}</span>
                  <span className="text-lg font-bold text-slate-800">{member.occupation}</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{t('rasi')}</span>
                  <span className="text-lg font-bold text-slate-800">{member.rasi}</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{t('lagnam')}</span>
                  <span className="text-lg font-bold text-slate-800">{member.lagnam}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleRequest}
              disabled={requested || member.contactRequested}
              className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98] font-tamil ${requested || member.contactRequested ? 'bg-green-600 text-white cursor-default' : 'bg-[#800000] text-white shadow-maroon-900/20 hover:bg-maroon-900'}`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {requested || member.contactRequested ? (i18n.language === 'ta' ? 'அலுவலகம் தொடர்பு கொள்ளப்பட்டது' : 'Office Contacted') : t('confirm_contact_btn')}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;

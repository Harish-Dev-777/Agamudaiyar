
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Member } from '../data/members';

interface AdminDashboardProps {
  members: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ members, setMembers }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const confirmedRequests = members.filter(m => m.contactRequested);

  const handleAction = (id: number, type: 'contacted' | 'remove') => {
    setMembers(prev => prev.map(m => {
      if (m.id === id) {
        if (type === 'remove') {
          return { ...m, contactRequested: false, requestedAt: undefined };
        }
        // In a real app, 'contacted' might set a flag, here we just show it
        return m;
      }
      return m;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 border-l-4 border-[#800000] pl-6 uppercase tracking-tight font-tamil">
          {t('admin_dashboard')}
        </h1>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-red-50 hover:text-red-600 transition-all font-tamil"
        >
          {t('logout')}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Link to="/admin/add-member" className="group">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group-hover:border-[#800000]/30 transition-all h-full"
          >
            <div className="w-20 h-20 bg-maroon-50 rounded-3xl flex items-center justify-center text-[#800000] mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-tamil">{t('add_new_member')}</h3>
            <p className="text-slate-500 text-sm">Upload new Groom or Bride profiles to the system.</p>
          </motion.div>
        </Link>

        <Link to="/members" className="group">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group-hover:border-[#800000]/30 transition-all h-full"
          >
            <div className="w-20 h-20 bg-maroon-50 rounded-3xl flex items-center justify-center text-[#800000] mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-tamil">{t('view_members')}</h3>
            <p className="text-slate-500 text-sm">Manage existing member directory and filters.</p>
          </motion.div>
        </Link>
      </div>

      {/* Confirmed Contact Requests Section */}
      <section className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-[#800000] p-6 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold font-tamil">{t('admin_confirmed_requests')}</h2>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">{confirmedRequests.length} Total</span>
        </div>

        <div className="overflow-x-auto">
          {confirmedRequests.length > 0 ? (
            <div className="min-w-full inline-block align-middle">
              {/* Desktop Table */}
              <table className="min-w-full hidden md:table">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-left">
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">{t('profile_id')}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">{t('name')}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">{t('gender')}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">{t('mobile')}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">{t('email')}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">{t('town')}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">{t('requested_date')}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <AnimatePresence>
                    {confirmedRequests.map((request) => (
                      <motion.tr 
                        key={request.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-bold text-[#800000]">#{request.id}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-700">{request.name}</td>
                        <td className="px-6 py-4 text-sm text-slate-600 font-tamil">
                          {request.gender === 'male' ? t('male') : t('female')}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{request.mobile}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{request.email}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{request.town}</td>
                        <td className="px-6 py-4 text-sm text-slate-400 whitespace-nowrap">{request.requestedAt}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex gap-2 justify-center">
                            <button 
                              onClick={() => handleAction(request.id, 'contacted')}
                              className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg hover:bg-green-100 transition-colors font-tamil"
                            >
                              {t('action_contacted')}
                            </button>
                            <button 
                              onClick={() => handleAction(request.id, 'remove')}
                              className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-lg hover:bg-red-100 transition-colors font-tamil"
                            >
                              {t('action_remove')}
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>

              {/* Mobile Card Layout */}
              <div className="md:hidden divide-y divide-slate-100">
                {confirmedRequests.map((request) => (
                  <div key={request.id} className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-bold text-[#800000] uppercase mb-1">#{request.id}</div>
                        <div className="text-lg font-bold text-slate-900">{request.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400 uppercase font-bold">{t('requested_date')}</div>
                        <div className="text-xs text-slate-500">{request.requestedAt}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-xs text-slate-400 block uppercase font-bold tracking-tighter">{t('gender')}</span>
                        <span className="font-tamil">{request.gender === 'male' ? t('male') : t('female')}</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block uppercase font-bold tracking-tighter">{t('town')}</span>
                        <span>{request.town}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-xs text-slate-400 block uppercase font-bold tracking-tighter">{t('mobile')}</span>
                        <span>{request.mobile}</span>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                       <button 
                        onClick={() => handleAction(request.id, 'contacted')}
                        className="flex-1 py-2 bg-green-50 text-green-600 text-sm font-bold rounded-xl font-tamil"
                      >
                        {t('action_contacted')}
                      </button>
                      <button 
                        onClick={() => handleAction(request.id, 'remove')}
                        className="flex-1 py-2 bg-red-50 text-red-600 text-sm font-bold rounded-xl font-tamil"
                      >
                        {t('action_remove')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-20 text-center text-slate-400 font-tamil">
              தற்போது உறுதிப்படுத்தப்பட்ட கோரிக்கைகள் எதுவும் இல்லை.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

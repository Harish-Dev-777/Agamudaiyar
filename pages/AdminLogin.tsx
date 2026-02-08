
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdminLogin: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-slate-900 rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12 text-white">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[#800000] font-bold text-2xl shadow-lg mb-6">
            A
          </div>
          <h1 className="text-2xl font-bold mb-2">{t('admin_login')}</h1>
          <p className="text-slate-400 text-sm tracking-widest uppercase">Management Access Only</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-300">Username</label>
            <input required type="text" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-white/20 outline-none text-white" defaultValue="admin" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-300">Password</label>
            <input required type="password" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-white/20 outline-none text-white" defaultValue="admin123" />
          </div>

          <button type="submit" className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
            LOGIN AS ADMIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

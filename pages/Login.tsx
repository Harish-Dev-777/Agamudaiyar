
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 lg:p-12">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-xl bg-[#800000] flex items-center justify-center text-[#D4AF37] font-bold text-2xl shadow-lg mb-6">
            A
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{t('login_heading')}</h1>
          <p className="text-slate-500 text-sm">{t('login_sub')} <Link to="/signup" className="text-[#800000] font-bold">{t('register_now')}</Link></p>
        </div>

        <form className="space-y-6" onSubmit={e => { e.preventDefault(); navigate('/'); }}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Mobile No</label>
            <input required type="text" className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none" placeholder="Enter Mobile Number" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-xs text-[#800000] font-bold uppercase">{t('show_password')}</button>
            </div>
            <input required type={showPassword ? "text" : "password"} className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none" placeholder="Enter Password" />
          </div>

          <button type="submit" className="w-full py-4 bg-[#800000] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-maroon-900 transition-all">
            {t('sign_in')}
          </button>
          
          <div className="text-center">
            <Link to="/forgot-password" title="Recover your password" className="text-sm text-slate-500 hover:text-[#800000] font-medium">{t('forgot_password')}</Link>
          </div>
        </form>

        <div className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest border-t pt-8">
          Copyright © 2023 AGAMUDAIYAR. All rights reserved.<br/>
          Terms & Conditions | Cookie Policy
        </div>
      </div>
    </div>
  );
};

export default Login;

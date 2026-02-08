
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ForgotPassword: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mock OTP
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`[MOCK OTP GENERATED]: ${mockOtp}`);
    localStorage.setItem('reset_otp', mockOtp);
    navigate('/verify-otp');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 lg:p-12">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-xl bg-[#800000] flex items-center justify-center text-[#D4AF37] font-bold text-2xl shadow-lg mb-6">
            A
          </div>
          <p className="text-slate-500 text-sm mb-2">
            {t('already_have_account')} <Link to="/login" className="text-[#800000] font-bold">{t('sign_in')}</Link>
          </p>
          <h1 className="text-2xl font-bold text-slate-900 mb-2 font-tamil">{t('forgot_password')}</h1>
          <p className="text-slate-500 text-sm font-tamil">{t('forgot_password_sub')}</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 font-tamil">{t('email')}</label>
            <input 
              required 
              type="email" 
              className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full py-4 bg-[#800000] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-maroon-900 transition-all uppercase tracking-wider">
            {t('submit_request')}
          </button>
        </form>

        <div className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest border-t pt-8">
          Copyright © 2023 AGAMUDAIYAR. All rights reserved.<br/>
          Terms & Conditions | Cookie Policy
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

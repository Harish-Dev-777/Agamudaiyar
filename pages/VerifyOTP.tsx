
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VerifyOTP: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Accept any 6-digit OTP for testing
    if (otp.length === 6) {
      navigate('/reset-password');
    } else {
      setError(t('invalid_otp'));
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 lg:p-12">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-xl bg-[#800000] flex items-center justify-center text-[#D4AF37] font-bold text-2xl shadow-lg mb-6">
            A
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2 font-tamil">{t('otp_verification')}</h1>
          <p className="text-slate-500 text-sm text-center font-tamil">{t('otp_sub')}</p>
        </div>

        <form className="space-y-6" onSubmit={handleVerify}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 font-tamil">{t('otp_label')}</label>
            <input 
              required 
              type="text" 
              maxLength={6}
              className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 outline-none text-center text-2xl tracking-[0.5em] font-bold ${error ? 'border-red-500 focus:ring-red-100' : 'focus:ring-[#800000]/20 border-slate-200'}`}
              placeholder="000000"
              value={otp}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '');
                setOtp(val);
                if (error) setError('');
              }}
            />
            {error && <p className="text-red-500 text-xs font-bold font-tamil text-center">{error}</p>}
          </div>

          <button 
            type="submit" 
            disabled={otp.length !== 6}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all uppercase tracking-wider ${otp.length === 6 ? 'bg-[#800000] text-white hover:bg-maroon-900' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
          >
            {t('verify_otp_btn')}
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

export default VerifyOTP;

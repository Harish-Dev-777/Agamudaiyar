
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ResetPassword: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError(t('password_mismatch'));
      return;
    }

    setSuccess(true);
    localStorage.removeItem('reset_otp');
    
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 lg:p-12">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-xl bg-[#800000] flex items-center justify-center text-[#D4AF37] font-bold text-2xl shadow-lg mb-6">
            A
          </div>
          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2 font-tamil">{t('reset_success')}</h1>
              <p className="text-slate-500 text-sm">Redirecting to login...</p>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-slate-900 mb-2 font-tamil">{t('reset_password')}</h1>
              <p className="text-slate-500 text-sm font-tamil">{t('reset_password_sub')}</p>
            </>
          )}
        </div>

        {!success && (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 font-tamil">{t('new_password')}</label>
              <input 
                required 
                type="password" 
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none" 
                placeholder="Enter new password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (error) setError('');
                }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 font-tamil">{t('confirm_password')}</label>
              <input 
                required 
                type="password" 
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 outline-none ${error ? 'border-red-500 focus:ring-red-100' : 'focus:ring-[#800000]/20 border-slate-200'}`} 
                placeholder="Confirm new password"
                value={formData.confirmPassword}
                onChange={(e) => {
                  setFormData({ ...formData, confirmPassword: e.target.value });
                  if (error) setError('');
                }}
              />
              {error && <p className="text-red-500 text-xs font-bold font-tamil text-center">{error}</p>}
            </div>

            <button type="submit" className="w-full py-4 bg-[#800000] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-maroon-900 transition-all uppercase tracking-wider">
              {t('confirm_password_btn')}
            </button>
          </form>
        )}

        <div className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest border-t pt-8">
          Copyright © 2023 AGAMUDAIYAR. All rights reserved.<br/>
          Terms & Conditions | Cookie Policy
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Member } from '../data/members';

interface SignupProps {
  onSignup: (member: Member) => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ dob?: string }>({});

  const [formData, setFormData] = useState({
    name: '',
    gender: 'male' as 'male' | 'female',
    dob: '',
    education: '',
    occupation: '',
    rasi: '',
    star: '',
    lagnam: '',
    email: '',
    mobile: '',
    town: '',
    password: '',
    confirmPassword: '',
    sponsor: '',
    company: ''
  });

  const validateDob = (value: string) => {
    // Simple regex for DD / MM / YYYY
    const regex = /^\d{2}\s\/\s\d{2}\s\/\s\d{4}$/;
    if (!value) return true; // Let required handle empty
    return regex.test(value);
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Basic auto-formatter (optional but helpful)
    // Remove non-numeric characters to process
    const nums = value.replace(/\D/g, '');
    let formatted = nums;
    if (nums.length > 2) formatted = `${nums.slice(0, 2)} / ${nums.slice(2)}`;
    if (nums.length > 4) formatted = `${nums.slice(0, 2)} / ${nums.slice(2, 4)} / ${nums.slice(4, 8)}`;
    
    setFormData({ ...formData, dob: formatted.slice(0, 14) });
    
    if (errors.dob) {
      setErrors({ ...errors, dob: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateDob(formData.dob)) {
      setErrors({ ...errors, dob: i18n.language === 'ta' ? 'தவறான வடிவம் (DD / MM / YYYY)' : 'Invalid format (DD / MM / YYYY)' });
      return;
    }

    const newMember: Member = {
      id: Math.floor(1000 + Math.random() * 9000),
      name: formData.name,
      gender: formData.gender,
      dob: formData.dob,
      education: formData.education,
      occupation: formData.occupation,
      rasi: formData.rasi,
      star: formData.star,
      lagnam: formData.lagnam,
      email: formData.email,
      mobile: formData.mobile,
      town: formData.town,
      image: `https://picsum.photos/seed/${formData.name}/400/500`
    };
    onSignup(newMember);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="p-8 lg:p-12">
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 rounded-xl bg-[#800000] flex items-center justify-center text-[#D4AF37] font-bold text-2xl shadow-lg mb-6">
              A
            </div>
            <p className="text-slate-500 text-sm mb-2">{t('already_have_account')} <Link to="/login" className="text-[#800000] font-bold hover:underline">{t('sign_in')}</Link></p>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 text-center font-tamil uppercase">
              {t('signup_title')}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* வரன் பெயர் */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 font-tamil">{t('varan_name')}</label>
                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none" 
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>

              {/* பாலினம் (Dropdown: ஆண் / பெண்) */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 font-tamil">{t('gender')}</label>
                <select 
                  required
                  className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none cursor-pointer"
                  value={formData.gender} 
                  onChange={e => setFormData({...formData, gender: e.target.value as 'male' | 'female'})}
                >
                  <option value="male">{i18n.language === 'ta' ? 'ஆண் (Male)' : 'Male (ஆண்)'}</option>
                  <option value="female">{i18n.language === 'ta' ? 'பெண் (Female)' : 'Female (பெண்)'}</option>
                </select>
              </div>

              {/* பிறந்த தேதி (Manual Input - DD/MM/YYYY) */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 font-tamil">{t('dob')}</label>
                <input 
                  required 
                  type="text" 
                  placeholder="DD / MM / YYYY"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 outline-none ${errors.dob ? 'border-red-500 focus:ring-red-200' : 'focus:ring-[#800000]/20 border-slate-200'}`}
                  value={formData.dob} 
                  onChange={handleDobChange} 
                />
                {errors.dob && <p className="text-red-500 text-xs font-bold font-tamil">{errors.dob}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 font-tamil">{t('education')}</label>
                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.education} onChange={e => setFormData({...formData, education: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 font-tamil">{t('occupation')}</label>
                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.occupation} onChange={e => setFormData({...formData, occupation: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 font-tamil">{t('rasi')}</label>
                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.rasi} onChange={e => setFormData({...formData, rasi: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 font-tamil">{t('star')}</label>
                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none font-tamil"
                  value={formData.star} onChange={e => setFormData({...formData, star: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 font-tamil">{t('lagnam')}</label>
                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.lagnam} onChange={e => setFormData({...formData, lagnam: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Email</label>
                <input required type="email" className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Mobile</label>
                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Town</label>
                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.town} onChange={e => setFormData({...formData, town: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Password</label>
                <input required type="password" className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Confirm Password</label>
                <input required type="password" className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.confirmPassword} onChange={e => setFormData({...formData, confirmPassword: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Sponsor UserName</label>
                <input className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.sponsor} onChange={e => setFormData({...formData, sponsor: e.target.value})} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 uppercase">COMPANY</label>
                <input className="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#800000]/20 outline-none"
                  value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="font-bold text-[#800000] font-tamil">{t('declaration')}</h3>
              <div className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-slate-300 text-[#800000] focus:ring-[#800000]" />
                <p className="text-sm text-slate-600 font-tamil">{t('declaration_text')}</p>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-slate-300 text-[#800000] focus:ring-[#800000]" />
                <p className="text-sm text-slate-600 font-medium">{t('terms_agree')}</p>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-[#800000] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-maroon-900 transition-all">
              {t('sign_up')}
            </button>
          </form>

          <div className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest border-t pt-8">
            Copyright © 2021 AGAMUDAIYAR. All rights reserved.<br/>
            Terms & Conditions | Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

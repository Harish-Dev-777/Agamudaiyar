
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Member } from '../data/members';

interface AdminAddMemberProps {
  onAdd: (member: Member) => void;
}

const AdminAddMember: React.FC<AdminAddMemberProps> = ({ onAdd }) => {
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
    town: ''
  });

  const validateDob = (value: string) => {
    const regex = /^\d{2}\s\/\s\d{2}\s\/\s\d{4}$/;
    if (!value) return true;
    return regex.test(value);
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
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
      id: Math.floor(3000 + Math.random() * 2000),
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
    onAdd(newMember);
    navigate('/admin/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-10">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-3xl font-bold text-slate-900 font-tamil uppercase">{t('add_new_member')}</h1>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-100">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {/* வரன் பெயர் */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-tamil">{t('varan_name')}</label>
              <input required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#800000]/10 outline-none" 
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>

            {/* பாலினம் (Dropdown: ஆண் / பெண்) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-tamil">{t('gender')}</label>
              <select 
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#800000]/10 outline-none cursor-pointer"
                value={formData.gender} 
                onChange={e => setFormData({...formData, gender: e.target.value as 'male' | 'female'})}
              >
                <option value="male">{i18n.language === 'ta' ? 'ஆண் (Male)' : 'Male (ஆண்)'}</option>
                <option value="female">{i18n.language === 'ta' ? 'பெண் (Female)' : 'Female (பெண்)'}</option>
              </select>
            </div>

            {/* பிறந்த தேதி (Manual Input - DD/MM/YYYY) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-tamil">{t('dob')}</label>
              <input 
                required 
                type="text" 
                placeholder="DD / MM / YYYY"
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 outline-none ${errors.dob ? 'border-red-500 focus:ring-red-200' : 'focus:ring-[#800000]/10 border-slate-200'}`}
                value={formData.dob} 
                onChange={handleDobChange} 
              />
              {errors.dob && <p className="text-red-500 text-xs font-bold font-tamil">{errors.dob}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-tamil">{t('education')}</label>
              <input required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
                value={formData.education} onChange={e => setFormData({...formData, education: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-tamil">{t('star')}</label>
              <input required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-tamil"
                value={formData.star} onChange={e => setFormData({...formData, star: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Photo (Mock Upload)</label>
              <div className="w-full h-12 bg-slate-50 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400 text-sm cursor-pointer hover:bg-slate-100 transition-colors">
                 Click to browse image files...
              </div>
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-slate-900/10">
             UPLOAD MEMBER PROFILE
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddMember;

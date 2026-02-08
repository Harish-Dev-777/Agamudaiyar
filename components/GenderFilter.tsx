
import React from 'react';
import { useTranslation } from 'react-i18next';

interface GenderFilterProps {
  currentFilter: 'all' | 'male' | 'female';
  setFilter: (filter: 'all' | 'male' | 'female') => void;
}

export const GenderFilter: React.FC<GenderFilterProps> = ({ currentFilter, setFilter }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="gender-select" className="text-sm font-bold text-slate-700 font-tamil whitespace-nowrap">
        {t('gender')} :
      </label>
      <div className="relative">
        <select
          id="gender-select"
          value={currentFilter}
          onChange={(e) => setFilter(e.target.value as 'all' | 'male' | 'female')}
          className="appearance-none px-4 py-2 pr-10 bg-white border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-[#800000]/10 outline-none cursor-pointer font-tamil min-w-[140px] shadow-sm"
        >
          <option value="all">{t('all')}</option>
          <option value="male">{t('male')}</option>
          <option value="female">{t('female')}</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

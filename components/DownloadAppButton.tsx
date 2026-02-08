
import React from 'react';
import { useTranslation } from 'react-i18next';

interface DownloadAppButtonProps {
  className?: string;
}

export const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <a
      href="https://appsgeyser.io/17920261/agamudaiyar"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-[#800000] text-white font-bold py-2.5 px-5 rounded-xl shadow-lg hover:bg-maroon-900 transition-all active:scale-95 ${className}`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      {t('download_app')}
    </a>
  );
};

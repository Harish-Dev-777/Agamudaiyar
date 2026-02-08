import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Member } from "../data/members";

interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/profile/${member.id}`}
        className="block bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all group"
      >
        <div className="aspect-[4/5] overflow-hidden relative">
          <img
            src={member.image}
            alt={member.id.toString()}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 bg-white border-t border-slate-100">
          <div className="mb-4">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
              {t("profile_id")} {member.id}
            </div>
            <div className="text-lg font-black text-slate-900 group-hover:text-[#800000] transition-colors leading-tight">
              {member.name}
            </div>
          </div>

          <div className="space-y-2 text-xs border-t border-slate-50 pt-4">
            <div className="flex justify-between items-center text-slate-500">
              <span className="font-tamil">{t("dob")}</span>
              <span className="text-slate-900 font-bold">{member.dob}</span>
            </div>
            <div className="flex justify-between items-center text-slate-500">
              <span className="font-tamil">{t("education")}</span>
              <span className="text-slate-900 font-bold truncate max-w-[120px] text-right">
                {member.education}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-500">
              <span className="font-tamil">{t("star")}</span>
              <span className="text-[#800000] font-black font-tamil bg-maroon-50 px-2 py-0.5 rounded-md">
                {member.star}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

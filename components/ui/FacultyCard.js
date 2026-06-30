import React from "react";

const FacultyCard = ({ member }) => (
  <div className="bg-white p-3 rounded-2xl border border-brand-accent shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
    <div className="w-full h-auto bg-slate-200 rounded-md mb-4 overflow-hidden">
      <img
        src={member.image || '/assets/images/dummy-men.jpg' }
        alt={member.name}
        className="w-full h-auto"
      />
    </div>
    <h3 className="text-lg font-bold text-brand-primary">{member.name}</h3>
    <p className="text-brand-accent font-semibold text-sm mb-1">
      {member.role}
    </p>
    <p className="text-slate-500 text-xs uppercase tracking-wider">
      {member.dept}
    </p>
  </div>
);

export default FacultyCard;

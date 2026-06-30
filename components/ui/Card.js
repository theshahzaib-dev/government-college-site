import React from "react";

const Card = ({Icon, fac}) => {
  return (
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow duration-300 group"
      >
        <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-300 transition-colors">
          [Image: {fac.title}]
        </div>
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-yellow-50 rounded-lg">
              {Icon && <Icon className="h-6 w-6 text-brand-accent" />}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{fac.title}</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            {fac.desc} Detailed specifications regarding operating hours, rules,
            and access permissions will be provided during the campus
            orientation.
          </p>
        </div>
      </div>
  );
};

export default Card;

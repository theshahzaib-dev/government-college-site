import React from "react";
import { stats } from "@/data/mockData";

const Statistics = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-36 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center p-4 border-r last:border-r-0 border-slate-100 last:border-none"
          >
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-2 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

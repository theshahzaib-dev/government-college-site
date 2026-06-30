import React from "react";

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 overflow-hidden py-16 lg:py-24 border-b-4 border-brand-accent">
      {/* Decorative Golden Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Decorative Label */}
        <span className="inline-block px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Government Official Portal
        </span>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
    </section>
  );
};

export default PageHero;

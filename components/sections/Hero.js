import React from "react";
import { collegeConfig } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white py-18 lg:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="bg-yellow-500/10 text-brand-accent border border-brand-accent px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest inline-block mb-6">
            Accredited Government Institution
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            {collegeConfig.name}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            {collegeConfig.tagline}. Providing accessible, high-tier education
            and creating global leaders since {collegeConfig.established}.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/admission"
              className="bg-brand-accent text-white px-8 py-3.5 rounded-md font-semibold shadow-lg hover:bg-[#c08d2d] transition flex items-center justify-center space-x-2 group"
            >
              <span>Apply Online</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-brand-accent hover:text-white text-brand-accent border border-brand-accent px-8 py-3.5 rounded-md font-semibold transition backdrop-blur-sm"
            >
              Explore History
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

import React from "react";

const PrincipalMessage = () => {
  return (
    <div>
      {/* Principal Message Segment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-100 p-8 lg:p-12 shadow-md flex flex-col lg:flex-row items-center gap-12">
          <div className="w-48 h-48 lg:w-64 lg:lh-64 bg-slate-100 rounded-full flex-shrink-0 border-4 border-slate-50 shadow-inner flex items-center justify-center text-slate-300 text-sm">
            <img src={"/assets/images/team/principal.png"} />
          </div>
          <div>
            <span className="text-brand-accent font-bold tracking-wider uppercase text-xs">
              Leadership Message
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-1 mb-4">
              Message from the Principal
            </h3>
            <p className="text-slate-600 leading-relaxed italic text-lg">
              "Welcome to the cornerstone of knowledge. Our mission goes
              completely beyond textbooks; we nurture critical thinkers,
              innovators, and responsible public leaders who are prepared to
              handle modern economic complexities while holding strong ethical
              foundations."
            </p>
            <div className="mt-6">
              <h5 className="font-bold text-slate-900 text-base">
                Prof. Mr. Muhammad Irfan Yasir
              </h5>
              <p className="text-xs text-slate-500 font-medium">
                Principal & Ph.D. in Chemistry
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMessage;

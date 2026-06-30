import PageHero from "@/components/global/PageHero";

export default function AdmissionPage() {
  return (
    <div>
      <PageHero
        title="Admission Guidelines & Process"
        subtitle="Detailed enrollment path for upcoming academic sessions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Process Timelines & Docs Checklist Matrix */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-3 list-disc list-inside text-slate-600 text-sm">
                <li>
                  Higher Secondary School Certificate (HSSC) Intermediate with
                  minimum 60% marks.
                </li>
                <li>
                  Equivalency certificates compiled from IBCC if passing via
                  Cambridge/O-Levels.
                </li>
                <li>
                  Domicile limits enforced according to governmental regional
                  quotas.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Required Document Checklist
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  🔷 Matriculation / O-Level Transcript
                </div>
                <div className="flex items-center space-x-2">
                  🔷 Intermediate Marks Sheet
                </div>
                <div className="flex items-center space-x-2">
                  🔷 Character Certificate from previous head
                </div>
                <div className="flex items-center space-x-2">
                  🔷 CNIC or B-Form copy
                </div>
              </div>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-xl shadow-md space-y-6">
            <h3 className="text-lg font-bold">Offline Paper Applications</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Prefer analog hardcopy applications? Access the printable setup
              document payload package down below.
            </p>
            <button className="w-full cursor-pointer bg-brand-accent hover:bg-[#c08d2d] transition text-white text-sm font-semibold py-3 rounded-md shadow-sm">
              Download Admission Pack (PDF)
            </button>
          </div>
        </div>

        {/* Pure Component Viewport Display Form Mock */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-brand-primary text-white p-6 border-b border-slate-800 text-center">
            <h3 className="text-lg font-bold tracking-wide uppercase">
              Application Form Preview Only
            </h3>
            <p className="text-xs text-amber-400 mt-1 font-medium">
              Digital online submissions require on-campus biometric
              verification visits.
            </p>
          </div>

          <form className="p-8 space-y-6 opacity-75   bg-slate-50/50">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Applicant Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 border focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-colors rounded-md text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Father's/Guardian CNIC
                </label>
                <input
                  type="text"
                  placeholder="00000-0000000-0"
                  className="w-full px-4 py-2.5 border focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-colors rounded-md text-sm bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Program Selection Focus
              </label>
              <select className="w-full px-4 py-2.5 border focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-colors0 rounded-md text-sm bg-white">
                <option>Pre-Engineering / Faculty of Sciences</option>
                <option>ICS / Computer Sciences</option>
              </select>
            </div>
            <div className="text-center pt-4">
              <span className="inline-block bg-white border-2 border-brand-accent text-brand-accent px-6 py-2 cursor-pointer hover:bg-brand-accent hover:text-white transition-all rounded-md font-semibold text-sm tracking-wide uppercase">
                Interactive Submission Disabled
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

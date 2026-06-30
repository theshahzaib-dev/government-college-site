import PageHero from "@/components/global/PageHero";
import { notices } from "@/data/mockData";
import { FileText, Download, BellRing } from "lucide-react";

export default function NoticesPage() {
  return (
    <div>
      <PageHero
        title="Official Notices & Downloads"
        subtitle="Stay updated with the latest administrative circulars, date sheets, and scholarship announcements."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-brand-primary px-6 py-4 border-b border-slate-800 flex items-center space-x-2 text-white">
            <BellRing className="h-5 w-5 text-amber-400" />
            <h3 className="font-semibold tracking-wide">
              Digital Notice Board
            </h3>
          </div>

          <ul className="divide-y divide-slate-100">
            {notices.map((notice) => (
              <li
                key={notice.id}
                className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 bg-yellow-50 text-brand-accent rounded-lg flex-shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {notice.date}
                      </span>
                      {notice.isNew && (
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded animate-pulse uppercase">
                          New
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {notice.title}
                    </h4>
                    <span className="text-sm text-brand-accent font-medium">
                      {notice.type}
                    </span>
                  </div>
                </div>

                <button className="flex items-center justify-center space-x-2 w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

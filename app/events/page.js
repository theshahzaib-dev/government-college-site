import PageHero from "@/components/global/PageHero";
import { events } from "@/data/mockData";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventsPage() {
  return (
    <div>
      <PageHero
        title="College Events & Announcements"
        subtitle="Stay updated with the latest academic schedules, seminars, and extracurricular activities."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 mt-12 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-brand-accent/80 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-brand-accent transition-all shadow-md"
            >
              {/* Date Block */}
              <div className="bg-brand-primary text-white rounded-lg p-4 text-center min-w-[120px] flex-shrink-0">
                <span className="block text-2xl font-black">
                  {event.date.split(" ")[1].replace(",", "")}
                </span>
                <span className="block text-sm font-medium text-brand-accent/90 uppercase tracking-widest">
                  {event.date.split(" ")[0]}
                </span>
              </div>

              {/* Event Details */}
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wide">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-slate-600 text-sm">{event.desc}</p>

                <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-500 font-medium">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>09:00 AM - 02:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>Main Auditorium</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

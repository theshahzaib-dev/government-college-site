import PageHero from "@/components/global/PageHero";
import Card from "@/components/ui/Card";
import { facilities } from "@/data/mockData";
import { BookOpen, Monitor, FlaskConical, Trophy, Tv, Bus } from "lucide-react";

const iconMap = { BookOpen, Monitor, FlaskConical, Trophy, Tv, Bus };

export default function FacilitiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        title="Campus Facilities"
        subtitle="Explore the state-of-the-art infrastructure provided by the government to facilitate comprehensive learning and personal growth."
      />
      <div className="max-w-7xl mx-auto px-4  py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {facilities.map((fac) => {
            const Icon = iconMap[fac.icon];
            return (
              <div key={fac.title}>
                <Card Icon={Icon} fac={fac} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import PageHero from "@/components/global/PageHero";
import FacultyCard from "@/components/ui/FacultyCard";
import { team } from "@/data/mockData";

export default function FacultyPage() {
  // 1. Separate the data before rendering
  const teachingStaff = team.filter((member) => member.type === "teaching");
  const nonTeachingStaff = team.filter(
    (member) => member.type === "non-teaching",
  );

  // Reusable Section Header Component
  const SectionHeader = ({ title }) => (
    <div className="flex items-center space-x-3 mb-8 border-l-4 border-brand-accent pl-4">
      <h2 className="text-2xl font-bold text-brand-primary">{title}</h2>
    </div>
  );

  return (
    <div>
      <PageHero
        title="Our Faculty & Staff"
        subtitle="Meet the dedicated professionals driving our academic excellence and operational success."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Teaching Staff Section */}
        <section className="mb-16">
          <SectionHeader title="Teaching Faculty" subtitle="d" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachingStaff.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Non-Teaching Staff Section */}
        <section>
          <SectionHeader title="Administrative & Support Staff" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nonTeachingStaff.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

import { Shield, Target, Award, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { collegeConfig } from "@/data/mockData";
import WhyUs from "@/components/sections/WhyUs";
import PageHero from "@/components/global/PageHero";

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHero
        title="About Our Institution"
        subtitle="Dedicated to fostering academic excellence, innovation, and leadership for over seven decades."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* College History Overview */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="prose prose-slate prose-lg text-slate-600">
              <SectionHeading
                title="Our Legacy & History"
                subtitle="A tradition of academic excellence."
                centered={false}
              />
              <p>
                Established in {collegeConfig.established}, {collegeConfig.name}{" "}
                was founded with a singular vision: to provide high-quality,
                accessible public education to the brightest minds of the
                region.
              </p>
              <p>
                Over the decades, we have evolved from a modest local
                institution into a premier postgraduate college. Our alumni
                network stretches across the globe, holding key positions in
                civil service, engineering, medicine, and the arts.
              </p>
              <p>
                Operating under the Higher Education Department, we strictly
                adhere to meritocratic principles, ensuring that talent is
                nurtured regardless of socio-economic background.
              </p>
            </div>
            <div className="bg-slate-200 rounded-2xl aspect-video flex items-center justify-center text-slate-400 border-4 border-white shadow-xl">
              [Historical Campus Image Placeholder]
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-accent text-white p-10 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute text-brand-primary top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32" />
            </div>
            <Target className="w-10 h-10 text-brand-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-brand leading-relaxed">
              To be a leading institution of higher education in Pakistan that
              empowers students from diverse backgrounds with knowledge, skills,
              and values to become lifelong learners, critical thinkers, and
              responsible citizens who contribute to the development of society
              and the world.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-10 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Shield className="w-32 h-32 text-slate-900" />
            </div>
            <Shield className="w-10 h-10 text-brand-accent mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To be a leading institution of higher education in Pakistan that
              empowers students from diverse backgrounds with knowledge, skills,
              and values to become lifelong learners, critical thinkers, and
              responsible citizens who contribute to the development of society
              and the world.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyUs />
      </div>
    </div>
  );
}

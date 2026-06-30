import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Monitor,
  FlaskConical,
  Trophy,
  Tv,
  Bus,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { facilities } from "@/data/mockData";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Card from "@/components/ui/Card";
import WhyUs from "@/components/sections/WhyUs";
import Maps from "@/components/sections/Maps";
import ContactForm from "@/components/sections/ContactForm";
import ContactSecretariat from "@/components/sections/ContactSecretariat";

// Dynamic Icon Registry System
const iconMap = { BookOpen, Monitor, FlaskConical, Trophy, Tv, Bus };

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      <Hero />
      {/* Statistics Section Block */}
      <Statistics />

      <PrincipalMessage />

      {/* Featured Facilities Dynamic Map Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Campus Infrastructure & Facilities"
          subtitle="Empowering academic brilliance with optimal resources, built for growth."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.slice(0, 3).map((fac) => {
            const Icon = iconMap[fac.icon];
            return (
              <div key={fac.id}>
                <Card Icon={Icon} fac={fac} />
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/facilities"
            className="text-brand-accent font-semibold hover:text-brand-primary transition-all inline-flex items-center space-x-1"
          >
            <span>View All Campus Infrastructure</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyUs />
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="Get in Touch"
          subtitle="For official inquiries, admissions support, or administrative matters."
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-12">
          {/* Contact Information & Map */}
          <div className="lg:col-span-2 space-y-8">
            <ContactSecretariat />

            {/* Map Embed Placeholder */}
            <Maps />
          </div>

          {/* Contact Form UI */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

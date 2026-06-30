import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { Award, BookOpen, Shield } from "lucide-react";

const WhyUs = () => {
  return (
    <section>
      <SectionHeading title="Why Choose Us?" centered={true} />
      <div className="grid sm:grid-cols-3 gap-8 mt-12">
        {[
          {
            icon: Award,
            title: "Merit-Based Excellence",
            desc: "Uncompromising focus on merit, ensuring a highly competitive and stimulating environment.",
          },
          {
            icon: BookOpen,
            title: "Exceptional Faculty",
            desc: "Learn from Ph.D. scholars and subject-matter experts with decades of pedagogical experience.",
          },
          {
            icon: Shield,
            title: "Government Recognized",
            desc: "Fully accredited degrees with maximum transferability and global recognition.",
          },
        ].map((feature, i) => (
          <div key={i} className="text-center p-6">
            <div className="mx-auto bg-yellow-50 w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <feature.icon className="w-8 h-8 text-brand-accent" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              {feature.title}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

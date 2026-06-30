"use client";

import PageHero from "@/components/global/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactSecretariat from "@/components/sections/ContactSecretariat";
import Maps from "@/components/sections/Maps";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Get in Touch"
        subtitle="For official inquiries, admissions support, or administrative matters."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

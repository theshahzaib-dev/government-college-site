import Link from "next/link";
import {
  Landmark,
  Mail,
  Phone,
  MapPin,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";
import { collegeConfig, navLinks } from "@/data/mockData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Identity block */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-white">
            <Landmark className="h-6 w-6 text-amber-400" />
            <span className="font-bold tracking-wider text-xl uppercase">
              {collegeConfig.shortName}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            A premier public educational institute focused on providing
            world-class learning infrastructure under the governance of the
            Higher Education Department.
          </p>
        </div>

        {/* Navigation Map links */}
        <div>
          <h4 className="text-md font-bold uppercase tracking-widest text-white mb-6">
            Quick Portal Directory
          </h4>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-brand-accent flex gap-2 hover:gap-3 w-full transition-all"
                >
                  <ArrowRight /> <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info metadata info */}
        <div className="space-y-3 text-md">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
            Contact Secretariat
          </h4>
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
            <span>{collegeConfig.contact.address}</span>
          </div>
          <Link
            href={`tel:${collegeConfig.contact.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center space-x-3"
          >
            <Phone className="h-5 w-5 text-brand-accent flex-shrink-0" />
            <span>{collegeConfig.contact.phone}</span>
          </Link>
          <Link
            href={`mailto:${collegeConfig.contact.email}`}
            className="flex items-center space-x-3"
          >
            <Mail className="h-5 w-5 text-brand-accent flex-shrink-0" />
            <span>{collegeConfig.contact.email}</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-brand-primary py-6 text-center text-sm text-white bg-slate-950">
        &copy; {new Date().getFullYear()}{" "}
        <Link href={"/"} className="text-brand-accent font-bold">
          {collegeConfig.name}
        </Link>
        . All Rights Reserved.
        <p className="text-sm mt-2 opacity-60 hover:opacity-100 transition-opacity">
          Designed & Developed by{" "}
          <a
            href="mailto:theshahzaib.dev@gmail.com"
            className="text-brand-accent hover:underline"
          >
            Muhammad Shahzaib
          </a>
        </p>
      </div>
    </footer>
  );
}

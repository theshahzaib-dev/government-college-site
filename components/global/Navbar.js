"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, collegeConfig } from "@/data/mockData";
import Dropdown from "./Dropdown"; // Ensure this component is created

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/assets/images/logo.png" className="h-12 w-12 object-contain" alt="Logo" />
            <div>
              <span className="font-bold text-slate-950 block text-base md:text-lg tracking-wide uppercase leading-tight">
                {collegeConfig.shortName}
              </span>
              <span className="text-xs text-slate-500 font-medium block">Govt. of Pakistan</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => {
              // Render Dropdown
              if (item.type === "dropdown") {
                return <Dropdown key={item.name} title={item.name} links={item.links} />;
              }
              // Render Standard Link
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                    isActive ? "text-brand-accent border-b-2 border-brand-accent rounded-b-none" : "text-slate-600 hover:text-brand-accent"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            
            <Link
              href="/admission"
              className="ml-4 bg-brand-accent text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#c08d2d] transition shadow-sm"
            >
              Admissions 2026
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-accent p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-xl">
          {navLinks.map((item) => {
            // Mobile Dropdown Handling
            if (item.type === "dropdown") {
              return (
                <div key={item.name} className="py-2">
                  <p className="px-4 text-xs font-bold text-slate-400 uppercase">{item.name}</p>
                  {item.links.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setIsOpen(false)} className="block px-6 py-2 text-slate-600 hover:text-brand-accent">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              );
            }
            // Mobile Standard Link
            return (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-brand-accent">
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
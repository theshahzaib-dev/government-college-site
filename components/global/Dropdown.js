"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Check if any link in this dropdown matches the current path
  const isActive = links.some((link) => link.href === pathname);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center cursor-pointer space-x-1 px-4 py-2 text-sm font-semibold transition-all duration-200 ${
          isActive
            ? "text-brand-accent border-b-2 border-brand-accent rounded-b-none"
            : "text-slate-600 hover:text-brand-accent hover:border-b-2 hover:border-brand-accent rounded-b-none"
        }`}
      >
        <span>{title}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close dropdown when user clicks a link
              className={`block px-4 py-2 text-sm ${
                pathname === link.href
                  ? "text-brand-accent bg-slate-50 font-bold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-brand-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

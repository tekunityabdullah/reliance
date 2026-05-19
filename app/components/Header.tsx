"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#000080] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Reliance Realty Logo"
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className={`group relative text-sm xl:text-base tracking-widest uppercase transition-colors
              ${pathname === l.href ? "text-[#c9a84c]" : "text-white/80"}`}
            >
              {l.name}

              {/* hover underline */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#c9a84c] transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CONTACT BUTTON (DESKTOP) */}
        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="relative inline-flex items-center justify-center
            text-black font-bold tracking-widest uppercase
            text-sm xl:text-base px-5 xl:px-6 py-2.5 xl:py-3
            rounded-[40px] transition-all hover:brightness-110"
            style={{ background: "radial-gradient(#F4C688, #9B6B27)" }}
          >
            Contact
            <span className="ml-2 text-xl xl:text-2xl">»</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-black text-2xl bg-[#b1823f] p-1 px-2 rounded"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#000080] px-6 pb-6 pt-2 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-white/90 text-lg tracking-widest uppercase ${
                pathname === l.href && "text-[#c9a84c]"
              }`}
            >
              {l.name}
            </Link>
          ))}

          <Link
            href="/contact-us"
            onClick={() => setOpen(false)}
            className="mt-2 text-center font-bold tracking-widest uppercase
            text-black text-lg px-6 py-3 rounded-full"
            style={{ background: "radial-gradient(#F4C688, #9B6B27)" }}
          >
            Contact »
          </Link>
        </div>
      </div>
    </nav>
  );
}
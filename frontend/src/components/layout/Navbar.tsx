"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "پرواز", href: "/flights" },
  { label: "هتل", href: "/hotels" },
  { label: "قطار", href: "/train" },
  { label: "اتوبوس", href: "/bus" },
  { label: "تور", href: "/tour" },
  { label: "بیمه", href: "/insurance" },
  { label: "پشتیبانی", href: "#support" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-row-reverse flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-3">
            <span>پشتیبانی ۲۴/۷: ۷۰۰ ۰۰۰ ۰۰۰ +۹۳</span>
            <span className="hidden md:inline">دانلود اپلیکیشن</span>
            <span className="hidden md:inline">راهنما و سوالات</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold text-slate-700">
              EN
            </button>
            <Link
              href="#"
              className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold text-slate-700"
            >
              ورود
            </Link>
            <Link
              href="#"
              className="rounded-full bg-[#ff7a00] px-3 py-1 text-[11px] font-semibold text-white"
            >
              ثبت‌نام
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-row-reverse items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-semibold text-slate-900">
            افغانی<span className="text-[#ff7a00]">‌بابا</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="btn-secondary">پیگیری رزرو</button>
          <button className="btn-primary">ورود سازمانی</button>
        </div>

        <button
          className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-slate-700 lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          منو
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navItems={navItems} />
    </header>
  );
}

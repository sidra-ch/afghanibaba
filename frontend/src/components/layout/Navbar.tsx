"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "بلیط هواپیما", href: "/flights" },
  { label: "بلیط اتوبوس", href: "/bus" },
  { label: "اقامت", href: "/hotels" },
  { label: "تور", href: "/tour" },
  { label: "ویزا", href: "/visa" },
  { label: "پنل آژانسی", href: "/agency" },
  { label: "بیشتر", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-row-reverse flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-white px-4 py-2 text-xs text-slate-600">
        <div className="flex flex-wrap items-center gap-3">
          <span>پشتیبانی ۲۴ ساعته: ۰۲۱ - ۴۳۹۰۰۰۰۰</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="border-b border-black text-slate-700 hover:text-slate-900"
          >
            مرکز پشتیبانی آنلاین
          </Link>
          <Link
            href="#"
            className="border-b border-black text-slate-700 hover:text-slate-900"
          >
            سفرهای من
          </Link>
          <Link
            href="#"
            className="rounded-md border border-black/10 px-3 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
          >
            ورود یا ثبت‌نام
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-row-reverse items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-semibold text-black">
            <span className="text-[#FDB713]">افغانی‌بابا</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-slate-900 whitespace-nowrap">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="btn-secondary text-xs">هتل</button>
          <button className="btn-secondary text-xs">پرواز</button>
          <button className="btn-secondary text-xs">تور</button>
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

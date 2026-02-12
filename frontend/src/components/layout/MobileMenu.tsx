"use client";

import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
};

export default function MobileMenu({ open, onClose, navItems }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 text-right shadow-2xl">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-slate-900">منو</p>
          <button
            className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold"
            onClick={onClose}
          >
            بستن
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-4 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <button className="btn-secondary">پیگیری رزرو</button>
          <button className="btn-primary">ورود سازمانی</button>
        </div>
      </div>
    </div>
  );
}

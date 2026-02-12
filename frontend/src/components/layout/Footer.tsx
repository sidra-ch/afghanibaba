import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-right md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">افغانی‌بابا</h3>
          <p className="mt-3 text-sm text-slate-600">
            رزرو حرفه‌ای بلیط، هتل، اتوبوس، تور و بیمه مسافرتی در افغانستان.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">خدمات</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/hotels">هتل</Link>
            </li>
            <li>
              <Link href="/flights">پرواز</Link>
            </li>
            <li>
              <Link href="/bus">اتوبوس</Link>
            </li>
            <li>
              <Link href="/insurance">بیمه</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">شرکت</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="#">درباره ما</Link>
            </li>
            <li>
              <Link href="#">فرصت‌های شغلی</Link>
            </li>
            <li>
              <Link href="#">همکاران</Link>
            </li>
            <li>
              <Link href="#">اخبار</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">تماس</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>+۹۳ (۰) ۷۰۰ ۰۰۰ ۰۰۰</li>
            <li>support@afghanibaba.com</li>
            <li>کابل، افغانستان</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-slate-500">
        © 2026 Afghanibaba. All rights reserved.
      </div>
    </footer>
  );
}

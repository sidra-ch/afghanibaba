"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { assetPath } from "@/lib/assetPath";
import Link from "next/link";

const companies = ["همه شرکت‌ها", "افغان‌گلف", "کلیدی تراول", "امان ترانسپورت", "شاه ترانس"];
const cities = ["کابل", "مزار شریف", "هرات", "قندهار", "بامیان", "شهر"];

const mockBuses = [
  { id: 1, company: "افغان‌گلف", origin: "کابل", destination: "مزار شریف", departure: "08:00", arrival: "14:00", duration: "6:00", price: 25, type: "VIP", capacity: 14, available: 8 },
  { id: 2, company: "کلیدی تراول", origin: "کابل", destination: "مزار شریف", departure: "09:30", arrival: "15:30", duration: "6:00", price: 22, type: "اقتصادی", capacity: 44, available: 20 },
  { id: 3, company: "امان ترانسپورت", origin: "کابل", destination: "هرات", departure: "07:00", arrival: "18:00", duration: "11:00", price: 30, type: "VIP", capacity: 14, available: 5 },
  { id: 4, company: "شاه ترانس", origin: "کابل", destination: "قندهار", departure: "06:00", arrival: "16:00", duration: "10:00", price: 28, type: "اقتصادی", capacity: 50, available: 15 },
  { id: 5, company: "افغان‌گلف", origin: "مزار شریف", destination: "کابل", departure: "08:00", arrival: "14:00", duration: "6:00", price: 25, type: "VIP", capacity: 14, available: 10 },
  { id: 6, company: "کلیدی تراول", origin: "کابل", destination: "بامیان", departure: "06:30", arrival: "12:30", duration: "6:00", price: 20, type: "اقتصادی", capacity: 44, available: 25 },
];

export default function BusPage() {
  const [searchParams, setSearchParams] = useState({ origin: "", destination: "", date: "", passengers: "1" });
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [buses, setBuses] = useState(mockBuses);

  const handleSearch = () => {
    const filtered = mockBuses.filter(bus => {
      if (searchParams.origin && bus.origin !== searchParams.origin) return false;
      if (searchParams.destination && bus.destination !== searchParams.destination) return false;
      if (selectedCompany !== "همه شرکت‌ها" && bus.company !== selectedCompany) return false;
      return true;
    });
    setBuses(filtered.length > 0 ? filtered : mockBuses);
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Navbar />
      <main>
        <div className="relative h-48 overflow-hidden">
          <img src={assetPath("/assets/banner-4.jpg")} alt="اتوبوس" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-white">بلیط اتوبوس</h1>
          </div>
        </div>

        <div className="mx-auto max-w-6xl -mt-8 px-4">
          <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-xl">
            <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-600">مبدا</label>
                <input
                  type="text"
                  placeholder="شهر مبدا"
                  className="input-field"
                  value={searchParams.origin}
                  onChange={(e) => setSearchParams({ ...searchParams, origin: e.target.value })}
                  list="origin-options"
                />
                <datalist id="origin-options">
                  {cities.map((city) => (<option key={city} value={city} />))}
                </datalist>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-600">مقصد</label>
                <input
                  type="text"
                  placeholder="شهر مقصد"
                  className="input-field"
                  value={searchParams.destination}
                  onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
                  list="dest-options"
                />
                <datalist id="dest-options">
                  {cities.map((city) => (<option key={city} value={city} />))}
                </datalist>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-600">تاریخ حرکت</label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-600">تعداد مسافر</label>
                <input type="number" min="1" max="10" placeholder="1" className="input-field" />
              </div>
              <div className="flex items-end">
                <button onClick={handleSearch} className="btn-primary h-12 w-full px-6">جستجو</button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[250px_1fr]">
            <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-lg h-fit">
              <h3 className="mb-4 text-sm font-semibold text-slate-900">فیلترها</h3>
              
              <div className="mb-4">
                <label className="mb-2 block text-xs font-semibold text-slate-600">شرکت</label>
                <select className="input-field" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                  {companies.map((company) => (<option key={company} value={company}>{company}</option>))}
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-xs font-semibold text-slate-600">نوع اتوبوس</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="rounded border-gray-300" /> VIP
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="rounded border-gray-300" /> اقتصادی
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">ساعت حرکت</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="radio" name="time" className="rounded border-gray-300" /> صبح (۶-۱۲)
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="radio" name="time" className="rounded border-gray-300" /> ظهر (۱۲-۱۸)
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="radio" name="time" className="rounded border-gray-300" /> شب (۱۸-۲۴)
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">{buses.length} اتوبوس یافت شد</span>
                <select className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm">
                  <option>مرتب سازی: ارزان‌ترین</option>
                  <option>زودترین</option>
                  <option>گران‌ترین</option>
                </select>
              </div>

              {buses.map((bus) => (
                <div key={bus.id} className="rounded-3xl border border-black/5 bg-white p-5 shadow-lg hover:shadow-xl transition">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1e6]">
                        <span className="text-lg font-bold text-[#FDB713]">{bus.company[0]}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{bus.company}</p>
                        <p className="text-xs text-slate-500">{bus.type} • {bus.capacity} نفره</p>
                      </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center gap-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-slate-900">{bus.departure}</p>
                        <p className="text-xs text-slate-500">{bus.origin}</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-slate-400">{bus.duration}</span>
                        <div className="h-px w-24 bg-slate-300 relative">
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-1 text-[10px] text-slate-400">→</span>
                        </div>
                        <span className="text-xs text-green-600">{bus.available} صندلی خالی</span>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-slate-900">{bus.arrival}</p>
                        <p className="text-xs text-slate-500">{bus.destination}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#FDB713]">${bus.price}</p>
                      <p className="text-xs text-slate-500">هر نفر</p>
                      <Link href="/bus-info" className="mt-2 btn-primary text-xs block">انتخاب</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-4">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900">بلیط اتوبوس | سفر زمینی</h2>
            <p className="mt-4 text-sm text-slate-600">
              افغانی‌بابا امکان رزرو آنلاین بلیط اتوبوس بین شهرهای افغانستان را فراهم کرده است.
              با انتخاب شرکت‌های معتبر حمل و نقل، سفری راحت و امن را تجربه کنید.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-[#f5f6f8] p-4">
                <h4 className="font-semibold text-slate-900">انتخاب صندلی</h4>
                <p className="mt-2 text-xs text-slate-600">انتخاب دقیق صندلی مورد نظر</p>
              </div>
              <div className="rounded-2xl bg-[#f5f6f8] p-4">
                <h4 className="font-semibold text-slate-900">شرکت‌های معتبر</h4>
                <p className="mt-2 text-xs text-slate-600">بهترین شرکت‌های حمل و نقل</p>
              </div>
              <div className="rounded-2xl bg-[#f5f6f8] p-4">
                <h4 className="font-semibold text-slate-900">قیمت شفاف</h4>
                <p className="mt-2 text-xs text-slate-600">بدون هزینه پنهان</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

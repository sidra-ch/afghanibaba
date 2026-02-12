"use client";

import { useMemo, useState } from "react";

type TabKey =
  | "پرواز"
  | "هتل"
  | "اتوبوس"
  | "تور"
  | "بیمه"
  | "قطار"
  | "ویزا";

type Field = {
  name: string;
  placeholder: string;
  type?: string;
};

const tabFields: Record<TabKey, Field[]> = {
  پرواز: [
    { name: "from", placeholder: "مبدا" },
    { name: "to", placeholder: "مقصد" },
    { name: "depart", placeholder: "تاریخ رفت", type: "date" },
    { name: "return", placeholder: "تاریخ برگشت", type: "date" },
  ],
  هتل: [
    { name: "destination", placeholder: "شهر مقصد" },
    { name: "checkin", placeholder: "تاریخ ورود", type: "date" },
    { name: "checkout", placeholder: "تاریخ خروج", type: "date" },
    { name: "guests", placeholder: "تعداد مهمان" },
  ],
  اتوبوس: [
    { name: "from", placeholder: "مبدا" },
    { name: "to", placeholder: "مقصد" },
    { name: "date", placeholder: "تاریخ حرکت", type: "date" },
    { name: "passengers", placeholder: "تعداد مسافر" },
  ],
  تور: [
    { name: "destination", placeholder: "شهر مقصد" },
    { name: "date", placeholder: "تاریخ تور", type: "date" },
    { name: "guests", placeholder: "تعداد نفرات" },
    { name: "budget", placeholder: "بودجه" },
  ],
  بیمه: [
    { name: "destination", placeholder: "مقصد" },
    { name: "start", placeholder: "شروع", type: "date" },
    { name: "end", placeholder: "پایان", type: "date" },
    { name: "travellers", placeholder: "تعداد مسافر" },
  ],
  قطار: [
    { name: "from", placeholder: "مبدا" },
    { name: "to", placeholder: "مقصد" },
    { name: "depart", placeholder: "تاریخ رفت", type: "date" },
    { name: "return", placeholder: "تاریخ برگشت", type: "date" },
  ],
  ویزا: [
    { name: "country", placeholder: "کشور مقصد" },
    { name: "type", placeholder: "نوع ویزا" },
    { name: "date", placeholder: "تاریخ سفر", type: "date" },
    { name: "count", placeholder: "تعداد متقاضی" },
  ],
};

const tabs: TabKey[] = ["پرواز", "هتل", "قطار", "اتوبوس", "تور", "بیمه", "ویزا"];
const tripTypes = ["رفت و برگشت", "یک طرفه"];
const cityOptions = [
  "کابل",
  "مزار شریف",
  "هرات",
  "قندهار",
  "دوبی",
  "استانبول",
  "دهلی",
  "تهران",
];

export default function SearchTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("پرواز");
  const [tripType, setTripType] = useState(tripTypes[0]);

  const fields = useMemo(() => tabFields[activeTab], [activeTab]);

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-2xl shadow-black/10">
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-black/5 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              activeTab === tab
                ? "bg-[#ff7a00] text-white"
                : "border border-black/10 bg-white text-slate-700 hover:bg-[#fff1e6]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "پرواز" ? (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
          {tripTypes.map((type) => (
            <button
              key={type}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                tripType === type
                  ? "bg-[#111827] text-white"
                  : "border border-black/10 bg-white text-slate-600"
              }`}
              onClick={() => setTripType(type)}
            >
              {type}
            </button>
          ))}
          <span className="text-[11px] text-slate-400">
            امکان مقایسه چند ایرلاین
          </span>
        </div>
      ) : null}

      <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
        {fields.map((field) => (
          <input
            key={field.name}
            className="input-field transition-all duration-300"
            placeholder={field.placeholder}
            type={field.type ?? "text"}
            list={field.type === "date" ? undefined : "city-options"}
          />
        ))}
        <button className="btn-primary h-12 px-8">جستجو</button>
      </div>

      <datalist id="city-options">
        {cityOptions.map((city) => (
          <option key={city} value={city} />
        ))}
      </datalist>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500">
        <span>پشتیبانی ۲۴/۷</span>
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span>تضمین کمترین قیمت</span>
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span>استرداد آنلاین</span>
      </div>
    </div>
  );
}

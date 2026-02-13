"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { assetPath } from "@/lib/assetPath";
import Link from "next/link";
import { Plane, Bus, MapPin, ChevronDown, Home, Hotel, ArrowLeftRight, X } from "lucide-react";

const companies = ["افغان‌گلف", "کلیدی تراول", "امان ترانسپورت", "شاه ترانس"];

const famousCities = [
  "کابل",
  "مزار شریف",
  "هرات",
  "قندهار",
  "جلال آباد",
  "کندز",
  "بامیان",
  "غزنی",
  "بلخ",
  "پنجشیر"
];

const mockBuses = [
  { id: 1, company: "افغان‌گلف", origin: "کابل", destination: "مزار شریف", departure: "08:00", arrival: "14:00", duration: "6h", price: 250, seats: 14, available: 8, type: "VIP" },
  { id: 2, company: "کلیدی تراول", origin: "کابل", destination: "مزار شریف", departure: "09:30", arrival: "15:30", duration: "6h", price: 220, seats: 44, available: 20, type: "اقتصادی" },
  { id: 3, company: "امان ترانسپورت", origin: "کابل", destination: "هرات", departure: "07:00", arrival: "18:00", duration: "11h", price: 300, seats: 14, available: 5, type: "VIP" },
  { id: 4, company: "شاه ترانس", origin: "کابل", destination: "قندهار", departure: "06:00", arrival: "16:00", duration: "10h", price: 280, seats: 50, available: 15, type: "اقتصادی" },
];

const faqItems = [
  { id: 1, question: "آیا خریدن بلیط اتوبوس برای کودکان زیر ۲ سال اجباری است؟", answer: "کودکان زیر ۲ سال می‌توانند بدون بلیط سفر کنند." },
  { id: 2, question: "چگونه بلیط اتوبوس را رزرو کنم؟", answer: "شهر مبدا و مقصد را انتخاب کنید و تاریخ سفر را مشخص نمایید." },
  { id: 3, question: "آیا می‌توانم بلیط را کنسل کنم؟", answer: "بله، مراجعه کنید به صفحه سفرهای شما و درخواست کنسلی دهید." },
  { id: 4, question: "وقت سفر چقدر است؟", answer: "وقت سفر بر اساس مسیر متفاوت است، معمولاً ۶ تا ۱۲ ساعت." },
  { id: 5, question: "چه مدارکی لازم است؟", answer: "تنها شناسنامه یا کارت ملی مورد نیاز است" },
  { id: 6, question: "میزان بار مجاز چقدر است؟", answer: "هر مسافر می‌تواند ۲۰ کیلوگرم چمدان حمل کند." },
];

export default function BusPage() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({ origin: "", destination: "", date: "", passengers: 1 });
  const [filteredBuses, setFilteredBuses] = useState(mockBuses);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [destinationFilter, setDestinationFilter] = useState("");
  const [originFilter, setOriginFilter] = useState("");

  const handleSearch = () => {
    if (!searchParams.origin || !searchParams.destination || !searchParams.date) {
      alert("لطفاً تمام فیلدها را پر کنید");
      return;
    }
    
    // Navigate to results page with search parameters
    const queryParams = new URLSearchParams({
      origin: searchParams.origin,
      destination: searchParams.destination,
      date: searchParams.date,
      passengers: searchParams.passengers.toString()
    });
    
    router.push(`/bus-info?${queryParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero with Search at Bottom */}
        <div className="relative" style={{ height: "500px" }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${assetPath("/assets/bus-page/bus-page.webp")}')` }}>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-end pb-0">
            {/* Search Form - Positioned at hero bottom */}
            <div className="max-w-6xl mx-auto px-4 w-full" style={{ transform: "translateY(50%)" }}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Tabs Navigation */}
                <div className="flex justify-around border-b text-sm font-medium">
                  <Link href="/flights" className="py-4 px-2 text-gray-500 hover:text-gray-900 flex flex-col items-center gap-1">
                    <Plane size={20} />
                    <span>پرواز داخلی</span>
                  </Link>
                  <Link href="/flights" className="py-4 px-2 text-gray-500 hover:text-gray-900 flex flex-col items-center gap-1">
                    <Plane size={20} />
                    <span>پرواز خارجی</span>
                  </Link>
                  <div className="py-4 px-2 text-blue-600 border-b-2 border-blue-600 flex flex-col items-center gap-1">
                    <Bus size={20} />
                    <span>اتوبوس</span>
                  </div>
                  <Link href="/tour" className="py-4 px-2 text-gray-500 hover:text-gray-900 flex flex-col items-center gap-1">
                    <MapPin size={20} />
                    <span>تور</span>
                  </Link>
                  <Link href="/hotels" className="py-4 px-2 text-gray-500 hover:text-gray-900 flex flex-col items-center gap-1">
                    <Hotel size={20} />
                    <span>هتل</span>
                  </Link>
                  <Link href="/residence" className="py-4 px-2 text-gray-500 hover:text-gray-900 flex flex-col items-center gap-1">
                    <Home size={20} />
                    <span>ویلا و اقامتگاه</span>
                  </Link>
                </div>

                {/* Search Inputs */}
                <div className="p-6 flex flex-col md:flex-row gap-4 items-stretch">
                  {/* Origin + Destination Wrapper */}
                  <div className="relative flex flex-1 items-start w-full gap-2">
                    {/* Origin Container */}
                    <div className="relative flex-1">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchParams.origin}
                          onChange={(e) => setSearchParams({ ...searchParams, origin: e.target.value })}
                          onFocus={() => setShowOriginDropdown(true)}
                          placeholder="مبدا (شهر، ترمینال)"
                          className="w-full border border-red-300 rounded-lg px-4 py-4 focus:outline-none text-right"
                        />
                      </div>
                      
                      {/* Origin Modal Filter */}
                      {showOriginDropdown && (
                        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setShowOriginDropdown(false)}>
                          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-96 max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b">
                              <h3 className="text-lg font-bold text-gray-900">شهر مبدا را انتخاب کنید</h3>
                              <button onClick={() => setShowOriginDropdown(false)} className="text-gray-500 hover:text-gray-900">
                                <X size={24} />
                              </button>
                            </div>
                            
                            {/* Filter Input */}
                            <div className="p-4 border-b">
                              <input
                                type="text"
                                placeholder="جستجو کنید..."
                                value={originFilter}
                                onChange={(e) => setOriginFilter(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-right"
                              />
                            </div>
                            
                            {/* Cities Grid */}
                            <div className="p-6 grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                              {famousCities
                                .filter(city => city.includes(originFilter) || originFilter === "")
                                .map((city, index) => (
                                  <div
                                    key={index}
                                    onClick={() => {
                                      setSearchParams({ ...searchParams, origin: city });
                                      setShowOriginDropdown(false);
                                      setOriginFilter("");
                                    }}
                                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg cursor-pointer border border-gray-200 hover:border-blue-300 transition"
                                  >
                                    <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{city}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Swap Circle Icon */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 mt-3">
                      <div 
                        onClick={() => {
                          setSearchParams({ 
                            ...searchParams, 
                            origin: searchParams.destination, 
                            destination: searchParams.origin 
                          });
                        }}
                        className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-gray-50 transition"
                      >
                        <ArrowLeftRight size={18} className="text-gray-500" />
                      </div>
                    </div>

                    {/* Destination Container */}
                    <div className="relative flex-1">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchParams.destination}
                          onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
                          onFocus={() => setShowDestinationDropdown(true)}
                          placeholder="مقصد (شهر، ترمینال)"
                          className="w-full border border-red-300 rounded-lg px-4 py-4 focus:outline-none text-right"
                        />
                      </div>
                      
                      {/* Destination Modal Filter */}
                      {showDestinationDropdown && (
                        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setShowDestinationDropdown(false)}>
                          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-96 max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b">
                              <h3 className="text-lg font-bold text-gray-900">شهر مقصد را انتخاب کنید</h3>
                              <button onClick={() => setShowDestinationDropdown(false)} className="text-gray-500 hover:text-gray-900">
                                <X size={24} />
                              </button>
                            </div>
                            
                            {/* Filter Input */}
                            <div className="p-4 border-b">
                              <input
                                type="text"
                                placeholder="جستجو کنید..."
                                value={destinationFilter}
                                onChange={(e) => setDestinationFilter(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-right"
                              />
                            </div>
                            
                            {/* Cities Grid */}
                            <div className="p-6 grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                              {famousCities
                                .filter(city => city.includes(destinationFilter) || destinationFilter === "")
                                .map((city, index) => (
                                  <div
                                    key={index}
                                    onClick={() => {
                                      setSearchParams({ ...searchParams, destination: city });
                                      setShowDestinationDropdown(false);
                                      setDestinationFilter("");
                                    }}
                                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg cursor-pointer border border-gray-200 hover:border-blue-300 transition"
                                  >
                                    <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{city}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Move Date */}
                  <input
                    type="date"
                    value={searchParams.date}
                    onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                    placeholder="تاریخ حرکت"
                    className={`flex-1 rounded-lg px-4 py-4 focus:outline-none w-full ${
                      !searchParams.date ? 'border border-red-300' : 'border border-gray-300'
                    }`}
                  />

                  {/* Search Button */}
                  <button 
                    onClick={handleSearch}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg px-8 py-4 w-full md:w-auto"
                  >
                    جستجو
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-6xl mx-auto px-4" style={{ paddingTop: "120px", paddingBottom: "48px" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">نتایج جستجو</h2>
          <div className="grid gap-6">
            {filteredBuses.map(bus => (
              <div key={bus.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Bus Image */}
                  <div className="w-full md:w-48 h-40 md:h-auto bg-gray-100 flex-shrink-0">
                    <img 
                      src={assetPath(`/assets/bus-page/bus0${bus.id}-6af3a02d.png`)}
                      alt={bus.company}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = assetPath("/assets/bus-page/bus01-6af3a02d.png");
                      }}
                    />
                  </div>

                  {/* Bus Details */}
                  <div className="flex-1 p-6 flex flex-wrap items-center justify-between gap-6">
                    {/* Company & Type */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{bus.company}</h3>
                      <p className="text-sm text-gray-600">{bus.type} • {bus.seats} نفره</p>
                      <p className="text-xs text-blue-600 font-semibold mt-2">{searchParams.date}</p>
                    </div>

                    {/* Time & Duration */}
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{bus.departure}</p>
                      <p className="text-sm text-gray-600">{bus.origin}</p>
                      <div className="flex items-center gap-2 my-2">
                        <span className="text-xs text-gray-500">{bus.duration}</span>
                        <div className="w-12 h-px bg-gray-300"></div>
                      </div>
                      <p className="text-xs text-green-600 font-semibold">{bus.available} صندلی خالی</p>
                    </div>

                    {/* Arrival */}
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{bus.arrival}</p>
                      <p className="text-sm text-gray-600">{bus.destination}</p>
                    </div>

                    {/* Price & Button */}
                    <div className="text-center">
                      <p className="text-3xl font-bold text-yellow-500">$ {bus.price}</p>
                      <p className="text-xs text-gray-600 mb-3">هر نفر</p>
                      <Link href="/bus-info" className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors inline-block">
                        انتخاب
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bus Companies */}
        <div className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">شرکت‌های اتوبوسی</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {companies.map((company, idx) => (
                <div key={company} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="h-32 bg-gray-700">
                    <img 
                      src={assetPath(`/assets/bus-page/bus0${(idx % 4) + 1}-6af3a02d.png`)}
                      alt={company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{company}</h3>
                    <Link href="#" className="text-yellow-400 hover:text-yellow-300 text-sm">
                      مشاهده بلیط‌ها →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Download */}
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">اپلیکیشن افغانی‌بابا</h2>
                <p className="text-gray-600 mb-6">سفر کنید با سهولت و امنیت. نسخه موبایل را دانلود کنید.</p>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition">
                    دانلود Android
                  </button>
                  <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition">
                    دانلود iOS
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={assetPath("/assets/bus-page/app-mobile-travels-lg-34ce5db4.webp")} 
                  alt="App"
                  className="max-w-xs h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">سوالات متداول</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-3">
              {faqItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                    className="w-full px-6 py-4 text-right hover:bg-gray-50 transition flex items-center justify-between"
                  >
                    <span className="font-bold text-gray-900">{item.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-yellow-500 transition ${expandedFaq === item.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedFaq === item.id && (
                    <div className="px-6 pb-4 text-right pt-2 border-t border-gray-200">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ Image */}
            <div>
              <img 
                src={assetPath("/assets/bus-page/bus04-ce1c7fff.png")}
                alt="FAQ"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

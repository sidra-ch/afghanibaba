"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { assetPath } from "@/lib/assetPath";
import { ChevronDown } from "lucide-react";

const mockBuses = [
  { id: 1, company: "افغان‌گلف", origin: "کابل", destination: "مزار شریف", departure: "08:00", arrival: "14:00", duration: "6h", price: 250, seats: 14, available: 8, type: "VIP" },
  { id: 2, company: "کلیدی تراول", origin: "کابل", destination: "مزار شریف", departure: "09:30", arrival: "15:30", duration: "6h", price: 220, seats: 44, available: 20, type: "اقتصادی" },
  { id: 3, company: "امان ترانسپورت", origin: "کابل", destination: "هرات", departure: "07:00", arrival: "18:00", duration: "11h", price: 300, seats: 14, available: 5, type: "VIP" },
  { id: 4, company: "شاه ترانس", origin: "کابل", destination: "قندهار", departure: "06:00", arrival: "16:00", duration: "10h", price: 280, seats: 50, available: 15, type: "اقتصادی" },
];

const faqItems = [
  { id: 1, question: "What time do buses depart from this route?", answer: "Buses typically depart between 06:00 AM and 21:00 PM from the terminal." },
  { id: 2, question: "Can I cancel my bus ticket?", answer: "Yes, you can cancel your ticket and receive a refund after the cancellation fee is applied." },
  { id: 3, question: "How many minutes before departure should we be at the terminal?", answer: "It is recommended to arrive at least 30 minutes before departure time." },
];

function BusSearchContent() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin") || "";
  const destination = searchParams.get("destination") || "";
  const date = searchParams.get("date") || "";
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [timeRange, setTimeRange] = useState([0, 24]);

  const filteredBuses = mockBuses.filter(bus => 
    bus.origin === origin && bus.destination === destination
  );

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {origin && destination ? `${origin} to ${destination} bus ticket` : "Bus Search Results"}
          </h1>
          {date && (
            <p className="text-gray-600 text-lg">
              {formatDate(date)}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Departure time</h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    value={timeRange[0]}
                    onChange={(e) => setTimeRange([parseInt(e.target.value), timeRange[1]])}
                    className="w-full"
                  />
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    value={timeRange[1]}
                    onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-gray-600">{String(timeRange[0]).padStart(2, "0")}:00</span>
                  <span className="text-sm text-gray-600">{String(timeRange[1]).padStart(2, "0")}:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Results */}
          <div className="md:col-span-3">
            {filteredBuses.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results: 0</h2>
                <p className="text-gray-600 text-lg mb-6">There are no buses for this date.</p>
                <p className="text-gray-700 mb-6">You can change your departure date.</p>
                <Link href="/bus" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition">
                  Change Date
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900 mb-6">Results: {filteredBuses.length}</p>
                
                {filteredBuses.map(bus => (
                  <div key={bus.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      {/* Bus Details */}
                      <div className="flex-1 w-full">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{bus.company}</h3>
                        <p className="text-sm text-gray-600 mb-4">{bus.type} • {bus.seats} seats</p>
                        
                        {/* Timeline */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                          <div>
                            <p className="text-2xl font-bold text-gray-900">{bus.departure}</p>
                            <p className="text-sm text-gray-600">{bus.origin}</p>
                          </div>
                          
                          <div className="flex-1 max-w-sm w-full">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{bus.duration}</span>
                              <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                            </div>
                            <p className="text-xs text-green-600 font-semibold mt-2">{bus.available} seats available</p>
                          </div>
                          
                          <div>
                            <p className="text-2xl font-bold text-gray-900">{bus.arrival}</p>
                            <p className="text-sm text-gray-600">{bus.destination}</p>
                          </div>
                        </div>
                      </div>

                      {/* Price & Button */}
                      <div className="text-right md:text-left">
                        <p className="text-3xl font-bold text-yellow-500 mb-2">${bus.price}</p>
                        <p className="text-xs text-gray-600 mb-4">per person</p>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg transition">
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently asked questions about {origin && destination ? `${origin} to ${destination} bus` : "bus tickets"}
          </h2>
          
          <div className="space-y-4">
            {faqItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition flex items-center justify-between"
                >
                  <span className="text-lg font-bold text-gray-900">{item.id}) {item.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-yellow-500 transition flex-shrink-0 ${expandedFaq === item.id ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === item.id && (
                  <div className="px-6 pb-4 pt-2 border-t border-gray-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Descriptive Content */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Buying {origin && destination ? `${origin} to ${destination}` : ""} bus tickets has never been easier. Buying bus tickets from Alibaba, the number one online ticket seller, at the best price, will not take more than two minutes. You can see the schedule and different bus companies for this route here. Of course, note that the price of bus tickets can vary depending on the day and time you choose. It is possible to easily buy bus tickets online and for other routes from all terminals and from all bus companies such as Afghan Golf, Kalidi Travel, Aman Transport, and Shah Trans on Alibaba.
          </p>
        </div>
      </div>
    </>
  );
}

export default function BusInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <BusSearchContent />
      </Suspense>
      <Footer />
    </div>
  );
}

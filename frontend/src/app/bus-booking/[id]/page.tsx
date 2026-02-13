"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BusBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Bus Booking</h1>
        <p className="text-gray-600 mb-6">Seat selection and passenger details are handled in the results page.</p>
        <Link href="/bus-info" className="text-blue-600 hover:underline">Back to results</Link>
      </main>
      <Footer />
    </div>
  );
}

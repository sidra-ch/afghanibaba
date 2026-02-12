import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BusPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16 text-right">
        <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-black/5">
          <img
            src="/assets/img/image-26.jpg"
            alt="بلیط اتوبوس"
            className="h-48 w-full object-cover object-center"
          />
          <div className="p-6">
            <h1 className="text-3xl font-semibold text-slate-900">بلیط اتوبوس</h1>
            <p className="mt-4 text-sm text-slate-600">
              این صفحه در حال تکمیل است.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchTabs from "@/components/search/SearchTabs";

const quickServices = [
  { title: "پرواز داخلی", desc: "بلیط لحظه‌ای و چارتر", image: "/assets/img/grid-1.jpg" },
  { title: "پرواز خارجی", desc: "قیمت رقابتی و پشتیبانی", image: "/assets/img/grid-2.jpg" },
  { title: "هتل", desc: "رزرو فوری با تخفیف", image: "/assets/img/grid-3.jpg" },
  { title: "اتوبوس", desc: "انتخاب صندلی و مسیر", image: "/assets/img/grid-4.jpg" },
  { title: "تور", desc: "پکیج‌های آماده سفر", image: "/assets/img/grid-5.jpg" },
  { title: "بیمه", desc: "پوشش کامل مسافرتی", image: "/assets/img/grid-6.jpg" },
];

const promos = [
  {
    title: "بلیت خارجی با تخفیف فوری",
    desc: "پروازهای دبی، استانبول و دهلی با نرخ ویژه.",
    tag: "پیشنهاد محدود",
    image: "/assets/img/banner-1.jpg",
  },
  {
    title: "اقامت امن در کابل",
    desc: "رزرو هتل‌های منتخب با پرداخت در محل.",
    tag: "پیشنهاد هتل",
    image: "/assets/img/banner-2.jpg",
  },
  {
    title: "تورهای نوروزی",
    desc: "پکیج کامل سفر خانوادگی با راهنما.",
    tag: "تور ویژه",
    image: "/assets/img/banner-3.jpg",
  },
];

const features = [
  {
    title: "تضمین کمترین قیمت",
    desc: "در صورت یافتن نرخ کمتر، اختلاف را برمی‌گردانیم.",
  },
  {
    title: "پشتیبانی ۲۴/۷",
    desc: "تیم پشتیبانی در تمام مراحل کنار شماست.",
  },
  {
    title: "استرداد آنلاین",
    desc: "لغو و استرداد بدون مراجعه حضوری.",
  },
  {
    title: "پرداخت امن",
    desc: "درگاه‌های معتبر و فاکتور رسمی.",
  },
];

const routes = [
  { city: "کابل → دوبی", price: "از ۲۲۰ دلار" },
  { city: "کابل → استانبول", price: "از ۱۸۰ دلار" },
  { city: "کابل → دهلی", price: "از ۱۶۰ دلار" },
  { city: "کابل → تهران", price: "از ۱۴۰ دلار" },
  { city: "کابل → مزار شریف", price: "از ۷۵ دلار" },
  { city: "کابل → هرات", price: "از ۶۵ دلار" },
];

const guides = [
  {
    title: "راهنمای سفر به دوبی",
    desc: "بهترین زمان سفر و نکات ویزا.",
    image: "/assets/img/blog-1.jpg",
  },
  {
    title: "هزینه‌های سفر به استانبول",
    desc: "بودجه‌بندی دقیق و حمل و نقل.",
    image: "/assets/img/blog-2.jpg",
  },
  {
    title: "اقامت اقتصادی در کابل",
    desc: "هتل‌ها و اقامتگاه‌های امن.",
    image: "/assets/img/blog-3.jpg",
  },
];

const primaryLinks = [
  { en: "Flight ticket", fa: "بلیط هواپیما" },
  { en: "Train ticket", fa: "بلیط قطار" },
  { en: "Bus ticket", fa: "بلیط اتوبوس" },
  { en: "Tour", fa: "تور" },
  { en: "Visa", fa: "ویزا" },
  { en: "Agency panel", fa: "پنل آژانسی" },
];

const headerShortcuts = [
  { en: "Online Support Center", fa: "مرکز پشتیبانی آنلاین" },
  { en: "My Trips", fa: "سفرهای من" },
];

const otherServices = [
  {
    titleEn: "Safar Card (Corporate)",
    titleFa: "سفرکارت (سازمانی)",
    badge: "New",
    image: "/assets/img/image-10.avif",
  },
  {
    titleEn: "Installment travel",
    titleFa: "سفر اقساطی",
    badge: "جدید",
    image: "/assets/img/image-11.avif",
  },
  {
    titleEn: "Travel visa",
    titleFa: "ویزای سفر",
    badge: null,
    image: "/assets/img/image-12.avif",
  },
];

const usefulBanners = [
  {
    titleEn: "Useful links",
    titleFa: "لینک های مفید",
    image: "/assets/img/banner-7.jpg",
  },
  {
    titleEn: "Special offers",
    titleFa: "پیشنهادهای ویژه",
    image: "/assets/img/banner-8.jpg",
  },
];

const faqs = [
  {
    qEn: "How many days before a flight should I buy a ticket?",
    qFa: "چند روز قبل از پرواز بلیط هواپیما بخریم؟",
  },
  {
    qEn: "What is the baggage allowance on each flight?",
    qFa: "در هر پرواز میزان بار مجاز چقدر است؟",
  },
  {
    qEn: "How are infant and child ticket prices calculated?",
    qFa: "نرخ بلیط برای نوزادان و کودکان چگونه است؟",
  },
  {
    qEn: "Is online booking more expensive than in-person purchase?",
    qFa: "رزرو آنلاین هزینه بیشتری از خرید حضوری دارد؟",
  },
  {
    qEn: "Can I refund a ticket after online purchase?",
    qFa: "آیا پس از خرید اینترنتی امکان استرداد وجود دارد؟",
  },
  {
    qEn: "Can I change the passenger name after purchase?",
    qFa: "آیا پس از خرید امکان تغییر نام وجود دارد؟",
  },
  {
    qEn: "Can I choose my seat when booking online?",
    qFa: "هنگام رزرو آنلاین امکان انتخاب صندلی هست؟",
  },
];

const trustBadges = [
  {
    titleEn: "Rank one trip",
    titleFa: "رتبه یک سفر",
    descEn: "A trusted supplier of tourism products.",
    descFa: "معتبرترین عرضه کننده محصولات گردشگری.",
  },
  {
    titleEn: "Companion on every journey",
    titleFa: "همسفر هر سفر",
    descEn: "Providing flights, trains, buses, hotels and tours.",
    descFa: "ارائه خدمات پرواز، قطار، اتوبوس، هتل و تور.",
  },
  {
    titleEn: "24/7 support",
    titleFa: "پشتیبانی ۲۴ ساعته",
    descEn: "Assistance at every step of your trip.",
    descFa: "همراهی در تمام مراحل سفر.",
  },
];

const footerMegaLinks = [
  {
    titleEn: "Alibaba",
    titleFa: "علی بابا",
    links: [
      "About us",
      "Contact us",
      "Why us",
      "Alibaba Plus",
      "Travel insurance",
      "Alibaba Magazine",
    ],
  },
  {
    titleEn: "Customer service",
    titleFa: "خدمات مشتریان",
    links: [
      "Online Support Center",
      "Shopping Guide",
      "Refund Guide",
      "Rules and regulations",
      "Q & A",
    ],
  },
  {
    titleEn: "More information",
    titleFa: "اطلاعات تکمیلی",
    links: [
      "Organizational sales",
      "Agency panel",
      "Careers",
      "Satisfaction survey",
    ],
  },
];

const domesticFilters = [
  "انتخاب بر اساس ساعت حرکت",
  "فیلتر نوع بلیط (سیستمی/چارتری)",
  "فیلتر کلاس پروازی",
  "انتخاب بر اساس ایرلاین داخلی",
];

const internationalFilters = [
  "انتخاب بر اساس ساعت حرکت و رسیدن",
  "فیلتر تعداد توقف ها",
  "نمایش پروازهای بدون توقف طولانی",
  "فیلتر بار چمدان",
  "تنظیم مدت زمان توقف",
  "فیلتر فرودگاه های مسیر",
  "انتخاب مدل هواپیما",
  "فیلتر قیمتی بر اساس بودجه",
];

const domesticAirlines = [
  "ماهان",
  "زاگرس",
  "کیش ایر",
  "قشم ایر",
  "آسمان",
  "کاسپین",
  "تابان",
  "وارش",
  "معراج",
];

const internationalAirlines = [
  "IranAirtour",
  "QeshmAir",
  "AirArabia",
  "Mahan Airlines",
  "Flydubai",
  "Emirates",
  "Ajet",
  "Qatar Airways",
  "Turkish Airlines",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#0b1220] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/img/home-page.webp')" }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,122,0,0.25),_transparent_55%)]" />
            <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.28),_transparent_45%)]" />
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-12">
            <div className="space-y-6 text-center md:text-right">
              <div className="pill inline-flex items-center gap-2 border-white/20 bg-white/10 text-white">
                <span className="h-2 w-2 rounded-full bg-[#ff7a00]" />
                تجربه یکپارچه رزرو سفر
              </div>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                بلیط پرواز، هتل، اتوبوس و تور را یکجا رزرو کنید.
              </h1>
              <p className="text-base leading-7 text-white/80 md:text-lg">
                افغانی‌بابا با شبکه تامین‌کنندگان معتبر و پشتیبانی شبانه‌روزی،
                سفر شما را ساده و مطمئن می‌کند.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <button className="btn-primary">شروع جستجو</button>
                <button className="btn-secondary">پیشنهادهای ویژه</button>
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-xs text-white/70 md:justify-start">
                <span className="rounded-full border border-white/20 px-3 py-2">
                  تضمین قیمت
                </span>
                <span className="rounded-full border border-white/20 px-3 py-2">
                  استرداد آنلاین
                </span>
                <span className="rounded-full border border-white/20 px-3 py-2">
                  تاییدیه فوری
                </span>
              </div>
            </div>

            <div className="mx-auto mt-10 w-full max-w-5xl">
              <SearchTabs />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-black/5 bg-white p-5 text-right shadow-lg shadow-black/5">
            <div className="flex flex-wrap gap-3">
              {primaryLinks.map((item) => (
                <div
                  key={item.en}
                  className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-slate-700"
                >
                  {item.fa} / {item.en}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
              {headerShortcuts.map((item) => (
                <div
                  key={item.en}
                  className="rounded-full border border-black/10 px-4 py-2"
                >
                  {item.fa} / {item.en}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5 md:grid-cols-3 lg:grid-cols-6">
            {quickServices.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="h-14 w-14 overflow-hidden rounded-2xl bg-[#fff1e6]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {service.title}
                </p>
                <p className="text-xs text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="flex items-center justify-between">
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                پیشنهادهای ویژه
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                بهترین پیشنهادهای سفر برای شما.
              </h2>
            </div>
            <Link href="#" className="text-sm font-semibold text-[#ff7a00]">
              مشاهده همه
            </Link>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {promos.map((promo) => (
              <div
                key={promo.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {promo.tag}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {promo.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{promo.desc}</p>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="h-32 w-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="text-right">
                  <p className="text-sm font-semibold text-slate-900">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-black/5 bg-[#101826] p-8 text-right text-white shadow-lg shadow-black/10">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                اپلیکیشن افغانی‌بابا
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                سفرهای خود را از موبایل مدیریت کنید.
              </h2>
              <p className="mt-3 text-sm text-white/80">
                اعلان لحظه‌ای، مدیریت رزرو و دسترسی سریع به بلیط‌ها.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-2xl bg-white/10">
                  <img
                    src="/assets/img/thumb.jpg"
                    alt="QR"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="btn-secondary">App Store</button>
                  <button className="btn-secondary">Google Play</button>
                  <button className="btn-secondary">مشاهده لینک ها</button>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white p-8 text-right shadow-lg shadow-black/5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                سازمانی
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                مدیریت سفر سازمانی با داشبورد حرفه‌ای.
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                گزارش‌گیری، صورتحساب متمرکز و پشتیبانی اختصاصی.
              </p>
              <button className="mt-6 btn-primary">درخواست دمو</button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="flex items-end justify-between">
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                مسیرهای محبوب
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                پررزروترین مسیرهای این هفته.
              </h2>
            </div>
            <button className="btn-secondary">همه مسیرها</button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((item) => (
              <div
                key={item.city}
                className="rounded-3xl border border-black/5 bg-white p-5 text-right shadow-lg shadow-black/5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.city}
                </p>
                <p className="mt-2 text-xs text-slate-500">{item.price}</p>
                <button className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7a00]">
                  مشاهده پیشنهاد
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            {otherServices.map((service) => (
              <div
                key={service.titleEn}
                className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 overflow-hidden rounded-2xl bg-[#fff1e6]">
                    <img
                      src={service.image}
                      alt={service.titleEn}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  {service.badge ? (
                    <span className="rounded-full bg-[#111827] px-2 py-1 text-[10px] text-white">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {service.titleFa}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{service.titleEn}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-2">
            {usefulBanners.map((banner) => (
              <div
                key={banner.titleEn}
                className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={banner.image}
                    alt={banner.titleEn}
                    className="h-40 w-full object-cover object-center"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {banner.titleFa} / {banner.titleEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16" id="support">
          <div className="flex items-center justify-between">
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                راهنمای سفر
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                محتوای کاربردی برای برنامه‌ریزی سفر.
              </h2>
            </div>
            <Link href="#" className="text-sm font-semibold text-[#ff7a00]">
              مشاهده همه
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-36 w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{guide.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-3xl border border-black/5 bg-white p-8 text-right shadow-lg shadow-black/5">
            <h2 className="text-2xl font-semibold text-slate-900">
              بلیط هواپیما | Flight ticket
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              افغانی بابا از سال ها پیش با هدف ساده کردن خرید آنلاین بلیط پرواز
              فعالیت خود را آغاز کرده است. امروز این پلتفرم به یکی از معتبرترین
              گزینه ها برای خرید بلیط پرواز داخلی و خارجی تبدیل شده است.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Afghanibaba helps you compare multiple airlines and prices, pick
              the right flight time, and complete purchase in a few steps with
              24/7 support.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              مزایای خرید بلیط هواپیما | Benefits
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              امکان جستجو و مقایسه سریع، ابزارهای فیلتر پیشرفته، و استرداد آنلاین
              باعث می شود انتخاب های دقیق تری داشته باشید.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              تقویم قیمتی | Price calendar
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              تقویم قیمتی به شما کمک می کند روزهای ارزان تر را پیدا کنید و رزرو
              خود را با هزینه کمتر انجام دهید.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              فیلترهای جستجو | Search filters
            </h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  داخلی | Domestic
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {domesticFilters.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  خارجی | International
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {internationalFilters.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              پرداخت آسان و پشتیبانی | Payment & Support
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              پرداخت با کارت های بانکی انجام می شود و بلیط پس از خرید به ایمیل
              شما ارسال خواهد شد. تیم پشتیبانی ۲۴ ساعته همیشه در کنار شماست.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              ایرلاین ها | Airlines
            </h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  داخلی | Domestic
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {domesticAirlines.map((airline) => (
                    <span
                      key={airline}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-slate-600"
                    >
                      {airline}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  خارجی | International
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {internationalAirlines.map((airline) => (
                    <span
                      key={airline}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-slate-600"
                    >
                      {airline}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              استرداد بلیط | Online refund
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              در صورت تغییر برنامه سفر، می توانید بلیط خود را طبق قوانین استرداد
              کنسل کنید و مبلغ قابل بازگشت را در کوتاه ترین زمان دریافت کنید.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-3xl border border-black/5 bg-white p-8 text-right shadow-lg shadow-black/5">
            <h2 className="text-2xl font-semibold text-slate-900">
              پرسش های شما | FAQ
            </h2>
            <div className="mt-6 grid gap-3">
              {faqs.map((item) => (
                <div
                  key={item.qEn}
                  className="rounded-2xl border border-black/5 bg-[#fbfbfb] px-4 py-3"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.qFa}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.qEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.titleEn}
                className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {badge.titleFa}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{badge.titleEn}</p>
                <p className="mt-3 text-sm text-slate-600">{badge.descFa}</p>
                <p className="mt-2 text-xs text-slate-500">{badge.descEn}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5">
            <div className="grid gap-6 md:grid-cols-3">
              {footerMegaLinks.map((group) => (
                <div key={group.titleEn}>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {group.titleEn}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {group.titleFa}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {group.links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#fff7f0] p-4 text-sm text-slate-600">
              تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰ | Support: 021 - 43900000
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

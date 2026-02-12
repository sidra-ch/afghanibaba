import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { assetPath } from "@/lib/assetPath";

const highlights = [
  {
    titleEn: "Safe and predictable travel",
    titleFa: "سفر ایمن و قابل پیش بینی",
    textEn:
      "Buses are a dependable option for near and far destinations. You can relax without worrying about weather swings, fuel changes, or complicated transfers.",
    textFa:
      "اتوبوس گزینه ای قابل اعتماد برای مسیرهای نزدیک و دور است و می توانید بدون دغدغه تغییرات آب و هوا یا جابه جایی های پیچیده سفر کنید.",
  },
  {
    titleEn: "Comfort and calm on the road",
    titleFa: "راحتی و آرامش در مسیر",
    textEn:
      "Modern buses offer quieter cabins, stable rides, and amenities that make long routes more pleasant.",
    textFa:
      "اتوبوس های امروزی کابین آرام تر، حرکت پایدارتر و امکاناتی دارند که سفرهای طولانی را دلپذیرتر می کند.",
  },
];

const sections = [
  {
    id: "buy-online",
    image: assetPath("/assets/banner-4.jpg"),
    titleEn: "Buy bus tickets online",
    titleFa: "خرید آنلاین بلیط اتوبوس",
    textEn:
      "Online purchase lets you compare prices, choose a precise departure time, select from multiple operators, pay quickly with local cards, and request refunds without visiting an office.",
    textFa:
      "خرید آنلاین امکان مقایسه قیمت ها، انتخاب ساعت دقیق حرکت، انتخاب بین شرکت های مختلف، پرداخت سریع و ثبت درخواست استرداد را بدون مراجعه حضوری فراهم می کند.",
  },
  {
    id: "refund",
    image: assetPath("/assets/banner-5.jpg"),
    titleEn: "Online bus ticket refund",
    titleFa: "استرداد آنلاین بلیط اتوبوس",
    textEn:
      "Refunds used to require in-person visits. Now you can cancel and receive the refundable amount online after the cancellation fee is applied.",
    textFa:
      "در گذشته استرداد بلیط نیاز به مراجعه حضوری داشت. حالا می توانید به صورت آنلاین بلیط را لغو کرده و مبلغ قابل استرداد را پس از کسر جریمه دریافت کنید.",
  },
  {
    id: "group-buy",
    image: assetPath("/assets/banner-6.jpg"),
    titleEn: "Group buying",
    titleFa: "خرید گروهی",
    textEn:
      "You can purchase multiple seats in a single order and request adjacent seats for family or group travel.",
    textFa:
      "امکان خرید چند صندلی در یک سفارش وجود دارد و می توانید صندلی های کنار هم برای سفرهای خانوادگی یا گروهی درخواست کنید.",
  },
  {
    id: "price",
    image: assetPath("/assets/kabul-hero.jpg"),
    titleEn: "Bus ticket price",
    titleFa: "قیمت بلیط اتوبوس",
    textEn:
      "Bus travel can be an economical choice. Prices depend on route, operator, and bus type (standard, VIP, or sleeper).",
    textFa:
      "سفر با اتوبوس معمولا اقتصادی است. قیمت به مسیر، شرکت و نوع اتوبوس (معمولی، وی آی پی یا خوابدار) بستگی دارد.",
  },
  {
    id: "reservation",
    image: assetPath("/assets/about.jpg"),
    titleEn: "Bus ticket reservation",
    titleFa: "رزرو بلیط اتوبوس",
    textEn:
      "To reserve a ticket, enter your origin, destination, and travel date. Review available buses, compare features, and finalize your booking in minutes.",
    textFa:
      "برای رزرو بلیط، مبدا، مقصد و تاریخ سفر را وارد کنید. اتوبوس های موجود را بررسی کرده، امکانات را مقایسه کنید و رزرو را در چند دقیقه نهایی کنید.",
  },
  {
    id: "cabins",
    image: assetPath("/assets/banner.jpg"),
    titleEn: "VIP seats and comfort",
    titleFa: "صندلی های VIP و راحتی",
    textEn:
      "Some premium buses offer more private seating areas or sleeper-style seats that provide extra comfort for families and longer routes.",
    textFa:
      "برخی اتوبوس های لوکس صندلی های راحت تر و فضای خصوصی تری ارائه می دهند که برای سفرهای طولانی مناسب است.",
  },
  {
    id: "students",
    image: assetPath("/assets/bamyan-tour.jpg"),
    titleEn: "Bus tickets for student trips",
    titleFa: "بلیط اتوبوس برای سفرهای دانشجویی",
    textEn:
      "Affordable fares make bus travel popular with students who commute between cities frequently.",
    textFa:
      "قیمت مناسب باعث شده اتوبوس انتخاب محبوب دانشجویانی باشد که بین شهرها تردد دارند.",
  },
  {
    id: "busy-routes",
    image: assetPath("/assets/bg.jpg"),
    titleEn: "Buy bus tickets for busy routes",
    titleFa: "خرید بلیط اتوبوس برای مسیرهای پرتردد",
    textEn:
      "High-demand routes often sell out quickly. Online booking helps you secure seats during peak seasons.",
    textFa:
      "مسیرهای پرتردد معمولا سریع پر می شوند. رزرو آنلاین کمک می کند در فصل های شلوغ صندلی خود را مطمئن کنید.",
  },
  {
    id: "tehran-mashhad",
    image: assetPath("/assets/about-1.jpg"),
    titleEn: "Tehran - Mashhad bus ticket",
    titleFa: "بلیط اتوبوس تهران - مشهد",
    textEn:
      "This is one of the busiest intercity routes with multiple operators and VIP coaches.",
    textFa:
      "این مسیر یکی از پرترددترین مسیرهای بین شهری است و شرکت های مختلف آن را پوشش می دهند.",
  },
];

const companies = [
  { nameEn: "Raja coaches", nameFa: "اتوبوس های رجا", logo: assetPath("/assets/logo-img.png") },
  { nameEn: "Banrail coaches", nameFa: "اتوبوس های بان ریل", logo: assetPath("/assets/logo-img.png") },
  { nameEn: "Fadak coaches", nameFa: "اتوبوس های فدك", logo: assetPath("/assets/logo-img.png") },
  { nameEn: "Noor Reza coaches", nameFa: "اتوبوس های نور رضا", logo: assetPath("/assets/logo-img.png") },
];

const companyDetails = [
  {
    titleEn: "Raja coaches",
    titleFa: "اتوبوس های رجا",
    textEn:
      "Raja offers a range of services from premium to economy. Seat classes and schedules vary by route.",
    textFa:
      "رجا انواع خدمات از اقتصادی تا لوکس ارائه می دهد. کلاس صندلی و برنامه حرکت بسته به مسیر متفاوت است.",
  },
  {
    titleEn: "Safir and partner operators",
    titleFa: "سفیر و شرکت های همکار",
    textEn:
      "Safir and its partner operators cover major intercity routes and provide multiple seat categories.",
    textFa:
      "سفیر و شرکت های همکار مسیرهای اصلی بین شهری را پوشش می دهند و دسته بندی صندلی متنوع دارند.",
  },
  {
    titleEn: "Banrail",
    titleFa: "بان ریل",
    textEn:
      "Banrail expanded its fleet over time and serves a significant share of passengers.",
    textFa:
      "بان ریل با توسعه ناوگان خود سهم قابل توجهی از جابه جایی مسافران را پوشش می دهد.",
  },
  {
    titleEn: "Kowsar Rail",
    titleFa: "کوثر",
    textEn:
      "Kowsar focuses on comfort-oriented coaches and long routes, offering hospitality services on select lines.",
    textFa:
      "کوثر بر اتوبوس های راحت و مسیرهای طولانی تمرکز دارد و در برخی خطوط خدمات پذیرایی ارائه می کند.",
  },
];

const facilityNotes = [
  {
    titleEn: "Bus types and seating",
    titleFa: "انواع اتوبوس و صندلی",
    textEn:
      "Intercity buses are typically standard, VIP, or sleeper. VIP seats are wider and recline more.",
    textFa:
      "اتوبوس های بین شهری معمولا معمولی، وی آی پی یا خوابدار هستند. صندلی های وی آی پی عریض ترند.",
  },
  {
    titleEn: "Route coverage",
    titleFa: "پوشش مسیرها",
    textEn:
      "Major corridors and regional lines are served daily, with extra departures during holidays.",
    textFa:
      "مسیرهای اصلی و منطقه ای روزانه پوشش داده می شوند و در تعطیلات سرویس های بیشتری دارند.",
  },
];

const magazine = [
  {
    titleEn: "How to travel to Mashhad at the lowest cost?",
    titleFa: "چگونه با کمترین هزینه به مشهد سفر کنیم؟",
    image: assetPath("/assets/img/blog-4.jpg"),
  },
  {
    titleEn: "What are the luxury buses on the Tehran - Mashhad route?",
    titleFa: "اتوبوس های لوکس مسیر تهران - مشهد کدام اند؟",
    image: assetPath("/assets/img/blog-6.jpg"),
  },
  {
    titleEn: "Why buy bus tickets online?",
    titleFa: "چرا بلیط اتوبوس را آنلاین بخریم؟",
    image: assetPath("/assets/img/blog5.jpg"),
  },
];

const footerLinks = [
  {
    titleEn: "افغانی‌بابا",
    titleFa: "افغانی‌بابا",
    links: [
      "About us",
      "Contact us",
      "Why Afghanibaba?",
      "Afghanibaba Plus",
      "Afghanibaba Magazine",
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
      "Questions and Answers",
      "Additional information",
    ],
  },
  {
    titleEn: "Business",
    titleFa: "کسب و کار",
    links: [
      "Organizational sales",
      "Agency Panel",
      "Job opportunities",
      "Satisfaction measurement",
      "Contact information",
    ],
  },
];

const badges = [
  {
    titleEn: "Rank one trip",
    titleFa: "رتبه اول سفر",
    textEn: "The most reputable supplier of tourism products in Iran.",
    textFa: "معتبرترین تامین کننده محصولات گردشگری در ایران.",
  },
  {
    titleEn: "A companion on every journey",
    titleFa: "همسفر همیشگی",
    textEn: "Providing all travel services (flights, buses, hotels and tours).",
    textFa: "ارائه همه خدمات سفر (پرواز، اتوبوس، هتل و تور).",
  },
  {
    titleEn: "Support at every moment",
    titleFa: "پشتیبانی در همه مراحل",
    textEn: "24-hour support and assistance across your trip.",
    textFa: "پشتیبانی ۲۴ ساعته در تمام مراحل سفر.",
  },
];

export default function BusInfoPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Navbar />
      <main>
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-right">
              <div className="pill inline-flex items-center gap-2">
                راهنمای جامع بلیط اتوبوس
              </div>
              <h1 className="text-4xl font-semibold text-slate-900">
                Bus ticket | بلیط اتوبوس
              </h1>
              <p className="text-base leading-7 text-slate-600">
                Traveling by bus is safe and reliable for near and far routes.
                It offers steady comfort and a calmer experience on the road.
              </p>
              <p className="text-base leading-7 text-slate-600">
                سفر با اتوبوس گزینه ای امن و قابل اعتماد برای مسیرهای نزدیک و دور
                است و تجربه ای آرام تر و پایدارتر ارائه می دهد.
              </p>
            </div>
            <div className="rounded-3xl border border-black/5 bg-[#fff7e0] p-6 text-right shadow-lg shadow-black/5">
              <h2 className="text-xl font-semibold text-slate-900">
                What you will learn | چه چیزهایی می آموزید
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>How to buy and refund bus tickets online.</li>
                <li>Best routes, prices, and busy-season tips.</li>
                <li>Operator overview and travel facilities.</li>
              </ul>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>روش خرید و استرداد آنلاین بلیط اتوبوس.</li>
                <li>قیمت ها، مسیرهای پرتقاضا و نکات فصل شلوغ.</li>
                <li>آشنایی با شرکت ها و امکانات سفر.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.titleEn}
                className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.titleEn}
                </h3>
                <h4 className="mt-1 text-sm font-semibold text-slate-500">
                  {item.titleFa}
                </h4>
                <p className="mt-3 text-sm text-slate-600">{item.textEn}</p>
                <p className="mt-3 text-sm text-slate-600">{item.textFa}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.id}
                className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <img
                  src={section.image}
                  alt={section.titleEn}
                  className="h-48 w-full rounded-2xl object-cover object-center"
                />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {section.titleEn}
                </h3>
                <h4 className="mt-1 text-sm font-semibold text-slate-500">
                  {section.titleFa}
                </h4>
                <p className="mt-3 text-sm text-slate-600">{section.textEn}</p>
                <p className="mt-3 text-sm text-slate-600">{section.textFa}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Bus companies in Iran
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              شرکت های اتوبوس رانی در ایران
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {companies.map((company) => (
                <div
                  key={company.nameEn}
                  className="rounded-2xl border border-black/5 bg-[#fbfbfb] p-4 text-center"
                >
                  <img
                    src={company.logo}
                    alt={company.nameEn}
                    className="mx-auto h-16 w-16 rounded-full object-cover object-center"
                  />
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {company.nameEn}
                  </p>
                  <p className="text-xs text-slate-500">{company.nameFa}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-2">
            {facilityNotes.map((note) => (
              <div
                key={note.titleEn}
                className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {note.titleEn}
                </h3>
                <h4 className="mt-1 text-sm font-semibold text-slate-500">
                  {note.titleFa}
                </h4>
                <p className="mt-3 text-sm text-slate-600">{note.textEn}</p>
                <p className="mt-3 text-sm text-slate-600">{note.textFa}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5">
            <h2 className="text-2xl font-semibold text-slate-900">
              Operators overview | معرفی شرکت ها
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {companyDetails.map((detail) => (
                <div
                  key={detail.titleEn}
                  className="rounded-2xl border border-black/5 bg-[#fbfbfb] p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {detail.titleEn}
                  </h3>
                  <h4 className="mt-1 text-sm font-semibold text-slate-500">
                    {detail.titleFa}
                  </h4>
                  <p className="mt-3 text-sm text-slate-600">{detail.textEn}</p>
                  <p className="mt-3 text-sm text-slate-600">{detail.textFa}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Travel and Tourism Magazine
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              مجله گردشگری
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {magazine.map((item) => (
                <div
                  key={item.titleEn}
                  className="rounded-2xl border border-black/5 bg-[#fbfbfb] p-4"
                >
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="h-36 w-full rounded-xl object-cover object-center"
                  />
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {item.titleEn}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.titleFa}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            {badges.map((badge) => (
              <div
                key={badge.titleEn}
                className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {badge.titleEn}
                </h3>
                <h4 className="mt-1 text-sm font-semibold text-slate-500">
                  {badge.titleFa}
                </h4>
                <p className="mt-3 text-sm text-slate-600">{badge.textEn}</p>
                <p className="mt-3 text-sm text-slate-600">{badge.textFa}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="rounded-3xl border border-black/5 bg-white p-6 text-right shadow-lg shadow-black/5">
            <div className="grid gap-6 md:grid-cols-3">
              {footerLinks.map((group) => (
                <div key={group.titleEn}>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {group.titleEn}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {group.titleFa}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {group.links.map((link) => (
                      <li key={link}>
                        <Link href="#">{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#fff7e0] p-4 text-sm text-slate-600">
              Support Phone: 021 - 43900000 | شماره پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

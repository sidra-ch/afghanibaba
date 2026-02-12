import type { Metadata } from "next";
import { Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "افغانی‌بابا | پلتفرم سفر و رزرو آنلاین",
  description: "رزرو بلیط، هتل، اتوبوس، تور و بیمه مسافرتی",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${plusJakarta.variable} ${notoArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

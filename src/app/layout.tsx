import type { Metadata } from "next";
import {Noto_Serif_Bengali} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "Bangla Bulletin app built with Next.js 16, TypeScript, Tailwind CSS, daisyUI and MongoDB.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}

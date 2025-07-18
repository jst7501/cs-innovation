"use client";

import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {/* Hero Section */}
        <section
          className="relative overflow-hidden flex items-end justify-start bg-black"
          style={{
            backgroundImage: `url('/images/glassbg3.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "60vh",
          }}
        >
          <div className="relative z-10 p-10 md:p-20">
            <h1 className="text-2xl md:text-8xl font-bold text-white drop-shadow-md">
              Beyond Precision
              <br />
              Toward Perfection
            </h1>
            <p className="mt-4 text-lg md:text-3xl font-semibold text-gray-400 max-w-2xl md:mx-auto">
              디테일을 넘어, 완벽으로.
              <br />
              CS INNOVATION의 답은
              <br />
              언제나 "최고" 입니다.
            </p>
          </div>
        </section>
        {children}
        <footer className="border-t py-6 flex items-center justify-center px-3">
          <div className="container flex flex-col gap-2 text-center text-sm text-gray-500">
            <p>CS INNOVATION CO., LTD. ALL RIGHTS RESERVED.</p>
            <p>
              경기도 화성시 우정읍 주곡리 836-46｜도로명주소: 우정읍 매바위로
              26-16｜Tel.070-4252-3689｜Fax.031-351-2689｜jhso167@hanmail.net
            </p>
            <p>
              상호: 주식회사 씨에스이노베이션｜사업자번호: 143-81-18126｜대표:
              정현석
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

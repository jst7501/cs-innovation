// "use client";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";
import Image from "next/image";

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

export const metadata: Metadata = {
  title: "CS Innovation | 전해연마 전문기업",
  description: "디테일을 넘어, 완벽으로. 전해연마, 표면처리, 금속가공 전문.",
  keywords: ["전해연마", "표면처리", "CS Innovation", "금속가공"],
  verification: {
    google: "ZeFp_tjoW_lYaZYagCfzrPJgLFhnwwevi7NsbmZlRBs",
    other: {
      "naver-site-verification": "e204ba3b8063524818f65dbbe8c903a430c44673",
    },
  },
  openGraph: {
    title: "CS Innovation | 전해연마 전문기업",
    description: "디테일을 넘어, 완벽으로. 전해연마, 표면처리, 금속가공 전문.",
    images: ["/logo/main.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CS Innovation",
            url: "https://cs-innovation.vercel.app",
            logo: "https://cs-innovation.vercel.app/logo/main.jpg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+82-10-3689-2305",
              contactType: "Customer Service",
            },
          })}
        </Script>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-4NLJMMY062`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4NLJMMY062');
          `}
        </Script>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NF8H2F9X');
      `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF8H2F9X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <Nav /> */}
        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-end justify-start bg-black">
          <Image
            src="/images/glassbg3.jpg"
            alt="Hero Background"
            fill
            priority
            sizes="60vw"
            className="object-cover"
          />
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

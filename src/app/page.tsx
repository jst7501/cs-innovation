"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Satellite,
  Building2,
  MapPin,
  Bell,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>CS Innovation - 전해연마, 산처리 전문업체</title>
        <meta
          name="description"
          content="CS Innovation은 전해연마, 산처리등의 표면처리 솔루션을 제공합니다. 품질과 신뢰를 바탕으로 최적의 금속 표면처리 서비스를 제공합니다."
        />
        <meta
          name="keywords"
          content="전해연마, 산처리, 버핑, 금속 표면처리, 금속 연마, CS Innovation, 전해연마 전문, 산처리 공정, 금속 광택, 부식 방지, 품질 보증, "
        />
        <meta
          property="og:title"
          content="CS Innovation - 전해연마, 산처리 전문업체"
        />
        <meta
          property="og:description"
          content="CS Innovation은 전해연마, 산처리, 등의 표면처리 솔루션을 제공합니다."
        />
        <meta property="og:image" content="/path/to/your-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="flex min-h-screen flex-col ">
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-5">
          <div className="container flex h-16 items-center justify-between">
            <Link className="flex items-center gap-2" href="#">
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                CS Innovation
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {[
                "회사소개",
                "전해연마",
                "산처리",
                "인증현황",
                "보유시설",
                "고객지원",
              ].map((item) => (
                <Link
                  key={item}
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                  href="#"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </header>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {[
                "회사소개",
                "전해연마",
                "산처리",
                "인증현황",
                "보유시설",
                "고객지원",
              ].map((item) => (
                <Link
                  key={item}
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                  href="#"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
        <main className="flex-1 ">
          {/* <section className="relative overflow-hidden py-20  bg-gradient-to-b from-orange-50 to-white ">
            <div className="container relative mx-auto px-3 "> */}

          {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl space-y-4"
              > */}
          <section className="relative overflow-hidden h-[40vh] flex items-center justify-center bg-black">
            <img
              // src="/bg.avif" // 연구소 또는 전해연마 금속 느낌의 배경
              alt="Lab Background"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
            />
            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                Beyond Precision, Toward Perfection
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                디테일을 넘어, 완벽으로.
                <br className="hidden md:block" />
                CS INNOVATION의 답은 언제나 "최고" 입니다.
              </p>
              <Button
                className="
    mt-6 
    bg-gray-800 
    text-white 
    hover:bg-gray-900 
    px-5 
    py-2 
    rounded-md 
    shadow-sm 
    font-medium 
    tracking-wide 
    transition-colors
  "
              >
                자세히 보기
              </Button>
            </div>
          </section>

          <section className="py-20 ">
            <div className="container mx-auto px-3">
              <div className="grid gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="py-6 px-4">
                  <h3 className="text-lg font-bold uppercase text-gray-800">
                    INNOVATIVE
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    새로운 생각과 기술로 전해연마의 가능성을 넓혀갑니다.
                  </p>
                </div>

                <div className="py-6 px-4">
                  <h3 className="text-lg font-bold uppercase text-gray-800">
                    PRECISION
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    완벽한 균일성을 만드는 정밀함.
                  </p>
                </div>

                <div className="py-6 px-4">
                  <h3 className="text-lg font-bold uppercase text-gray-800">
                    RELIABILITY
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    고객의 신뢰에 응답하는 철저한 일정과 품질.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 py-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {[
                {
                  title: "Product",
                  desc: `스테인리스 탱크, 파이프, 맞춤형 부품까지 고객 요구에 맞춘 전해연마 및 화학적 표면처리를 제공합니다.`,
                  buttonText: "견적 요청",
                },
                {
                  title: "Certificate",
                  desc: `ISO 인증을 비롯해 공인된 품질과 신뢰성을 제공합니다.`,
                  buttonText: "인증 현황",
                },
                {
                  title: "Core Technology",
                  desc: `최적화된 전류 분포와 전해액 제어로 표면의 미세 요철과 불순물을 제거하고, 패시베이션층을 안정화시켜 우수한 내식성과 청정도를 구현하는 고도화된 표면처리 기술을 제공합니다.`,
                },
                {
                  title: "Quality Control",
                  desc: `표면 거칠기(Ra), 청정도, 내식성을 포함한 정밀 검사와 공정 모니터링으로 일관된 품질을 확보합니다.`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 border border-gray-200 text-center break-words"
                >
                  <h3 className="text-base md:text-lg font-bold uppercase text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 whitespace-normal">
                    {item.desc}
                  </p>
                  {item.buttonText && (
                    <Button
                      className="mt-4 mx-auto bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 rounded-none shadow-none"
                      onClick={() => alert(item.buttonText)}
                    >
                      {item.buttonText}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border-t border-b border-gray-200 pb-12 pt-6">
            <div className="container mx-auto px-4 py-4 text-center">
              <h4 className="text-base font-semibold text-gray-700 mb-2">
                Our Partners
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                저희와 함께하는 파트너사들입니다.
              </p>
            </div>
            <div className="overflow-hidden relative">
              <div className="flex animate-slide gap-6">
                {[...Array(2)].map((_, repeatIdx) =>
                  [
                    { img: "/두산.jpg", alt: "Partner 1" },
                    { img: "/롯데.png", alt: "Partner 2" },
                    { img: "/삼성.png", alt: "Partner 3" },
                    { img: "/에스케이.png", alt: "Partner 4" },
                    { img: "/엘지.jpg", alt: "Partner 5" },
                    { img: "/지에스.jpg", alt: "Partner 6" },
                    { img: "/포스코.png", alt: "Partner 7" },
                    { img: "/셀트리온.png", alt: "Partner 8" },
                  ].map((item, i) => (
                    <div key={`${repeatIdx}-${i}`} className="flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="h-20 w-36 md:h-16 md:w-32 object-contain"
                      />
                    </div>
                  ))
                )}
              </div>
            </div>

            <style jsx>{`
              .animate-slide {
                display: flex;
                width: max-content;
                animation: slide 30s linear infinite;
              }

              @keyframes slide {
                from {
                  transform: translateX(0%);
                }
                to {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </section>

          <section className=" ">
            <div className="container mx-auto px-3">
              <div className="grid gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* News & Notice */}
                <div className="py-6 px-4">
                  <h3 className="text-lg font-bold uppercase text-gray-800">
                    News & Notice
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {[
                      "대형 전해연마조 증설",
                      "법인 설립 (주)씨에스이노베이션",
                      "확장 이전 (화성시)",
                    ].map((text, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:underline"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 문의하기 */}
                <div className="py-6 px-4">
                  <h3 className="text-lg font-bold uppercase text-gray-800">
                    문의하기
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 whitespace-pre-line">
                    {`빠르고 정확한 답변이 필요하신가요? 
                    전화나 이메일로 직접 문의해 주세요. 
                    성심껏 답변해 드리겠습니다.`}
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <button
                      className="text-sm text-left border border-gray-300 px-3 py-2 text-gray-700"
                      onClick={() => (window.location.href = "tel:11111111")}
                    >
                      📞 전화 문의: 010-3689-2305
                    </button>
                    <button
                      className="text-sm text-left border border-gray-300 px-3 py-2 text-gray-700"
                      onClick={() =>
                        (window.location.href = "mailto:jhs0167@hanmail.net")
                      }
                    >
                      📧 이메일 문의: jhs0167@hanmail.net
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="py-6 px-4">
                  <h3 className="text-lg font-bold uppercase text-gray-800">
                    Location
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-gray-500">📍</span>
                    <p className="text-sm text-gray-700">
                      CS이노베이션 찾아오시는 길 안내
                    </p>
                  </div>
                  <button className="mt-4 w-full border border-gray-300 px-3 py-2 text-sm text-gray-700">
                    더보기 →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-6 mx-auto px-3">
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
      </div>
    </>
  );
}

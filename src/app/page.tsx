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
              <span className="text-xl font-bold text-black ">
                CS Innovation
              </span>
            </Link>
            <nav className="hidden md:flex items-center px-8 gap-4 ">
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
                  href="#"
                  className="

        text-[15px] 
        font-semibold 
        text-gray-700 
        hover:text-gray-900 
        transition-colors
      "
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
                  href="#"
                  className="
                  ml-5
        text-[15px] 
        font-semibold 
        text-gray-700 
        hover:text-gray-900 
        transition-colors
      "
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
        <main className="flex-1 ">
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
                <br className="block" />
                CS INNOVATION의 답은
                <br className="block" />
                언제나 "최고" 입니다.
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

          <section className="py-10 px-4 ">
            <div className="container mx-auto px-3">
              {/* <h2 className="text-2xl  font-bold  mb-6 ">미션과 비전</h2> */}
              <h2 className="text-2xl font-bold mb-6 text-gray-600">
                산업의 기준을 높이는
                <br className="block sm:hidden" /> 표면처리 솔루션
              </h2>
              <div className="grid gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="py-6 ">
                  <h3 className="text-lg font-bold uppercase text-gray-800">
                    INNOVATIVE
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    새로운 생각과 기술로 전해연마의 가능성을 넓혀갑니다.
                  </p>
                </div>

                <div className="py-6 ">
                  <h3 className="text-lg font-bold uppercase text-gray-800">
                    PRECISION
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    완벽한 균일성을 만드는 정밀함.
                  </p>
                </div>

                <div className="py-6 ">
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

          <section
            className="py-12 bg-gray-50 h-screen flex"
            style={{
              backgroundImage: "url('/img_visual_bg02_m.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto px-4 py-8 ">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
                글로벌 전해연마 기술로 더 높은
                <br className="md:hidden block" />
                품질을 실현하는 CS이노베이션
              </h2>
              <p className="font-semibold text-lg text-[#D8D8D8] mb-6">
                CS이노베이션은 용기와 혁신적인 기술,
                <br className="md:hidden block" />
                그리고 고객의 신뢰를 바탕으로
                <br className="md:hidden block" />
                산업의 기대를 뛰어넘는
                <br className="md:hidden block" />
                전해연마 솔루션을 만들어갑니다.
              </p>
              <div className="border-t border-gray-200 pt-6">
                {[...Array(4)].map((_, idx) => {
                  return (
                    <div key={idx} className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <img
                          src={`/icons/ico_N3_0${idx + 1}.svg`} // 아이콘 이미지 경로
                          alt={`Icon ${idx + 1}`}
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold text-white">
                          {`서비스 ${idx + 1}`}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {`서비스 ${idx + 1}에 대한 설명입니다.`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            className="py-12 bg-gray-50 h-screen "
            style={{
              backgroundImage: "url('/img_visual_bg04_m.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto px-4 py-8 ">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                CS이노베이션의 전해연마 기술
              </h2>
              <p className="text-lg text-white/80 mb-6">
                전해연마는 표면의 완성도를
                <br className="md:hidden block" />
                극대화하여 귀사의 기술력과 신뢰도를
                <br className="md:hidden block" />
                더욱 돋보이게 합니다.
              </p>
              <div className="flex gap-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                  {[
                    {
                      type: "전해연마",
                      description: "",
                      bgcolor: "bg-[#4C3FAB]",
                      icon: 1,
                    },
                    {
                      type: "산처리",
                      description: "",
                      bgcolor: "bg-[#5B47B2]",
                      icon: 2,
                    },
                    {
                      type: "기업소개",
                      description: "",
                      bgcolor: "bg-[#3BA4C7]",
                      icon: 3,
                    },
                    {
                      type: "인증현황",
                      description: "",
                      bgcolor: "bg-[#5BC3DB]",
                      icon: 4,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="aspect-square w-full" // 정사각형
                    >
                      <Card
                        className={`${item.bgcolor} w-full h-full shadow-md transition hover:shadow-xl border-none`}
                      >
                        <CardContent className="p-4 h-full flex flex-col  justify-center items-center">
                          <div className="flex flex-row items-center">
                            <img
                              src={`/images/img_N6_0${item.icon}.png`} // 아이콘 이미지 경로
                              alt={`Icon ${item.icon}`}
                              className="h-10 w-10 object-contain mr-3"
                            />

                            <h3 className="text-md font-semibold text-white mb-1">
                              {item.type}
                            </h3>
                          </div>
                          <div>
                            <button
                              className="text-sm text-white hover:underline mt-5"
                              onClick={() => {
                                // 여기에 클릭 시 동작을 추가할 수 있습니다.
                                console.log(`${item.type} clicked`);
                              }}
                            >
                              자세히 보기 <ChevronRight className="inline" />
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            style={{
              backgroundImage: "url('/img_visual_bg04_m.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
            }}
          >
            <div className="container mx-auto px-4 py-4 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                CS이노베이션과 함께하는 파트너사
              </h3>
            </div>
            <div className="overflow-hidden relative space-y-1 py-10">
              {[...Array(2)].map((rowIdx) => (
                <div key={rowIdx} className=" animate-slide gap-1 mx-5">
                  {[...Array(9)].map((_, i) => (
                    <div key={`${rowIdx}-${i}`} className="flex-shrink-0">
                      <img
                        src={`/images/img_N7_0${i + 1}.png`} // 이미지 경로
                        alt={`Partner ${i + 1}`}
                        className="h-20 w-36 md:h-16 md:w-32 object-contain p-5 bg-white bg-opacity-80 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <style jsx>{`
              .animate-slide {
                display: flex;
                width: max-content;
                animation: slide 10s linear infinite;
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

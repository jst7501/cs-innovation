"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import TimelineScrollMotion from "@/components/ScrollHistory";
import Vision from "@/components/Vision";
import Nav from "@/components/Nav";

export default function Component() {
  const [bgUrl, setBgUrl] = useState("/img_visual_bg01.png");
  const router = useRouter();
  useEffect(() => {
    const updateBackground = () => {
      const isMobile = window.innerWidth < 768;
      setBgUrl(
        isMobile
          ? "/images/img_visual_bg01_m.png"
          : "/images/img_visual_bg01.png"
      );
    };

    updateBackground(); // 초기 실행
    window.addEventListener("resize", updateBackground); // 리사이즈 대응
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <>
      <Nav />

      <Head>
        <title>CS Innovation - 전해연마, 산처리 전문업체</title>

        <meta
          name="description"
          content="CS Innovation은 전해연마, 산처리 등 금속 표면처리의 모든 솔루션을 제공합니다. 품질과 신뢰를 바탕으로 완벽한 서비스를 약속드립니다."
        />
        <meta
          name="keywords"
          content="전해연마, 산처리, 금속 표면처리, 금속 연마, CS Innovation, 전해연마 전문, 산처리 공정, 금속 광택, 부식 방지, 품질 보증"
        />

        <meta
          property="og:title"
          content="CS Innovation - 전해연마, 산처리 전문업체"
        />
        <meta
          property="og:description"
          content="CS Innovation은 전해연마, 산처리, 금속 표면처리의 선도기업입니다. 디테일을 넘어, 완벽으로."
        />
        <meta
          property="og:image"
          content="https://cs-innovation.vercel.app/logo/main.jpg"
        />
        <meta property="og:url" content="https://cs-innovation.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://cs-innovation.vercel.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CS Innovation - 전해연마, 산처리 전문업체"
        />
        <meta
          name="twitter:description"
          content="CS Innovation은 전해연마, 산처리, 금속 표면처리의 선도기업입니다. 디테일을 넘어, 완벽으로."
        />
        <meta
          name="twitter:image"
          content="https://cs-innovation.vercel.app/logo/main.jpg"
        />
      </Head>
      <div className="flex min-h-screen flex-col ">
        <main className="flex-1 ">
          <Vision />

          <section
            className="py-16 md:py-24 h-screen flex items-center bg-gray-50"
            style={{
              backgroundImage: `url('/img_visual_bg02_m.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-white text-[22px] md:text-6xl font-bold leading-snug md:leading-relaxed mb-6">
                글로벌 전해연마 기술로 더 높은
                <br />
                품질을 실현하는 CS이노베이션
              </h2>

              <p className="text-[#D8D8D8] text-sm sm:text-base md:text-xl font-semibold leading-relaxed mb-10">
                CS이노베이션은 용기와 혁신적인 기술,
                <br />
                그리고 고객의 신뢰를 바탕으로
                <br />
                산업의 기대를 뛰어넘는
                <br />
                전해연마 솔루션을 만들어갑니다.
              </p>

              <div className="border-t border-white/30 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      title: "전해연마",
                      description: "정밀한 표면처리로 완벽한 마감",
                      icon: 1,
                      link: "/EP",
                    },
                    {
                      title: "산처리",
                      description: "내구성을 높이는 산처리 기술",
                      icon: 2,
                      link: "/AP",
                    },
                    {
                      title: "기업소개",
                      description: "CS이노베이션의 비전과 가치",
                      icon: 3,
                      link: "/about",
                    },
                    {
                      title: "인증현황",
                      description: "품질을 보증하는 인증 현황",
                      icon: 4,
                      link: "/certifications",
                    },
                  ].map((_, idx) => (
                    <button
                      key={idx}
                      className="flex items-start gap-4 hover:bg-gray-100/5 p-4 rounded-lg transition-colors cursor-pointer"
                      onClick={() => router.push(_.link)}
                    >
                      <img
                        src={`/icons/ico_N3_0${idx + 1}.svg`}
                        alt={`Icon ${idx + 1}`}
                        className="h-8 w-8"
                      />
                      <div>
                        <h3 className="text-white text-base md:text-lg font-semibold">
                          {_.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-snug">
                          {_.description}
                        </p>
                        <p className="mt-2 text-sm text-white hover:underline">
                          자세히 보기 →
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className="py-12  "
            style={{
              backgroundImage: "url('/img_visual_bg04_m.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <TimelineScrollMotion />
          </section>

          <section
            className="py-12 h-screen"
            style={{
              backgroundImage: "url('/img_visual_bg04_m.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto px-4 py-4"></div>

            {/* 슬라이드 영역 */}
            <div className="space-y-4 overflow-hidden px-4 md:w-1/2 md:mx-auto">
              <h3 className="text-2xl md:text-5xl font-bold text-white mb-20">
                CS이노베이션과 함께하는 파트너사
              </h3>
              {[0, 1].map((rowIndex) => (
                <div key={rowIndex} className="relative overflow-hidden w-full">
                  <div className="flex animate-slide gap-4 w-max">
                    {/* 원본 + 복제 슬라이드 */}
                    {[...Array(2)].flatMap((_, dup) =>
                      [...Array(6)].map((_, i) => {
                        const imgIndex = rowIndex * 6 + i + 1; // ← 여기!
                        return (
                          <div
                            key={`${dup}-${imgIndex}`}
                            className="flex-shrink-0"
                          >
                            <img
                              src={`/logo/logo${imgIndex}.png`}
                              alt={`Partner ${imgIndex}`}
                              className="h-20 w-36 md:h-40 md:w-60 object-contain p-4 bg-white bg-opacity-80 rounded-xl shadow hover:shadow-lg transition"
                            />
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              ))}
            </div>

            <style jsx>{`
              .animate-slide {
                animation: slideLeft 20s linear infinite;
              }

              @keyframes slideLeft {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </section>

          <section
            className="py-12 bg-gray-50 h-screen"
            style={{
              backgroundImage: "url('/img_visual_bg05.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto px-3">
              <h2 className="text-sm font-semibold text-white mb-2">
                CONTACT US
              </h2>
              <h2 className="text-white text-[22px] md:text-6xl font-bold leading-snug md:leading-relaxed mb-6">
                CS이노베이션과 함께
                <br />
                새로운 가능성을 열어가세요
              </h2>
              <p className="text-xl font-semibold text-[#b6b0b0] mb-10">
                CS이노베이션은 고객의 성공을 위해 언제나 최선을 다합니다.
              </p>
            </div>
            {/* 문의하기 */}
            <div className="container mx-auto px-3">
              <h3 className="text-lg font-bold uppercase text-white">
                문의하기
              </h3>

              <div className="container mx-auto  flex flex-col gap-4 mt-4">
                <button
                  className="text-xl text-left    py-2 text-white"
                  onClick={() => (window.location.href = "tel:070-4252-3689")}
                >
                  📞 전화번호: 070-4252-3689
                </button>
                <button
                  className="text-xl text-left    py-2 text-white"
                  onClick={() =>
                    (window.location.href = "mailto:jhs0167@hanmail.net")
                  }
                >
                  📧 이메일 문의: jhs0167@hanmail.net
                </button>
              </div>
            </div>

            <div className="container mx-auto px-3 flex flex-col gap-4 mt-4">
              <h3 className="text-lg font-bold uppercase text-white">
                Location
              </h3>
              <p className="text-white">
                경기도 화성시 우정읍 주곡리 836-46｜도로명주소: 우정읍 매바위로
                26-16
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="mt-4">
                  <iframe
                    className="w-full h-64 rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.384351618186!2d126.81785737641535!3d37.11976994961947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b119c12cf0ae9%3A0xec322eca614b3487!2zKOyjvCnslKjsl5DsiqTsnbTrhbjrsqDsnbTshZg!5e0!3m2!1sko!2skr!4v1752727413479!5m2!1sko!2skr"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <a
        href="tel:070-4252-3689"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-colors hover:bg-blue-700"
        aria-label="전화 문의"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"
          />
        </svg>
      </a>
    </>
  );
}

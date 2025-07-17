// app/status/page.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const certifications = [
  {
    title: "기술평가우수기업인증서",
    description: "국내 최고 수준의 기술력과 품질을 인정받은 인증서",
    imageUrl: "/cert/기술평가우수기업인증서-1.png",
  },
  {
    title: "기업부설연구소 인증서",
    description: "CS 이노베이션의 연구개발 역량을 증명하는 인증서",
    imageUrl: "/cert/기업부설연구소 인증서-1.png",
  },
  {
    title: "벤처기업 인증",
    description: "혁신성과 기술력을 인정받은 벤처기업 인증",
    imageUrl: "/cert/벤처기업확인서  2022-03-30~~2025-03-19-1.png",
  },
  {
    title: "뿌리기술 전문기업 지정증",
    description: "뿌리기술 분야에서의 전문성을 인정받은 인증서",
    imageUrl: "/cert/뿌리기술 전문기업 지정증-1.png", // 예시 이미지 경로
  },
];

// 특허public/cert/특허증(페로브스카이트 전구체 용액) 2025-07-09-2.png public/cert/특허증 전해연마용 탄소 전극 및 이의 제조방법 2022-05-02-1.png public/cert/특허증(페로브스카이트 전구체 용액) 2025-07-09-1.png public/cert/특허증 2024-10-04-1.png public/cert/특허증 (전해연마용 탄소 전극 및 이의 제조방법)-2.png public/cert/특허증 (전해연마용 탄소 전극 및 이의 제조방법)-1.png public/cert/특허증 (전해연마 장치)2017-01-23-1.png public/cert/특허증 (산처리 장치)2019-12-20-1.png
const patents = [
  {
    title: "산처리 장치 특허",
    description: "산처리 공정의 효율성을 높인 혁신적인 기술",
    imageUrl: "/cert/특허증 (산처리 장치)2019-12-20-1.png",
  },
  {
    title: "전해연마 장치 특허",
    description: "전해연마 공정의 혁신적인 기술을 적용한 장치",
    imageUrl: "/cert/특허증 (전해연마 장치)2017-01-23-1.png",
  },
  {
    title: "전해연마용 탄소 전극 특허",
    description: "전해연마 공정에서의 효율성을 높인 탄소 전극 기술",
    imageUrl:
      "/cert/특허증 전해연마용 탄소 전극 및 이의 제조방법 2022-05-02-1.png",
  },
  {
    title: "페로브스카이트 전구체 용액 특허",
    description: "페로브스카이트 태양전지 기술의 핵심인 전구체 용액 기술",
    imageUrl: "/cert/특허증(페로브스카이트 전구체 용액) 2025-07-09-1.png",
  },
  {
    title: "수동형 전해액 정화 방법 특허",
    description: "전해액의 효율적인 정화를 위한 혁신적인 방법",
    imageUrl: "/cert/특허증 2024-10-04-1.png",
  },
];

export default function StatusPage() {
  return (
    <>
      <main className="bg-slate-50">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                인증 현황
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                CS 이노베이션은 엄격한 국제 표준과 자체 기술력을 바탕으로 최고의
                품질을 약속합니다.
              </p>
            </div>

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="!pb-12" // For pagination dots
            >
              {certifications.map((cert, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <Card className="group flex h-full flex-col overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl">
                    <CardContent className="p-0">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full object-cover transition-transform group-hover:scale-105"
                      />

                      {/* <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        width={600}
                        height={1200}
                        className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                      /> */}
                    </CardContent>
                    <CardHeader className="flex-1 p-6">
                      <CardTitle className="text-xl font-semibold text-gray-800">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-gray-600">
                        {cert.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                특허 현황
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                CS 이노베이션은 지속적인 연구개발을 통해 혁신적인 기술을
                선보이고 있습니다.
              </p>
            </div>

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="!pb-12" // For pagination dots
            >
              {patents.map((cert, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <Card className="group flex h-full flex-col overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl">
                    <CardContent className="p-0">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </CardContent>
                    <CardHeader className="flex-1 p-6">
                      <CardTitle className="text-xl font-semibold text-gray-800">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-gray-600">
                        {cert.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
}

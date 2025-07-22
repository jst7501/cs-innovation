"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import Nav from "@/components/Nav";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@mui/material";

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
    imageUrl: "/cert/뿌리기술 전문기업 지정증-1.png",
  },
];

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
      <Nav />
      <main className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Tab.Group>
            {/* 탭 그룹 전체에 배경과 둥근 모서리 적용 */}
            <Tab.List className="flex justify-center space-x-4 mb-12">
              <Tab
                className={({ selected }) =>
                  // 공통 스타일: 부드러운 전환 효과, 포커스 시 외곽선 제거
                  `px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:outline-none 
      ${
        selected
          ? // 선택된 상태: 강렬한 색상과 그림자로 활성 상태 강조
            "bg-purple-600 text-white shadow-lg"
          : // 선택되지 않은 상태: 명확한 배경색과 그림자로 '버튼'임을 인지시킴
            "bg-gray-200 text-gray-800 shadow-md hover:bg-gray-300 hover:-translate-y-0.5 active:scale-95"
      }`
                }
              >
                인증 현황
              </Tab>
              <Tab
                className={({ selected }) =>
                  `px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:outline-none 
      ${
        selected
          ? "bg-purple-600 text-white shadow-lg"
          : "bg-gray-200 text-gray-800 shadow-md hover:bg-gray-300 hover:-translate-y-0.5 active:scale-95"
      }`
                }
              >
                특허 현황
              </Tab>
            </Tab.List>
            <p className="text-center text-gray-600 mb-8">
              CS INNOVATION은 기술력과 품질을 바탕으로 다양한 인증과 특허를
              보유하고 있습니다. 아래에서 자세한 내용을 확인하세요.
            </p>
            <Tab.Panels>
              {[
                { data: certifications, title: "인증 현황" },
                { data: patents, title: "특허 현황" },
              ].map((section, idx) => (
                <Tab.Panel
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {section.data.map((item, i) => (
                    <Card
                      key={i}
                      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                    >
                      <CardContent className="p-0 relative">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={640}
                          height={360}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30"></div>
                      </CardContent>
                      <CardHeader className="p-6">
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-gray-500">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>{" "}
    </>
  );
}

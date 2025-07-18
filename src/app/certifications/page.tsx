"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

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
    <main className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Tab.Group>
          <Tab.List className="flex justify-center space-x-4 mb-12">
            <Tab
              className={({ selected }) =>
                `px-6 py-2 rounded-full font-semibold transition ${
                  selected
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              인증 현황
            </Tab>
            <Tab
              className={({ selected }) =>
                `px-6 py-2 rounded-full font-semibold transition ${
                  selected
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              특허 현황
            </Tab>
          </Tab.List>

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
    </main>
  );
}

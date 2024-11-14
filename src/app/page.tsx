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
        <title>CS Innovation - 전해연마, 산처리, 버핑(빠우) 전문업체</title>
        <meta
          name="description"
          content="CS Innovation은 전해연마, 산처리, 버핑(빠우) 등의 표면처리 솔루션을 제공합니다. 품질과 신뢰를 바탕으로 최적의 금속 표면처리 서비스를 제공합니다."
        />
        <meta
          name="keywords"
          content="전해연마, 산처리, 빠우, 버핑, 금속 표면처리, 금속 연마, CS Innovation, 전해연마 전문, 산처리 공정, 금속 광택, 부식 방지, 품질 보증, "
        />
        <meta
          property="og:title"
          content="CS Innovation - 전해연마, 산처리, 버핑(빠우) 전문업체"
        />
        <meta
          property="og:description"
          content="CS Innovation은 전해연마, 산처리, 버핑(빠우) 등의 표면처리 솔루션을 제공합니다."
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
                "버핑(빼우)",
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
                "버핑(빼우)",
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
          <section className="relative overflow-hidden py-20  bg-gradient-to-b from-orange-50 to-white ">
            <div className="container relative mx-auto px-3 ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute right-10 top-0"
              >
                <Satellite className="h-20 w-20 text-orange-500/20" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl space-y-4"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Your 1st Partner, CS Innovation
                </h1>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  (주)씨에스이노베이션은 한국의 미래를 이끌어 갑니다.
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700">
                  자세히 알아보기
                </Button>
              </motion.div>
            </div>
          </section>
          <section className="py-20 ">
            <div className="container mx-auto px-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid gap-6 md:grid-cols-3 "
              >
                {[
                  {
                    title: "전해연마",
                    desc: "Electrolytic Polishing",
                    icon: Building2,
                  },
                  { title: "산처리", desc: "Acidizing", icon: Building2 },
                  { title: "버핑 (빠우)", desc: "Buffing", icon: Building2 },
                ].map((service, index) => (
                  <motion.div key={service.title} whileHover={{ scale: 1.05 }}>
                    <Button
                      variant="outline"
                      className="w-full h-auto py-6 px-4 flex flex-col items-center gap-4 bg-white hover:bg-orange-100 border-orange-200 hover:border-orange-300 transition-colors"
                    >
                      <div className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 p-4">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-center text-sm text-gray-600">
                        {service.desc}
                      </p>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          <section className="py-12 ">
            <div className="container mx-auto px-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-full"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                      <div className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-gray-800">
                          News & Notice
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                              href="#"
                            >
                              대형 전해연마조 증설
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                              href="#"
                            >
                              법인 설립 (주)씨에스이노베이션
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                              href="#"
                            >
                              확장 이전 (화성시)
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-gray-800">
                          문의하기
                        </h3>
                        <p className="text-sm text-gray-600">
                          빠르고 정확한 답변이 필요하신가요? 전화나 이메일로
                          직접 문의해 주세요. 항상 성심성의껏 답변해
                          드리겠습니다.
                        </p>
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start"
                            onClick={() =>
                              (window.location.href = "tel:11111111")
                            }
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            전화 문의: 11111111
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start"
                            onClick={() =>
                              (window.location.href =
                                "mailto:jhs0167@hanmail.net")
                            }
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            이메일 문의: jhs0167@hanmail.net
                          </Button>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-gray-800">
                          Location
                        </h3>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-orange-500" />
                          <p className="text-sm text-gray-600">
                            CS이노베이션 찾아오시는 길 안내
                          </p>
                        </div>
                        <Button className="w-full" variant="outline" size="sm">
                          더보기 <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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

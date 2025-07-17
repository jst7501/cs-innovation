// components/AboutPage.js
"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
// 아이콘 사용을 위한 import (예시: react-icons/fa, react-icons/md 등)
// 필요한 아이콘 팩을 설치해야 합니다. 예: npm install react-icons
import { FaIndustry, FaFlask, FaSprayCan, FaTools } from "react-icons/fa"; // 예시 아이콘

// 각 섹션을 감싸는 컴포넌트 (스크롤 애니메이션 효과 적용)
const Section = ({ id, children }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번만 애니메이션 실행
    threshold: 0.1, // 10% 보였을 때 실행
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`bg-white rounded-lg shadow-md p-8 md:p-12 mb-16 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </section>
  );
};

// 조직도 컴포넌트 (이전 요청에 따라 유지)
const OrgChart = () => {
  const boxStyle =
    "bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md text-center flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-gray-200";
  const ceoBoxStyle =
    "bg-blue-700 text-white p-4 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105 hover:bg-blue-800 w-48";
  const departmentBoxStyle =
    "bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md text-center w-48 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:bg-gray-200";
  const teamBoxStyle =
    "bg-gray-100 text-gray-800 p-3 rounded-lg shadow-sm text-center w-40 transition-all duration-300 hover:scale-105 hover:bg-gray-200";

  return (
    <div className="flex flex-col items-center py-8">
      {/* 대표이사 (CEO) */}
      <div className={`${ceoBoxStyle}`}>
        <h3 className="font-bold text-lg">대표이사</h3>
        <p className="text-sm">CEO</p>
        <p className="text-sm mt-1">정현석</p>
      </div>

      {/* 대표이사 아래 연결선들 */}
      <div className="relative w-full flex justify-center">
        {/* 대표이사에서 내려오는 수직선 */}
        <div className="absolute w-0.5 h-8 bg-gray-300 -top-0"></div>
        {/* 대표이사에서 품질관리부로 가는 대각선 및 수평선 그룹 */}
        <div className="absolute top-8 w-px h-8 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>{" "}
        {/* 대표이사 중앙 아래 수직선 */}
        <div className="absolute top-16 w-[200px] h-px bg-gray-300 left-1/2 transform translate-x-[calc(50%+40px)]"></div>{" "}
        {/* 대표이사 -> 품질관리부 수평선 (우측) */}
        <div className="absolute top-16 w-px h-16 bg-gray-300 left-1/2 transform translate-x-[calc(100px+80px)]"></div>{" "}
        {/* 품질관리부 위 수직선 */}
        {/* 대표이사에서 하위 4개 부서로 가는 선 */}
        <div className="absolute top-8 w-px h-16 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>{" "}
        {/* 대표이사 중앙에서 아래로 수직선 */}
        <div className="absolute top-24 w-4/5 h-px bg-gray-300"></div>{" "}
        {/* 하위 4개 부서 연결 수평선 */}
      </div>

      {/* 품질관리부 (오른쪽에 위치) */}
      <div className="self-end mr-[calc(50%-100px)] mt-16 md:mt-24">
        <div className={`${departmentBoxStyle}`}>
          <h3 className="font-bold text-base">품질관리부</h3>
        </div>
      </div>

      {/* 4개 주요 부서 */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mt-16 md:mt-12 w-full max-w-4xl">
        <div className="relative">
          <div className="absolute w-0.5 h-8 bg-gray-300 -top-12 left-1/2 transform -translate-x-1/2"></div>
          <div className={`${departmentBoxStyle}`}>
            <h3 className="font-bold text-base">경영지원부</h3>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-0.5 h-8 bg-gray-300 -top-12 left-1/2 transform -translate-x-1/2"></div>
          <div className={`${departmentBoxStyle}`}>
            <h3 className="font-bold text-base">생산부</h3>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-0.5 h-8 bg-gray-300 -top-12 left-1/2 transform -translate-x-1/2"></div>
          <div className={`${departmentBoxStyle}`}>
            <h3 className="font-bold text-base">영업부</h3>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-0.5 h-8 bg-gray-300 -top-12 left-1/2 transform -translate-x-1/2"></div>
          <div className={`${departmentBoxStyle}`}>
            <h3 className="font-bold text-base">연구개발부</h3>
          </div>
        </div>
      </div>

      {/* 생산부 아래 생산 1팀, 생산 2팀 */}
      <div className="flex justify-center w-full relative mt-12">
        {/* 생산부에서 내려오는 수직선 */}
        <div className="absolute w-0.5 h-8 bg-gray-300 -top-0 left-1/2 transform -translate-x-1/2 -ml-28 md:-ml-28"></div>
        {/* 생산 1팀, 생산 2팀 연결 수평선 */}
        <div className="absolute w-56 h-0.5 bg-gray-300 top-8"></div>

        {/* 생산 1팀 수직선 */}
        <div className="absolute w-0.5 h-8 bg-gray-300 top-8 left-1/2 transform -translate-x-1/2  md:-translate-x-28"></div>
        {/* 생산 2팀 수직선 */}
        <div className="absolute w-0.5 h-8 bg-gray-300 top-8 left-1/2 transform -translate-x-1/2  md:translate-x-28"></div>

        <div className="flex space-x-16 mt-16">
          <div className={`${teamBoxStyle}`}>
            <h3 className="font-bold text-base">생산 1팀</h3>
          </div>
          <div className={`${teamBoxStyle}`}>
            <h3 className="font-bold text-base">생산 2팀</h3>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* --- 상단 고정 네비게이션 --- */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center h-16 space-x-8 text-sm font-semibold text-gray-600">
            <a href="#ceo" className="hover:text-blue-600 transition-colors">
              CEO 인사말
            </a>
            <a
              href="#overview"
              className="hover:text-blue-600 transition-colors"
            >
              기업 개요
            </a>
            <a
              href="#history"
              className="hover:text-blue-600 transition-colors"
            >
              기업 연혁
            </a>
            <a
              href="#org-chart"
              className="hover:text-blue-600 transition-colors"
            >
              조직도
            </a>
            <a
              href="#facilities"
              className="hover:text-blue-600 transition-colors"
            >
              보유 설비
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        {/* --- 최상단 헤더 --- */}
        <header className="text-center mb-20 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ㈜씨에스이노베이션
          </h1>
          <p className="text-lg md:text-xl text-gray-500">
            최고의 기술과 품질로 고객에게 신뢰를 드립니다.
          </p>
        </header>

        {/* --- CEO 인사말 --- */}
        <Section id="ceo">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b">CEO 인사말</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <img
              src="https://via.placeholder.com/200" // CEO 사진 경로
              alt="정현석 대표이사"
              className="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-lg"
            />
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-4">
                고객 여러분 안녕하십니까? 고객님들의 변함없는 사랑과 믿음에
                보답하겠습니다.
              </p>
              <p className="mb-4">
                당사는 전해연마(EP)와 산 세정(PICKLING) 전문업체로서 ... 기타
                산업용 스테인리스(STS) 제품을 취급하고 있습니다.
              </p>
              <p className="mb-6">
                언제나 고객의 소리에 귀 기울이며 ... 고객의 신뢰와 함께 커
                나가는 씨에스이노베이션이 될 것을 약속 드립니다.
              </p>
              <p className="font-semibold text-gray-800">
                - ㈜씨에스이노베이션 대표이사 정 현 석
              </p>
            </div>
          </div>
        </Section>

        {/* --- 기업 연혁 (타임라인 디자인) --- */}
        <Section id="history">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b">기업 연혁</h2>
          <div className="relative border-l-2 border-blue-500 pl-8 space-y-8">
            {/* 연혁 아이템 */}
            <div className="relative">
              <div className="absolute -left-[42px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
              <p className="font-bold text-lg text-blue-600">2017</p>
              <p className="text-gray-600">
                기술연구소 설립 및 연구개발전담부서 인정
              </p>
            </div>
            {/* 연혁 아이템 */}
            <div className="relative">
              <div className="absolute -left-[42px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
              <p className="font-bold text-lg text-blue-600">2014</p>
              <p className="text-gray-600">㈜씨에스이노베이션으로 법인 전환</p>
            </div>
            {/* ... 다른 연혁들 ... */}
            <div className="relative">
              <div className="absolute -left-[42px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
              <p className="font-bold text-lg text-blue-600">2011</p>
              <p className="text-gray-600">회사 설립 (CS Tech)</p>
            </div>
          </div>
        </Section>

        {/* --- 조직도 --- */}
        <Section id="org-chart">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b">조직도</h2>
          {/* 조직도 컴포넌트 삽입 */}
          <OrgChart />
        </Section>

        {/* --- 보유 설비 (업그레이드 버전) --- */}
        <Section id="facilities">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b">보유 설비</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 설비 카드 1: 전해연마조 및 정류기 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
              <div className="flex items-center mb-4">
                <FaIndustry className="text-blue-500 text-4xl mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-xl text-blue-800">
                  전해연마조 및 정류기
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>소형 EP조 (5,000*1,500*1,700)</li>
                <li>중형 EP조 (2,800*4,800*3,500)</li>
                <li>대형 EP조 (7,000*5,000*4,500)</li>
              </ul>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 pointer-events-none"></div>
            </div>

            {/* 설비 카드 2: 산 세정조 */}
            <div className="group relative bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200">
              <div className="flex items-center mb-4">
                <FaFlask className="text-green-500 text-4xl mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-xl text-green-800">산 세정조</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>3,000*6,500*3,500</li>
                <li>3,500*800*1,300</li>
                <li>13,000*800*1,300</li>
              </ul>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400 transition-all duration-300 pointer-events-none"></div>
            </div>

            {/* 설비 카드 3: 중화조 및 건조로 */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200">
              <div className="flex items-center mb-4">
                <FaSprayCan className="text-purple-500 text-4xl mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-xl text-purple-800">
                  중화조 및 건조로
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>중화조 (6,000*4,000*4,500)</li>
                <li>건조로 (6,000*5,000*4,000)</li>
              </ul>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-400 transition-all duration-300 pointer-events-none"></div>
            </div>

            {/* 설비 카드 4: 기타 설비 */}
            <div className="group relative bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-200">
              <div className="flex items-center mb-4">
                <FaTools className="text-yellow-600 text-4xl mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-xl text-yellow-800">기타 설비</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>콤프레샤 15H</li>
                <li>크레인</li>
                <li>초순수 제조 장치</li>
              </ul>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

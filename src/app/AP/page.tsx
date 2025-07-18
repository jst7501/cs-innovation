"use client";

import React from "react";
import { motion } from "framer-motion";
import ApProcess from "@/components/ApProcess";
import ApBA from "@/components/ApBA";
import {
  Layers,
  BoxIcon,
  DropletIcon,
  ClockIcon,
  CheckCircleIcon,
  ThermometerIcon,
  ShieldIcon,
  GlobeIcon,
  Box,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3 text-blue-600">{icon}</div>}
        <h2 className="text-2xl font-bold border-b-4 border-blue-600 pb-2 text-gray-800">
          {title}
        </h2>
      </div>
      <div className="prose prose-neutral max-w-none text-gray-700">
        {children}
      </div>
    </motion.section>
  );
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto my-20 px-6 md:px-8 lg:px-0 font-sans text-gray-800">
      {/* Header */}
      <motion.header
        className="mb-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          산 세정 (Pickling) Process
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          금속 표면의 산화 스케일, 열변색, 부식층 등을 화학적으로 제거하여 후속
          공정 품질과 내구성을 향상시키는 핵심 세정 기술입니다.
        </p>
      </motion.header>

      {/* Before-After */}
      <ApBA />

      <Section title="개요" icon={<Layers size={24} />}>
        <p>
          산세정(Pickling)은 금속 표면에 달라붙은 불순물과 산화층을 말끔히
          제거해 깨끗하고 매끄러운 상태로 만드는 핵심 공정입니다. 이 과정을 통해
          보이지 않은 미세 결함까지 정리되어 부품의 전체적인 품질이 크게
          향상됩니다.
        </p>
        <p>
          결과적으로 후속 도금, 코팅, 용접 등 다양한 공정에서 부착력(adhesion)이
          높아지고, 제품의 내구성과 성능이 안정적으로 유지됩니다.
        </p>
      </Section>

      {/* When Needed */}
      <Section title="산세정이 필요한 경우" icon={<ClockIcon size={24} />}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li>• 열처리 공정 후 표면에 형성된 산화물과 열변색 제거</li>
          <li>• 용접 후 열영향부(HAZ) 주변 스케일 제거로 균열 방지</li>
          <li>• 후속 도금·코팅 전 표면 청정도 확보로 부착력 개선</li>
          <li>• 장기 보관된 금속 부품의 초기 부식층 제거</li>
          <li>• 구조물 내부 탱크·파이프 내부 스케일 제거</li>
          <li>• 화학 분석 전 샘플 표면 준비</li>
        </ul>
      </Section>

      {/* Benefits */}
      <Section title="장점 및 효과" icon={<CheckCircleIcon size={24} />}>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircleIcon className="text-green-500 mr-3 mt-1" />
            <div>
              <strong>내구성 향상:</strong> 부식 억제 및 표면 피로율 감소로 제품
              수명 연장
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="text-green-500 mr-3 mt-1" />
            <div>
              <strong>품질 안정화:</strong> 균일한 표면 조도 확보로 도금·코팅
              품질 및 색상 일관성 향상
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="text-green-500 mr-3 mt-1" />
            <div>
              <strong>비용 절감:</strong> 불량률 감소 및 재작업 최소화로 총
              유지보수 비용 절감
            </div>
          </li>
        </ul>
      </Section>

      {/* 주요 적용 분야 */}
      <Section title="주요 적용 분야" icon={<Box size={24} />}>
        <div className="grid grid-cols-1  gap-6">
          <motion.div
            className="flex items-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <BoxIcon className="text-blue-600 mr-3" />
            <p>티타늄 플레이트: 고내식성 플레이트의 표면 정밀 세정</p>
          </motion.div>
          <motion.div
            className="flex items-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Layers className="text-blue-600 mr-3" />
            <p>각종 탱크류: 내부 부식 및 스케일 제거를 통한 수명 연장</p>
          </motion.div>
          <motion.div
            className="flex items-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <DropletIcon className="text-blue-600 mr-3" />
            <p>파이프 부속 일체: 유체 흐름 최적화를 위한 내부 세정</p>
          </motion.div>
        </div>
      </Section>

      {/* Process Flow */}
      <ApProcess />
    </main>
  );
}

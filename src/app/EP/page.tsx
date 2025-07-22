"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Cpu,
  Box,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
} from "lucide-react";
import EpBA from "@/components/EpBA";
import EPProcess from "@/components/EpProcess";
import Nav from "@/components/Nav";

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
        {icon && <div className="mr-3 text-purple-600">{icon}</div>}
        <h2 className="text-2xl font-bold border-b-4 border-purple-600 pb-2 text-gray-800">
          {title}
        </h2>
      </div>
      <div className="prose prose-neutral max-w-none text-gray-700">
        {children}
      </div>
    </motion.section>
  );
}

export default function EPPage() {
  const applications = [
    {
      icon: <Server size={24} className="text-purple-600" />,
      label: "스테인리스 부품",
    },
    {
      icon: <Cpu size={24} className="text-purple-600" />,
      label: "반도체 장비 부품",
    },
    {
      icon: <Box size={24} className="text-purple-600" />,
      label: "각종 챔버류",
    },
    {
      icon: <Box size={24} className="text-purple-600" />,
      label: "각종 탱크류",
    },
  ];

  return (
    <>
      <Nav />

      <main className="max-w-4xl mx-auto my-20 px-6 md:px-8 lg:px-0 font-sans text-gray-800">
        {/* Header */}
        <motion.header
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-extrabold text-gray-900">
            전해연마 (Electro Polishing)
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            표면의 미세 요철을 제거하고 내식성을 극대화하는 화학·전기 융합 처리
            기술로,
            <br />
            후속 공정의 품질 기준을 한 단계 높입니다.
          </p>
        </motion.header>
        {/* Before-After */}
        <EpBA />
        {/* Overview Section */}
        <Section title="개요" icon={<Layers size={24} />}>
          <p>
            전해연마는 금속 표면에 전류를 흘려보내 화학 반응을 유도함으로써
            돌기와 스케일을 선택적으로 용해·제거하고, 매끄러운 광택과 균일한
            표면을 구현하는 핵심 공정입니다.
          </p>
        </Section>

        {/* Why Needed Section */}
        <Section
          title="왜 전해연마가 필요한가?"
          icon={<CheckCircleIcon size={24} />}
        >
          <ul className="list-disc list-inside space-y-2">
            <li>후속 도금·코팅·용접 시 접착 불량 및 내식성 저하 예방</li>
            <li>표면 미세 결함 제거로 피로 강도 및 장기 내구성 향상</li>
            <li>균일한 표면 조도로 완벽한 광택과 미관 확보</li>
          </ul>
        </Section>

        {/* When to Apply Section */}
        <Section
          title="언제 전해연마를 적용하나?"
          icon={<ClockIcon size={24} />}
        >
          <ul className="list-disc list-inside space-y-2">
            <li>열처리·용접 후 스케일 및 산화물 제거가 필요할 때</li>
            <li>최종 제품의 품질 기준을 상향할 때</li>
            <li>부식 저항성을 극대화해야 할 부품에 필수 적용</li>
          </ul>
        </Section>

        {/* Differentiator Section */}
        <Section title="당사의 차별화 기술" icon={<StarIcon size={24} />}>
          <p>
            독자적으로 개발한 전문 음극 설계 기술을 기반으로 전류 밀도 분포를
            정밀하고 균일하게 제어하여, 표면 처리 품질의 일관성과 균일성을
            극대화합니다.
          </p>
          <p>
            축적된 기술 노하우와 숙련된 엔지니어의 전문성을 바탕으로 공정의
            신뢰성과 안정성을 한층 더 강화하고 있습니다.
          </p>
          <p>
            까다롭고 복잡한 공정 조건에서도 뛰어난 재현성과 우수한 품질 관리
            능력을 확보하여, 고객의 다양한 기술 요구 사항을 충족시키는 맞춤형
            솔루션을 제공합니다.
          </p>
          <p>
            지속적인 연구 개발과 기술 혁신을 통해 업계를 선도하는 표면처리
            전문기업으로서 최상의 결과물을 약속합니다.
          </p>
        </Section>

        {/* Applications */}
        <Section title="주요 적용 분야" icon={<Server size={24} />}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {applications.map((app, idx) => (
              <li key={idx} className="flex items-center">
                <div className="mr-3">{app.icon}</div>
                <span className="text-gray-700 font-medium">{app.label}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Process Flow */}
        <EPProcess />

        {/* Footer CTA */}
      </main>
    </>
  );
}

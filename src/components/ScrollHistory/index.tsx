"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaIndustry,
  FaCertificate,
  FaRocket,
  FaFlask,
  FaUniversity,
  FaCog,
} from "react-icons/fa";

const timelineSections = [
  {
    phase: "정착기",
    range: "2011 ~ 2012",
    items: [
      {
        date: "2011.02",
        title: "회사 설립",
        detail: "CS Tech 설립, 첫 5명의 직원으로 시작하여 기초 기반 확립",
      },
      {
        date: "2012.01",
        title: "사업장 이전",
        detail: "안산시 단원구로 확장 이전",
      },
    ],
  },
  {
    phase: "성장기",
    range: "2013 ~ 2015",
    items: [
      {
        date: "2013.03",
        title: "사업장 확장 이전",
        detail: "화성시 우정읍으로 확장 이전, 신규 라인 구축",
      },
      {
        date: "2014.01",
        title: "법인 전환",
        detail: "㈜씨에스이노베이션 법인 전환, 법적 기반 강화",
      },
      {
        date: "2015.09",
        title: "제2공장 확장",
        detail: "증가하는 수요 대응을 위해 제2공장 증축",
      },
    ],
  },
  {
    phase: "도약기",
    range: "2016 ~ 2019",
    items: [
      {
        date: "2017.06",
        title: "연구개발부서 인정",
        detail: "중소기업청 연구개발전담부서 인증 완료",
      },
      {
        date: "2017.06",
        title: "기술연구소 설립",
        detail: "독립 기술연구소 설치, R&D 전문 조직 정립",
      },
      {
        date: "2017.08",
        title: "EP동 공장 증설",
        detail: "전해·표면처리 설비 확장, 생산 효율 150% 향상",
      },
    ],
  },
];

const iconMap: Record<string, React.ComponentType> = {
  설립: FaBuilding,
  이전: FaMapMarkerAlt,
  확장: FaIndustry,
  인증: FaCertificate,
  법인: FaBuilding,
  연구: FaFlask,
  기술: FaCog,
  설비: FaIndustry,
};

function pickIcon(title: string) {
  for (const key in iconMap) {
    if (title.includes(key)) return iconMap[key];
  }
  return FaRocket;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DetailedTimeline() {
  return (
    <section
      className="relative py-24 px-4 md:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url('/images/your-background.jpg')` }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-12 text-white"
        >
          <h2 className="text-4xl font-bold">기업 연혁</h2>
          <p className="mt-2">
            정착기, 성장기, 도약기를 거쳐 현재까지 축적된 발자취를 확인하세요.
          </p>
        </motion.div>

        <div className="relative">
          {/* 중앙 수직선: glassmorphism 적용 */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/20 backdrop-blur-sm transform -translate-x-1/2" />

          {timelineSections.map((sec, sIdx) => (
            <div key={sIdx} className="mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className={`flex flex-col items-center md:flex-row md:items-start md:justify-between text-white ${
                  sIdx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Phase */}
                <div className="md:w-1/2 text-center ">
                  <h3 className="text-2xl font-bold">{sec.phase}</h3>
                  <p className="mt-1 text-gray-200">{sec.range}</p>
                </div>

                {/* Items */}
                <div className="relative md:w-1/2">
                  {sec.items.map((item, idx) => {
                    const controls = useAnimation();
                    const [ref, inView] = useInView({
                      triggerOnce: true,
                      threshold: 0.2,
                    });

                    React.useEffect(() => {
                      if (inView) controls.start("visible");
                    }, [inView]);

                    const Icon = pickIcon(item.title);
                    const isLeft = (sIdx + idx) % 2 === 0;

                    return (
                      <motion.div
                        key={idx}
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={sectionVariants}
                        className="mb-8"
                      >
                        {/* glassmorphism card */}
                        <div className="relative p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
                          {/* 연결 점 */}
                          <span
                            className={`hidden md:block absolute top-6 h-4 w-4 bg-white/30 border-2 border-white/30 rounded-full ${
                              isLeft ? "-left-2" : "-right-2"
                            }`}
                          />
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <Icon className="text-blue-400 text-2xl" />
                            </div>
                            <div className="text-white">
                              <span className="block text-sm opacity-80">
                                {item.date}
                              </span>
                              <h4 className="text-lg font-semibold mt-1">
                                {item.title}
                              </h4>
                              <p className="mt-1 text-sm leading-relaxed opacity-90">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* 구분선 */}
              <div className="hidden md:block border-t border-white/20 opacity-50 mt-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

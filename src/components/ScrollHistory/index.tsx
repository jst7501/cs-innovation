"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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

// ✔️ 모든 연혁 항목 + 상세 설명 포함
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
        date: "2016.10",
        title: "SSQ 품질 인증",
        detail: "Semes社 SSQ 품질 인증으로 글로벌 품질 경쟁력 확보",
      },
      {
        date: "2017.06",
        title: "연구개발전담부서 인정",
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

// 텍스트에 따른 아이콘 자동 매핑
const iconMap: Record<string, any> = {
  설립: FaBuilding,
  이전: FaMapMarkerAlt,
  확장: FaIndustry,
  인증: FaCertificate,
  법인: FaBuilding,
  연구: FaFlask,
  기술: FaCog,
  설비: FaIndustry,
  영업: FaUniversity,
  사업: FaRocket,
};

function pickIcon(title: string) {
  for (const key in iconMap) {
    if (title.includes(key)) return iconMap[key];
  }
  return FaRocket;
}

const TimelineItem = ({
  date,
  title,
  detail,
  index,
}: {
  date: string;
  title: string;
  detail: string;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const Icon = pickIcon(title);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: [0.9, 1.05, 1],
        y: 0,
        transition: { duration: 0.8, delay: index * 0.12 },
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={controls}
      className="rounded-xl shadow-xl p-6 mb-8 flex items-start gap-4 border bg-white/80  hover:shadow-2xl hover:scale-[1.02] transition-transform"
    >
      <div className="text-blue-500 text-3xl mt-1 shrink-0">
        <Icon />
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-600">{date}</span>
          <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        </div>
        <p className="text-gray-600 mt-1 text-sm leading-relaxed">{detail}</p>
      </div>
    </motion.div>
  );
};

export default function DetailedTimeline() {
  return (
    <section className="relative bg-gradient-to-b  py-28 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white">기업 연혁</h2>
        <p className="text-gray-100 font-semibold mt-2">
          정착기, 성장기, 도약기를 거쳐 현재까지 축적된 발자취를 확인하세요.
        </p>
      </div>

      <div className="space-y-20">
        {timelineSections.map((sec, sIdx) => (
          <div key={sIdx}>
            <div className=" top-24  py-4">
              <h3 className="text-2xl font-bold text-white">{sec.phase}</h3>
              <p className="text-gray-200 font-semibold">{sec.range}</p>
            </div>

            <div className="space-y-6">
              {sec.items.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  date={item.date}
                  title={item.title}
                  detail={item.detail}
                  index={sIdx + idx}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

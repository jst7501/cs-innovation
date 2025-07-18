import React from "react";
import {
  TruckIcon,
  DropletIcon,
  SparkleIcon,
  CheckCircleIcon,
} from "lucide-react";

const steps = [
  {
    label: "제품 입고",
    icon: <TruckIcon size={28} className="text-purple-600" />,
    description: "소재 입고 후 초기 검사 및 분류를 진행합니다.",
  },
  {
    label: "전처리",
    icon: <DropletIcon size={28} className="text-purple-600" />,
    description: "이물질 및 오염물 제거를 위해 제품 표면을 세척합니다.",
  },
  {
    label: "수세",
    icon: <DropletIcon size={28} className="text-purple-600" />,
    description: "탈지 잔여물을 깨끗한 물로 헹궈냅니다.",
  },
  {
    label: "전해연마",
    icon: <SparkleIcon size={28} className="text-purple-600" />,
    description: "전기 화학적 반응으로 표면 요철을 평활화합니다.",
  },
  {
    label: "수세",
    icon: <DropletIcon size={28} className="text-purple-600" />,
    description: "전해연마 후 잔류 전해질을 세척하여 제거합니다.",
  },
  {
    label: "중화",
    icon: <SparkleIcon size={28} className="text-purple-600" />,
    description: "잔류 산을 안정화시키기 위해 중화 과정을 거칩니다.",
  },
  {
    label: "수세",
    icon: <DropletIcon size={28} className="text-purple-600" />,
    description: "중화 후 다시 한 번 잔여물을 물로 헹굽니다.",
  },
  {
    label: "건조",
    icon: <SparkleIcon size={28} className="text-purple-600" />,
    description: "건조기를 통해 부품의 수분을 완전히 제거합니다.",
  },
  {
    label: "품질검사",
    icon: <CheckCircleIcon size={28} className="text-purple-600" />,
    description: "표면 상태 및 광택도를 검사하여 규격에 맞는지 확인합니다.",
  },
  {
    label: "출하",
    icon: <TruckIcon size={28} className="text-purple-600" />,
    description: "최종 포장 후 제품을 출하 준비합니다.",
  },
];

export default function EPProcess() {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        전해연마 공정도
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xl font-bold">
              {idx + 1}
            </div>
            <div className="mb-4">{step.icon}</div>
            <p className="text-center text-gray-700 font-medium tracking-tight">
              {step.label}
            </p>
            <p className="mt-2 text-center text-gray-500 text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

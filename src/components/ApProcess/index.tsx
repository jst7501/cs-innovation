import React from "react";
import { TruckIcon, DropletIcon, SparkleIcon } from "lucide-react";

const steps = [
  {
    label: "제품 입고",
    icon: <TruckIcon size={28} />,
    description:
      "공정에 투입할 소재가 입고되어 초기 검사 및 분류를 진행합니다.",
  },
  {
    label: "전처리",
    icon: <DropletIcon size={28} />,
    description: "이물질 및 오염물 제거를 위해 제품 표면을 세척합니다.",
  },
  {
    label: "수세",
    icon: <DropletIcon size={28} />,
    description: "탈지 후 잔여 용액을 깨끗한 물로 헹궈냅니다.",
  },
  {
    label: "산 세정",
    icon: <SparkleIcon size={28} />,
    description: "산성 용액으로 산화물 스케일과 열변색을 제거합니다.",
  },
  {
    label: "수세",
    icon: <DropletIcon size={28} />,
    description: "산 세정 후 중화 전 잔류 산을 제거하기 위해 물로 헹굽니다.",
  },
  {
    label: "중화",
    icon: <SparkleIcon size={28} />,
    description: "중화 용액으로 pH를 조절하여 잔류 산을 중화합니다.",
  },
  {
    label: "수세",
    icon: <DropletIcon size={28} />,
    description:
      "중화 공정 후에도 잔여 중화 용액을 제거하기 위해 다시 물로 헹굽니다.",
  },
  {
    label: "건조",
    icon: <SparkleIcon size={28} />,
    description: "세정이 완료된 부품을 건조기로 건조하여 수분을 제거합니다.",
  },
  {
    label: "품질검사",
    icon: <SparkleIcon size={28} />,
    description:
      "표면 상태를 검사하여 불량 부위를 확인하고 합격 여부를 판단합니다.",
  },
  {
    label: "출하",
    icon: <TruckIcon size={28} />,
    description: "최종 포장 후 고객에게 배송 준비를 완료합니다.",
  },
];

export default function PicklingGrid() {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        산세정 공정도
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl font-bold">
              {idx + 1}
            </div>
            <div className="mb-4 text-blue-600">{step.icon}</div>
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

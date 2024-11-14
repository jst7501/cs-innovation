// components/ScrollAnimationSection.tsx
import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

interface ScrollAnimationSectionProps {
  title: string;
  description: string;
  backgroundColor: string;
}

const ScrollAnimationSection: React.FC<ScrollAnimationSectionProps> = ({
  title,
  description,
  backgroundColor,
}) => {
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]); // 스크롤 시 1배에서 1.05배까지만 확대
  const opacity = useTransform(scrollY, [0, 500], [1, 0.8]); // 스크롤 시 투명도 변화 폭 줄이기

  return (
    <motion.div
      style={{ backgroundColor, scale, opacity }}
      className="min-h-screen flex items-center justify-center text-center text-white p-8"
    >
      <div>
        <h2 className="text-6xl font-bold mb-4">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </motion.div>
  );
};

export default ScrollAnimationSection;

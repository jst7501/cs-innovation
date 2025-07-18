"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, useTheme } from "@mui/material";

// Reusable InfoCard 컴포넌트
function InfoCard({ icon, title, subtitle, description }: any) {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          position: "relative",
          p: { xs: 3, md: 4 },
          minHeight: { xs: 240, md: 300 },
          bgcolor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: theme.shadows[6],
          },
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{ height: { xs: 48, md: 56 }, width: { xs: 48, md: 56 }, mb: 2 }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "common.white",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "grey.300",
            mb: 1,
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "grey.300",
            textAlign: "center",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
          }}
        >
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
}

const missions = [
  {
    title: "전해연마",
    subtitle: "Electro-Polishing",
    description:
      "금속 표면에 미러 광택을 제공하여 내구성과 미관을 동시에 향상합니다.",
    icon: `/icons/ico_N3_01.svg`,
  },
  {
    title: "산처리",
    subtitle: "Acid Treatment",
    description:
      "금속 표면의 산화물 제거와 내식성 강화를 통해 제품 수명을 연장합니다.",
    icon: `/icons/ico_N3_02.svg`,
  },
  {
    title: "약속",
    subtitle: "On-Time Delivery",
    description:
      "약속한 시간, 약속한 품질. 고객님과의 신뢰를 지키기 위해 오늘도 준비합니다.",
    icon: `/icons/ico_N3_03.svg`,
  },
];

const values = [
  {
    title: "INNOVATIVE",
    subtitle: "혁신과 변화",
    description: "새로운 생각과 기술로 전해연마의 가능성을 넓혀갑니다.",
    icon: `/icons/ico_N3_01.svg`,
  },
  {
    title: "PRECISION",
    subtitle: "정밀함",
    description: "완벽한 균일성을 만드는 정밀함.",
    icon: `/icons/ico_N3_02.svg`,
  },
  {
    title: "RELIABILITY",
    subtitle: "신뢰성",
    description: "고객의 신뢰에 응답하는 철저한 일정과 품질.",
    icon: `/icons/ico_N3_03.svg`,
  },
  {
    title: "COMMITMENT",
    subtitle: "약속",
    description: "고객과의 약속을 지키는 CS이노베이션의 다짐.",
    icon: `/icons/ico_N3_04.svg`,
  },
];

export default function Vision() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/glassbg6.jpg)",
        backgroundSize: "cover",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        {/* Mission Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            color: "common.white",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            02 ABOUT US
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mt: 1,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            표면처리 전문 기업 <br />
            CS이노베이션
          </Typography>
        </Box>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {missions.map((item, idx) => (
            <div key={idx}>
              <InfoCard {...item} />
            </div>
          ))}
        </div>

        {/* Values Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            color: "common.white",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            03 OUR VALUES
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mt: 1,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            CS이노베이션의 핵심 가치
          </Typography>
        </Box>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((item, idx) => (
            <div key={idx}>
              <InfoCard {...item} />
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
}

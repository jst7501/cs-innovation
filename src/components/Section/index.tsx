"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Box, Paper, useTheme } from "@mui/material";

/**
 * Paper 감싸기 및 진입 애니메이션 섹션 컴포넌트
 */
export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const theme = useTheme();

  return (
    <Box
      id={id}
      ref={ref}
      component={Paper}
      elevation={inView ? 6 : 0}
      sx={{
        p: { xs: 3, md: 6 },
        mb: 6,
        borderRadius: 2,
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(20px)",
        transition: theme.transitions.create(
          ["opacity", "transform", "box-shadow"],
          {
            duration: theme.transitions.duration.standard,
          }
        ),
      }}
    >
      {children}
    </Box>
  );
}

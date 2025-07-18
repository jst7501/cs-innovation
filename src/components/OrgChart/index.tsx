// components/OrgChart.tsx
"use client";

import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

// 전체 래퍼: 모바일에선 세로 스택, 데스크탑에선 수평 정렬
const OrgWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
  },
}));

// 부서 그룹: 반응형 그리드
const DeptGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    maxWidth: 600,
  },
}));

// 연결선 컴포넌트
const Connector = styled(Box)(({ theme }) => ({
  width: 2,
  backgroundColor: theme.palette.divider,
  margin: theme.spacing(0.5, 0),
}));

export default function OrgChart() {
  const theme = useTheme();

  return (
    <OrgWrapper>
      {/* CEO */}
      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: theme.palette.primary.main,
          color: "#fff",
          minWidth: 160,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">대표이사</Typography>
        <Typography>정 현 석</Typography>
      </Paper>

      {/* CEO → 부서 연결선 */}
      <Connector sx={{ height: 32 }} />

      {/* 부서들 */}
      <DeptGrid>
        {["경영지원부", "생산부", "영업부", "연구개발부"].map((dept) => (
          <Paper
            key={dept}
            elevation={2}
            sx={{
              p: 2,
              borderRadius: 2,
              textAlign: "center",
              bgcolor: theme.palette.background.paper,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
              {dept}
            </Typography>
          </Paper>
        ))}
      </DeptGrid>

      {/* 생산부 → 팀 연결선 */}
      <Connector sx={{ height: 32, width: 2 }} />

      {/* 팀들 (생산부 예시) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))",
          gap: theme.spacing(2),
          width: "100%",
          maxWidth: 400,
        }}
      >
        {["산처리", "전해연마", "패키징"].map((team) => (
          <Paper
            key={team}
            elevation={1}
            sx={{
              p: 1,
              borderRadius: 2,
              textAlign: "center",
              bgcolor: theme.palette.grey[100],
            }}
          >
            <Typography variant="body2">{team}</Typography>
          </Paper>
        ))}
      </Box>
    </OrgWrapper>
  );
}

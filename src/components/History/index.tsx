"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
// const timelineSections = [
//   {
//     phase: "정착기",
//     range: "2011 ~ 2012",
//     items: [
//       {
//         date: "2011.02",
//         title: "회사 설립",
//         detail: "CS Tech 설립, 첫 5명의 직원으로 시작하여 기초 기반 확립",
//       },
//       {
//         date: "2012.01",
//         title: "사업장 이전",
//         detail: "안산시 단원구로 확장 이전",
//       },
//     ],
//   },
//   {
//     phase: "성장기",
//     range: "2013 ~ 2015",
//     items: [
//       {
//         date: "2013.03",
//         title: "사업장 확장 이전",
//         detail: "화성시 우정읍으로 확장 이전, 신규 라인 구축",
//       },
//       {
//         date: "2014.01",
//         title: "법인 전환",
//         detail: "㈜씨에스이노베이션 법인 전환, 법적 기반 강화",
//       },
//       {
//         date: "2015.09",
//         title: "제2공장 확장",
//         detail: "증가하는 수요 대응을 위해 제2공장 증축",
//       },
//     ],
//   },
//   {
//     phase: "도약기",
//     range: "2016 ~ 2019",
//     items: [
//       {
//         date: "2017.06",
//         title: "연구개발부서 인정",
//         detail: "중소기업청 연구개발전담부서 인증 완료",
//       },
//       {
//         date: "2017.06",
//         title: "기술연구소 설립",
//         detail: "독립 기술연구소 설치, R&D 전문 조직 정립",
//       },
//       {
//         date: "2017.08",
//         title: "EP동 공장 증설",
//         detail: "전해·표면처리 설비 확장, 생산 효율 150% 향상",
//       },
//     ],
//   },
// ];
const historyItems = [
  { year: "2011", text: "회사 설립 (CS Tech) (시화공단)" },
  { year: "2012", text: "사업장 이전 (안산시 단원구)" },
  { year: "2013", text: "사업장 확장 이전 (화성시 우정읍)" },
  { year: "2014", text: "㈜씨에스이노베이션 법인 전환" },
  { year: "2015", text: "제2공장 확장" },
  { year: "2016", text: "연구개발부서 인정" },
  { year: "2017", text: "기술연구소 설립 및 연구개발전담부서 인정" },
  { year: "2018", text: "EP동 공장 증설" },
];

/**
 * 기업 연혁 컴포넌트 (Timeline)
 */
export default function History() {
  return (
    <Box sx={{ mt: 4 }}>
      <Timeline position="alternate">
        {historyItems.map((item) => (
          <TimelineItem key={item.year}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" color="primary">
                {item.year}
              </Typography>
              <Typography>{item.text}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

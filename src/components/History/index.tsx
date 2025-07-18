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

const historyItems = [
  { year: "2011", text: "회사 설립 (CS Tech)" },
  { year: "2014", text: "㈜씨에스이노베이션 법인 전환" },
  { year: "2017", text: "기술연구소 설립 및 연구개발전담부서 인정" },
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

"use client";

import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { FaIndustry, FaFlask, FaSprayCan, FaTools } from "react-icons/fa";

const facilities = [
  {
    icon: <FaIndustry size={32} />,
    title: "전해연마조 및 정류기",
    items: [
      "소형 EP조 (5,000×1,500×1,700)",
      "중형 EP조 (2,800×4,800×3,500)",
      "대형 EP조 (7,000×5,000×4,500)",
    ],
  },
  {
    icon: <FaFlask size={32} />,
    title: "산 세정조",
    items: ["3,000×6,500×3,500", "3,500×800×1,300", "13,000×800×1,300"],
  },
  {
    icon: <FaSprayCan size={32} />,
    title: "중화조 및 건조로",
    items: ["중화조 (6,000×4,000×4,500)", "건조로 (6,000×5,000×4,000)"],
  },
  {
    icon: <FaTools size={32} />,
    title: "기타 설비",
    items: ["콤프레샤 15H", "크레인", "초순수 제조 장치"],
  },
];

/**
 * 보유 설비 컴포넌트 (Grid + Card)
 */
export default function Facilities() {
  return (
    <Box sx={{ mt: 4 }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {facilities.map((fac) => (
          <div key={fac.title} className="flex h-full">
            <Card
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                borderRadius: 2,
                transition: "transform .3s, box-shadow .3s",
                "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
              }}
            >
              <CardContent
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ mr: 2 }}>{fac.icon}</Box>
                  <Typography variant="h6">{fac.title}</Typography>
                </Box>

                <Divider sx={{ mb: 1 }} />

                <Box
                  component="ul"
                  sx={{
                    pl: 2,
                    m: 0,
                    flexGrow: 1, // 남는 공간 채움
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  {fac.items.map((it) => (
                    <li key={it}>
                      <Typography variant="body2">{it}</Typography>
                    </li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Box>
  );
}

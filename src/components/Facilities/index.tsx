"use client";

import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FaIndustry, FaFlask, FaSprayCan, FaTools } from "react-icons/fa";
import { FiberManualRecord } from "@mui/icons-material"; // 리스트 아이템용 아이콘

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
 * 보유 설비 컴포넌트 (MUI Grid와 Card 활용)
 */
export default function Facilities() {
  return (
    <Box sx={{ mt: 4, flexGrow: 1 }}>
      <Grid container spacing={3}>
        {facilities.map((facility) => (
          <Card
            elevation={3}
            sx={{
              height: "100%", // Grid 아이템의 높이를 100%로 설정하여 같은 행의 카드 높이를 통일
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              transition: "transform .3s, box-shadow .3s",
              "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
            }}
          >
            <CardContent
              sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box sx={{ mr: 2, color: "primary.main" }}>{facility.icon}</Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold" }}
                >
                  {facility.title}
                </Typography>
              </Box>
              <Divider sx={{ mb: 1 }} />
              <List sx={{ flexGrow: 1, py: 0 }}>
                {facility.items.map((item) => (
                  <ListItem key={item} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <FiberManualRecord
                        sx={{ fontSize: 10, color: "text.secondary" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

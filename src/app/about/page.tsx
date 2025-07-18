"use client";

import React from "react";
import { Box, Container, Typography, Grid, Avatar } from "@mui/material";
import Section from "@/components/Section";
import OrgChart from "@/components/OrgChart";
import History from "@/components/History";
import Facilities from "@/components/Facilities";
import Nav from "@/components/Nav";

export default function AboutPage() {
  return (
    <>
      <Nav />

      <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="md">
          {/* CEO 인사말 */}
          <Section id="ceo">
            <Grid spacing={{ xs: 12, md: 8 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                CEO 인사말
              </Typography>
              <Typography
                paragraph
                sx={{ fontSize: "1.1rem", color: "text.primary", mb: 2 }}
              >
                존경하는 고객 여러분,
              </Typography>
              {/* 자동 줄 바꿈 */}
              <Typography
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  color: "text.primary",
                  whiteSpace: "pre-wrap",
                }}
              >
                ㈜씨에스이노베이션을 찾아주셔서 진심으로 감사드립니다. 저희는
                전해연마(EP)와 산세정(PICKLING) 분야에서 다년간 쌓아온 경험과
                기술력으로, 고객의 기대를 뛰어넘는 최상의 품질을 제공하기 위해
                노력하고 있습니다.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  color: "text.primary",
                  whiteSpace: "pre-wrap",
                }}
              >
                급변하는 산업 환경 속에서도 저희의 핵심 가치는 변함없이
                ‘신뢰’입니다. 고객의 소리에 귀 기울이며 철저한 품질 관리와
                지속적인 연구개발(R&D)을 통해 업계 최고 수준의 솔루션을
                완성합니다. 또한, 전문 인력과 설비를 결합하여 고객 맞춤형
                서비스를 실현하고 있습니다.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  color: "text.primary",
                  whiteSpace: "pre-wrap",
                }}
              >
                앞으로도 씨에스이노베이션은 혁신을 멈추지 않고, 안전 경영을
                바탕으로 지속 가능한 가치를 창출하겠습니다. 여러분의 비즈니스
                파트너로서 함께 성장할 날을 기대합니다.
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="medium"
                sx={{ mt: 3 }}
              >
                - ㈜씨에스이노베이션 대표이사 정 현 석
              </Typography>
            </Grid>
          </Section>

          {/* 기업 연혁 */}
          <Section id="history">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              기업 연혁
            </Typography>
            <History />
          </Section>

          {/* 조직도 */}
          <Section id="org-chart">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              조직도
            </Typography>
            <OrgChart />
          </Section>

          {/* 보유 설비 */}
          <Section id="facilities">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              보유 설비
            </Typography>
            <Facilities />
          </Section>
        </Container>
      </Box>
    </>
  );
}

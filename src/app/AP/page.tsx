"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css";

function AboutPage() {
  const beforeAfterPairs = [
    {
      before: "/product/before_AP1.jpg",
      after: "/product/after_AP1.jpg",
    },
    {
      before: "/product/before_AP2.jpg",
      after: "/product/after_AP1.jpg",
    },
    // 필요한 만큼 추가
  ];

  const processSteps = [
    "제품 입고",
    "탈지",
    "수세",
    "산 세정",
    "수세",
    "중화",
    "수세",
    "건조",
    "품질검사",
    "출하",
  ];

  return (
    <main
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Noto Sans KR', sans-serif",
        color: "#222", // 짙은 회색 텍스트
        lineHeight: 1.6,
        backgroundColor: "#f9f9f9", // 연한 회색 배경
      }}
      aria-label="산 세정 (Pickling) 소개 페이지"
    >
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "800",
          marginBottom: 30,
          textAlign: "center",
          color: "#111", // 거의 검정색
          letterSpacing: "1px",
        }}
      >
        산 세정 (Pickling)
      </h1>

      <section
        style={{
          marginBottom: 50,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
          backgroundColor: "#fff",
        }}
        aria-label="비포 애프터 이미지 스와이퍼"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          style={{ overflow: "hidden" }}
        >
          {beforeAfterPairs.map((pair, idx) => (
            <SwiperSlide key={idx}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    backgroundColor: "#e0e0e0",
                  }}
                >
                  <img
                    src={pair.before}
                    alt={`비포 이미지 ${idx + 1}`}
                    style={{ width: "100%", display: "block" }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      padding: "8px 0",
                      fontWeight: "700",
                      backgroundColor: "#333",
                      color: "#ddd",
                      userSelect: "none",
                    }}
                  >
                    Before
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    backgroundColor: "#e0e0e0",
                  }}
                >
                  <img
                    src={pair.after}
                    alt={`애프터 이미지 ${idx + 1}`}
                    style={{ width: "100%", display: "block" }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      padding: "8px 0",
                      fontWeight: "700",
                      backgroundColor: "#333",
                      color: "#ddd",
                      userSelect: "none",
                    }}
                  >
                    After
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div
        style={{
          width: "100%",
          height: 280,
          borderRadius: 12,
          backgroundColor: "#e0e0e0",
          marginBottom: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#666",
          fontSize: 18,
          fontStyle: "italic",
          userSelect: "none",
        }}
      >
        {/* 나중에 사진 넣을 자리 */}
        사진 영역 (추후 삽입 예정)
      </div>

      {/* 개요 설명 */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: 15,
            borderBottom: "3px solid #444",
            paddingBottom: 8,
            color: "#111",
          }}
        >
          개요
        </h2>
        <p style={{ fontSize: 18, color: "#333" }}>
          열변색(heat tint) 또는 산화물 스케일(oxide scale) 제거와 스테인리스
          스틸을 녹일 수 있는 <strong>화학적 처리 방식</strong>입니다.
        </p>
      </section>

      {/* 주요 적용 분야 */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: 15,
            borderBottom: "3px solid #444",
            paddingBottom: 8,
            color: "#111",
          }}
        >
          주요 적용 분야
        </h2>
        <ul
          style={{
            fontSize: 18,
            paddingLeft: 20,
            listStyleType: "disc",
            color: "#444",
          }}
        >
          <li>티타늄 플레이트</li>
          <li>각종 탱크류</li>
          <li>파이프 부속 일체</li>
        </ul>
      </section>

      {/* 공정 - 카드 형식 */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: 15,
            borderBottom: "3px solid #444",
            paddingBottom: 8,
            color: "#111",
          }}
        >
          공정
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
          }}
        >
          {processSteps.map((step, i) => (
            <div
              key={i}
              style={{
                minWidth: 130,
                padding: 16,
                borderRadius: 10,
                backgroundColor: "#ddd",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                textAlign: "center",
                fontWeight: "600",
                fontSize: 16,
                userSelect: "none",
                cursor: "default",
                color: "#222",
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  marginBottom: 8,
                  color: "#111",
                }}
              >
                {i + 1}
              </div>
              <div>{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 향후 상세설명/추가 정보 자리 */}
      <section
        style={{
          marginTop: 60,
          padding: 20,
          backgroundColor: "#ddd",
          borderRadius: 10,
          textAlign: "center",
          fontSize: 16,
          color: "#555",
          fontStyle: "italic",
          userSelect: "none",
        }}
      >
        상세 설명 및 사진, 추가 공정 정보는 추후 업데이트 예정입니다.
      </section>
    </main>
  );
}

export default AboutPage;

// components/Banner.tsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

const Banner: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();

  const handleSlideChange = () => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });

    const activeSlide =
      swiperRef.current?.slides[swiperRef.current.activeIndex];
    const activeVideo = activeSlide?.querySelector("video") as HTMLVideoElement;
    if (activeVideo) {
      activeVideo.oncanplay = () => {
        activeVideo.play().catch((error) => {
          if (error.name !== "AbortError") {
            console.error("비디오 재생 중 오류 발생:", error);
          }
        });
      };
    }
  };

  return (
    <Swiper
      modules={[EffectFade, Autoplay, Navigation, Pagination]}
      effect="fade"
      autoplay={{ delay: 5000 }}
      loop={true}
      speed={0}
      className="swiper-container"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={handleSlideChange}
      pagination={{ clickable: true }}
      navigation
    >
      {/* Slide 1 */}
      <SwiperSlide className="swiper-slide relative flex items-center">
        <div className="img relative w-full h-full flex items-center">
          <video
            poster="https://u2clab.com/inc/img/main/main_visual02_thumb.jpg"
            playsInline
            muted
            autoPlay
            loop={false}
            className="w-full h-full object-cover"
          >
            <source
              src="https://u2clab.com/inc/img/main/main_visual02_2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-1/4 left-12 text-left">
            <p className="text-4xl font-bold text-black mb-2">
              전해연마 분야 최고의 전문성
            </p>
            <p className="text-lg text-blue-600">
              최고의 품질과 신뢰를 바탕으로 전해연마 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="swiper-slide relative flex items-center">
        <div className="img relative w-full h-full flex items-center">
          <video
            poster="https://u2clab.com/inc/img/main/main_visual01_thumb.jpg"
            playsInline
            muted
            autoPlay
            loop={false}
            className="w-full h-full object-cover"
          >
            <source
              src="https://u2clab.com/inc/img/main/main_visual01_2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-1/4 left-12 text-left">
            <p className="text-4xl font-bold text-black mb-2">
              산처리 솔루션 품질 보증
            </p>
            <p className="text-lg text-blue-600">
              최신 기술을 바탕으로 안전하고 친환경적인 산처리 서비스를
              제공합니다.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

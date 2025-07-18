"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const workPhotos = Array.from({ length: 15 }, (_, i) => ({
  src: `/product/AP${i + 1}.jpg`,
}));

export default function WorkGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <motion.section
      className="my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <p className="text-center text-lg md:text-2xl font-semibold mb-8">
        AP(산처리) 공정의 작업 사진 갤러리입니다.
      </p>
      <p className="text-center text-sm md:text-base text-gray-500 mb-12">
        이미지 클릭시 확대하여 볼 수 있습니다.
      </p>
      <div className="rounded-2xl p-[2px] bg-gradient-to-r from-green-200 to-blue-200 shadow-md">
        <div className="bg-white rounded-2xl p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {workPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow-sm cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
              >
                <Image
                  src={photo.src}
                  alt={`Work ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={workPhotos}
      />
    </motion.section>
  );
}

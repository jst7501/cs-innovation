"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Image from "next/image";

const fadeInOut = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const workPhotos = Array.from({ length: 13 }, (_, i) => ({
  src: `/product/AP${i + 1}.jpg`,
}));

const PER_PAGE = 15;

export default function WorkGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const offset = (currentPage - 1) * PER_PAGE;
  const currentPhotos = workPhotos.slice(offset, offset + PER_PAGE);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <motion.section
      className="my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInOut}
    >
      <div className="rounded-2xl p-[2px] bg-gradient-to-r from-green-200 to-blue-200 shadow-md">
        <div className="bg-white rounded-2xl p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage} // 페이지마다 리렌더하면서 애니메이션
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              variants={fadeInOut}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {currentPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-lg shadow-sm cursor-pointer aspect-square"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    setIndex(offset + idx);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={`Work ${offset + idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <Stack spacing={2} className="mt-6 items-center">
            <Pagination
              count={Math.ceil(workPhotos.length / PER_PAGE)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
              siblingCount={1}
              boundaryCount={1}
            />
          </Stack>
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

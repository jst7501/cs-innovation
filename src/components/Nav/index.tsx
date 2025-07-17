import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import react from "react";

const Nav = () => {
  return (
    <>
      {" "}
      <header className=" sticky top-0 z-50 w-full border-b bg-transparent backdrop-blur supports-[backdrop-filter]:bg-white/60 px-5">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <span className="text-xl font-bold text-black ">CS Innovation</span>
          </Link>
          <nav className="hidden md:flex items-center px-8 gap-4 ">
            {[
              "회사소개",
              "전해연마",
              "산처리",
              "인증현황",
              "보유시설",
              "고객지원",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="

        text-[15px] 
        font-semibold 
        text-gray-700 
        hover:text-gray-900 
        transition-colors
      "
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {/* {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {[
                "회사소개",
                "전해연마",
                "산처리",
                "인증현황",
                "보유시설",
                "고객지원",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="
                  ml-5
        text-[15px] 
        font-semibold 
        text-gray-700 
        hover:text-gray-900 
        transition-colors
      "
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}</> */}
    </>
  );
};

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { title: "회사소개", href: "/about" },
  { title: "전해연마", href: "/EP" },
  { title: "산처리", href: "/AP" },
  { title: "인증현황", href: "/certifications" },
];

const menuVariants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

const itemVariants = {
  closed: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed  top-0 z-50 w-full transition-colors duration-300 backdrop-blur bg-black/40 shadow-md">
      <div className="container mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Title */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              CS Innovation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white font-medium text-sm uppercase tracking-wide hover:text-gray-300 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="메뉴 토글"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden transform origin-top"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="py-2"
                >
                  <Link
                    href={item.href}
                    className="text-white font-medium text-lg uppercase tracking-wide hover:text-gray-300 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

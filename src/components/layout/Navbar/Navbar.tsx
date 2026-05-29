'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileDown } from 'lucide-react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import useScrollSpy from '@/hooks/useScrollSpy';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'work', 'contact']);
  const { isIntroComplete } = useIntroAnimation();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 md:px-10 hidden md:block">
        <div className="relative max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo - Left Side - Aligned with navbar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isIntroComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="cursor-pointer flex-shrink-0 z-10"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Image 
              src="/icons/logo.png" 
              alt="Aditya Bhosale - Full Stack & AI Developer Logo" 
              width={80}
              height={80}
              className="hover:scale-110 transition-transform duration-300"
              priority
            />
          </motion.div>

          {/* Center Glass Pill Navigation - Perfectly Centered */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="backdrop-blur-sm border border-white/[0.15] rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1"
              style={{
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <NavLinks activeSection={activeSection} />
            </motion.div>
          </div>

          {/* Resume Button - Right Side */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={isIntroComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="/resume/Aditya_Bhosale_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Aditya's resume in a new tab"
            className="group ml-auto inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.07] hover:text-white"
            style={{
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
            }}
          >
            <span className="relative">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              <FileDown size={16} className="relative z-10 text-white/70 transition-colors duration-300 group-hover:text-white" />
            </span>
            <span className="relative z-10">Resume</span>
          </motion.a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <motion.nav
        className="fixed top-4 left-0 right-0 z-50 px-4 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="backdrop-blur-sm border border-white/[0.05] rounded-full px-4 py-2 shadow-lg flex justify-between items-center">
          {/* Logo */}
          <div
            className="cursor-pointer flex-shrink-0"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Image 
              src="/icons/logo.png" 
              alt="Aditya Bhosale Logo" 
              width={40}
              height={40}
              priority
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1.5 hover:bg-white/[0.05] rounded-full transition-all"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          activeSection={activeSection}
        />
      </motion.nav>
    </>
  );
}

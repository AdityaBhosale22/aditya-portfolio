'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-20 left-6 right-6 backdrop-blur-2xl border border-white/[0.05] rounded-xl shadow-lg overflow-hidden"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
          }}
        >
          <div className="flex flex-col py-2">
            {NAV_LINKS.map((link, index) => {
              const isActive = activeSection === link.id;

              return (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className={`px-6 py-3 text-left transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.05]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                </motion.button>
              );
            })}

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: NAV_LINKS.length * 0.05 }}
                href="/resume/Aditya_Bhosale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Aditya's resume in a new tab"
                className="mx-4 mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-left text-white/80 transition-all duration-200 hover:bg-white/[0.07] hover:text-white"
              >
                <FileDown size={16} className="text-white/70" />
                Resume
              </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useCallback, useMemo, memo } from 'react';
import Button from '@/components/ui/Button';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

// ─── Animation Variants ─────────────────────────────────────────────────────

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Custom easing for GPU-optimized transforms ─────────────────────────────
const customEase = [0.22, 1, 0.36, 1] as const;

const adityaStrokeColors = [
  '#FF5C29',
  '#FF4A38',
  '#FF3948',
  '#FF2858',
  '#FF1493',
  '#FF2A80',
  '#FF416E',
  '#FF6351',
  '#FF8C00',
];

// ─── Letter-by-letter reveal (memoized for performance) ─────────────────────

const AnimatedLetters = memo(function AnimatedLetters({
  text,
  baseDelay = 0,
  isActive,
  className,
  style,
  letterStyle,
  getLetterStyle,
}: {
  text: string;
  baseDelay?: number;
  isActive: boolean;
  className?: string;
  style?: React.CSSProperties;
  letterStyle?: React.CSSProperties;
  getLetterStyle?: (index: number, total: number, char: string) => React.CSSProperties;
}) {
  // Memoize letter styles to prevent recalculation
  const letters = useMemo(() => text.split(''), [text]);
  
  // Base letter style with GPU acceleration hint
  const baseLetterStyle = useMemo(() => ({
    display: 'inline-block',
    willChange: isActive ? 'auto' : 'transform, opacity',
    ...letterStyle,
  }), [letterStyle, isActive]);

  return (
    <span className={className} style={style}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isActive
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{
            duration: 0.5,
            delay: baseDelay + i * 0.03,
            ease: customEase,
          }}
          style={
            getLetterStyle
              ? { ...baseLetterStyle, ...getLetterStyle(i, letters.length, char) }
              : baseLetterStyle
          }
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
});

// ─── Main Component ──────────────────────────────────────────────────────────

export default function HeroContent() {
  const { isIntroComplete } = useIntroAnimation();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      role="banner"
    >
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 text-center pointer-events-auto">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isIntroComplete ? 'visible' : 'hidden'}
        >
          {/* ── Main Heading with Name (H1 for SEO) ── */}
          <header className="mb-2 sm:mb-3">
            <p className="sr-only">
              Aditya - Full Stack Developer & AI Engineer | React, Next.js, TypeScript Expert
            </p>

            <h1
              className="group hero-heading flex flex-col items-center gap-y-0.5 sm:gap-y-1 text-[clamp(2.35rem,7.4vw,7.2rem)] leading-[0.9] tracking-tight font-[900]"
              itemProp="name"
              aria-label="Aditya - Full Stack Developer"
              style={{
                fontFamily: '"Satoshi", "Inter", system-ui, sans-serif',
              }}
            >
              <span className="block whitespace-nowrap text-white" aria-hidden="true">
                <AnimatedLetters
                  text="Hey,"
                  baseDelay={0.05}
                  isActive={isIntroComplete}
                />
              </span>

              <span className="block whitespace-nowrap" aria-hidden="true">
                <span className="inline-block align-baseline text-white">
                  <AnimatedLetters
                    text="I'm "
                    baseDelay={0.3}
                    isActive={isIntroComplete}
                  />
                </span>
                <span className="stroke-text inline-block align-baseline">
                  <AnimatedLetters
                    text="Aditya"
                    baseDelay={0.42}
                    isActive={isIntroComplete}
                    getLetterStyle={(index) =>
                      ({
                        '--stroke-color': adityaStrokeColors[Math.min(index, adityaStrokeColors.length - 1)],
                      } as React.CSSProperties)
                    }
                  />
                </span>
              </span>
            </h1>

            {/* Animated divider line — below heading */}
            <motion.div
              className="mt-3 sm:mt-4 lg:mt-5 flex justify-center"
              initial={{ scaleX: 0 }}
              animate={isIntroComplete ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'center center' }}
              aria-hidden="true"
            >
              <div
                className="h-[2px] sm:h-[3px] w-full max-w-[180px] sm:max-w-[280px] lg:max-w-[320px]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #FF5C29 20%, #FF1493 50%, #FF8C00 80%, transparent 100%)',
                }}
              />
            </motion.div>
          </header>

          <div className="mb-8 sm:mb-14" aria-hidden="true" />

          {/* ── Description (H2 equivalent for SEO) ── */}
          {/* ── Hero Description ── */}
<motion.div
  variants={fadeUpItem}
  className="max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0 text-center"
>
  {/* Main Tagline */}
  <p
    className="text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.35rem] leading-relaxed"
    style={{
      fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: 'rgba(255,255,255,0.82)',
      textShadow: '0 2px 10px rgba(0,0,0,0.35)',
    }}
    itemProp="description"
  >
    Designing{' '}
    <span
      style={{
        background: 'linear-gradient(90deg, #FF5C29 0%, #FF1493 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 600,
      }}
    >
      scalable experiences
    </span>{' '}
    powered by{' '}
    <span
      style={{
        background: 'linear-gradient(90deg, #FF1493 0%, #FF8C00 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 600,
      }}
    >
      AI and modern engineering
    </span>
    .
  </p>

  {/* Small Identity Line */}
  <p
    className="mt-3 text-[0.72rem] sm:text-[0.8rem] md:text-[0.9rem] tracking-wide uppercase"
    style={{
      fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
      color: 'rgba(255,255,255,0.42)',
      letterSpacing: '0.12em',
    }}
  >
    AI-Focused Full Stack Developer • Backend/API Engineer
  </p>
</motion.div>

          {/* ── CTA Buttons ── */}
          <motion.nav
            variants={fadeUpItem}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            aria-label="Primary navigation - View portfolio or contact Aditya"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('work')}
              aria-label="View Aditya's portfolio projects and work samples"
              className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              shimmer={true}
              onClick={() => scrollToSection('contact')}
              aria-label="Contact Aditya for Full Stack Development and AI Engineering projects"
              className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
            >
              Get In Touch
            </Button>
          </motion.nav>
        </motion.div>

      </div>
    </div>
  );
}


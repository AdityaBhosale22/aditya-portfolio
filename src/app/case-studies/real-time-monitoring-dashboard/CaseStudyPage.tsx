'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarRange,
  CheckCircle2,
  Cpu,
  Gauge,
  LineChart,
  LockKeyhole,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  TrendingUp,
  TriangleAlert,
  Workflow,
  Zap,
  Sparkles,
  Users,
} from 'lucide-react';

const techStack = ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'Tailwind CSS', 'REST APIs'];

const impactCards = [
  {
    value: '50%',
    label: 'Operational Visibility',
    description: 'Centralized live monitoring gave operators a clearer view of system health.',
    accent: 'from-[#FF8C00] to-[#FF1493]',
  },
  {
    value: '30%',
    label: 'Reduced Manual Effort',
    description: 'Automation reduced repetitive observation and manual data checking.',
    accent: 'from-[#FF1493] to-[#FF6A00]',
  },
  {
    value: '40%',
    label: 'Improved Reliability',
    description: 'Continuous updates and cleaner workflows improved trust in the data feed.',
    accent: 'from-[#FF6A00] to-[#FF8C00]',
  },
];

const overviewCards = [
  {
    title: 'Problem Statement',
    body:
      'Industrial plants generated continuous voltage, current, power, and frequency data, but manual monitoring made it difficult to identify anomalies fast enough.',
    icon: TriangleAlert,
  },
  {
    title: 'Business Context',
    body:
      'MSS PowerTech needed a centralized dashboard that improved visibility for operators while supporting secure access for administrative users.',
    icon: Building2,
  },
  {
    title: 'Why It Was Needed',
    body:
      'The team required real-time reporting, role-based access, and actionable analytics to support safer decisions and better operational response times.',
    icon: Sparkles,
  },
];

const contributionSteps = [
  'Built responsive dashboard interfaces with a premium dark UI system.',
  'Developed the live monitoring modules for current and voltage updates.',
  'Integrated backend APIs for periodic data refresh and visualization feeds.',
  'Implemented secure authentication and protected administrative access.',
  'Optimized workflow states to reduce friction in daily operator usage.',
  'Improved chart readability and the overall data presentation layer.',
];

const architectureNodes = [
  {
    title: 'Industrial Sensors',
    description: 'Electrical data sources feeding live plant telemetry.',
    icon: Activity,
  },
  {
    title: 'Backend Services',
    description: 'Processing, validation, and refresh orchestration.',
    icon: Server,
  },
  {
    title: 'REST APIs',
    description: 'Lightweight endpoints for dashboard consumption.',
    icon: Workflow,
  },
  {
    title: 'Dashboard Interface',
    description: 'Clear, responsive views for operators and admins.',
    icon: MonitorSmartphone,
  },
];

const featureCards = [
  {
    title: 'Real-Time Monitoring',
    description:
      'Displayed live voltage and current readings with continuous refresh and status awareness.',
    icon: Gauge,
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Turned raw data into KPI cards, trend charts, and historical comparisons for better decisions.',
    icon: LineChart,
  },
  {
    title: 'Secure Authentication',
    description:
      'Protected the admin experience through login flows, session awareness, and access control.',
    icon: LockKeyhole,
  },
  {
    title: 'Workflow Optimization',
    description:
      'Reduced manual monitoring friction with a more reliable, more usable operational workflow.',
    icon: Zap,
  },
];

const challengeSolutions = [
  {
    title: 'Continuously changing monitoring data',
    challenge:
      'The dashboard had to stay responsive while the data source kept updating at a steady cadence.',
    solution:
      'I used efficient API integration and periodic refresh logic to keep the experience near real time without hurting performance.',
  },
  {
    title: 'Large amounts of data in a readable format',
    challenge:
      'Operators needed a concise view of complex telemetry, not a wall of numbers.',
    solution:
      'I designed KPI cards, charts, and visual indicators that compressed the data into decision-friendly surfaces.',
  },
  {
    title: 'Security for administrative users',
    challenge:
      'Critical monitoring functions had to stay protected from unauthorized access.',
    solution:
      'I built authentication workflows and guarded access to sensitive dashboard functions.',
  },
];

const results = [
  {
    value: '50%',
    title: 'Operational Visibility',
    description: 'Operators gained access to centralized monitoring information in one place.',
    progress: 92,
  },
  {
    value: '30%',
    title: 'Manual Monitoring Effort',
    description: 'Automation reduced the burden of repeated manual checks across the workflow.',
    progress: 74,
  },
  {
    value: '40%',
    title: 'Data Reliability',
    description: 'Continuous updates and cleaner integration improved consistency and trust.',
    progress: 81,
  },
];

const lessons = [
  {
    title: 'Professional Growth',
    description:
      'I learned how to scope work around real business requirements instead of building isolated UI pieces.',
    icon: Users,
  },
  {
    title: 'Technical Skills Acquired',
    description:
      'The internship strengthened my work with API integration, data visualization, and authentication systems.',
    icon: Cpu,
  },
  {
    title: 'Industry Experience',
    description:
      'I gained practical experience shipping production-minded dashboard features in an operational environment.',
    icon: BadgeCheck,
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionLabel({ eyebrow, title, description }: { eyebrow: string; title: string; description: string; }) {
  return (
    <motion.div variants={revealVariants} className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string; }) {
  return (
    <motion.div
      variants={revealVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-80" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function CaseStudyPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative overflow-hidden bg-[#0F0E0E] text-white"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-96 w-96 rounded-full bg-[#FF8C00]/10 blur-[140px]" />
        <div className="absolute right-[-8%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[#FF1493]/10 blur-[160px]" />
        <div className="absolute bottom-[-12%] left-[18%] h-[24rem] w-[24rem] rounded-full bg-white/5 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)',
          }}
        />
      </div>

      <Container className="relative z-10 py-8 sm:py-10 lg:py-14">
        <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-18 sm:mb-24 lg:mb-32">
          <div className="grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Badge variant="subtle" className="border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] uppercase tracking-[0.24em] text-white/78">
                  Internship Case Study
                </Badge>
                <Badge variant="subtle" className="border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] uppercase tracking-[0.24em] text-white/78">
                  Live Product Work
                </Badge>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Real-Time Monitoring
                  <span className="block bg-gradient-to-r from-[#FF8C00] via-[#FF1493] to-[#FF6A00] bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  Industrial Monitoring & Analytics System developed during my internship at MSS PowerTech Pvt. Ltd.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Badge variant="subtle" className="border border-white/10 bg-white/[0.035] px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/80">
                  MSS PowerTech Pvt. Ltd.
                </Badge>
                <Badge variant="subtle" className="border border-white/10 bg-white/[0.035] px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/80">
                  Jan 2024 – Jun 2024
                </Badge>
                <Badge variant="subtle" className="border border-white/10 bg-white/[0.035] px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/80">
                  Web Developer Intern
                </Badge>
              </div>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                I designed and developed a premium monitoring interface that turned raw electrical telemetry into a clear operational view for plant users and administrators.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-1.5 text-xs font-medium text-white/74 backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="primary" size="lg" rightIcon={<ArrowRight size={16} />}>
                  <Link href="/#work">Back to Portfolio</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/resume/Aditya_Bhosale_Resume.pdf" target="_blank" rel="noreferrer">
                    View Resume
                  </Link>
                </Button>
              </div>
            </div>

            <motion.div variants={revealVariants} className="relative">
              <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-[#FF8C00]/15 via-transparent to-[#FF1493]/15 blur-3xl" />
              <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/8 via-transparent to-[#FF1493]/10" />
                  <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/3]">
                    <Image
                      src="/images/projects/project4.png"
                      alt="Real-Time Monitoring Dashboard showcase"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl"
                    >
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Dashboard Preview</p>
                      <p className="mt-1 text-sm font-medium text-white">Live electrical telemetry</p>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                      className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl"
                    >
                      <div className="flex items-center gap-2 text-sm text-white/78">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        Secure admin access
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-white/45">
                        <TrendingUp className="h-3.5 w-3.5 text-[#FF8C00]" />
                        Operational confidence improved
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-12">
            {impactCards.map((card) => (
              <GlassCard key={card.label} className="min-h-[170px]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className={`inline-block bg-gradient-to-r ${card.accent} bg-clip-text text-4xl font-semibold tracking-[-0.05em] text-transparent`}>
                      {card.value}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{card.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{card.description}</p>
                  </div>
                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <div className={`h-full rounded-full bg-gradient-to-r ${card.accent}`} style={{ width: '100%' }} />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mb-18 sm:mb-24 lg:mb-32">
          <SectionLabel
            eyebrow="Project Overview"
            title="Why the dashboard had to exist"
            description="The project solved a real operational gap by turning continuous plant data into a monitored, readable, and secure experience."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {overviewCards.map((card) => {
              const Icon = card.icon;

              return (
                <GlassCard key={card.title} className="h-full min-h-[220px]">
                  <div className="flex h-full flex-col">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8C00]/20 to-[#FF1493]/20 text-[#FFB26A]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">{card.body}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mb-18 sm:mb-24 lg:mb-32">
          <SectionLabel
            eyebrow="My Contributions"
            title="A hands-on role across the full dashboard experience"
            description="I worked through the interface, data flow, and access-control layers to make the product feel reliable and production-ready."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <GlassCard className="overflow-hidden">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8C00]/20 to-[#FF1493]/20 text-[#FF8C00]">
                  <CalendarRange className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Development Timeline</h3>
                  <p className="text-sm text-white/52">Responsibilities completed during the internship window</p>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-[#FF8C00]/60 via-[#FF1493]/50 to-transparent" />
                <div className="space-y-5">
                  {contributionSteps.map((step, index) => (
                    <motion.div key={step} variants={revealVariants} className="relative flex gap-4">
                      <div className="absolute left-[-29px] top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-[#111111]">
                        <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FF1493]" />
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
                        <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-white/42">Step {index + 1}</p>
                        <p className="text-sm leading-7 text-white/76">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF1493]/20 to-[#FF8C00]/20 text-[#FF1493]">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Responsibilities</h3>
                  <p className="text-sm text-white/52">What I owned in the project</p>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  'Building responsive dashboard interfaces',
                  'Developing real-time monitoring modules',
                  'Integrating backend APIs',
                  'Implementing secure admin authentication',
                  'Optimizing dashboard workflows',
                  'Enhancing data visualization and usability',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm leading-7 text-white/72">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mb-18 sm:mb-24 lg:mb-32">
          <SectionLabel
            eyebrow="Architecture"
            title="A simple flow that stays readable at every scale"
            description="The architecture was designed to keep the monitoring path visible from sensors all the way to the dashboard interface."
          />

          <GlassCard className="mt-8 overflow-hidden">
            <div className="grid gap-4 md:grid-cols-[repeat(7,minmax(0,1fr))] md:items-center">
              {architectureNodes.map((node, index) => {
                const Icon = node.icon;

                return (
                  <motion.div
                    key={node.title}
                    variants={revealVariants}
                    className="relative"
                  >
                    <div className="rounded-[24px] border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8C00]/20 to-[#FF1493]/20 text-white">
                        <Icon className="h-5 w-5 text-[#FFD1A3]" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{node.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/58">{node.description}</p>
                    </div>

                    {index < architectureNodes.length - 1 && (
                      <div className="flex items-center justify-center py-3 md:py-0 md:absolute md:-right-5 md:top-1/2 md:w-10 md:-translate-y-1/2">
                        <div className="hidden h-px w-10 bg-gradient-to-r from-[#FF8C00]/70 via-[#FF1493]/80 to-white/0 md:block" />
                        <ArrowRight className="h-4 w-4 text-[#FF8C00] md:ml-[-8px]" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42">Flow outcome</p>
                  <p className="mt-2 text-sm leading-7 text-white/68">
                    Industrial Sensors → Backend Services → REST APIs → Dashboard Interface
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/54">
                  <Users className="h-4 w-4 text-[#FF8C00]" />
                  Operators & Administrators
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mb-18 sm:mb-24 lg:mb-32">
          <SectionLabel
            eyebrow="Key Features"
            title="Focused features that make the system feel production-grade"
            description="Each surface was intentionally simplified so operators could understand the state of the system quickly."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => {
              const Icon = card.icon;

              return (
                <GlassCard key={card.title} className="min-h-[220px]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8C00]/20 to-[#FF1493]/20 text-[#FFB26A]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/60">{card.description}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/42">
                      <div className="h-px flex-1 bg-gradient-to-r from-[#FF8C00]/60 via-[#FF1493]/60 to-transparent" />
                      Feature
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mb-18 sm:mb-24 lg:mb-32">
          <SectionLabel
            eyebrow="Challenges & Solutions"
            title="What needed to be solved and how I solved it"
            description="The strongest part of the build was not just the UI but the way the product stayed usable under practical constraints."
          />

          <div className="mt-8 space-y-5">
            {challengeSolutions.map((item, index) => (
              <div key={item.title} className="grid gap-5 md:grid-cols-2">
                <GlassCard className="min-h-[230px] border-[#FF8C00]/20">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#FFB26A]">Challenge {index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.challenge}</p>
                </GlassCard>

                <GlassCard className="min-h-[230px] border-white/10">
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">Solution {index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Resolved with a focused system design</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.solution}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mb-18 sm:mb-24 lg:mb-32">
          <SectionLabel
            eyebrow="Impact & Results"
            title="Operational gains that were visible in the product"
            description="The dashboard produced cleaner visibility, reduced manual work, and improved confidence in the monitoring data."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {results.map((result) => (
              <GlassCard key={result.title} className="min-h-[260px]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">{result.value}</p>
                    <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">{result.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{result.description}</p>
                  </div>

                  <div className="mt-8">
                    <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/42">
                      <span>Result strength</span>
                      <span>{result.progress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        variants={revealVariants}
                        className="h-full rounded-full bg-gradient-to-r from-[#FF8C00] via-[#FF1493] to-[#FF6A00]"
                        style={{ width: `${result.progress}%` }}
                      />
                    </div>

                    <div className="mt-5 flex items-end gap-2">
                      {[32, 48, 41, 58, 54, 67, 61, 72].map((height, barIndex) => (
                        <div
                          key={barIndex}
                          className="flex-1 rounded-t-full bg-white/8"
                          style={{ height: `${height}px` }}
                        >
                          <div
                            className="h-full w-full rounded-t-full bg-gradient-to-t from-[#FF8C00] via-[#FF1493] to-[#FF6A00] opacity-80"
                            style={{ transform: `scaleY(${0.5 + barIndex * 0.06})`, transformOrigin: 'bottom' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-5 overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Metric visualization</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">A quick operational snapshot</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  The visual hierarchy made it easy to compare monitored categories and understand the state of the system at a glance.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Visibility', value: 92 },
                  { label: 'Efficiency', value: 74 },
                  { label: 'Reliability', value: 81 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-white/62">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF8C00] via-[#FF1493] to-[#FF6A00]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mb-14 sm:mb-20 lg:mb-24">
          <SectionLabel
            eyebrow="Lessons Learned"
            title="What this internship changed for me"
            description="The project strengthened both my engineering judgment and my ability to ship product work inside a real organization."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {lessons.map((lesson) => {
              const Icon = lesson.icon;

              return (
                <GlassCard key={lesson.title} className="min-h-[220px]">
                  <div className="flex h-full flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8C00]/20 to-[#FF1493]/20 text-[#FFB26A]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{lesson.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{lesson.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.section>

        <motion.footer variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="pb-6 sm:pb-10">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Footer Navigation</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">Continue exploring the portfolio</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
                  Jump back to the portfolio overview or open the resume for a fuller snapshot of the work behind this case study.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild variant="secondary" size="lg" leftIcon={<ArrowLeft size={16} />}>
                  <Link href="/#work">Back to Portfolio</Link>
                </Button>
                <Button asChild variant="primary" size="lg" rightIcon={<ArrowRight size={16} />}>
                  <Link href="/resume/Aditya_Bhosale_Resume.pdf" target="_blank" rel="noreferrer">
                    View Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.footer>
      </Container>
    </motion.main>
  );
}
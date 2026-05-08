'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import AboutHeader from './AboutHeader';
import ProfileCard from './ProfileCard';
import StatsGrid from './StatsGrid';
import TimelineStrip from './TimelineStrip';
import MarqueeBanner from './MarqueeBanner';
import ExpertiseShowcase from './ExpertiseShowcase';
import GlowCard, { GlowCardGroup } from '@/components/ui/GlowCard';
import { PERSONAL_INFO } from '@/lib/constants';

export default function About() {

  return (
    <section 
      id="about" 
      className="relative pt-24 sm:pt-32 md:pt-40 pb-12 px-4 sm:px-6 bg-[#0F0E0E] overflow-x-clip"
      aria-label="About Aditya Bhosale - Full Stack Developer"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* SEO Microdata - Enhanced */}
      <meta itemProp="name" content={PERSONAL_INFO.name} />
      <meta itemProp="jobTitle" content={PERSONAL_INFO.jobTitle} />
      <meta itemProp="description" content={PERSONAL_INFO.bio} />
      <meta itemProp="url" content="https://adityabhosale.com" />
      <meta itemProp="email" content={PERSONAL_INFO.email} />
      <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
      <meta itemProp="image" content={`https://adityabhosale.com${PERSONAL_INFO.image}`} />
      
      {/* Address Schema */}
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
        <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
        <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
        <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
      </div>
      
      {/* Skills & Expertise */}
      <meta itemProp="knowsAbout" content="React" />
      <meta itemProp="knowsAbout" content="Next.js" />
      <meta itemProp="knowsAbout" content="TypeScript" />
      <meta itemProp="knowsAbout" content="JavaScript" />
      <meta itemProp="knowsAbout" content="Node.js" />
      <meta itemProp="knowsAbout" content="Full Stack Development" />
      <meta itemProp="knowsAbout" content="Web Development" />
      <meta itemProp="knowsAbout" content="MERN Stack" />
      <meta itemProp="knowsAbout" content="RESTful API" />
      <meta itemProp="knowsAbout" content="Database Design" />
      
      {/* Occupation Schema */}
      <div itemProp="hasOccupation" itemScope itemType="https://schema.org/Occupation" className="hidden">
        <meta itemProp="name" content="Full Stack Developer" />
        <meta itemProp="occupationLocation" content="Pune, Maharashtra, India" />
        <meta itemProp="skills" content="React, Next.js, TypeScript, Node.js, JavaScript, MongoDB, Express.js" />
        <meta itemProp="experienceRequirements" content="5+ years" />
      </div>
      
      {/* Educational Background */}
      <div itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization" className="hidden">
        <meta itemProp="name" content="Computer Science" />
      </div>

      {/* Extended horizon glow from Hero - fading upward */}
      <div className="absolute top-0 left-0 w-full h-48 sm:h-64 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(255, 80, 30, 0.08) 0%, rgba(220, 60, 20, 0.04) 30%, rgba(180, 40, 15, 0.02) 60%, transparent 100%)',
            filter: 'blur(60px)',
            willChange: 'auto',
          }}
        />
      </div>

      {/* Subtle ambient glows */}
      <div 
        className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ willChange: 'auto' }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ willChange: 'auto' }}
      />

      <Container>
        {/* Header */}
        <AboutHeader />

        {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>About Aditya Bhosale - Full Stack Developer</h2>
            <p>
              Aditya Bhosale is a Full Stack Developer based in Pune, Maharashtra, India, 
              specializing in React, Next.js, TypeScript, and modern web technologies. 
              With expertise in building scalable web applications and AI-driven products, 
              Aditya Bhosale portfolio showcases expertise in full-stack development, 
              machine learning integration, and SaaS platform development.
            </p>
            <h3>Aditya Bhosale - Core Skills and Expertise</h3>
            <ul>
              <li>Full Stack Development with MERN Stack (MongoDB, Express.js, React, Node.js)</li>
              <li>Frontend Development: React, Next.js, TypeScript, JavaScript, HTML5, CSS3</li>
              <li>Backend Development: Node.js, Express.js, RESTful API Design</li>
              <li>Database: MongoDB, PostgreSQL, MySQL, Database Optimization</li>
              <li>Cloud Services: AWS, Azure, Google Cloud Platform</li>
              <li>DevOps: Docker, CI/CD, Git, GitHub Actions</li>
              <li>AI/ML Integration: TensorFlow, Python, Machine Learning APIs</li>
              <li>System Design and Architecture</li>
            </ul>
            <h3>Aditya Bhosale - Professional Experience</h3>
            <p>
              Aditya Bhosale brings practical expertise in web development with hands-on experience across multiple projects. 
              With a focus on building high-quality, scalable applications, Aditya Bhosale has successfully delivered projects 
              that combine cutting-edge technologies with user-centric design.
            </p>
            <h3>Achievements</h3>
            <ul>
              <li>Built scalable web applications serving thousands of users</li>
              <li>Contributed to open-source projects</li>
              <li>Technical blog writer sharing knowledge with the developer community</li>
              <li>Mentored junior developers</li>
            </ul>
            <h3>Education and Continuous Learning</h3>
            <p>
              Aditya Bhosale has an IT Engineering background with continuous skill development through online certifications, 
              courses, and active participation in the tech community.
            </p>
            <h3>Contact Aditya Bhosale</h3>
            <address>
              <p>Location: Pune, Maharashtra, India</p>
              <p>Email: adityabhosale4388@gmail.com</p>
              <p>Phone: +91 9404731898</p>
              <p>Aditya Bhosale is open to remote opportunities worldwide</p>
            </address>
          </div>

          {/* Main Content Grid */}
          <GlowCardGroup className="max-w-7xl mx-auto">
            {/* Two-column layout: Profile Card | Right Content */}
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
              {/* Left Side - Contained Profile Card */}
              <div className="flex justify-center lg:justify-start">
                <ProfileCard />
              </div>

              {/* Right Side - Stats + Description + Info Cards */}
              <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                {/* Stats Row */}
                <StatsGrid />

                {/* Description Block */}
                <GlowCard
                  className="bg-[#141414] border border-white/[0.06] rounded-xl xs:rounded-2xl sm:rounded-3xl"
                  glowColor="rgba(255, 100, 200, 0.6)"
                  glowSize={250}
                >
                  <motion.div
                    className="relative p-4 xs:p-5 sm:p-6 md:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Accent bar */}
                    <div className="absolute top-4 xs:top-5 sm:top-6 md:top-8 left-0 w-1 h-10 xs:h-12 sm:h-14 md:h-16 bg-gradient-to-b from-orange-500 to-pink-500 rounded-r-full" />
                    <div className="pl-3 xs:pl-4 sm:pl-5 space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4">
                      <p
                        className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.5] xs:leading-[1.6] sm:leading-[1.7] font-normal text-white/90"
                        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
                      >
                        Building scalable AI-powered web applications and modern backend systems.
                      </p>
                      <p
                        className="text-xs xs:text-sm sm:text-base md:text-lg leading-[1.5] xs:leading-[1.6] sm:leading-[1.7] font-normal text-white/50"
                        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
                      >
                        Focused on full-stack development, AI integration, REST APIs, authentication systems, and production-grade SaaS platforms using React, Next.js, Node.js, PostgreSQL, and OpenAI.
                      </p>
                    </div>
                  </motion.div>
                </GlowCard>

                {/* Currently Building Card */}
                <GlowCard
                  className="bg-[#141414] border border-white/[0.06] rounded-xl xs:rounded-2xl sm:rounded-3xl"
                  glowColor="rgba(249, 115, 22, 0.22)"
                  glowSize={190}
                >
                  <motion.div
                    className="relative p-4 xs:p-5 sm:p-6 md:p-8"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="absolute top-4 xs:top-5 sm:top-6 md:top-8 left-0 w-1 h-10 xs:h-12 sm:h-14 md:h-16 bg-gradient-to-b from-orange-500 to-pink-500 rounded-r-full" />

                    <div className="pl-3 xs:pl-4 sm:pl-5 space-y-3 xs:space-y-3.5 sm:space-y-4">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <h3
                          className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-white"
                          style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif' }}
                        >
                          Currently Building
                        </h3>
                        <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] xs:text-[11px] sm:text-xs text-white/55">
                          Production-focused
                        </span>
                      </div>

                      <p
                        className="max-w-3xl text-xs xs:text-sm sm:text-base md:text-lg leading-[1.55] xs:leading-[1.6] sm:leading-[1.7] font-normal text-white/58"
                        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
                      >
                        Building AI-powered SaaS applications, scalable REST APIs, authentication systems, and modern backend architectures using Next.js, Node.js, PostgreSQL, and OpenAI.
                      </p>

                      <div className="flex flex-wrap gap-2 xs:gap-2.5 pt-1">
                        {['AI SaaS', 'REST APIs', 'Full Stack', 'OpenAI', 'PostgreSQL'].map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 xs:px-3 py-1 text-[10px] xs:text-[11px] sm:text-xs text-white/65 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </GlowCard>

              </div>
            </div>
          </GlowCardGroup>
      </Container>

      {/* Expertise Showcase — Split Screen Interactive */}
      <ExpertiseShowcase />

      {/* Marquee Banner — above timeline */}
      <MarqueeBanner />

      <Container>
          <div className="max-w-7xl mx-auto pt-8 sm:pt-12">
            {/* Timeline Strip */}
            <div className="mb-12 sm:mb-16">
              <TimelineStrip />
            </div>
          </div>
      </Container>
    </section>
  );
}

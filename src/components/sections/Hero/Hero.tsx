'use client';

import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';
import HeroStrips from './HeroStrips';
import StructuredData from '@/components/seo/StructuredData';
import { PERSONAL_INFO, SITE_URL, SOCIAL_LINKS, SEO_KEYWORDS } from '@/lib/constants';

export default function Hero() {
  return (
    <>
      <StructuredData />

      <section
        id="hero"
        className="relative overflow-hidden pb-0 rounded-b-[40px] sm:rounded-b-[60px] mb-0"
        style={{ height: '100vh' }}
        aria-label={`${PERSONAL_INFO.name} - Full Stack & AI Developer Portfolio`}
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* ─── Primary Schema.org Person Microdata ─── */}
        <meta itemProp="name" content={PERSONAL_INFO.name} />
        <meta itemProp="givenName" content="Aditya" />
        <meta itemProp="familyName" content="Bhagwat" />
        <meta itemProp="jobTitle" content="Full Stack & AI Developer" />
        <meta itemProp="description" content={`${PERSONAL_INFO.name} is a Full Stack & AI Developer specializing in React, Next.js, TypeScript, Node.js, Python, and AI-powered product engineering. Featured projects include WebCraft and Safecoast.`} />
        <meta itemProp="url" content={SITE_URL} />
        <meta itemProp="email" content={PERSONAL_INFO.email} />
        <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
        <meta itemProp="image" content={`${SITE_URL}${PERSONAL_INFO.image}`} />
        <meta itemProp="knowsAbout" content="Full Stack Development, AI Engineering, React, Next.js, TypeScript, Node.js, Python, Machine Learning, Web Development, SaaS Development" />
        <meta itemProp="hasOccupation" content="Full Stack Developer" />

        {/* Social Links for Schema */}
        {SOCIAL_LINKS.map((link) => (
          <link key={link.name} itemProp="sameAs" href={link.url} />
        ))}

        {/* Address Schema */}
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
          <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
          <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
          <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
        </div>

        {/* ─── Hidden SEO Content for Search Engines ─── */}
        <div className="sr-only">
          <h1>Aditya - Full Stack & AI Developer</h1>

          <h2>About Aditya</h2>
          <p>
            Aditya is a Full Stack & AI Developer based in {PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.state}, {PERSONAL_INFO.location.country}.
            He focuses on building production-ready web applications, backend systems, and AI-powered products.
          </p>

          <h2>Aditya - Professional Skills</h2>
          <p>
            As a Full Stack Developer, Aditya is proficient in:
          </p>
          <ul>
            <li>Frontend Development: React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS</li>
            <li>Backend Development: Node.js, Express.js, Python, FastAPI, REST APIs</li>
            <li>Database Technologies: MongoDB, PostgreSQL, MySQL, Redis</li>
            <li>AI & Machine Learning: TensorFlow, OpenAI, LangChain, AI Integration, ML APIs</li>
            <li>Cloud & DevOps: AWS, Google Cloud, Docker, Kubernetes, CI/CD, Vercel</li>
            <li>SaaS and AI Product Development: scalable architecture, performance optimization, and intelligent features</li>
          </ul>

          <h2>Featured Projects by Aditya</h2>
          <ul>
            <li>WebCraft - Modern website solution designed for business growth and technical SEO readiness</li>
            <li>Safecoast - Coastal hazard intelligence platform focused on monitoring and risk awareness</li>
          </ul>

          <h2>Aditya - Services</h2>
          <p>
            Aditya offers professional services including:
          </p>
          <ul>
            <li>Full Stack Web Development by Aditya</li>
            <li>AI-Powered Application Development by Aditya</li>
            <li>SaaS Platform Development by Aditya</li>
            <li>React & Next.js Development by Aditya</li>
            <li>Custom Web Application Development by Aditya</li>
            <li>API Development & Integration by Aditya</li>
            <li>E-commerce Solutions by Aditya</li>
            <li>Performance Optimization by Aditya</li>
          </ul>

          <h2>Why Choose Aditya?</h2>
          <p>
            Aditya combines technical expertise with creative problem-solving to deliver exceptional digital solutions.
            Whether you need a Full Stack Developer for your startup, an AI Engineer to integrate machine learning capabilities,
            or a Web Developer to build your next big project, Aditya has the skills and experience to bring your vision to life.
          </p>

          <h2>Contact Aditya</h2>
          <p>
            Looking to hire a Full Stack Developer? Contact Aditya at {PERSONAL_INFO.email} or {PERSONAL_INFO.phone}.
            Aditya is available for freelance projects, full-time opportunities, and consulting work.
          </p>

          <h3>Keywords</h3>
          <p>{SEO_KEYWORDS.join(', ')}, Aditya Portfolio, Aditya Developer, Aditya Full Stack,
          Aditya AI Developer, Aditya React Developer, Aditya Next.js Expert,
          Hire Aditya, Aditya Web Developer, Aditya Software Engineer,
          Best Full Stack Developer India, Top React Developer Maharashtra, AI Developer Pune,
          Aditya TypeScript, Aditya Node.js, Aditya Python Developer, WebCraft, Safecoast</p>
        </div>

        {/* ─── WebSite Schema for Search Appearance ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aditya - Full Stack & AI Developer Portfolio",
              "alternateName": ["Aditya", "Aditya Developer", "Aditya Portfolio"],
              "url": SITE_URL,
              "description": "Official portfolio of Aditya, a Full Stack & AI Developer specializing in React, Next.js, TypeScript, and AI-powered web applications.",
              "author": {
                "@type": "Person",
                "name": "Aditya",
                "jobTitle": "Full Stack & AI Developer",
                "url": SITE_URL
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SITE_URL}/?search={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* ─── Professional Service Schema ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Aditya - Full Stack & AI Development Services",
              "description": "Professional Full Stack Development, AI Engineering, and Web Development services by Aditya",
              "provider": {
                "@type": "Person",
                "name": "Aditya",
                "jobTitle": "Full Stack & AI Developer"
              },
              "serviceType": ["Full Stack Development", "AI Engineering", "Web Development", "SaaS Development", "React Development", "Next.js Development"],
              "areaServed": "Worldwide",
              "url": SITE_URL
            })
          }}
        />

        <HeroStrips />
        <HeroBackground />

        {/* Main content — uses SAME absolute inset-0 + flex center */}
        <HeroContent />
      </section>
    </>
  );
}


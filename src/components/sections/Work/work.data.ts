export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  hoverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  liveLabel?: string;
  githubLabel?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevApply",
    tagline: "AI-Powered Resume & Job Application SaaS Platform",
    description: "DevApply is a production-grade AI SaaS platform that automates resume analysis, job-specific cover letter generation, and candidate fit scoring using intelligent orchestration workflows and scalable backend systems.",
    features: [
      "AI-powered resume analysis",
      "Job description matching workflows",
      "AI-generated cover letters",
      "Usage-based credit system",
      "RBAC authentication and admin controls",
      "Usage analytics dashboard"
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "React", "Tailwind CSS", "Clerk", "OpenAI"],
    image: "/images/projects/project1.png",
    hoverImage: "/images/projects/project1-hover.png",
    liveUrl: "https://devapply-j5fi.vercel.app/",
    githubUrl: "https://github.com/AdityaBhosale22/devapply",
    liveLabel: "Live Demo",
    githubLabel: "Source Code",
    color: "138, 43, 226"
  },
  {
    id: 2,
    title: "FusionCast",
    tagline: "Production-Ready Social Content Backend Platform",
    description: "FusionCast is a scalable backend system designed for a social content-sharing platform supporting video streaming, micro-posts, playlists, likes, subscriptions, and personalized feeds with optimized API performance.",
    features: [
      "RESTful API architecture",
      "Video and media handling",
      "Personalized content feeds",
      "JWT authentication",
      "MongoDB aggregation pipelines",
      "Cloudinary media integration"
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Multer"],
    image: "/images/projects/project2.png",
    hoverImage: "/images/projects/project2-hover.png",
    liveUrl: "https://adityabhosale.com",
    githubUrl: "https://github.com/AdityaBhosale22/fusioncast",
    liveLabel: "Backend APIs",
    githubLabel: "Source Code",
    color: "0, 119, 182"
  },
  {
    id: 3,
    title: "NextAuth.Pro",
    tagline: "Production-Ready Authentication System",
    description: "A modern authentication platform built with secure JWT session management, HTTP-only cookies, email verification workflows, password recovery systems, and type-safe API validation.",
    features: [
      "JWT authentication system",
      "Email verification workflows",
      "Password recovery system",
      "Type-safe APIs",
      "Secure cookie-based sessions",
      "Form validation with Zod"
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "JWT", "Bcrypt", "Zod", "Tailwind CSS"],
    image: "/images/projects/project3.png",
    hoverImage: "/images/projects/project3-hover.png",
    liveUrl: "https://adityabhosale.com",
    githubUrl: "https://github.com/AdityaBhosale22/nextjs-auth",
    liveLabel: "Live Demo",
    githubLabel: "Source Code",
    color: "220, 53, 69"
  },
  {
    id: 4,
    title: "Real-Time Monitoring Dashboard",
    tagline: "Industrial Monitoring & Analytics System",
    description: "A real-time industrial monitoring dashboard developed during my internship at MSS PowerTech Pvt. Ltd. for tracking voltage and current data with live visualizations, authentication workflows, and optimized operational monitoring.",
    features: [
      "Real-time data monitoring",
      "Interactive analytics dashboard",
      "Secure admin authentication",
      "Continuous backend updates",
      "Operational workflow optimization",
      "Industry-grade monitoring system"
    ],
    techStack: ["React", "Node.js", "Express.js", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/project4.png",
    hoverImage: "/images/projects/project4-hover.png",
    liveUrl: "https://adityabhosale.com",
    githubUrl: "https://github.com/AdityaBhosale22",
    liveLabel: "Case Study",
    githubLabel: "Internship Project",
    color: "16, 185, 129"
  },
  {
    id: 5,
    title: "Portfolio Website",
    tagline: "Modern AI-Focused Developer Portfolio",
    description: "A premium portfolio showcasing full-stack development, AI integration, backend engineering, and production-oriented applications through modern UI design, responsive layouts, and scalable frontend architecture.",
    features: [
      "Premium dark UI",
      "Responsive design system",
      "Smooth animations",
      "SEO-friendly architecture",
      "Modern frontend engineering"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/project5.png",
    hoverImage: "/images/projects/project5-hover.png",
    liveUrl: "https://aditya-portfolio-psi-seven.vercel.app/",
    githubUrl: "https://github.com/AdityaBhosale22",
    liveLabel: "Live Demo",
    githubLabel: "Source Code",
    color: "99, 102, 241"
  },
];


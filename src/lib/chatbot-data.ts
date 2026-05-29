export const CHATBOT_CONTEXT = {
  // Personal Information
  personal: {
    name: "Aditya Bhosale",
    firstName: "Aditya",
    lastName: "Bhosale",
    nickname: "Aditya",
    jobTitle: "Full Stack Developer",
    tagline: "Building scalable web applications, AI SaaS platforms, and robust backend systems",
    email: "adityabhosale4388@gmail.com",
    phone: "+91-9404731898",
    location: "Mumbai, Maharashtra, India",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi", "Marathi"],
    bio: "AI-focused Full-Stack Developer and BE Computer Science (Data Science) student at the University of Mumbai. Passionate about building production-grade digital products, scalable REST APIs, and intelligent automation systems. Skilled in React, Next.js, Node.js, and modern backend technologies, with a strong interest in AI integration, database architecture, and creating impactful, user-centric solutions.",
    shortBio: "Full Stack Developer specializing in Next.js, Node.js, and AI SaaS development.",
    currentStatus: "Pursuing BE in Computer Science Engineering (Data Science) at University of Mumbai, graduating in May 2026, and actively job seeking.",
    yearsOfExperience: "1+",
    projectsBuilt: "5+",
    linesOfCode: "100,000+",
    coffeeConsumed: "500+ cups",
    availableForWork: true,
    workPreference: ["Full-time", "Internship", "Remote", "Freelance"],
    responseTime: "Usually within 24 hours",
  },

  // Detailed Skills
  skills: {
    frontend: {
      languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
      frameworks: ["React.js", "Next.js"],
      styling: ["Tailwind CSS"],
      animation: ["Framer Motion"],
      stateManagement: ["React Context"],
      testing: ["Jest"],
      tools: ["Vite", "ESLint", "Prettier"],
    },
    backend: {
      languages: ["Node.js", "Python", "C++"],
      frameworks: ["Express.js"],
      apis: ["REST APIs"],
      authentication: ["JWT", "Bcrypt", "Clerk"],
      caching: ["Redis"],
    },
    databases: {
      sql: ["PostgreSQL (Neon)", "MySQL"],
      nosql: ["MongoDB", "Firebase"],
      orm: ["Mongoose"],
      cloud: ["Supabase"],
    },
    ai_ml: {
      frameworks: ["Scikit-learn"],
      nlp: ["NLTK"],
      tools: ["Pandas", "NumPy"],
      apis: ["OpenAI API"],
      specializations: ["AI Orchestration Pipelines", "Resume Parsing", "Candidate Fit Scoring"],
    },
    devops: {
      cloud: ["AWS", "Vercel", "Firebase"],
      containers: ["Docker"],
      ci_cd: ["GitHub Actions"],
      monitoring: ["Continuous Backend Updates"],
    },
    mobile: {
      native: ["Android Studio"],
      cross_platform: ["React Native"],
    },
    tools: {
      ide: ["VS Code"],
      design: ["Figma"],
      api: ["Postman"],
      version_control: ["Git", "GitHub"],
      productivity: ["Notion", "Slack"],
    },
    other: ["Cloudinary", "Multer", "Nodemailer", "Zod", "System Design", "Backend Architecture", "API Design", "Authentication Systems"],
  },

  // Detailed Projects
  projects: [
    {
      name: "DevApply",
      type: "SaaS Platform",
      description: "AI-Powered Resume & Job Application SaaS Platform.",
      longDescription: "DevApply is a production-grade AI SaaS platform that automates resume analysis, job-specific cover letter generation, and candidate fit scoring using intelligent orchestration workflows and scalable backend systems.",
      techStack: ["Node.js", "Express.js", "PostgreSQL", "React", "Tailwind CSS", "Clerk", "OpenAI"],
      features: [
        "AI-powered resume analysis",
        "Job description matching workflows",
        "AI-generated cover letters",
        "Usage-based credit system",
        "RBAC authentication and admin controls",
        "Usage analytics dashboard",
      ],
      status: "Completed",
      link: "https://devapply-j5fi.vercel.app/",
      github: "https://github.com/AdityaBhosale22/devapply",
    },
    {
      name: "FusionCast",
      type: "Backend Platform",
      description: "Production-Ready Social Content Backend Platform.",
      longDescription: "FusionCast is a scalable backend system designed for a social content-sharing platform supporting video streaming, micro-posts, playlists, likes, subscriptions, and personalized feeds with optimized API performance.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Multer"],
      features: [
        "RESTful API architecture",
        "Video and media handling",
        "Personalized content feeds",
        "JWT authentication",
        "MongoDB aggregation pipelines",
        "Cloudinary media integration",
      ],
      status: "Completed",
      github: "https://github.com/AdityaBhosale22/fusioncast",
    },
    {
      name: "NextAuth.Pro",
      type: "Authentication System",
      description: "Production-Ready Authentication System.",
      longDescription: "A modern authentication platform built with secure JWT session management, HTTP-only cookies, email verification workflows, password recovery systems, and type-safe API validation.",
      techStack: ["Next.js", "TypeScript", "MongoDB", "JWT", "Bcrypt", "Zod", "Tailwind CSS"],
      features: [
        "JWT authentication system",
        "Email verification workflows",
        "Password recovery system",
        "Type-safe APIs",
        "Secure cookie-based sessions",
        "Form validation with Zod",
      ],
      status: "Completed",
      github: "https://github.com/AdityaBhosale22/nextjs-auth",
    },
    {
      name: "Real-Time Monitoring Dashboard",
      type: "Internship Project",
      description: "Industrial Monitoring & Analytics System developed at MSS PowerTech.",
      longDescription: "A real-time industrial monitoring dashboard developed during my internship at MSS PowerTech Pvt. Ltd. for tracking voltage and current data with live visualizations, authentication workflows, and optimized operational monitoring.",
      techStack: ["React", "Node.js", "Express.js", "JavaScript", "Tailwind CSS"],
      features: [
        "Real-time data monitoring",
        "Interactive analytics dashboard",
        "Secure admin authentication",
        "Continuous backend updates",
        "Operational workflow optimization",
        "Industry-grade monitoring system",
      ],
      status: "Completed",
      link: "/case-studies/real-time-monitoring-dashboard",
      github: "https://github.com/AdityaBhosale22",
    },
    {
      name: "Portfolio Website",
      type: "Personal",
      description: "Modern AI-Focused Developer Portfolio.",
      longDescription: "A premium portfolio showcasing full-stack development, AI integration, backend engineering, and production-oriented applications through modern UI design, responsive layouts, and scalable frontend architecture.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Premium dark UI",
        "Responsive design system",
        "Smooth animations",
        "SEO-friendly architecture",
        "Modern frontend engineering",
      ],
      status: "Live",
      link: "https://aditya-portfolio-psi-seven.vercel.app/",
      github: "https://github.com/AdityaBhosale22",
    },
  ],

  featuredProjects: ["DevApply", "FusionCast", "NextAuth.Pro"],

  // Journey/Timeline
  journey: [
    {
      year: "2022",
      title: "The Beginning",
      description: "Started exploring programming and web development. Learned HTML, CSS, JavaScript, and C++ fundamentals while building small projects and getting interested in real-world digital solutions.",
      achievements: ["Overall Champion National Solar/Electric Vehicle Competitions (Noida 2022)", "Mastered core web fundamentals", "Built early digital solutions"],
      skills_learned: ["HTML", "CSS", "JavaScript", "C++"],
    },
    {
      year: "2023",
      title: "Learning & Experimentation",
      description: "Dived deeper into full-stack development and problem-solving. Explored React, Node.js, databases, and backend development while continuously building projects and improving coding skills.",
      achievements: ["Deeper full-stack exploration", "Expanded knowledge in databases", "Continuous project building"],
      skills_learned: ["React", "Node.js", "Databases", "Backend"],
    },
    {
      year: "2024",
      title: "Engineering & Real-World Experience",
      description: "Worked on production-focused applications and gained practical industry exposure through a web development internship at MSS PowerTech Pvt. Ltd. Built real-time dashboards, authentication systems, and scalable backend workflows.",
      achievements: ["Web Developer Internship at MSS PowerTech", "Overall Champion National Solar/Electric Vehicle Competitions (Tamil Nadu 2024)"],
      skills_learned: ["Dashboards", "Authentication", "Backend Workflows", "Internship"],
    },
    {
      year: "2025",
      title: "AI & SaaS Development",
      description: "Started building AI-powered SaaS platforms and intelligent web applications. Developed projects focused on resume analysis, AI-driven workflows, secure authentication systems, and scalable REST APIs.",
      achievements: ["Built DevApply (AI SaaS Platform)", "Developed NextAuth.Pro", "Engineered scalable REST APIs"],
      skills_learned: ["Next.js", "PostgreSQL", "OpenAI", "REST APIs"],
    },
    {
      year: "2026",
      title: "Building for Scale",
      description: "Focused on mastering production-grade system design, backend architecture, and AI integration. Continuously aiming to build impactful products that combine intelligent automation with scalable engineering.",
      achievements: ["Graduating BE Computer Science (Data Science)", "Mastering backend architecture", "Actively job seeking"],
      skills_learned: ["System Design", "Backend Architecture", "AI Integration", "Product Thinking"],
      isCurrent: true,
    },
  ],

  // Detailed Services
  services: [
    {
      name: "Full Stack Web Development",
      description: "End-to-end web application development from concept to deployment",
      includes: ["Custom web applications", "SaaS platforms", "Admin dashboards", "Real-time monitoring systems"],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Backend Architecture & API Design",
      description: "Design and build robust, scalable, and optimized backend systems",
      includes: ["REST APIs", "Database indexing & aggregation", "Secure authentication (JWT, OAuth)", "Continuous backend updates"],
      technologies: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Clerk"],
    },
    {
      name: "AI/ML Integration",
      description: "Integrate intelligent capabilities into your existing applications",
      includes: ["AI orchestration pipelines", "Resume analysis algorithms", "Automated content generation", "Usage-based credit systems"],
      technologies: ["OpenAI API", "Python", "Node.js"],
    },
    {
      name: "SaaS Platform Development",
      description: "Build scalable software-as-a-service products with monetization",
      includes: ["RBAC authentication", "Credit enforcement logic", "Usage analytics dashboards", "Feature gating"],
      technologies: ["Next.js", "PostgreSQL", "Clerk", "Tailwind CSS"],
    },
    {
      name: "UI/UX & Frontend Engineering",
      description: "Create beautiful, responsive, and interactive user interfaces",
      includes: ["Interactive data visualizations", "Responsive design systems", "Smooth animations", "Type-safe UI"],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Zod"],
    },
  ],

  // Social Links
  social: {
    github: "https://github.com/AdityaBhosale22",
    linkedin: "https://linkedin.com/in/adityabhosale22",
    twitter: "https://twitter.com/@adityyaxb",
    portfolio: "https://aditya-portfolio-psi-seven.vercel.app/",
    email: "adityabhosale4388@gmail.com",
  },

  // Fun facts and personality
  funFacts: [
    "I started exploring programming in 2022 and fell in love with creating digital solutions.",
    "I'm a pure vegetarian and try to hit 2500+ calories daily while keeping up with my coding sessions!",
    "I was part of the Overall Champion team for the National Solar/Electric Vehicle Competitions in 2022 and 2024.",
    "I've built a production-grade AI SaaS platform called DevApply.",
    "I optimized API performance by 30% using MongoDB aggregation pipelines in my FusionCast project.",
    "I drink way too much coffee while coding.",
    "I believe in learning by building production-ready apps, not just tutorials.",
    "My favorite stack right now is Next.js + Node.js + PostgreSQL.",
    "I've improved operational visibility by 50% for an industrial monitoring system during my internship.",
  ],

  // Interests and Hobbies
  interests: [
    "Building SaaS products",
    "Backend Architecture",
    "AI Integration",
    "Learning new frameworks",
    "Solving algorithmic problems",
    "System design",
    "Translating technical insights into data-backed pitches",
  ],

  // Testimonials/Achievements
  achievements: [
    "Overall Champion - National Solar/Electric Vehicle Competitions (Noida 2022, Tamil Nadu 2024)",
    "Built and deployed DevApply, an AI-powered SaaS with robust backend architecture",
    "Successfully delivered a real-time admin dashboard during my internship at MSS PowerTech",
    "Improved operational visibility by 50% through interactive data visualization",
  ],

  // FAQ
  faq: [
    {
      question: "What is your current status?",
      answer: "I am a final-year BE Computer Science Engineering (Data Science) student at Mumbai University, graduating in May 2026, and actively job seeking for full-time or internship roles.",
    },
    {
      question: "Do you work remotely?",
      answer: "Yes! I am open to remote opportunities, full-time roles, or contract work.",
    },
    {
      question: "What's your preferred tech stack?",
      answer: "I specialize in Full-Stack JavaScript/TypeScript. My go-to stack includes Next.js, React, Node.js, Express.js, and PostgreSQL or MongoDB.",
    },
    {
      question: "Do you have professional experience?",
      answer: "Yes, I worked as a Web Developer Project Intern at MSS PowerTech Pvt. Ltd. from Jan 2024 to Jun 2024, building a real-time industrial monitoring dashboard.",
    },
    {
      question: "Can you build AI-integrated apps?",
      answer: "Absolutely! I built DevApply, an AI SaaS platform that utilizes OpenAI APIs for resume parsing, contextual job matching, and cover letter generation.",
    },
  ],

  // Pricing tiers (general)
  pricing: {
    consultation: "Free initial discussion",
    hourlyRange: "Contact for tailored rates depending on role",
    projectBased: "Custom quotes for project-based or freelance work",
    retainer: "Open to discussing full-time employment packages",
  },

  // Work process
  workProcess: [
    { step: 1, title: "Discovery", description: "Understanding the project requirements, technical trade-offs, and user needs" },
    { step: 2, title: "Architecture", description: "Designing the database schema, API logic, and system architecture" },
    { step: 3, title: "Development", description: "Building robust, type-safe full-stack workflows with continuous backend updates" },
    { step: 4, title: "Optimization", description: "Optimizing API performance via indexing and aggregation, plus comprehensive UI testing" },
    { step: 5, title: "Deployment", description: "Deploying to production environments securely (Vercel, AWS)" },
    { step: 6, title: "Iteration", description: "Refining the product based on analytics and real-world usage" },
  ],

  // Portfolio Section Links for navigation
  sections: {
    hero: { name: "Home", link: "#hero", description: "Welcome section with introduction" },
    about: { name: "About Me", link: "#about", description: "Learn more about Aditya" },
    skills: { name: "Skills", link: "#skills", description: "Technologies and expertise" },
    projects: { name: "Projects", link: "#projects", description: "Portfolio of work" },
    journey: { name: "My Journey", link: "#journey", description: "Career timeline and experience" },
    services: { name: "Services", link: "#services", description: "What Aditya offers" },
    contact: { name: "Contact", link: "#contact", description: "Get in touch" },
  },
};

// Pre-computed responses for common questions (faster retrieval)
export const QUICK_RESPONSES: Record<string, string> = {
  // Greetings
  'hi': "Hey there! 👋 I'm Aditya's AI assistant. How can I help you learn more about him today?",
  'hello': "Hello! Welcome to Aditya's portfolio. What would you like to know?",
  'hey': "Hi! I'm here to tell you all about Aditya. Ask me anything!",
  'good morning': "Good morning! ☀️ Welcome to Aditya's portfolio. How can I assist you today?",
  'good afternoon': "Good afternoon! Welcome! What would you like to know about Aditya?",
  'good evening': "Good evening! 🌙 Thanks for visiting. How can I help you?",

  // About Questions
  'who are you': `I'm an AI assistant for **Aditya Bhosale**, a ${CHATBOT_CONTEXT.personal.jobTitle} based in ${CHATBOT_CONTEXT.personal.location}. I can tell you about his skills, projects, services, and more!`,
  'who is aditya': `**Aditya Bhosale** is a ${CHATBOT_CONTEXT.personal.jobTitle} focused on building scalable backend systems and AI-enabled full-stack products. ${CHATBOT_CONTEXT.personal.bio}`,
  'tell me about yourself': `**Aditya Bhosale** is a ${CHATBOT_CONTEXT.personal.jobTitle} based in ${CHATBOT_CONTEXT.personal.location}.

${CHATBOT_CONTEXT.personal.bio}

📊 **Quick Stats:**
• ${CHATBOT_CONTEXT.personal.projectsBuilt} production-grade projects built
• Focus: Full Stack, AI SaaS, & API Design
• Currently: ${CHATBOT_CONTEXT.personal.currentStatus}`,
  'tell me about aditya': `**Aditya Bhosale** is a passionate ${CHATBOT_CONTEXT.personal.jobTitle} building scalable web applications and intelligent digital products.

${CHATBOT_CONTEXT.personal.bio}`,
  'introduce yourself': `Hi! I'm the AI assistant for **Aditya Bhosale**. Aditya is a ${CHATBOT_CONTEXT.personal.jobTitle} who specializes in building production-ready web applications, secure backends, and AI solutions. I can help you learn about his skills, projects, experience, and how to work with him!`,
  'what do you do': `Aditya is a **${CHATBOT_CONTEXT.personal.jobTitle}** focused on practical, production-ready software:

• Full Stack Development — Next.js & React ecosystem
• Backend Engineering — Node.js, Express, & API scaling
• AI Integration — LLMs, resume parsing & smart workflows
• Database Architecture — PostgreSQL, MongoDB aggregation
• Systems Monitoring — Real-time analytics dashboards

He focuses on shipping reliable products used by real users.`,
  'where are you from': `📍 Aditya is from **${CHATBOT_CONTEXT.personal.location}**. He's available for remote work globally!`,
  'where do you live': `📍 Aditya lives in **${CHATBOT_CONTEXT.personal.location}**. He works remotely with clients from all over the world!`,
  'where are you located': `📍 Aditya is located in **${CHATBOT_CONTEXT.personal.location}**.\n\n🌍 Timezone: ${CHATBOT_CONTEXT.personal.timezone}\n🏠 Work Style: Remote-first`,
  'which country': `🇮🇳 Aditya is based in **India**, specifically in ${CHATBOT_CONTEXT.personal.location}.`,

  // Availability & Hiring
  'available': CHATBOT_CONTEXT.personal.availableForWork
    ? "✅ **Yes!** Aditya is currently available for full-time, internship, and freelance opportunities. Reach out to discuss!"
    : "⏳ Aditya is currently busy with existing commitments, but feel free to reach out for future projects.",
  'are you available': CHATBOT_CONTEXT.personal.availableForWork
    ? "✅ **Yes!** Aditya is actively job-seeking and available for new opportunities!"
    : "⏳ Currently busy, but open to discussing future opportunities.",
  'can i hire you': `Yes! Aditya is ${CHATBOT_CONTEXT.personal.availableForWork ? '**actively job seeking and available**' : 'open to opportunities'}.\n\n**To hire:**\n1. Go to the Contact Section\n2. Send a message describing your opportunity\n3. He'll respond within ${CHATBOT_CONTEXT.personal.responseTime}\n\n👉 [Go to Contact Section](#contact)`,
  'how can i hire you': `**How to Hire Aditya:**\n\n1. 📝 Visit the Contact Section\n2. 💬 Describe your role or project requirements\n3. 📧 Or email directly: ${CHATBOT_CONTEXT.personal.email}\n\nHe responds within ${CHATBOT_CONTEXT.personal.responseTime}!\n\n👉 [Go to Contact Section](#contact)`,
  'hire': `**Hire Aditya:**\n\n✅ Currently available for:\n${CHATBOT_CONTEXT.personal.workPreference.map(w => `• ${w}`).join('\n')}\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n👉 [Go to Contact Section](#contact)`,
  'looking for developer': `**Great!** Aditya is a ${CHATBOT_CONTEXT.personal.jobTitle} available for hire!\n\n**Expertise:**\n• Full Stack Web Development\n• AI/SaaS Development\n• Backend & Database Architecture\n• API Development\n\n👉 [Go to Contact Section](#contact)`,
  'need a developer': "**Aditya can help!** He's an experienced Full Stack Developer & backend engineer.\n\n👉 [Go to Contact Section](#contact) to discuss the role!",

  // Skills Questions
  'what are your skills': `**Aditya's Key Skills:**\n\n🎨 **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS\n⚙️ **Backend:** Node.js, Express.js, C++\n🗄️ **Database:** PostgreSQL, MongoDB\n🤖 **AI/ML:** OpenAI API integration\n☁️ **Tools:** Git, Postman, Vercel, Clerk\n\n👉 [View All Skills](#skills)`,
  'tech stack': `**Aditya's Tech Stack:**\n\n🎨 **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n⚙️ **Backend:** Node.js, Express.js\n🗄️ **Databases:** PostgreSQL (Neon), MongoDB, Mongoose\n🤖 **AI Integration:** OpenAI API\n☁️ **Tools:** Vercel, AWS, Cloudinary, Zod\n\n**Favorite Stack:** Next.js + Node.js + PostgreSQL`,
  'what technologies do you use': `**Technologies Aditya Uses:**\n\n• **Languages:** JavaScript, TypeScript, C++, Python, SQL\n• **Frontend:** React.js, Next.js, Tailwind CSS\n• **Backend:** Node.js, Express.js\n• **Databases:** PostgreSQL, MongoDB\n• **Cloud/Tools:** AWS, Vercel, GitHub, JWT, Bcrypt\n\n👉 [View All Skills](#skills)`,
  'favorite stack': "🛠️ Aditya's favorite stack is **Next.js + Node.js + PostgreSQL + Tailwind CSS**. He loves building scalable backends with robust frontend architectures!",
  'what is your favorite technology': "🛠️ Aditya's favorite technologies are **Node.js** and **Next.js** for full-stack logic, and **PostgreSQL/MongoDB** for robust data handling. For AI features, he leverages the **OpenAI API**!",
  'best at': "Aditya excels at **Full Stack Development** (Node.js/Next.js) and **Backend Architecture**. He's built production-grade AI SaaS products and complex APIs!",
  'what are you best at': "Aditya is best at:\n\n🥇 **Backend Engineering** with Node.js & Express\n🥈 **Full Stack Development** with Next.js\n🥉 **AI SaaS Platform** integrations\n\nHe ensures systems are secure, authenticated, and performant!",

  // Project Questions
  'show me your projects': `**Aditya's Projects:**\n\n🚀 **DevApply** - AI-Powered Resume & Job Application SaaS\n🌐 **FusionCast** - Production-Ready Social Content Backend\n🔒 **NextAuth.Pro** - Production-Ready Authentication System\n📈 **Real-Time Dashboard** - Industrial Monitoring Analytics\n\n👉 [View All Projects](#projects)`,
  'what projects have you built': `**Projects Built by Aditya:**\n\n1. **DevApply** - AI SaaS platform for developers\n2. **FusionCast** - Social backend with scalable media delivery\n3. **NextAuth.Pro** - Full-fledged auth & session management\n4. **Real-Time Monitoring Dashboard** - Internship project for MSS PowerTech\n\n👉 [View All Projects](#projects)`,
  'your work': `**Aditya's Work:**\n\nHe has built multiple production-grade systems including AI SaaS platforms, complex backends, and data visualization tools.\n\n**Featured:** DevApply, FusionCast\n\n👉 [View Projects](#projects)`,
  'portfolio': `**Aditya's Portfolio:**\n\nShowcases a range of full-stack projects, from the DevApply AI platform to the FusionCast backend system.\n\n👉 [View All Projects](#projects)`,
  'what have you built': `**What Aditya Has Built:**\n\n🚀 AI-driven platforms (DevApply)\n🌐 Scalable REST API Backends (FusionCast)\n🔒 Secure Auth systems (NextAuth.Pro)\n📈 Real-time Analytics (MSS PowerTech Internship)\n\n👉 [View Projects](#projects)`,

  // Specific Projects
  'tell me about devapply': `**🚀 DevApply - AI-Powered Resume & Job Application SaaS**\n\n${CHATBOT_CONTEXT.projects[0].longDescription}\n\n**Tech:** Node.js, Express, PostgreSQL, React, OpenAI\n**Status:** Completed\n\n👉 [View Projects](#projects)`,
  'what is devapply': `**DevApply** is a production-grade AI SaaS platform that automates resume analysis, generates job-specific cover letters, and provides candidate fit scoring using intelligent orchestration.\n\n👉 [View Projects](#projects)`,
  'tell me about fusioncast': `**🌐 FusionCast - Social Content Backend Platform**\n\nA scalable backend system designed for video streaming, personalized feeds, and micro-posts. \n\n**Tech:** Node.js, Express, MongoDB, Cloudinary\n**Highlight:** Optimized API performance by 30% using MongoDB aggregations!\n\n👉 [View Projects](#projects)`,
  'tell me about nextauth': `**🔒 NextAuth.Pro - Authentication System**\n\nA modern auth platform with secure JWT session management, HTTP-only cookies, and password recovery workflows.\n\n**Tech:** Next.js, TypeScript, MongoDB, Zod\n\n👉 [View Projects](#projects)`,

  // Services Questions
  'what services do you offer': `**Services Aditya Offers:**\n\n🌐 Full Stack Web Development\n⚙️ Backend Architecture & API Design\n🤖 AI/ML Integration\n📦 SaaS Platform Development\n🎨 UI/UX & Frontend Engineering\n\n👉 [View Services](#services)`,
  'services': `**Aditya's Services:**\n\n• Full Stack Web Development\n• Backend & Database Architecture\n• AI Application Integration\n• API Design & Authentication\n• Real-Time Monitoring Dashboards\n\n👉 [View Services](#services)`,
  'what can you do for me': `**How Aditya Can Help:**\n\n✅ Build scalable REST APIs\n✅ Create full-stack SaaS applications\n✅ Integrate AI workflows (like OpenAI)\n✅ Implement secure user authentication\n✅ Develop interactive React/Next.js interfaces\n\n👉 [Contact for details](#contact)`,
  'can you build a website': "**Yes!** Aditya builds modern, responsive web applications with:\n\n• React/Next.js\n• Robust Node.js backends\n• Database integration\n• High performance\n\n👉 [Go to Contact Section](#contact)",
  'can you build an app': "**Absolutely!** Aditya can build:\n\n• Full-stack web applications\n• Secure backend APIs\n• AI-powered SaaS platforms\n• Real-time data dashboards\n\n👉 [Go to Contact Section](#contact)",
  'do you do freelance': `**Yes!** Aditya is available for freelance work, as well as full-time and internship roles.\n\n👉 [Contact to discuss](#contact)`,

  // Experience Questions
  'experience': `**Aditya's Experience:**\n\n💼 Web Developer Intern @ MSS PowerTech (Jan-Jun 2024)\n🚀 Built AI platforms like DevApply\n🏆 2x National Solar/EV Competition Champion\n🎓 BE in Data Science (Pursuing)\n\n👉 [View Journey](#journey)`,
  'how much experience': `Aditya has practical industry experience from his 6-month internship at MSS PowerTech, plus intensive project experience building production-grade full-stack and AI applications.`,
  'years of experience': `Aditya has 1+ years of practical development experience, including an industry internship where he delivered an industry-grade monitoring solution.`,
  'your journey': `**Aditya's Journey:**\n\n2022 - Started coding & won EV Competition\n2023 - Mastered React & Backend tools\n2024 - Web Dev Internship at MSS PowerTech\n2025 - Built DevApply (AI SaaS) & NextAuth.Pro\n2026 - Graduating & Scaling system design\n\n👉 [View Full Journey](#journey)`,
  'how did you start coding': "Aditya started his journey in **2022** learning HTML, CSS, JavaScript, and C++. This foundation paved the way to exploring databases, backend engineering, and ultimately AI SaaS development!",

  // Education
  'education': `**Education:**\n\n🎓 BE in Computer Science Engineering (Data Science)\n🏫 University of Mumbai\n📅 Nov 2022 - May 2026\n📈 CGPA: 8.56/10`,
  'where did you study': `🎓 Aditya is currently studying at the **University of Mumbai**, pursuing a BE in Computer Science Engineering (Data Science), expected to graduate in May 2026.`,
  'your qualification': `**Qualifications:**\n\n🎓 BE in CSE (Data Science) - Mumbai University (8.56 CGPA)\n💼 Web Developer Project Intern experience\n🚀 Multiple production-grade backend/full-stack projects`,

  // Pricing
  'pricing': `**Pricing & Salary:**\n\nAditya is actively seeking full-time and internship roles. For freelance projects, pricing depends on complexity.\n\n👉 [Contact to discuss specifics](#contact)`,
  'how much do you charge': `Aditya's rates for freelance work depend on the project's scope. He is also open to discussing compensation for full-time employment and internships!\n\n👉 [Contact](#contact)`,
  'rates': `**Rates:**\n\nOpen to negotiation based on the role (Full-time, Internship, or Freelance). Provide details about your opportunity for a prompt reply!\n\n👉 [Get in touch](#contact)`,
  'your rate': `Please reach out to discuss specific compensation or project rates based on your requirements.\n\n👉 [Contact](#contact)`,

  // Social Links
  'github': `🐙 **GitHub:** ${CHATBOT_CONTEXT.social.github}\n\nCheck out Aditya's complex backend APIs and full-stack repositories!`,
  'linkedin': `💼 **LinkedIn:** ${CHATBOT_CONTEXT.social.linkedin}\n\nConnect with Aditya professionally!`,
  'twitter': `🐦 **Twitter:** ${CHATBOT_CONTEXT.social.twitter}\n\nFollow for tech insights and updates!`,
  'social links': `**Connect with Aditya:**\n\n🐙 GitHub: ${CHATBOT_CONTEXT.social.github}\n💼 LinkedIn: ${CHATBOT_CONTEXT.social.linkedin}\n🐦 Twitter: ${CHATBOT_CONTEXT.social.twitter}\n🌐 Portfolio: ${CHATBOT_CONTEXT.social.portfolio}`,

  // Navigation
  'show all sections': `**📍 Portfolio Sections:**\n\n• [🏠 Home](#hero)\n• [👤 About Me](#about)\n• [🛠️ Skills](#skills)\n• [🚀 Projects](#projects)\n• [📅 My Journey](#journey)\n• [💼 Services](#services)\n• [📧 Contact](#contact)`,
  'sections': `**Portfolio Sections:**\n\n• [Home](#hero)\n• [About](#about)\n• [Skills](#skills)\n• [Projects](#projects)\n• [Journey](#journey)\n• [Services](#services)\n• [Contact](#contact)`,
  'navigate': `**Navigate the Portfolio:**\n\n👉 [About Me](#about)\n👉 [Skills](#skills)\n👉 [Projects](#projects)\n👉 [Services](#services)\n👉 [Contact](#contact)`,
  'go to projects': `👉 Click here to view projects: [View Projects](#projects)`,
  'go to contact': `👉 Click here to contact: [Go to Contact](#contact)`,
  'go to skills': `👉 Click here to view skills: [View Skills](#skills)`,
  'go to about': `👉 Click here to learn more: [About Me](#about)`,

  // Work Process
  'how do you work': `**Aditya's Work Process:**\n\n1️⃣ **Discovery** - Understanding requirements\n2️⃣ **Architecture** - API & DB Design\n3️⃣ **Development** - Full-stack building\n4️⃣ **Optimization** - Scaling & performance tweaks\n5️⃣ **Deployment** - Shipping securely\n6️⃣ **Iteration** - Refining based on data`,
  'your process': `**How Aditya Works:**\n\n1. Technical scoping and planning\n2. Database schema & scalable backend design\n3. Iterative development with robust testing\n4. Performance optimization (indexing/aggregation)\n5. Deployment & continuous integration`,
  'work process': `**Development Process:**\n\n• Discovery: System goals\n• Architecture: Schemas & flow\n• Development: Coding features\n• Optimization: API scaling\n• Deployment: Production release`,

  // Fun Facts
  'fun fact': CHATBOT_CONTEXT.funFacts[Math.floor(Math.random() * CHATBOT_CONTEXT.funFacts.length)],
  'tell me something interesting': `**Fun Fact:** ${CHATBOT_CONTEXT.funFacts[Math.floor(Math.random() * CHATBOT_CONTEXT.funFacts.length)]}\n\nWant to know more about Aditya?`,
  'hobbies': `**Aditya's Interests:**\n\n• Backend Architecture & System Design\n• AI/ML Integrations\n• Solving Algorithmic problems\n• Translating technical insights into data-backed plans\n\nCoding is a huge part of his daily life!`,

  // Common Questions
  'why should i hire you': "**Why Hire Aditya?**\n\n✅ Strong Backend & Full-Stack fundamentals\n✅ Proven internship experience\n✅ Built complex AI SaaS tools (DevApply)\n✅ Passionate about optimal API performance\n✅ Clear communication\n\n👉 [Let's Discuss](#contact)",
  'what makes you different': "**What Sets Aditya Apart:**\n\n🎯 Deep focus on robust backend architecture\n🚀 Practical experience optimizing MongoDB pipelines\n💡 Implementation of AI pipelines (OpenAI)\n📈 Data-driven problem solving\n🤝 Champion team leader in EV competitions!",
  'do you work remotely': "**Yes!** Aditya is open to remote roles worldwide.\n\n🌍 Available for global opportunities\n⏰ Flexible across timezones\n💬 Strong async communication\n\n👉 [Start a Conversation](#contact)",
  'timezone': "🕐 Aditya's Timezone: **IST (UTC+5:30)**\n\nHe is adaptable and open to working with global teams!",
  'languages you speak': "**Languages Aditya Speaks:**\n\n• English (Professional)\n• Hindi (Native)\n• Marathi (Native)",
};

// Response templates for common intents
export const RESPONSE_TEMPLATES = {
  greeting: [
    "Hey there! 👋 I'm Aditya's AI assistant. How can I help you learn more about him today?",
    "Hello! Welcome to Aditya's portfolio. What would you like to know?",
    "Hi! I'm here to tell you all about Aditya. Ask me anything!",
    "Hey! Great to meet you. I can tell you about Aditya's skills, projects, experience, and more. What interests you?",
  ],

  farewell: [
    "Thanks for chatting! Feel free to reach out to Aditya at adityabhosale4388@gmail.com. Have a great day! 👋",
    "Goodbye! Don't hesitate to contact Aditya if you have any opportunities or questions.",
    "Take care! Aditya would love to hear from you. Connect on LinkedIn or send an email!",
    "Thanks for visiting! Hope this was helpful. Reach out anytime! 🙌",
  ],

  unknown: [
    "I'm not sure about that specific question. Try asking about:\n\n• Skills & tech stack\n• Projects (DevApply, FusionCast)\n• Work Experience\n• Contact info\n• Hiring status\n\nOr reach out to Aditya at adityabhosale4388@gmail.com!",
    "That's an interesting question! I can help with questions about Aditya's:\n\n• Backend & Frontend Skills\n• AI SaaS Projects\n• Education & Internship\n• Contact & Hiring\n\nWhat would you like to know?",
    "I don't have specific info on that, but try asking about skills, projects, or experience! Or contact Aditya directly.",
  ],

  thanks: [
    "You're welcome! 😊 Let me know if you have any other questions about Aditya.",
    "Happy to help! Feel free to explore more or reach out to Aditya directly.",
    "Glad I could help! Is there anything else you'd like to know?",
    "Anytime! 🙌 Feel free to ask more questions or visit the Contact section.",
  ],

  capabilities: [
    "**I can tell you about:**\n\n• 👤 Aditya's background, education & bio\n• 🛠️ Skills (Next.js, Node.js, AI Integration)\n• 🚀 Projects (DevApply, FusionCast)\n• 📅 Experience (MSS PowerTech Internship)\n• 💼 Services offered\n• 📧 How to contact or hire\n• 🔗 Social links\n\nWhat would you like to know?",
  ],
};

// Enhanced keywords for intent detection (more comprehensive)
export const INTENT_KEYWORDS: Record<string, string[]> = {
  // Greetings
  greeting: ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening", "howdy", "sup", "yo", "hola", "namaste", "what's up", "wassup"],

  // Farewells
  farewell: ["bye", "goodbye", "see you", "later", "take care", "cya", "gtg", "gotta go", "leaving", "exit"],

  // Thanks
  thanks: ["thanks", "thank you", "thx", "ty", "appreciate", "grateful", "helpful", "great help", "awesome"],

  // What can you do
  capabilities: ["what can you do", "help me", "what do you know", "what can i ask", "how can you help", "capabilities", "what are you"],

  // About/Introduction
  about: ["about", "who", "tell me", "yourself", "aditya", "introduce", "introduction", "what do you do", "describe", "overview", "summary", "bio", "background"],
  identity: ["name", "your name", "what is your name", "who am i talking to"],

  // Skills
  skills: ["skills", "technologies", "tech stack", "stack", "programming", "languages", "know", "expertise", "proficient", "capable", "abilities", "competencies", "tools", "frameworks"],
  frontend: ["frontend", "front-end", "front end", "react", "next.js", "nextjs", "ui", "ux", "user interface", "client side", "css", "tailwind", "styling"],
  backend: ["backend", "back-end", "back end", "node", "express", "server", "api", "apis", "server side", "python", "c++"],
  database: ["database", "db", "mongodb", "postgresql", "postgres", "firebase", "supabase", "sql", "nosql", "data storage"],
  ai: ["ai", "machine learning", "ml", "artificial intelligence", "openai", "chatgpt", "gpt", "saas"],
  devops: ["devops", "deployment", "deploy", "aws", "cloud", "docker", "ci/cd", "hosting", "server management", "vercel", "infrastructure"],

  // Projects
  projects: ["projects", "work", "portfolio", "built", "created", "developed", "apps", "applications", "showcase", "examples", "case studies", "what have you built", "show me"],
  devapply: ["devapply", "resume", "job application", "cover letter", "saas platform", "ai platform"],
  fusioncast: ["fusioncast", "social", "video streaming", "backend platform", "media", "content platform"],
  nextauth: ["nextauth", "nextauth.pro", "authentication", "jwt", "login", "auth system"],
  dashboard: ["dashboard", "monitoring", "industrial", "mss powertech", "internship project", "analytics"],

  // Experience
  experience: ["experience", "years", "background", "career", "journey", "history", "timeline", "internship", "mss powertech", "worked"],
  education: ["education", "study", "studying", "college", "degree", "university", "btech", "b.tech", "be", "mumbai university", "academic", "learning"],
  achievements: ["achievements", "accomplishments", "awards", "champion", "competitions", "success"],

  // Contact & Hire
  contact: ["contact", "email", "phone", "reach", "get in touch", "connect", "message", "call"],
  hire: ["hire", "hiring", "job", "opportunity", "freelance", "contract", "available", "open to", "work with", "collaborate", "project", "engagement", "work together", "employ"],
  pricing: ["pricing", "price", "cost", "rate", "rates", "charge", "fee", "budget", "how much", "hourly", "quote", "salary"],
  process: ["process", "how do you work", "workflow", "methodology", "approach", "stages", "steps"],

  // Location & Availability
  location: ["location", "where", "based", "live", "from", "city", "country", "india", "mumbai", "remote", "timezone"],
  availability: ["availability", "available", "free", "capacity", "timeline", "when", "schedule", "busy"],

  // Services
  services: ["services", "offer", "provide", "specialize", "specialization", "what do you do", "help with"],

  // Social
  social: ["social", "github", "linkedin", "twitter", "links", "profiles", "follow", "connect", "portfolio link"],

  // Fun/Personal
  fun: ["fun", "hobby", "hobbies", "interests", "free time", "personal", "outside work", "fun fact"],
  favorite: ["favorite", "favourite", "prefer", "like best", "love", "best", "top choice"],

  // FAQ
  faq: ["faq", "frequently asked", "common questions", "question", "doubt", "wondering"],

  // Navigation
  navigation: ["navigate", "go to", "take me", "show me", "where is", "sections", "pages", "menu", "scroll to", "jump to", "find section", "all sections", "links"],
};

// Suggestion chains for conversation flow - all suggestions have answers
export const SUGGESTION_CHAINS: Record<string, string[]> = {
  // Initial/greeting suggestions
  greeting: ["Tell me about yourself", "What are your skills?", "Show me your projects"],

  // After about response
  about: ["What are your skills?", "Show me your projects", "How can I hire you?"],
  identity: ["Tell me about yourself", "Show me your projects", "How can I contact you?"],

  // After skills response
  skills: ["Tell me about backend", "What databases do you use?", "Show me your projects"],

  // After frontend response
  frontend: ["What about backend?", "Do you work with AI?", "Tell me about DevApply"],

  // After backend response
  backend: ["What databases do you use?", "Show me your projects", "What services do you offer?"],

  // After database response
  database: ["What about AI integration?", "Show me your projects", "How can I hire you?"],

  // After AI/ML response
  ai: ["Tell me about DevApply", "Tell me about FusionCast", "How can I hire you?"],

  // After DevOps response
  devops: ["Show me your projects", "What services do you offer?", "How can I contact you?"],

  // After projects response
  projects: ["Tell me about DevApply", "Tell me about FusionCast", "How can I hire you?"],

  // After specific project responses
  devapply: ["What tech did you use?", "Tell me about FusionCast", "How can I hire you?"],
  fusioncast: ["Tell me about DevApply", "Tell me about NextAuth.Pro", "What are your skills?"],
  nextauth: ["Tell me about DevApply", "Show me your projects", "How can I hire you?"],
  dashboard: ["What other projects?", "Tell me about your internship", "How can I hire you?"],

  // After experience/journey response
  experience: ["What are your skills?", "Tell me about your internship", "Show me your projects"],
  education: ["What are your skills?", "Your experience?", "Show me your projects"],
  achievements: ["Tell me about your projects", "How can I hire you?", "What services do you offer?"],

  // After contact response
  contact: ["What services do you offer?", "Are you available?", "Show me your projects"],

  // After hire response
  hire: ["What is your process?", "Go to Contact section", "Tell me about your experience"],

  // After services response
  services: ["Show me your projects", "Tell me about your internship", "How can I hire you?"],

  // After pricing response
  pricing: ["What's your process?", "How can I contact you?", "Show me your work"],

  // After process response
  process: ["How can I hire you?", "Go to Contact section", "Show me your projects"],

  // After location response
  location: ["Do you work remotely?", "How can I contact you?", "What are your skills?"],
  availability: ["How can I hire you?", "Go to Contact section", "Tell me about your experience"],

  // After social links response
  social: ["How can I hire you?", "Show me your projects", "What are your skills?"],

  // After fun/hobbies response
  fun: ["Tell me about yourself", "What are your skills?", "Show me your projects"],
  favorite: ["What are your skills?", "Show me your projects", "How can I hire you?"],

  // After FAQ response
  faq: ["How can I hire you?", "Go to Contact section", "Show me your projects"],

  // After navigation response
  navigation: ["Go to Projects", "Go to Contact", "Tell me about yourself"],

  // After thanks response
  thanks: ["Show me your projects", "How can I hire you?", "Go to Contact section"],

  // After capabilities response
  capabilities: ["Tell me about yourself", "What are your skills?", "Show me your projects"],

  // Default suggestions
  default: ["Tell me about yourself", "What are your skills?", "Show all sections"],

  // Unknown response suggestions
  unknown: ["Tell me about yourself", "What are your skills?", "Show me your projects"],
};

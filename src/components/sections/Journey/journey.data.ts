export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
  skills?: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: '1',
    year: '2022',
    title: 'The Beginning',
    organization: 'Learning Phase',
    description: 'Started exploring programming and web development. Learned HTML, CSS, JavaScript, and C++ fundamentals while building small projects and getting interested in real-world digital solutions.',
    type: 'education',
    skills: ['HTML', 'CSS', 'JavaScript', 'C++'],
  },
  {
    id: '2',
    year: '2023',
    title: 'Learning & Experimentation',
    organization: 'Full Stack Practice',
    description: 'Dived deeper into full-stack development and problem-solving. Explored React, Node.js, databases, and backend development while continuously building projects and improving coding skills.',
    type: 'achievement',
    skills: ['React', 'Node.js', 'Databases', 'Backend'],
  },
  {
    id: '3',
    year: '2024',
    title: 'Engineering & Real-World Experience',
    organization: 'Web Development Internship',
    description: 'Worked on production-focused applications and gained practical industry exposure through a web development internship. Built real-time dashboards, authentication systems, and scalable backend workflows while strengthening software engineering fundamentals.',
    type: 'work',
    skills: ['Dashboards', 'Authentication', 'Backend Workflows', 'Internship'],
  },
  {
    id: '4',
    year: '2025',
    title: 'AI & SaaS Development',
    organization: 'Product Building',
    description: 'Started building AI-powered SaaS platforms and intelligent web applications. Developed projects focused on resume analysis, AI-driven workflows, secure authentication systems, and scalable REST APIs using Next.js, PostgreSQL, OpenAI, and cloud services.',
    type: 'work',
    skills: ['Next.js', 'PostgreSQL', 'OpenAI', 'REST APIs'],
  },
  {
    id: '5',
    year: '2026',
    title: 'Building for Scale',
    organization: 'Ongoing Growth',
    description: 'Focused on mastering production-grade system design, backend architecture, and AI integration. Continuously aiming to build impactful products that combine intelligent automation with scalable engineering and strong user experiences.',
    type: 'achievement',
    skills: ['System Design', 'Backend Architecture', 'AI Integration', 'Product Thinking'],
  },
];

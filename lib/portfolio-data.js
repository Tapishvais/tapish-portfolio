export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const STATS = [
  { label: 'Projects Completed', value: 18, suffix: '+' },
  { label: 'Years of Experience', value: 2, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'GitHub Contributions', value: 640, suffix: '+' },
]

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    accent: 'from-indigo-500 to-blue-500',
    gradient: 'linear-gradient(90deg, #6366f1, #3b82f6)',
    items: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'JavaScript', level: 94 },
      { name: 'TypeScript', level: 90 },
      { name: 'C++', level: 78 },
    ],
  },
  {
    title: 'Frameworks',
    accent: 'from-blue-500 to-sky-500',
    gradient: 'linear-gradient(90deg, #3b82f6, #0ea5e9)',
    items: [
      { name: 'React', level: 94 },
      { name: 'React Native', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'Node.js', level: 85 },
    ],
  },
  {
    title: 'Tools',
    accent: 'from-sky-500 to-cyan-500',
    gradient: 'linear-gradient(90deg, #0ea5e9, #06b6d4)',
    items: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 94 },
      { name: 'Jenkins', level: 72 },
      { name: 'REST APIs', level: 92 },
      { name: 'Stripe', level: 86 },
      { name: 'Plaid', level: 84 },
    ],
  },
  {
    title: 'Database',
    accent: 'from-indigo-500 to-sky-500',
    gradient: 'linear-gradient(90deg, #6366f1, #0ea5e9)',
    items: [{ name: 'MySQL', level: 82 }],
  },
]

export const EXPERIENCE = [
  {
    company: 'A3 Ideanix Technology Pvt Ltd',
    role: 'Junior iOS Developer',
    period: 'July 2025 – Present',
    location: 'Gurugram, India',
    highlights: [
      'Shipping a US-based fintech mobile app in React Native with strict compliance requirements',
      'Integrated Stripe payments and Plaid for bank account linking end-to-end',
      'Optimized rendering, list virtualization and caching for 60 fps interactions',
      'Owned REST API integration, error handling and offline recovery flows',
    ],
    tags: ['React Native', 'Fintech', 'Stripe', 'Plaid', 'Performance'],
  },
  {
    company: 'NBCC',
    role: 'Software Developer',
    period: 'June 2024 – December 2024',
    location: 'New Delhi, India',
    highlights: [
      'Built an AI chatbot on .NET to automate internal support workflows',
      'Developed and maintained enterprise websites for public-sector programs',
      'Delivered enterprise-grade features with clean, testable architecture',
    ],
    tags: ['.NET', 'AI Chatbot', 'Web', 'Enterprise'],
  },
  {
    company: 'IIT Delhi Foundation',
    role: 'Smart Manufacturing & IoT Trainee',
    period: '2023',
    location: 'IIT Delhi',
    highlights: [
      'Hands-on training in Smart Manufacturing, Industry 4.0 and IoT systems',
      'Built prototypes bridging embedded sensors with web dashboards',
    ],
    tags: ['IoT', 'Smart Manufacturing', 'Training'],
  },
]

export const PROJECTS = [
  {
    name: 'Breakfree',
    tagline: 'US-based fintech mobile app',
    description:
      'A React Native fintech application for the US market with Plaid bank linking, Stripe payments, secure auth and hardened API layer — engineered for reliability and speed.',
    tech: ['React Native', 'TypeScript', 'Stripe', 'Plaid', 'REST APIs'],
    features: [
      'Plaid bank account integration',
      'Stripe payment processing',
      'Secure authentication flow',
      'Robust API integration & caching',
      'Graceful error handling',
      'Performance-tuned lists & screens',
    ],
    gradient: 'from-violet-500 via-fuchsia-500 to-cyan-400',
    accent: 'violet',
    github: 'https://github.com/tapishvais',
    demo: '#',
    study: '#',
  },
  {
    name: 'Mock Interview using GenAI',
    tagline: 'AI-powered interview simulator',
    description:
      'A Next.js platform that runs realistic mock interviews using Google Gemini. Role-based question generation, AI feedback and persistent sessions.',
    tech: ['Next.js', 'Google Gemini', 'Drizzle ORM', 'Neon PostgreSQL', 'Clerk'],
    features: [
      'AI-driven mock interviews',
      'Role-based question generation',
      'Instant AI feedback & scoring',
      'Clerk-powered authentication',
      'Persistent session history',
    ],
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    accent: 'cyan',
    github: 'https://github.com/tapishvais',
    demo: '#',
    study: '#',
  },
  {
    name: 'FindMyLawyer',
    tagline: 'Legal appointment booking',
    description:
      'A cross-platform React Native app to discover lawyers and book appointments. Powered by a .NET backend and SQL database with clean REST APIs.',
    tech: ['React Native', '.NET', 'SQL', 'REST APIs'],
    features: [
      'Appointment booking flow',
      'Secure authentication',
      'REST API integration',
      '.NET backend services',
      'SQL database',
    ],
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    accent: 'emerald',
    github: 'https://github.com/tapishvais',
    demo: '#',
    study: '#',
  },
]

export const WHY_HIRE_ME = [
  { title: 'Clean Code', desc: 'Readable, typed and thoroughly reviewed code that scales with the team.' },
  { title: 'Scalable Architecture', desc: 'Modular, layered design ready for growth without expensive rewrites.' },
  { title: 'Responsive Design', desc: 'Pixel-perfect experiences from 320px handsets to 4K displays.' },
  { title: 'API Integration', desc: 'Battle-tested REST integrations with graceful failure and retries.' },
  { title: 'Cross Platform Apps', desc: 'React Native apps that feel native on both iOS and Android.' },
  { title: 'Performance Optimization', desc: 'Fast start-ups, smooth scroll and lean bundles by default.' },
  { title: 'Problem Solving', desc: 'Break big ambiguous problems into shippable milestones.' },
  { title: 'Modern UI Development', desc: 'Delightful interfaces with motion, depth and micro-interactions.' },
]

export const TESTIMONIALS = [
  {
    quote:
      'Tapish shipped our Stripe and Plaid integrations faster than we thought possible — and the app just feels smooth. He treats performance as a feature.',
    name: 'Aarav Sharma',
    role: 'Product Lead, Fintech Startup',
  },
  {
    quote:
      'One of the rare engineers who cares about both the code and the user. Our React Native app finally feels premium end to end.',
    name: 'Priya Iyer',
    role: 'Engineering Manager',
  },
  {
    quote:
      'Delivered our AI chatbot on time, with clean architecture and thoughtful edge-case handling. Would hire again in a heartbeat.',
    name: 'Rahul Verma',
    role: 'CTO, Enterprise SaaS',
  },
  {
    quote:
      'Great communicator, extremely reliable and quick to grasp product context. Tapish is a genuine 10x contributor to any team.',
    name: 'Meera Kapoor',
    role: 'Founder, Health-tech',
  },
]

export const CERTIFICATIONS = [
  { provider: 'LinkedIn Learning', title: 'Become a React Native Developer' },
  { provider: 'NPTEL', title: 'Programming in Java' },
  { provider: 'Certification', title: 'Python' },
  { provider: 'Certification', title: 'Database Management System' },
]

export const MARQUEE_TECH = [
  'React Native', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Stripe', 'Plaid',
  'REST APIs', 'MongoDB', 'MySQL', 'Tailwind', 'Framer Motion', 'Gemini', 'Clerk',
  'Drizzle', 'PostgreSQL', '.NET', 'Jenkins', 'Git', 'GitHub',
]

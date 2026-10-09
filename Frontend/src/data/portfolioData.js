export const personalInfo = {
  name: "Shubham",
  role: "Full-Stack Developer",
  heroSubtitle:
    "Full-Stack Developer building scalable web applications\nwith React, Node.js, Express, and AWS.",
  ctaText: "View Resume",
  ctaLink: "https://drive.google.com/file/d/1n8vxB43v_piLyhGkgZh8tfEpH6dJrhzR/view",
  aboutIntroHeading: "Building scalable web apps & intelligent systems",
  aboutBio:
    "Full-Stack Developer with 1+ year of professional experience building scalable web applications using React.js, Node.js, Express.js, MongoDB, REST APIs, and AWS. Currently delivering production-ready full-stack solutions for TruQual and ADSD Engineering, with prior experience at Dentavibe building role-based dashboards and Zoho CRM integrations. Experienced in building microservices with RabbitMQ, Redis, and Socket.IO, as well as AI-powered SaaS platforms — recognized by OpenAI’s Head of Engineering for identifying a UI bug.",
  email: "hello@shubham.dev",
  timezone: "Asia/Kolkata",
  location: "Pune, India",
};

export const stats = [
  { value: "1+", label: "Year of professional\nexperience" },
  { value: "2", label: "Active client\ncollaborations" },
  { value: "10+", label: "Production pages\n& workflows delivered" },
  { value: "100%", label: "Production-ready\ncode & delivery" },
];

export const services = [
  {
    title: "Full-Stack Development",
    text: "Building responsive, production-ready web applications using React.js, Node.js, Express, and MongoDB.",
    iconName: "Code2",
    features: [
      "React.js & Tailwind CSS",
      "Node.js & Express APIs",
      "MongoDB Databases",
      "Authentication & RBAC",
    ],
  },
  {
    title: "AI Integration & SaaS",
    text: "Developing AI-powered products, intelligent chatbots, and RAG systems using Gemini and vector search.",
    iconName: "Bot",
    features: [
      "AI Automations",
      "RAG & Vector Search",
      "Chatbots & Voice Bots",
      "OpenAI & Gemini APIs",
    ],
  },
  {
    title: "Microservices & APIs",
    text: "Designing scalable distributed systems with async processing, caching, and real-time communication.",
    iconName: "Network",
    features: [
      "RESTful API Design",
      "RabbitMQ Message Queues",
      "Redis Caching",
      "Socket.IO Real-Time",
    ],
  },
  {
    title: "CRM & Platform Integration",
    text: "Streamlining business workflows with seamless integrations for CRMs, payments, and automated pipelines.",
    iconName: "Workflow",
    features: [
      "Zoho CRM Automation",
      "Razorpay Payments",
      "Firebase JWT & Auth",
      "Media & Email APIs",
    ],
  },
];

export const processSteps = [
  {
    number: 1,
    title: "Discover",
    text: "Understanding goals, audience, and the overall project direction before starting the process.",
  },
  {
    number: 2,
    title: "Design",
    text: "Crafting clean visuals and thoughtful layouts with clarity, balance, and usability in mind.",
  },
  {
    number: 3,
    title: "Develop",
    text: "Building responsive digital experiences with smooth interactions and modern web technologies.",
  },
  {
    number: 4,
    title: "Launch",
    text: "Refining the final experience and preparing everything for a smooth and successful launch.",
  },
];

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "TruQual & ADSD Engineering",
    year: "Oct 2025 – Present",
    description:
      "Building responsive React dashboards, secure REST APIs, and production-ready full-stack features with Node.js and MongoDB.",
  },
  {
    role: "Full-Stack Developer",
    company: "Dentavibe",
    year: "Feb 2025 – Oct 2025",
    description:
      "Delivered 10+ React pages, integrated Zoho CRM APIs, and built secure role-based dashboards with AI features.",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution:
      "JSPM’s Bhivrabai Sawant Institute of Technology and Research, Pune",
    year: "CGPA: 8.47",
    description:
      "Focused on software engineering, data structures, algorithms, and full-stack web architectures.",
  },
];

export const projects = [
  {
    slug: "chat-microservices",
    title: "Real-Time Chat App",
    category: "Microservices & Distributed Systems",
    description:
      "Node.js + TypeScript microservices (User, Chat, Mail) on AWS EC2 with RabbitMQ for async OTP processing, Redis for rate limiting, and Socket.IO for real-time messaging, typing indicators, and read receipts.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "http://13.49.74.24:3000/",
  },
  {
    slug: "career-ai-saas",
    title: "Career AI SaaS Suite",
    category: "AI & Career Intelligence",
    description:
      "AI-powered SaaS suite featuring InterviewIQ (voice-based mock interviews with dynamic difficulty & Razorpay payments) and an ATS-optimized AI Resume Builder with 90%+ keyword match rate.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://interview-iq-ai-vert.vercel.app/",
  },
  {
    slug: "truqual-platform",
    title: "TruQual Admin Platform",
    category: "Full-Stack & RBAC Workflows",
    description:
      "Responsive React application with role-protected admin dashboard, Vite code-splitting, Firebase JWT authentication, candidate tracking workflows, and modular media/email integrations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "rag-chatbot",
    title: "RAG Customer Support Chatbot",
    category: "AI & Vector Search",
    description:
      "AI-powered Customer Support Chatbot using Gemini AI Embeddings and Pinecone for vector search. Implements RAG to retrieve business knowledge and generate context-aware responses.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://rag-customer-support-chatbot-wcw4.onrender.com/",
  },
];

export const skills = [
  {
    name: "Programming Languages",
    iconName: "Code2",
    tags: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "Java"],
    icons: [
      { id: "js", label: "JavaScript" },
      { id: "ts", label: "TypeScript" },
      { id: "html", label: "HTML5" },
      { id: "css", label: "CSS3" },
      { id: "mysql", label: "SQL" },
      { id: "java", label: "Java" },
    ],
  },
  {
    name: "Libraries & Frameworks",
    iconName: "Layers",
    tags: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "SCSS",
      "Bootstrap",
    ],
    icons: [
      { id: "react", label: "React.js" },
      { id: "redux", label: "Redux" },
      { id: "nodejs", label: "Node.js" },
      { id: "express", label: "Express.js" },
      { id: "tailwind", label: "Tailwind" },
      { id: "scss", label: "SCSS" },
      { id: "bootstrap", label: "Bootstrap" },
    ],
  },
  {
    name: "Databases",
    iconName: "Database",
    tags: ["MongoDB", "Redis"],
    icons: [
      { id: "mongodb", label: "MongoDB" },
      { id: "redis", label: "Redis" },
    ],
  },
  {
    name: "Tools & Platforms",
    iconName: "Wrench",
    tags: [
      "Git",
      "GitHub",
      "CI/CD",
      "Postman",
      "Zoho",
      "ClickUp",
      "Asana",
      "Discord",
    ],
    icons: [
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub" },
      { id: "githubactions", label: "CI/CD" },
      { id: "postman", label: "Postman" },
      { id: "discord", label: "Discord" },
    ],
  },
  {
    name: "Cloud & Hosting",
    iconName: "Cloud",
    tags: ["AWS", "Vercel", "Render", "Firebase", "Hostinger"],
    icons: [
      { id: "aws", label: "AWS" },
      { id: "vercel", label: "Vercel" },
      { id: "firebase", label: "Firebase" },
      { id: "docker", label: "Docker" },
    ],
  },
  {
    name: "AI & Dev Tools",
    iconName: "Bot",
    tags: [
      "Cursor",
      "Windsurf",
      "Bolt",
      "Lovable",
      "MCP",
      "Leap.new",
      "AI Agents",
    ],
    icons: [
      {
        id: "openai",
        label: "OpenAI",
        url: "https://cdn.simpleicons.org/openai",
      },
      { id: "vscode", label: "VS Code" },
      { id: "github", label: "Copilot" },
    ],
  },
  {
    name: "Microservices",
    iconName: "Network",
    tags: ["RabbitMQ", "Docker", "Redis"],
    icons: [
      { id: "docker", label: "Docker" },
      { id: "redis", label: "Redis" },
      { id: "kubernetes", label: "Kubernetes" },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Working with Shubham was a smooth and thoughtful experience from start to finish. The attention to detail and clean execution truly stood out.",
    author: "Founder",
    role: "TruQual Director",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Shubham9528",
    iconName: "Github",
    symbol: "GH",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com",
    iconName: "Linkedin",
    symbol: "in",
  },
  {
    label: "Twitter",
    url: "https://twitter.com",
    iconName: "Twitter",
    symbol: "𝕏",
  },
  {
    label: "Email",
    url: "mailto:hello@shubham.dev",
    iconName: "Mail",
    symbol: "✉",
  },
];

export const navMenu = [
  { label: "Home", to: "home", iconName: "Home" },
  { label: "About", to: "about", iconName: "UserRound" },
  { label: "Experience", to: "experience", iconName: "GraduationCap" },
  { label: "Projects", to: "projects", iconName: "BriefcaseBusiness" },
  { label: "Skills", to: "skills", iconName: "Code2" },
  { label: "Services", to: "services", iconName: "Sparkles" },
  { label: "Process", to: "process", iconName: "GitBranch" },
  { label: "Contact", to: "contact", iconName: "Send" },
];

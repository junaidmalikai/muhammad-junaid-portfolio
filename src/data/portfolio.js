export const siteConfig = {
  name: 'Muhammad Junaid',
  title: 'AI Engineer | Python Developer | AI Agents | LLMs | RAG | FastAPI',
  tagline: 'Building intelligent AI systems that solve real-world problems.',
  email: 'junaidfazal08@gmail.com',
  phone: '+92 304 1659294',
  phoneTel: '+923041659294',
  github: 'https://github.com/junaidmalikai',
  linkedin: 'https://www.linkedin.com/in/junaidmalik-dev',
  typewriterWords: [
    'AI Agents',
    'Agentic AI Systems',
    'RAG Systems',
    'MCP Integrations',
    'AI Automation',
  ],
}

export const aboutContent = {
  bio: "I'm an AI Engineer and Python Developer specializing in LLM-powered applications and agentic AI systems — from multi-agent architectures built with LangChain and LangGraph to production-ready RAG pipelines and scalable FastAPI backends. Beyond building agents from scratch, I focus on making AI systems genuinely useful in production: orchestrating automation between AI outputs and business workflows with n8n, and giving agents standardized, secure access to external tools and data through the Model Context Protocol (MCP). My goal is AI that doesn't just chat — it reasons, retrieves, acts, and automates.",
  philosophy: [
    'Reliable Architecture',
    'Intelligent Reasoning',
    'Relevant Context',
    'Tool Integration',
    'Automation',
    'Production-Ready APIs',
  ],
}

export const whatIBuild = [
  {
    icon: 'Bot',
    title: 'AI Agents & Agentic AI',
    description: 'Multi-step autonomous agents with tool use, memory, and orchestration.',
  },
  {
    icon: 'Brain',
    title: 'LLM Applications',
    description: 'Production LLM apps with multi-provider support and streaming responses.',
  },
  {
    icon: 'Database',
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Document ingestion, vector search, source-cited answers.',
  },
  {
    icon: 'Workflow',
    title: 'AI Automation (n8n)',
    description: 'Workflow automation connecting AI decision-making to real business processes.',
  },
  {
    icon: 'Plug',
    title: 'Agent Tool Integration (MCP)',
    description: 'Connecting agents to external tools, APIs, and data via the Model Context Protocol.',
  },
  {
    icon: 'Server',
    title: 'Python Backend Development (FastAPI)',
    description: 'Scalable REST APIs, auth, and real-time services.',
  },
  {
    icon: 'Eye',
    title: 'Computer Vision (OpenCV, YOLO)',
    description: 'Custom CNNs and real-time vision pipelines.',
  },
]

export const projects = [
  {
    id: 'sqlmind',
    category: 'ai',
    title: 'SQLMind AI',
    description: 'Natural language to secure SQL via multi-agent LangGraph with validation and human approval.',
    tags: ['LangGraph', 'Multi-Agent', 'PostgreSQL/MySQL/SQLite', 'AI Security'],
    icon: 'Database',
    liveUrl: 'https://sqlmind-ai-platform.streamlit.app',
    githubUrl: 'https://github.com/junaidmalikai/sqlmind-ai',
    featured: true,
  },
  {
    id: 'docmind',
    category: 'ai',
    title: 'DocMind AI',
    description: 'Production RAG for PDF, DOCX, CSV and more with Chroma search and cited answers.',
    tags: ['LangChain v1', 'LangGraph', 'RAG', 'Chroma'],
    icon: 'BookOpen',
    liveUrl: 'https://docmind-ai-platform.streamlit.app',
    githubUrl: 'https://github.com/junaidmalikai/docmind-ai',
    featured: true,
  },
  {
    id: 'notebook2pdf',
    category: 'ai',
    title: 'Notebook2PDF AI',
    description: 'Jupyter notebooks to polished PDFs via LangGraph Planner + Supervisor agents.',
    tags: ['LangGraph', 'LangChain', 'WeasyPrint', 'Streamlit'],
    icon: 'FileText',
    liveUrl: 'https://notebook2pdf-ai.streamlit.app',
    githubUrl: 'https://github.com/junaidmalikai/notebook2pdf-ai',
    featured: true,
  },
  {
    id: 'papameal',
    category: 'fullstack',
    title: 'PapaMeal',
    description: 'Corporate meal ordering with catering, drivers, multi-portals, and Stripe/PayPal payments.',
    tags: ['Laravel 11', 'PHP', 'MySQL', 'Stripe/PayPal', 'Pusher'],
    icon: 'UtensilsCrossed',
    liveUrl: 'https://papameal.com/',
    featured: true,
  },
  {
    id: 'research-agent',
    category: 'ai',
    title: 'AI Research Agent',
    description: 'Gathers and synthesizes research on complex topics using LangGraph and LLM workflows.',
    tags: ['AI Agents', 'LangGraph', 'LLMs'],
    icon: 'Search',
  },
  {
    id: 'feedback-agent',
    category: 'ai',
    title: 'AI Customer Feedback & Email Automation Agent',
    description: 'Sentiment analysis on feedback with auto-generated personalized email responses.',
    tags: ['Sentiment Analysis', 'AI Agents', 'Automation'],
    icon: 'Mail',
  },
  {
    id: 'chat-app',
    category: 'fullstack',
    title: 'WhatsApp-Style Real-Time Chat App',
    description: 'Group and 1-to-1 chat with WebSockets, file/voice sharing, and Redux Toolkit state.',
    tags: ['FastAPI', 'Flask', 'WebSockets', 'React', 'Redux Toolkit'],
    icon: 'MessageCircle',
  },
  {
    id: 'traffic-sign',
    category: 'fullstack',
    title: 'Traffic Sign Detection (Custom CNN)',
    description: 'Scratch-built CNN for traffic sign detection on GTSRB/LISA with live detection UI.',
    tags: ['TensorFlow', 'Keras', 'OpenCV', 'Computer Vision'],
    icon: 'TrafficCone',
  },
  {
    id: 'rice-disease',
    category: 'fullstack',
    title: 'Rice Disease Detection (Custom CNN)',
    description: '97% accurate custom CNN for rice disease detection, deployed as a web app.',
    tags: ['Deep Learning', 'Computer Vision', 'TensorFlow'],
    icon: 'Leaf',
  },
  {
    id: 'pizza-hub',
    category: 'fullstack',
    title: 'Pizza Hub',
    description: 'Food ordering app with React/Redux frontend, PHP/MySQL backend, and cart checkout.',
    tags: ['PHP', 'MySQL', 'React'],
    icon: 'Pizza',
  },
]

export const experience = [
  {
    role: 'AI/ML Intern',
    company: 'NETSOL Technologies Inc.',
    period: 'Feb 2026 – Jun 2026',
    location: 'Lahore, On-site',
    highlights: [
      'RAG-based document query systems',
      'Predictive ML models',
      'LLM/GenAI workflow exploration',
    ],
  },
  {
    role: 'AI/ML & Generative AI Trainee',
    company: 'Corvit Systems',
    period: 'Nov 2025 – Jan 2026',
    location: 'Lahore',
    highlights: [
      'Built ML/DL models across the full lifecycle',
      'Deployed a RAG Agent in production',
      'Built Agentic AI prototypes',
    ],
  },
  {
    role: 'Python Web Developer (Flask & Django)',
    company: 'Knowledge Streams',
    period: 'Mar 2024 – Apr 2025',
    location: 'Lahore, On-site',
    highlights: [
      '5+ Django apps delivered',
      'Documented Flask REST APIs with auth',
      'MySQL/PostgreSQL with MVC architecture',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Developers Point Pvt. Ltd.',
    period: 'Jan 2022 – Jan 2024',
    location: 'On-site',
    highlights: [
      '10+ client web apps in PHP/Laravel',
      'REST APIs for React/mobile clients',
      '~30% database performance improvement',
      'RBAC with 99% uptime',
    ],
  },
]

export const skillGroups = [
  {
    category: 'AI & Generative AI',
    skills: [
      'AI Agents',
      'Agentic AI',
      'LLMs',
      'RAG',
      'Prompt Engineering',
      'AI Automation',
      'LangChain',
      'LangGraph',
      'MCP (Model Context Protocol)',
    ],
  },
  {
    category: 'Backend',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Flask', 'Django'],
  },
  {
    category: 'Data & Databases',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'SQLite', 'Pandas', 'Vector Databases'],
  },
  {
    category: 'ML & Computer Vision',
    skills: ['Machine Learning', 'Deep Learning', 'OpenCV', 'YOLO'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Docker', 'Git/GitHub', 'Selenium', 'BeautifulSoup', 'n8n', 'Jupyter', 'Linux'],
  },
]

export const education = [
  {
    degree: 'MS Artificial Intelligence',
    institution: 'FAST — National University of Computer and Emerging Sciences',
    period: '2026 – Present',
    badge: 'Continuing',
    cgpa: 'CGPA 3.56',
    inProgress: true,
  },
  {
    degree: 'BS Computer Science',
    institution: 'Virtual University of Pakistan',
    period: 'Apr 2019 - Apr 2023',
    grade: 'Grade A',
    cgpa: 'CGPA 3.89',
  },
]

export const openToRoles = [
  'AI Engineer',
  'AI Automation Engineer',
  'LLM Engineer',
  'Generative AI Engineer',
  'Python/FastAPI Developer',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Build', href: '#build' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

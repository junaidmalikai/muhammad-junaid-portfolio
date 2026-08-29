export const siteConfig = {
  name: 'Muhammad Junaid',
  title: 'Associate AI Engineer | Generative AI | RAG | Python | FastAPI',
  tagline:
    "I build practical AI-powered applications using Generative AI, Large Language Models, RAG, AI Agents, Python, FastAPI, React, and PostgreSQL. I'm passionate about turning real-world problems into intelligent, scalable software solutions.",
  email: 'junaidfazal08@gmail.com',
  phone: '+92 304 1659294',
  phoneTel: '+923041659294',
  github: 'https://github.com/junaidmalikai',
  linkedin: 'https://www.linkedin.com/in/junaidmalik-dev',
  typewriterWords: [
    'Generative AI',
    'RAG Systems',
    'AI Agents',
    'Python & FastAPI',
    'LLMs',
  ],
  careerObjective:
    "I'm looking for an opportunity to work as an Associate AI Engineer / Junior AI Engineer where I can work on Generative AI, RAG, LLMs, AI Agents, Machine Learning, Python, and FastAPI — and grow into a strong AI Engineer.",
}

export const aboutContent = {
  bio: "I'm a Computer Science graduate (BS, CGPA 3.89) currently pursuing an MS in Artificial Intelligence, focused on Generative AI and full-stack AI development. My interests include RAG systems, LLM applications, AI Agents, machine learning, and intelligent automation — I enjoy building end-to-end applications where AI solves real business and user problems. I'm currently looking for an Associate/Junior AI Engineer role where I can contribute to real-world AI products while continuing to grow as an AI engineer.",
}

export const whatIBuild = [
  {
    icon: 'Sparkles',
    title: 'Generative AI Applications',
    description: 'LLM-powered products that generate, reason, and assist in real workflows.',
  },
  {
    icon: 'Database',
    title: 'RAG Systems',
    description: 'Document ingestion, vector search, and source-cited answers you can trust.',
  },
  {
    icon: 'Bot',
    title: 'AI Agents',
    description: 'Multi-step agents with tool use, validation, and human-in-the-loop control.',
  },
  {
    icon: 'Server',
    title: 'AI APIs & Backend (FastAPI)',
    description: 'Production REST APIs that serve models, agents, and application logic.',
  },
  {
    icon: 'Layers',
    title: 'Full-Stack AI Applications',
    description: 'End-to-end apps connecting React frontends to Python AI backends.',
  },
  {
    icon: 'Workflow',
    title: 'AI Automation (n8n)',
    description: 'Workflows that connect AI decisions to business processes and tools.',
  },
  {
    icon: 'Plug',
    title: 'Agent Tool Integration (MCP)',
    description: 'Giving agents standardized access to external tools, APIs, and data.',
  },
]

export const projects = [
  {
    id: 'sqlmind',
    category: 'ai',
    title: 'SQLMind AI',
    description:
      'Natural language to secure SQL via multi-agent LangGraph system with validation and human approval.',
    problem:
      "Non-technical users can't write SQL, and unchecked AI-generated queries are a security risk.",
    approach:
      'Multi-agent LangGraph pipeline — query generation, validation agent, human-approval step.',
    challenge:
      'Blocking unsafe SQL without making the assistant too strict for everyday questions.',
    result:
      'NL→SQL across 3 databases (PostgreSQL, MySQL, SQLite) with sqlglot AST checks, 500-row cap, 30s timeout, and human approval before any query runs.',
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
    description:
      'Production RAG system for PDF, DOCX, CSV and more with Chroma vector search and source-cited answers.',
    problem:
      "Searching long documents manually is slow, and AI answers without sources aren't trustworthy.",
    approach:
      'RAG pipeline with Chroma vector search, LangChain v1 + LangGraph, cited answers.',
    challenge:
      'Retrieving the right chunks across mixed file types and keeping citations accurate.',
    result:
      'RAG over 7 file types (PDF, DOCX, CSV, Excel, TXT, MD) with source-cited streaming answers; UI ready in ~2s.',
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
    description:
      'Converts Jupyter notebooks into polished PDFs via a LangGraph Planner + Supervisor agent architecture.',
    problem:
      'Turning raw notebooks into shareable, well-formatted reports is manual and time-consuming.',
    approach: 'Planner + Supervisor agents orchestrate layout/formatting decisions automatically.',
    challenge:
      'Preserving notebook structure, code, and outputs in a consistent print-ready layout.',
    result:
      'Planner + Supervisor agents convert notebooks into branded PDFs with quality scoring (threshold 72), repair loops, and WeasyPrint layout.',
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
    description:
      'Corporate meal ordering platform with catering, drivers, multi-portals, and Stripe/PayPal payments.',
    problem:
      'Companies need one platform for catering, drivers, payments, and multiple portals — not a simple food app.',
    approach:
      'Laravel 11 multi-portal system with Stripe/PayPal checkout and real-time updates via Pusher.',
    challenge:
      'Coordinating orders, catering, drivers, and payments across portals without dropping reliability.',
    result:
      '1,000+ users placing orders on the live multi-portal platform with Stripe + PayPal and real-time Pusher updates.',
    tags: ['Laravel 11', 'PHP', 'MySQL', 'Stripe/PayPal', 'Pusher'],
    icon: 'UtensilsCrossed',
    liveUrl: 'https://papameal.com/',
    featured: true,
  },
  {
    id: 'research-agent',
    category: 'ai',
    title: 'AI Research Agent',
    description:
      'Gathers and synthesizes research on complex topics using LangGraph and LLM workflows.',
    problem: 'Researching complex topics across many sources is slow and fragmented.',
    approach: 'LangGraph and LLM workflows gather, synthesize, and structure findings.',
    challenge: 'Keeping synthesis accurate and grounded as research threads get long.',
    result:
      'LangGraph + LLM workflow that gathers multi-source research and synthesizes it into one structured brief.',
    tags: ['AI Agents', 'LangGraph', 'LLMs'],
    icon: 'Search',
  },
  {
    id: 'feedback-agent',
    category: 'ai',
    title: 'AI Customer Feedback & Email Automation Agent',
    description:
      'Sentiment analysis on customer feedback with auto-generated personalized email responses.',
    problem: 'Customer feedback piles up without timely, personalized replies.',
    approach:
      'Sentiment analysis plus an agent that drafts tailored email responses automatically.',
    challenge: 'Matching tone and intent so automated replies still feel human.',
    result:
      'Sentiment-tagged feedback with auto-drafted personalized email replies — no manual copy-paste per ticket.',
    tags: ['Sentiment Analysis', 'AI Agents', 'Automation'],
    icon: 'Mail',
  },
  {
    id: 'chat-app',
    category: 'fullstack',
    title: 'WhatsApp-Style Real-Time Chat App',
    description:
      'Group and 1-to-1 chat with WebSockets, file/voice sharing, Redux Toolkit state.',
    problem: 'Teams need reliable real-time messaging with media, not just plain text.',
    approach:
      'WebSocket chat with group and 1-to-1 rooms, file/voice sharing, and Redux Toolkit state.',
    challenge: 'Keeping message state consistent across clients under live traffic.',
    result:
      'Group and 1-to-1 real-time chat with WebSockets, file/voice sharing, and Redux Toolkit client state.',
    tags: ['FastAPI', 'Flask', 'WebSockets', 'React', 'Redux Toolkit'],
    icon: 'MessageCircle',
  },
  {
    id: 'traffic-sign',
    category: 'fullstack',
    title: 'Traffic Sign Detection (Custom CNN)',
    description:
      '95% accurate scratch-built CNN for traffic sign detection on GTSRB/LISA datasets with live detection UI.',
    problem: 'Reliable traffic-sign recognition needs custom models, not generic classifiers.',
    approach: 'Scratch-built CNN trained on GTSRB/LISA with a live detection UI.',
    challenge: 'Generalizing across lighting, occlusion, and dataset shift.',
    result: '95% detection accuracy on GTSRB/LISA with a live OpenCV detection UI.',
    tags: ['TensorFlow', 'Keras', 'OpenCV'],
    icon: 'TrafficCone',
  },
  {
    id: 'rice-disease',
    category: 'fullstack',
    title: 'Rice Disease Detection (Custom CNN)',
    description:
      '97% accurate custom CNN for rice disease detection, deployed as a web app.',
    problem: 'Farmers need fast disease identification without lab equipment.',
    approach: 'Custom CNN deployed as a web app for image-based rice disease diagnosis.',
    challenge: 'High accuracy across disease classes with limited field imagery.',
    result: '97% detection accuracy; deployed as a web app for image-based diagnosis.',
    tags: ['Deep Learning', 'Computer Vision', 'TensorFlow'],
    icon: 'Leaf',
  },
  {
    id: 'pizza-hub',
    category: 'fullstack',
    title: 'Pizza Hub',
    description: 'Food ordering app with React/Redux frontend, PHP/MySQL backend, cart checkout.',
    problem: 'Small food businesses need a simple ordering flow with cart and checkout.',
    approach: 'React/Redux frontend with a PHP/MySQL backend and cart checkout.',
    challenge: 'Reliable cart state and order persistence through checkout.',
    result:
      'End-to-end food ordering with React/Redux cart, PHP/MySQL backend, and checkout persistence.',
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
    featured: true,
    highlights: [
      'Built RAG-based document query systems',
      'Developed predictive ML models using Scikit-learn',
      'Explored LLM/GenAI workflows for internal tooling',
    ],
  },
  {
    role: 'AI/ML & Generative AI Trainee',
    company: 'Corvit Systems',
    period: 'Nov 2025 – Jan 2026',
    location: 'Lahore',
    highlights: [
      'Built ML/DL models across the full lifecycle',
      'Deployed a RAG agent to production',
      'Built Agentic AI prototypes',
    ],
  },
  {
    role: 'Python Web Development Intern (Flask & Django)',
    company: 'Knowledge Streams',
    period: 'Mar 2024 – Apr 2025',
    location: 'Lahore, On-site',
    highlights: [
      'Delivered 5+ Django web applications',
      'Built documented Flask REST APIs with authentication',
      'Worked with MySQL/PostgreSQL using MVC architecture',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Developers Point Pvt. Ltd.',
    period: 'Jan 2022 – Jan 2024',
    location: 'On-site',
    highlights: [
      'Delivered 10+ client web apps in PHP/Laravel',
      'Built REST APIs consumed by React and mobile clients',
      'Improved database performance by ~30%',
      'Implemented RBAC with 99% uptime',
    ],
  },
]

export const skillGroups = [
  {
    category: 'AI & Generative AI',
    skills: [
      'Generative AI',
      'LLMs',
      'RAG',
      'AI Agents',
      'Prompt Engineering',
      'LangChain',
      'LangGraph',
      'MCP',
    ],
  },
  {
    category: 'Backend',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Flask', 'Django'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL', 'Vector Databases'],
  },
  {
    category: 'Tools',
    skills: [
      'Git/GitHub',
      'Docker',
      'Streamlit',
      'n8n',
      'Selenium',
      'BeautifulSoup',
      'Jupyter',
      'Linux',
    ],
  },
]

export const education = [
  {
    degree: 'MS Artificial Intelligence',
    institution: 'FAST-NUCES',
    period: '2026–Present',
    badge: 'Continuing',
    cgpa: 'CGPA 3.56',
    inProgress: true,
  },
  {
    degree: 'BS Computer Science',
    institution: 'Virtual University of Pakistan',
    period: 'Apr 2019–Apr 2023',
    grade: 'Grade A',
    cgpa: 'CGPA 3.89',
  },
]

export const openToRoles = [
  'Associate AI Engineer',
  'Junior AI Engineer',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

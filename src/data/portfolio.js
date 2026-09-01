export const siteConfig = {
  name: 'Muhammad Junaid',
  headline: 'AI Engineer Building Production-Ready Generative AI & RAG Systems',
  title: 'AI Engineer | Generative AI | RAG | Agentic AI | Python | FastAPI',
  tagline:
    'I build RAG systems, multi-agent LangGraph workflows, and FastAPI backends that turn real problems into working AI products — with validation, citations, and human-in-the-loop control where it matters.',
  email: 'junaidfazal08@gmail.com',
  phone: '+92 304 1659294',
  phoneTel: '+923041659294',
  github: 'https://github.com/muhammadjunaidai',
  githubHandle: 'github.com/muhammadjunaidai',
  linkedin: 'https://www.linkedin.com/in/muhammadjunaidai/',
  resumeUrl: '/Muhammad%20Junaid.pdf',
  resumeFileName: 'Muhammad Junaid.pdf',
  location: 'Lahore, Pakistan',
  careerObjective:
    "I'm looking for an Associate AI Engineer / Junior AI Engineer role working on Generative AI, RAG, LLMs, AI Agents, Machine Learning, Python, and FastAPI — and growing into a strong AI Engineer.",
}

export const aboutContent = {
  who: 'Computer Science graduate (BS, Grade A, CGPA 3.89) currently pursuing an MS in Artificial Intelligence at FAST-NUCES (CGPA 3.56).',
  specialize:
    'Generative AI applications, RAG pipelines, and agentic systems — with Python backends that can actually ship.',
  technologies:
    'LangChain, LangGraph, Python, FastAPI, Django, Flask, React, PostgreSQL, MySQL, Docker, and vector search (Chroma).',
  systems:
    'Document intelligence with source-cited answers, secure natural-language-to-SQL, multi-agent workflows with human approval, and full-stack apps connecting React frontends to Python AI backends.',
  roles:
    'Open to Associate AI Engineer and Junior AI Engineer roles on real-world AI products.',
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
    description: 'REST APIs that serve models, agents, and application logic.',
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
      'Natural language to secure SQL via a multi-agent LangGraph system with validation and human approval.',
    problem:
      "Non-technical users can't write SQL, and unchecked AI-generated queries are a security risk.",
    approach:
      'Multi-agent LangGraph pipeline — query generation, validation agent, human-approval step.',
    challenge:
      'Blocking unsafe SQL without making the assistant too strict for everyday questions.',
    result:
      'NL→SQL across PostgreSQL, MySQL, and SQLite with sqlglot AST checks, a 500-row cap, 30s timeout, and human approval before any query runs.',
    highlights: [
      'Multi-agent LangGraph pipeline (generation + validation)',
      'sqlglot AST checks, 500-row cap, 30s timeout',
      'Human-in-the-loop approval before queries run',
      'PostgreSQL, MySQL, and SQLite',
    ],
    tags: ['LangGraph', 'Multi-Agent', 'PostgreSQL/MySQL/SQLite', 'AI Security'],
    icon: 'Database',
    liveUrl: 'https://sqlmind-ai-platform.streamlit.app',
    githubUrl: 'https://github.com/muhammadjunaidai/sqlmind-ai',
    featured: true,
  },
  {
    id: 'docmind',
    category: 'ai',
    title: 'DocMind AI',
    description:
      'RAG system for PDF, DOCX, CSV and more with Chroma vector search and source-cited answers.',
    problem:
      "Searching long documents manually is slow, and AI answers without sources aren't trustworthy.",
    approach:
      'RAG pipeline with Chroma vector search, LangChain v1 + LangGraph, and cited answers.',
    challenge:
      'Retrieving the right chunks across mixed file types and keeping citations accurate.',
    result:
      'RAG over 7 file types (PDF, DOCX, CSV, Excel, TXT, MD) with source-cited streaming answers; UI ready in ~2s.',
    highlights: [
      'RAG pipeline with Chroma vector search',
      'PDF, DOCX, CSV, Excel, TXT, and Markdown',
      'Source-cited streaming answers',
      'LangChain v1 + LangGraph',
    ],
    tags: ['LangChain v1', 'LangGraph', 'RAG', 'Chroma'],
    icon: 'BookOpen',
    liveUrl: 'https://docmind-ai-platform.streamlit.app',
    githubUrl: 'https://github.com/muhammadjunaidai/docmind-ai',
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
    approach: 'Planner + Supervisor agents orchestrate layout and formatting decisions.',
    challenge:
      'Preserving notebook structure, code, and outputs in a consistent print-ready layout.',
    result:
      'Planner + Supervisor agents convert notebooks into branded PDFs with quality scoring (threshold 72), repair loops, and WeasyPrint layout.',
    highlights: [
      'LangGraph Planner + Supervisor agents',
      'LangChain tool-calling agents',
      'Quality scoring (threshold 72) with repair loops',
      'WeasyPrint print-ready PDF layout',
    ],
    tags: ['LangGraph', 'LangChain', 'WeasyPrint', 'Streamlit'],
    icon: 'FileText',
    liveUrl: 'https://notebook2pdf-ai.streamlit.app',
    githubUrl: 'https://github.com/muhammadjunaidai/notebook2pdf-ai',
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
    highlights: [
      'Laravel 11 multi-portal (catering, drivers, orders)',
      'Stripe and PayPal checkout',
      'Real-time updates via Pusher',
      '1,000+ users on the live platform',
    ],
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
    highlights: [
      'LangGraph + LLM research workflow',
      'Multi-source gathering and synthesis',
      'Structured brief as the output',
    ],
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
    highlights: [
      'Sentiment analysis on customer feedback',
      'Auto-drafted personalized email replies',
      'Agent-based email automation',
    ],
    tags: ['Sentiment Analysis', 'AI Agents', 'Automation'],
    icon: 'Mail',
  },
  {
    id: 'chat-app',
    category: 'fullstack',
    title: 'WhatsApp-Style Real-Time Chat App',
    description:
      'Group and 1-to-1 chat with WebSockets, file/voice sharing, and Redux Toolkit state.',
    problem: 'Teams need reliable real-time messaging with media, not just plain text.',
    approach:
      'WebSocket chat with group and 1-to-1 rooms, file/voice sharing, and Redux Toolkit state.',
    challenge: 'Keeping message state consistent across clients under live traffic.',
    result:
      'Group and 1-to-1 real-time chat with WebSockets, file/voice sharing, and Redux Toolkit client state.',
    highlights: [
      'FastAPI / Flask WebSocket backend',
      'Group and 1-to-1 rooms',
      'File and voice sharing',
      'Redux Toolkit client state',
    ],
    tags: ['FastAPI', 'Flask', 'WebSockets', 'React', 'Redux Toolkit'],
    icon: 'MessageCircle',
  },
  {
    id: 'traffic-sign',
    category: 'fullstack',
    title: 'Traffic Sign Detection (Custom CNN)',
    description:
      '95% accurate scratch-built CNN for traffic sign detection on GTSRB/LISA datasets with a live detection UI.',
    problem: 'Reliable traffic-sign recognition needs custom models, not generic classifiers.',
    approach: 'Scratch-built CNN trained on GTSRB/LISA with a live detection UI.',
    challenge: 'Generalizing across lighting, occlusion, and dataset shift.',
    result: '95% detection accuracy on GTSRB/LISA with a live OpenCV detection UI.',
    highlights: [
      'Custom CNN trained from scratch',
      'GTSRB and LISA datasets',
      '95% detection accuracy',
      'Live OpenCV detection UI',
    ],
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
    highlights: [
      'Custom CNN for rice disease classes',
      '97% detection accuracy',
      'Deployed as an image-based web app',
    ],
    tags: ['Deep Learning', 'Computer Vision', 'TensorFlow'],
    icon: 'Leaf',
  },
  {
    id: 'pizza-hub',
    category: 'fullstack',
    title: 'Pizza Hub',
    description: 'Food ordering app with React/Redux frontend, PHP/MySQL backend, and cart checkout.',
    problem: 'Small food businesses need a simple ordering flow with cart and checkout.',
    approach: 'React/Redux frontend with a PHP/MySQL backend and cart checkout.',
    challenge: 'Reliable cart state and order persistence through checkout.',
    result:
      'End-to-end food ordering with React/Redux cart, PHP/MySQL backend, and checkout persistence.',
    highlights: [
      'React/Redux cart and checkout',
      'PHP/MySQL backend',
      'Order persistence through checkout',
    ],
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
      'Built RAG-based document query systems.',
      'Developed predictive ML models using Scikit-learn.',
      'Explored LLM and Generative AI workflows for internal tooling.',
    ],
  },
  {
    role: 'AI/ML & Generative AI Trainee',
    company: 'Corvit Systems',
    period: 'Nov 2025 – Jan 2026',
    location: 'Lahore',
    highlights: [
      'Built machine learning and deep learning models across the full lifecycle.',
      'Deployed a RAG agent to production.',
      'Built Agentic AI prototypes.',
    ],
  },
  {
    role: 'Python Web Development Intern (Flask & Django)',
    company: 'Knowledge Streams',
    period: 'Mar 2024 – Apr 2025',
    location: 'Lahore, On-site',
    highlights: [
      'Delivered 5+ Django web applications.',
      'Built documented Flask REST APIs with authentication.',
      'Implemented MySQL and PostgreSQL data layers using MVC architecture.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Developers Point Pvt. Ltd.',
    period: 'Jan 2022 – Jan 2024',
    location: 'On-site',
    highlights: [
      'Delivered 10+ client web apps in PHP/Laravel.',
      'Built REST APIs consumed by React and mobile clients.',
      'Improved database performance by ~30%.',
      'Implemented RBAC with 99% uptime.',
    ],
  },
]

export const skillGroups = [
  {
    category: 'AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning', icon: 'Brain' },
      { name: 'Deep Learning', icon: 'Network' },
      { name: 'NLP', icon: 'MessageSquare' },
      { name: 'Scikit-learn', icon: 'Cpu' },
      { name: 'TensorFlow', icon: 'Cpu' },
      { name: 'Keras', icon: 'Brain' },
      { name: 'OpenCV', icon: 'Eye' },
    ],
  },
  {
    category: 'Generative AI',
    icon: 'Sparkles',
    skills: [
      { name: 'LLMs', icon: 'Brain' },
      { name: 'RAG', icon: 'Library' },
      { name: 'AI Agents', icon: 'Bot' },
      { name: 'LangChain', icon: 'Link' },
      { name: 'LangGraph', icon: 'GitBranch' },
      { name: 'Prompt Engineering', icon: 'MessageSquare' },
      { name: 'MCP', icon: 'Plug' },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Python', icon: 'Code' },
      { name: 'FastAPI', icon: 'Zap' },
      { name: 'Django', icon: 'LayoutTemplate' },
      { name: 'Flask', icon: 'FlaskConical' },
      { name: 'REST APIs', icon: 'Globe' },
      { name: 'Laravel', icon: 'Layers' },
      { name: 'PHP', icon: 'Code' },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MySQL', icon: 'Cylinder' },
      { name: 'SQLite', icon: 'HardDrive' },
      { name: 'SQL', icon: 'Table' },
      { name: 'Chroma', icon: 'Boxes' },
      { name: 'Vector Databases', icon: 'Boxes' },
    ],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React', icon: 'Component' },
      { name: 'JavaScript', icon: 'Code' },
      { name: 'HTML5', icon: 'FileCode' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'Bootstrap', icon: 'LayoutGrid' },
      { name: 'Redux Toolkit', icon: 'Boxes' },
    ],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'Docker', icon: 'Container' },
      { name: 'Streamlit', icon: 'BarChart3' },
      { name: 'n8n', icon: 'Workflow' },
      { name: 'Jupyter', icon: 'Notebook' },
      { name: 'Selenium', icon: 'MousePointer' },
      { name: 'BeautifulSoup', icon: 'Soup' },
      { name: 'Linux', icon: 'Terminal' },
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
  { name: 'Associate AI Engineer', icon: 'Sparkles' },
  { name: 'Junior AI Engineer', icon: 'Rocket' },
]

export const navLinks = [
  { label: 'About', href: '#about', icon: 'User' },
  { label: 'Experience', href: '#experience', icon: 'Briefcase' },
  { label: 'Projects', href: '#projects', icon: 'FolderOpen' },
  { label: 'Skills', href: '#skills', icon: 'Cpu' },
  { label: 'Education', href: '#education', icon: 'GraduationCap' },
  { label: 'Contact', href: '#contact', icon: 'Mail' },
]

export const tagIcons = {
  LangGraph: 'GitBranch',
  'Multi-Agent': 'Bot',
  'PostgreSQL/MySQL/SQLite': 'Database',
  'AI Security': 'Shield',
  'LangChain v1': 'Link',
  LangChain: 'Link',
  RAG: 'Library',
  Chroma: 'Boxes',
  WeasyPrint: 'FileText',
  Streamlit: 'BarChart3',
  'Laravel 11': 'Layers',
  PHP: 'Code',
  MySQL: 'Cylinder',
  'Stripe/PayPal': 'CreditCard',
  Pusher: 'Radio',
  'AI Agents': 'Bot',
  LLMs: 'Brain',
  'Sentiment Analysis': 'Heart',
  Automation: 'Workflow',
  FastAPI: 'Zap',
  Flask: 'FlaskConical',
  WebSockets: 'Wifi',
  React: 'Component',
  'Tailwind CSS': 'Wind',
  'Redux Toolkit': 'Boxes',
  TensorFlow: 'Cpu',
  Keras: 'Brain',
  OpenCV: 'Eye',
  'Deep Learning': 'Network',
  'Computer Vision': 'Eye',
}

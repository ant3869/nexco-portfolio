// Shared project catalog — used by the Projects page and the home Featured Work strip.
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  demoUrl?: string;
  demoLabel?: string;
  repoUrl?: string;
  galleryUrl?: string;
  metrics?: string;
  type: string;
}

// Project data
export const projects: Project[] = [
  {
    id: 'nexta',
    title: 'Nexta-UI',
    description:
      'Nexta-UI is a modern UI component library built with React and TypeScript. It provides a set of reusable and customizable UI components designed to help developers build beautiful and responsive web applications efficiently.',
    image: 'images/nexta.png',
    tech: ['Typescript', 'React', 'Node.js', 'Tailwind', 'Theme', 'Frontend', 'Component Library'],
    demoUrl: 'https://nexta.anthon3869.workers.dev/',
    repoUrl: 'https://github.com/ant3869/Nexta-UI/tree/main',
    metrics:
      'Professional and elegant for a more modern component look and design.',
    type: 'featured',
  },
  {
    id: 'proton-pack',
    title: 'Proton Pack Replica',
    description:
      'It\'s a proton pack.',
    image: 'images/pack3.jpg',
    tech: ['Prop Replica', 'Arduino', 'Electronics'],
    metrics:
      'Full working lights, vibration motors, smoke machine, video game modes, sound tracks, overheating and overload functions.',
    type: 'featured',
  },
  {
    id: 'llm-frontend',
    title: 'LLM Manager (frontend)',
    description:
      'A custom built all-in-one for your open source LLM needs. Chat, tune, benchmark -- all in a easy to use framework.',
    image: 'images/llm1.png',
    tech: ['Typescript', 'Python', 'Vite', 'TailwindCSS', "React", "Node.Js"],
    metrics:
      'Ease-of-use and approachability at a higher level than any other open source solution of its kind.',
    type: 'featured',
  },
  {
    id: 'dev-dashboard',
    title: 'Technician Metrics Dashboard',
    description:
      'CSV powered analytics dashboard for monitoring developer productivity, build health, and project progress.',
    image: 'images/dashboard1.png',
    tech: ['React', 'Typescript', 'Node.js', 'Vite', 'TailwindCSS', 'Recharts'],
    demoUrl: 'https://classy-melomakarona-ddc438.netlify.app',
    type: 'ui',
  },
  {
    id: 'tailwind-showcase',
    title: 'Tailwind UI Showcase',
    description:
      'Popular Tailwind CSS-based UI libraries with interactive dashboard examples.',
    image: 'images/showcase1.png',
    tech: ['React', 'Typescript', 'Node.js', 'Vite', 'TailwindCSS', 'Recharts'],
    demoUrl: 'https://classy-melomakarona-ddc438.netlify.app',
    repoUrl: 'https://github.com/ant3869/tailwind-ui-showcase/tree/main',
    type: 'ui',
  },
  {
    id: 'proton-pack-2',
    title: 'Proton Pack (Ghostbusters II)',
    description:
      'Proton Pack prop replica from the movie Ghostbusters.',
    image: 'images/pack1.jpg',
    tech: ['Microcontrollers', 'Electronics', '3d Printing'],
    type: 'prop',
  },
  {
    id: 'pke-meter',
    title: 'PKE Meter Replica with EMF Detection',
    description:
      'P.K.E. Meter replica from the Ghostbusters movies, integrating modern electronics to simulate its behavior based on electromagnetic field (EMF) detection.',
    image: 'images/pke1.png',
    tech: ['Microcontroller', 'C++', 'Python', 'Arduino', 'Prop', '3d Printing'],
    demoUrl:
      'https://www.tiktok.com/@nexcomedia/video/7345535167726947630?is_from_webapp=1&sender_device=pc&web_id=7505664205899761198',
    demoLabel: 'Video',
    repoUrl: 'https://github.com/ant3869/PKE-EMF-Meter-Teensy-4.0',
    type: 'prop',
  },
  {
    id: 'ghost-trap',
    title: 'Ghost Trap (Ghostbusters II)',
    description:
    'Ghost Trap prop replica from the movie Ghostbusters.',
    image: 'images/trap1.jpg',
    tech: ['Microcontroller', 'C++', 'Arduino', 'Prop', '3d Printing'],
    type: 'prop',
  },
  {
    id: 'llm-finetune-platform',
    title: 'LLM Fine-Tune Platform',
    description:
      'A user-friendly platform for fine-tuning local LLMs on consumer hardware (8GB GPU) using QLoRA. Built for IT automation, ServiceNow training data, and knowledge extraction from books and PDFs.',
    image: 'images/llm-finetune.jpg',
    tech: ['Python', 'QLoRA', 'HuggingFace', 'LLM', 'Fine-Tuning'],
    repoUrl: 'https://github.com/ant3869/llm-finetune-platform',
    metrics:
      'QLoRA training fits 7B–13B models in 8GB VRAM, with pre-built IT support templates and 25+ curated datasets.',
    type: 'featured',
  },
  {
    id: 'mission-control',
    title: 'Mission Control',
    description:
      'A personal command-center dashboard for orchestrating AI agents, projects, hardware builds, spend, and day-to-day ops — all from a single pane of glass.',
    image: 'images/mission-control.jpg',
    tech: ['React', 'TypeScript', 'Tailwind', 'Express', 'AI Ops'],
    repoUrl: 'https://github.com/ant3869/mission-control',
    metrics:
      'Command palette, kanban tasks, agent approvals, spend tracking, calendar sync, and chat history in one dashboard.',
    type: 'auto',
  },
  {
    id: 'agentic-workflow',
    title: 'Agentic Workflow',
    description:
      'A portable operating model for AI-assisted software delivery — a shared contract for planning, implementation, debugging, review, and durable memory across Copilot, MCP-enabled IDEs, and CLI coding agents.',
    tech: ['AI Agents', 'MCP', 'Copilot', 'CLI', 'Workflow'],
    repoUrl: 'https://github.com/ant3869/AgenticWorkflow',
    metrics:
      'Versioned workflow manifest, specialist prompts, instruction templates, and a dependency-free CLI with CI validation.',
    type: 'auto',
  },
  {
    id: 'auraclean',
    title: 'AuraClean',
    description:
      'Windows system utility: clean junk, boost RAM, scan threats, manage startups, shred files, and analyze storage — built with .NET 8 and WPF, wrapped in a sleek dark UI.',
    image: 'images/auraclean.png',
    tech: ['C#', '.NET 8', 'WPF', 'Windows'],
    repoUrl: 'https://github.com/ant3869/AuraClean',
    metrics:
      'Scans 15 junk categories, deep uninstall with leftover scanning, RAM trimming via native Windows APIs.',
    type: 'auto',
  },
  {
    id: 'teensy-magnetometer',
    title: 'Teensy Prop Shield Magnetometer',
    description:
      'Magnetometer sensing on the Teensy Prop Shield — the groundwork behind the PKE meter\'s EMF detection.',
    tech: ['Teensy', 'C++', 'Sensors', 'Electronics'],
    repoUrl: 'https://github.com/ant3869/Teensy_Prop_Shield_Magnetometer',
    type: 'arduino',
  },
];

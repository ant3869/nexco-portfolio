import { Code, Layout, Server, MonitorSmartphone, Brain } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const skillGroups = [
  {
    icon: Code,
    title: 'Languages',
    description:
      'Self-taught across the stack — I reach for whichever language fits the job.',
    skills: ['Python', 'TypeScript', 'C#', 'C++', 'PowerShell', 'Batch'],
  },
  {
    icon: Layout,
    title: 'Frontend / UI',
    description:
      'From modern web apps to native Windows tools — if it has a UI, I can build it.',
    skills: [
      'React 18',
      'Tailwind CSS',
      'Vite',
      'shadcn/ui',
      'WinUI 3',
      'WinForms',
      'WPF',
      'HTMX',
      'Streamlit',
    ],
  },
  {
    icon: Server,
    title: 'Backend / Automation',
    description:
      'The glue that turns repeated support playbooks into one-click workflows.',
    skills: [
      'Flask',
      'FastAPI',
      'Selenium',
      'REST APIs',
      'WinRM',
      'SQLite',
      'n8n',
    ],
  },
  {
    icon: MonitorSmartphone,
    title: 'Endpoint / Enterprise',
    description:
      '7+ years of hands-on enterprise IT — the environment my tools are built for.',
    skills: [
      'Windows 10/11',
      'macOS',
      'Linux',
      'Active Directory',
      'Microsoft 365',
      'SCCM/CM',
      'JAMF',
      'AirWatch',
      'ServiceNow',
      'YubiKey Auth',
    ],
  },
  {
    icon: Brain,
    title: 'AI / LLM',
    description:
      "Applied GenAI, not hype — local models, fine-tuning, and agent workflows that ship. I'm practical: I use what works.",
    skills: [
      'Local LLMs',
      'Ollama',
      'LM Studio',
      'QLoRA/LoRA',
      'PEFT',
      'HuggingFace',
      'Evaluation Workflows',
      'Copilot/Roo/Cline',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal className="mb-14">
          <h2 className="dash-heading text-3xl">Tech Stack</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Skills and technologies I use to build things that solve real
            problems.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 75}
              className={`spotlight-card card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-7 ${
                group.title === 'AI / LLM' ? 'md:col-span-2' : ''
              }`}
            >
              <h3 className="flex items-center text-lg font-bold mb-2">
                <group.icon className="h-5 w-5 mr-3 text-blue-400" />
                {group.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quote banner */}
        <Reveal className="gradient-border mt-10 rounded-2xl bg-gradient-to-r from-blue-500/[0.07] via-purple-500/[0.07] to-pink-500/[0.07] p-8 text-center">
          <p className="text-muted-foreground italic">
            "I'm self-taught, practical, and constantly learning. I don't claim
            to know everything—I just know how to figure things out."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

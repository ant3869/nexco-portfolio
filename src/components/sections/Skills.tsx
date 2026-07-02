import { Code, Wrench, Brain, Terminal } from 'lucide-react';

const skillGroups = [
  {
    icon: Code,
    title: 'Strongest',
    description:
      "Language I'm most proficient with through years of self-taught development.",
    skills: ['C#'],
  },
  {
    icon: Terminal,
    title: 'Foundation (College)',
    description:
      'Learned the fundamentals in community college ~10 years ago. Rusty but foundational.',
    skills: ['C++'],
  },
  {
    icon: Brain,
    title: 'Work With (AI-Assisted)',
    description:
      "Technologies I actively use with heavy AI assistance (Claude, Copilot, etc.). I'm practical—I use what works.",
    skills: [
      'TypeScript',
      'JavaScript',
      'Python',
      'React',
      'Tailwind CSS',
      'PowerShell',
      'Bash',
      'Node.js',
      'Vite',
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    description: 'Development tools and platforms I use regularly.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Visual Studio',
      'WinUI3',
      'Arduino/Teensy',
      'Windows Automation',
      'GitHub Actions',
      'CI/CD Pipelines',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-14">
          <h2 className="dash-heading text-3xl">Tech Stack</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Skills and technologies I use to build things that solve real
            problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-7"
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
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 text-center">
          <p className="text-muted-foreground italic">
            "I'm self-taught, practical, and constantly learning. I don't claim
            to know everything—I just know how to figure things out."
          </p>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/ui/Reveal';

const quickFacts = [
  { label: 'Based in', value: 'Bentonville, AR' },
  { label: 'Role', value: 'IT Support & Internal Tools @ Walmart' },
  { label: 'Experience', value: '7+ years at Walmart' },
  { label: 'Focus', value: 'GenAI Automation & Dev Tools' },
];

const workHistory = [
  {
    role: 'APEX Tech Spot — End-User IT Support',
    company: 'Walmart',
    period: 'Jun 2023 – Present',
    points: [
      'Resolve Windows/macOS device, application, access, and data-recovery issues in a customer-facing support environment.',
      'Manage Active Directory and Microsoft 365 requests; endpoint diagnostics, repairs, and migration support.',
      'Build and document Python, PowerShell, and React tooling that standardizes Tech Spot support workflows — including AutoService for IMS/ServiceNow automation and Workbench for remote endpoint diagnostics.',
    ],
    tech: ['Python', 'PowerShell', 'React', 'ServiceNow', 'Active Directory', 'M365'],
  },
  {
    role: 'APEX-DLE — Software & Hardware Support',
    company: 'Walmart',
    period: 'Oct 2021 – Jun 2023',
    points: [
      'Developed a C# GUI for an automated shipping tool used by operations.',
      'Modernized the Onsite Migration Tool (OMT) GUI, improving usability and feature coverage for device migrations.',
      'Built the front end of an automated emailing platform for the company-wide device refresh program.',
    ],
    tech: ['C#', 'WinForms', 'Automation', 'Device Migration'],
  },
  {
    role: 'Contact Center — Resolution Specialist III',
    company: 'Walmart',
    period: 'Feb 2018 – Oct 2021',
    points: [
      'Handled 50+ daily calls across Customer Care, Facilities Maintenance, Fuel, Fraud, and Emergency Operations.',
      'Coordinated vendor dispatch and follow-through for scheduling, fuel stations, building controls, and facilities issues.',
    ],
    tech: ['Customer Care', 'Vendor Coordination', 'Operations'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Statement headline */}
        <Reveal className="max-w-3xl mb-20">
          <p className="kicker mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            IT guy by day,{' '}
            <span className="gradient-accent">
              builder and problem-solver
            </span>{' '}
            by night.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I design scripts, apps, and tools to make workflows faster,
            cleaner, and less frustrating.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* My Story */}
          <div>
            <h3 className="dash-heading mb-6">My Story</h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm self-taught—no formal background, just trial, error, and a
                lot of Googling. I don't have all the answers, but I know how
                to dig until I find them. Over the years, I've learned to
                wrangle C++, C#, Python, PowerShell, and modern web stacks
                like React and Flask.
              </p>
              <p>
                I've spent 7+ years at Walmart across Tech Spot support, device
                migration, and operations — building internal tools, automation
                systems, and utilities that help teams skip the repetitive junk
                and get to the real work. It's not always clean or elegant, but
                it works—and when it breaks, I fix it.
              </p>
              <p>
                Today, I rely heavily on AI tools to assist with development.
                I'm not claiming mastery—I'm practical. I use what works, learn
                as I go, and build things that solve real problems.
              </p>
            </div>
          </div>

          {/* Quick Facts + Education */}
          <div className="space-y-8">
            <div>
              <h3 className="dash-heading mb-6">Quick Facts</h3>
              <div className="space-y-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="spotlight-card flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
                  >
                    <span className="text-sm text-muted-foreground">
                      {fact.label}
                    </span>
                    <span className="text-sm font-semibold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="dash-heading mb-6">Education & Certifications</h3>
              <div className="space-y-3">
                <Card className="spotlight-card card-hover border-white/10 bg-white/[0.03]">
                  <CardContent className="p-5">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold">Associates of Science</h4>
                        <span className="text-sm text-muted-foreground">
                          2013–2015
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Mississippi Gulf Community College
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Entry level C++ and general academics with advanced
                        mathematics
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="spotlight-card card-hover border-white/10 bg-white/[0.03]">
                  <CardContent className="p-5">
                    <div className="space-y-1">
                      <h4 className="font-semibold">Certifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Currently working toward industry certifications while
                        building real-world experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Work History */}
        <div className="mt-24">
          <Reveal>
            <h3 className="dash-heading mb-10">Work History</h3>
          </Reveal>
          <div className="relative border-l border-white/10 pl-8 space-y-12">
            {workHistory.map((job, i) => (
              <Reveal key={job.role} delay={i * 80} className="relative">
                {/* Timeline dot */}
                <span
                  className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ${
                    i === 0 ? 'bg-blue-500' : 'bg-white/25'
                  }`}
                />
                <div className="spotlight-card card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-1">
                    <h4 className="font-bold text-lg">{job.role}</h4>
                    <span className="shrink-0 text-sm text-muted-foreground md:text-right">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-blue-400 mb-4">{job.company}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

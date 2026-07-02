import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/ui/Reveal';

const quickFacts = [
  { label: 'Based in', value: 'Bentonville, AR' },
  { label: 'Role', value: 'IT & Internal Tools' },
  { label: 'Approach', value: 'Self-taught & practical' },
  { label: 'Passion', value: 'Automation & Dev Tools' },
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
                I work in IT for a major retail company, where I build internal
                tools, automation systems, and utilities that help teams skip
                the repetitive junk and get to the real work. It's not always
                clean or elegant, but it works—and when it breaks, I fix it.
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
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
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
                <Card className="card-hover border-white/10 bg-white/[0.03]">
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

                <Card className="card-hover border-white/10 bg-white/[0.03]">
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
      </div>
    </section>
  );
}

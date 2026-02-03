import { Card, CardContent } from '@/components/ui/card';
import { Code, Wrench, Brain, Terminal } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">
          Skills & Technologies
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Strongest Skills */}
          <Card className="shadow-lg border-primary/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <Code className="h-5 w-5 mr-2" />
                Strongest
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Language I'm most proficient with through years of self-taught development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium border border-primary/20">
                  C#
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Learned in College */}
          <Card className="shadow-lg border-muted">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Terminal className="h-5 w-5 mr-2" />
                Foundation (College)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learned the fundamentals in community college ~10 years ago. Rusty but foundational.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">C++</span>
              </div>
            </CardContent>
          </Card>

          {/* AI-Assisted Development */}
          <Card className="shadow-lg border-accent/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center text-accent">
                <Brain className="h-5 w-5 mr-2" />
                Work With (AI-Assisted)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Technologies I actively use with heavy AI assistance (Claude, Copilot, etc.). I'm practical—I use what works.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Tailwind CSS</span>
                <span className="tech-badge">PowerShell</span>
                <span className="tech-badge">Bash</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Vite</span>
              </div>
            </CardContent>
          </Card>

          {/* Tools & Platforms */}
          <Card className="shadow-lg border-muted">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Wrench className="h-5 w-5 mr-2" />
                Tools & Platforms
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Development tools and platforms I use regularly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Git</span>
                <span className="tech-badge">GitHub</span>
                <span className="tech-badge">VS Code</span>
                <span className="tech-badge">Visual Studio</span>
                <span className="tech-badge">WinUI3</span>
                <span className="tech-badge">Arduino/Teensy</span>
                <span className="tech-badge">Windows Automation</span>
                <span className="tech-badge">GitHub Actions</span>
                <span className="tech-badge">CI/CD Pipelines</span>
              </div>
            </CardContent>
          </Card>

          {/* Additional Context */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground italic">
              "I'm self-taught, practical, and constantly learning. I don't claim to know everything—I just know how to figure things out."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
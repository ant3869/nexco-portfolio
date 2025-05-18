import { Dot } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main About Text */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg">
              I'm Anthony—an IT guy, builder, and problem-solver. I design
              scripts, apps, and tools to make workflows faster, cleaner, and
              less frustrating.
            </p>

            <p>
              I’m self-taught—no formal background, just trial, error, and a lot
              of Googling. I don’t have all the answers, but I know how to dig
              until I find them. Over the years, I’ve learned to wrangle C++,
              C#, Python, PowerShell, and modern web stacks like React and
              Flask.
            </p>

            <p>
              I work in IT for a major retail company, where I build internal
              tools, automation systems, and utilities that help teams skip the
              repetitive junk and get to the real work. It’s not always clean or
              elegant, but it works—and when it breaks, I fix it.
            </p>

            <div className="flex items-center gap-2 pt-2 text-primary">
              <span className="font-bold">Expertise:</span>
              <span className="flex items-center">
                Developer Tools <Dot /> Automation <Dot /> Frontend <Dot />{' '}
                Systems Programming
              </span>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-4">
            <h3 className="section-subheading">Education & Certifications</h3>

            <Card className="card-hover">
              <CardContent className="p-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold">Associates of Science</h4>
                    <span className="text-sm text-muted-foreground">
                      2013-2015
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mississippi Gulf Community College
                  </p>
                  <p className="text-sm">
                    Entry level c++ and general academics with advanced
                    mathmatics
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-4">
                <div className="space-y-1">
                  <h4 className="font-semibold">Certifications</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <Dot className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        Microsoft Certified: Azure Developer Associate
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Dot className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>AWS Certified DevOps Engineer</span>
                    </li>
                    <li className="flex items-start">
                      <Dot className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Google Professional Cloud Developer</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

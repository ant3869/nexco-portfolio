import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Server, Layers, Terminal } from 'lucide-react';
import { useState } from 'react';

// Define skill categories and skills with proficiency levels
const skillCategories = [
  {
    id: 'languages',
    name: 'Languages',
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: 'C#', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'C++', level: 65 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: <Layers className="h-5 w-5" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'CSS/SCSS', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Radix UI', level: 70 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: 'ASP.NET Core', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'GraphQL', level: 60 },
      { name: 'Docker', level: 60 },
    ],
  },
  {
    id: 'automation',
    name: 'Automation',
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      { name: 'PowerShell', level: 95 },
      { name: 'Batch Scripting', level: 85 },
      { name: 'Bash/Shell', level: 80 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'CI/CD Pipelines', level: 70 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages');
  
  const selectedCategory = skillCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">
          Skills & Technologies
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary/10 text-primary'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <div className="p-2">{category.icon}</div>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Skills List */}
          {selectedCategory && (
            <Card className="shadow-lg border-primary/10">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  {selectedCategory.icon}
                  <span className="ml-2">{selectedCategory.name}</span>
                </h3>
                
                <div className="grid gap-6">
                  {selectedCategory.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-muted"
                        // indicatorClassName={`${
                        //   skill.level > 90
                        //     ? 'bg-gradient-to-r from-primary to-accent'
                        //     : 'bg-primary'
                        // }`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Additional Skills */}
          <div className="mt-10">
            <h3 className="section-subheading text-center">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {[
                'Git',
                'Microcontrollers',
                'OpenAI API',
                'Docker Compose',
                'Windows Automation',
                'SOLID Principles',
                'Performance Optimization',
                'TDD',
                'UX/UI',
                'System Design'
              ].map((skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
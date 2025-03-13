
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, FileCode, GitBranch, Globe, Server } from 'lucide-react';

const SkillCard = ({ 
  icon, 
  title, 
  skills 
}: { 
  icon: React.ReactNode; 
  title: string; 
  skills: string[] 
}) => (
  <Card className="hover-scale">
    <CardContent className="p-6">
      <div className="mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-1 text-sm text-muted-foreground">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "HTML", "CSS"]
    },
    {
      icon: <Globe size={28} />,
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      icon: <Server size={28} />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      icon: <Database size={28} />,
      title: "Database",
      skills: ["MySQL", "MongoDB", "Firebase"]
    },
    {
      icon: <GitBranch size={28} />,
      title: "Version Control",
      skills: ["Git", "GitHub", "GitLab"]
    },
    {
      icon: <FileCode size={28} />,
      title: "CS Fundamentals",
      skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical skills I've acquired through education, projects, and work experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

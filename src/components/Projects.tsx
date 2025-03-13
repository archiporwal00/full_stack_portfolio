
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => (
  <Card className="h-full flex flex-col hover-scale overflow-hidden">
    {project.imageUrl && (
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
    )}
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="secondary">{tech}</Badge>
        ))}
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-base">{project.description}</CardDescription>
    </CardContent>
    <CardFooter className="flex gap-3">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="gap-2">
            <Github size={16} />
            Code
          </Button>
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="gap-2">
            <ExternalLink size={16} />
            Live Demo
          </Button>
        </a>
      )}
    </CardFooter>
  </Card>
);

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Krashak Setu Web Portal",
      description: "Developed a feature-rich web portal using React.js, Node.js, Express.js, and Firebase for real-time updates and authentication. Implemented AI-based crop prediction models, a recommendation system, and RESTful APIs for order management.",
      technologies: ["React.js", "Node.js", "Express.js", "Firebase", "AI Models", "MongoDB/MySQL"],
      imageUrl: "https://placehold.co/600x400/e2e8f0/64748b?text=Krashak+Setu",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Resume Screening System",
      description: "Developed an AI-based resume screening tool using React.js for the frontend and Node.js/Express.js for the backend. Integrated MongoDB for database management and NLP models to analyze and categorize resumes.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "NLP", "Firebase", "AWS"],
      imageUrl: "https://placehold.co/600x400/e2e8f0/64748b?text=Resume+Screening",
      githubUrl: "#"
    },
    {
      title: "AI Finance Advisor",
      description: "Developed an AI-driven financial advisory platform using Python, Django, React.js, and AI/ML models. Worked on data visualization, RESTful APIs, and financial dataset handling, ensuring secure, user-centric solutions.",
      technologies: ["Python", "Django", "React.js", "AI/ML", "Data Visualization"],
      imageUrl: "https://placehold.co/600x400/e2e8f0/64748b?text=Finance+Advisor",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills, problem-solving abilities, and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Hackathons & Competitions</h3>
          <ul className="space-y-2 max-w-xl mx-auto text-muted-foreground">
            <li className="flex items-center gap-2">
              <Badge variant="default">Finalist</Badge>
              <span>Smart India Hackathon, 2024</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Participated</Badge>
              <span>Accenture Innovation Hackathon, 2024</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Participated</Badge>
              <span>Adobe GenSolve Hackathon, 2024</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Participated</Badge>
              <span>Internal University hackathon (by PIET AICTE LAB)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;

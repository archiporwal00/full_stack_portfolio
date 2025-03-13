
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Archi Porwal</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Full Stack Developer crafting scalable and user-friendly web applications
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/archi-porwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/archiporwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:porwalarchi00@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <Separator className="mb-6" />
          
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Archi Porwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

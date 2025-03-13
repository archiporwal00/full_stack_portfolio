
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-gradient">Archi Porwal</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in delay-100">
            Full Stack Developer with a passion for building scalable, user-friendly solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-200">
            <a href="mailto:porwalarchi00@gmail.com" className="hover-scale">
              <Button variant="outline" size="lg" className="gap-2">
                <Mail size={18} />
                <span>porwalarchi00@gmail.com</span>
              </Button>
            </a>
            <a href="tel:+919691382694" className="hover-scale">
              <Button variant="outline" size="lg" className="gap-2">
                <span>+91-9691382694</span>
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center gap-4 mb-12 animate-fade-in delay-300">
            <a 
              href="https://www.linkedin.com/in/archi-porwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/archiporwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-400">
            <a href="#projects">
              <Button size="lg" className="gap-2 px-6">
                View Projects
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="/archi-porwal-resume.pdf" download>
              <Button variant="outline" size="lg" className="gap-2 px-6">
                Download Resume
                <Download size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

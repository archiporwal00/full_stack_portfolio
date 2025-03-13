
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
            
            <div className="relative border-l border-primary/20 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  May 2024 - June 2024
                </span>
                <h4 className="text-xl font-medium">Front-end Development Intern</h4>
                <h5 className="text-lg text-muted-foreground">Grass Solution (P) Ltd.</h5>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                  <span>Developed HTML, React, and JavaScript responsive web projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                  <span>Worked in groups to optimize and debug front-end code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                  <span>Acquired and utilized fundamental front-end technologies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            
            <div className="relative border-l border-primary/20 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  2022 - 2026
                </span>
                <h4 className="text-xl font-medium">B.Tech in Computer Science and Engineering</h4>
                <h5 className="text-lg text-muted-foreground">Poornima University, Jaipur</h5>
                <p className="text-muted-foreground mt-1">GPA: 7.88/10</p>
              </div>
            </div>
            
            <div className="relative border-l border-primary/20 pl-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h4 className="text-xl font-medium">Secondary and Senior Secondary Education</h4>
                <h5 className="text-lg text-muted-foreground">Stanford International School</h5>
                <p className="text-muted-foreground mt-1">Secondary: 76% | Senior Secondary: 67%</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Certifications & Courses</h3>
            
            <ul className="space-y-4">
              <li className="p-4 rounded-lg border border-border">
                <h4 className="font-medium">Full Stack Development</h4>
                <p className="text-muted-foreground text-sm">Udemy (ongoing)</p>
              </li>
              <li className="p-4 rounded-lg border border-border">
                <h4 className="font-medium">Generative AI for Beginners</h4>
                <p className="text-muted-foreground text-sm">Udemy (ongoing)</p>
              </li>
              <li className="p-4 rounded-lg border border-border">
                <h4 className="font-medium">Introduction to Internet of Things</h4>
                <p className="text-muted-foreground text-sm">NPTEL</p>
              </li>
              <li className="p-4 rounded-lg border border-border">
                <h4 className="font-medium">Data Structures and Algorithms</h4>
                <p className="text-muted-foreground text-sm">Apna College (ongoing)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

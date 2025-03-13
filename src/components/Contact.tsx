
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="mailto:porwalarchi00@gmail.com" 
                  className="flex items-center p-4 rounded-lg border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">porwalarchi00@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+919691382694" 
                  className="flex items-center p-4 rounded-lg border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">+91-9691382694</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/archi-porwal" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-lg border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/archi-porwal</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/archiporwal" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-lg border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-muted-foreground">github.com/archiporwal</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" asChild>
                  <a href="mailto:porwalarchi00@gmail.com">
                    Send Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

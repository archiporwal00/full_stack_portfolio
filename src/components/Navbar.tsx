
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300',
        scrolled 
          ? 'glass shadow-sm backdrop-blur-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-lg font-display font-bold tracking-tight transition-all duration-300">
          Archi Porwal
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground/80 hover:text-foreground transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-foreground/80 hover:text-foreground transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 text-xl font-medium px-6 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

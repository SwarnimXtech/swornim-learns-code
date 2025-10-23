import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Learning", id: "learning" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5">
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with gradient and icon */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Swarnim Poudel
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {item.label}
                </span>
                
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary transform origin-left transition-transform duration-300 ${
                  activeSection === item.id 
                    ? "scale-x-100" 
                    : "scale-x-0 group-hover:scale-x-100"
                }`} />
                
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isOpen ? (
              <X className="relative z-10 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="relative z-10 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className="pb-4 flex flex-col gap-2 bg-background/50 backdrop-blur-lg rounded-xl border border-primary/10 p-4 shadow-lg shadow-primary/5">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-left px-4 py-3 rounded-lg group transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? "fade-in 0.3s ease-out forwards" : "none"
                }}
              >
                <span className={`relative z-10 font-medium transition-colors duration-300 ${
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {item.label}
                </span>
                
                {/* Active/Hover background */}
                <span className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg transition-opacity duration-300 ${
                  activeSection === item.id 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100"
                }`} />
                
                {/* Border accent */}
                {activeSection === item.id && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-glow to-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

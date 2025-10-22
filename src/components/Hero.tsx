import { Code2, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)))`,
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="text-primary">Swarnim Poudel</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Aspiring Computer Scientist
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-xl">
              I am a high school student passionate about computer science, 
              currently learning programming and building foundational skills 
              in HTML, C, Python, and teamwork.
            </p>

            <div className="flex gap-4 pt-4">
              <Button size="lg" onClick={scrollToContact} className="group">
                Get In Touch
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:swornimpoudel@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center items-center animate-fade-in">
            <div className="relative">
              {/* Floating Icons */}
              <div className="absolute -top-8 -right-8 p-4 rounded-full bg-floating-icon-bg shadow-lg animate-float" style={{ animationDelay: "0s" }}>
                <Github className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-8 -left-8 p-4 rounded-full bg-floating-icon-bg shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              
              {/* Profile Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                <img
                  src={profileImage}
                  alt="Swarnim Poudel"
                  className="w-full h-auto max-w-md object-cover"
                />
              </div>

              {/* Info Card */}
              <div className="absolute bottom-8 -right-4 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-xs animate-pulse-glow">
                <h3 className="font-bold text-lg mb-2">Learning Journey</h3>
                <p className="text-sm opacity-90">
                  Building skills in programming and computer science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

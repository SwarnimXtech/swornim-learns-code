import { Code2, Github, Mail, Sparkles, Terminal, BookOpen, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Available for Learning Opportunities</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Swarnim Poudel
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="text-base py-2 px-4">
                  <Terminal className="w-4 h-4 mr-2" />
                  Aspiring Developer
                </Badge>
                <Badge variant="outline" className="text-base py-2 px-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  High School Student
                </Badge>
              </div>
            </div>
            
            <p className="text-xl text-foreground/90 leading-relaxed max-w-xl">
              I am a high school student passionate about computer science, 
              currently learning programming and building foundational skills 
              in <span className="font-semibold text-primary">HTML</span>, <span className="font-semibold text-primary">C</span>, <span className="font-semibold text-primary">Python</span>, and teamwork.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={scrollToContact} className="group shadow-xl hover:shadow-2xl transition-all">
                Get In Touch
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToAbout} className="group backdrop-blur-sm bg-card/50 hover:bg-card shadow-xl">
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-card/60 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-border/50"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:swornimpoudel@gmail.com"
                className="p-4 rounded-2xl bg-card/60 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-border/50"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center items-center animate-fade-in lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] blur-2xl" />
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-8 -right-8 p-5 rounded-2xl bg-card/80 backdrop-blur-md shadow-2xl border border-border/50 animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: "0s" }}>
                <Github className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute top-1/2 -left-12 p-5 rounded-2xl bg-card/80 backdrop-blur-md shadow-2xl border border-border/50 animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: "0.5s" }}>
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-8 left-1/4 p-5 rounded-2xl bg-card/80 backdrop-blur-md shadow-2xl border border-border/50 animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: "1s" }}>
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              
              {/* Profile Image Container */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-card/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                <img
                  src={profileImage}
                  alt="Swarnim Poudel"
                  className="w-full h-auto max-w-md object-cover relative z-10"
                />
              </div>

              {/* Glassmorphic Info Card */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary/90 to-accent/90 backdrop-blur-xl text-primary-foreground p-6 rounded-3xl shadow-2xl max-w-xs border border-white/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/20">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Learning Journey</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Building skills in programming and computer science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <div className="flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

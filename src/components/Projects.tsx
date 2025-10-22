import { FolderGit2, Clock, Sparkles, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-4">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              My portfolio is growing as I learn and build
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm animate-fade-in overflow-hidden relative group" style={{ animationDelay: "0.2s" }}>
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
            
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xl">
                <FolderGit2 className="h-12 w-12 text-primary" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Clock className="h-4 w-4 text-primary animate-pulse" />
                <span className="font-semibold text-primary text-sm">Under Development</span>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Projects Coming Soon
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                I'm currently focused on building my skills and knowledge. As I progress 
                in my learning journey, I'll be creating projects that showcase my abilities 
                in web development, programming, and problem-solving.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm">
                  <span className="text-sm font-medium">Web Development</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm">
                  <span className="text-sm font-medium">Python Apps</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm">
                  <span className="text-sm font-medium">C Programs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-5 w-5 text-primary" />
              <p className="text-lg">
                Check back soon to see what I'm building!
              </p>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

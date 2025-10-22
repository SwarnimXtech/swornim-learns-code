import { FolderGit2, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            My portfolio is growing as I learn and build
          </p>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl transition-shadow">
            <CardContent className="p-12 text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <FolderGit2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Projects Coming Soon
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                I'm currently focused on building my skills and knowledge. As I progress 
                in my learning journey, I'll be creating projects that showcase my abilities 
                in web development, programming, and problem-solving.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Under Development</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Check back soon to see what I'm building! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

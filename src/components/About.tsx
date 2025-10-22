import { GraduationCap, Heart, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">My Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Get to know my journey and aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Education</h3>
                <p className="text-muted-foreground">
                  High School Student
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Passion</h3>
                <p className="text-muted-foreground">
                  Computer Science
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Focus</h3>
                <p className="text-muted-foreground">
                  Building Foundations
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 backdrop-blur-sm shadow-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-10 md:p-12">
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I'm currently a high school student with a deep passion for computer science 
                  and technology. My journey in programming began with curiosity about how 
                  software works, and it has grown into a dedicated pursuit of knowledge and skills.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I am actively learning <span className="font-bold text-primary">HTML</span> for web development, <span className="font-bold text-primary">C programming</span>
                  {" "}for understanding fundamental concepts, and <span className="font-bold text-primary">Python</span> for its versatility 
                  and applications in various domains. Beyond technical skills, I'm also developing 
                  my teamwork abilities, understanding that collaboration is essential in the tech world.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  My goal is to build a strong foundation in computer science that will enable me 
                  to create meaningful projects and contribute to the tech community. I'm excited 
                  about the journey ahead and the opportunities to learn and grow.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

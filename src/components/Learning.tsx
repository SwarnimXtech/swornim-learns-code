import { BookOpen, Rocket, Target, Lightbulb, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Learning = () => {
  const goals = [
    {
      icon: BookOpen,
      title: "Master Core Languages",
      description: "Deepening my understanding of C, Python, and web technologies to build a solid programming foundation.",
    },
    {
      icon: Rocket,
      title: "Build Real Projects",
      description: "Moving from theory to practice by creating functional applications and contributing to open-source.",
    },
    {
      icon: Target,
      title: "Computer Science Fundamentals",
      description: "Studying algorithms, data structures, and computational thinking to solve complex problems.",
    },
    {
      icon: Lightbulb,
      title: "Collaborative Development",
      description: "Learning to work in teams, use version control, and communicate technical ideas effectively.",
    },
  ];

  return (
    <section id="learning" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Always Growing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Learning & Goals
            </h2>
            <p className="text-lg text-muted-foreground">
              My journey of continuous growth and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {goals.map((goal, index) => (
              <Card
                key={goal.title}
                className="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in border-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                      <goal.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {goal.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground shadow-2xl border-0 overflow-hidden relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
            
            <CardContent className="p-10 md:p-12 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Current Focus</h3>
              <p className="text-lg opacity-95 leading-relaxed max-w-2xl mx-auto">
                Right now, I'm actively working on strengthening my programming fundamentals 
                while exploring different areas of computer science. Every challenge is an 
                opportunity to learn, and I'm excited about the path ahead.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Learning;

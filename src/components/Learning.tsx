import { BookOpen, Rocket, Target, Lightbulb } from "lucide-react";
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
    <section id="learning" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Learning & Goals
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            My journey of continuous growth and development
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {goals.map((goal, index) => (
              <Card
                key={goal.title}
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <goal.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        {goal.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
              <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
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

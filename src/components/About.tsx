import { GraduationCap, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Get to know my journey and aspirations
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Education</h3>
                <p className="text-muted-foreground text-sm">
                  High School Student
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Passion</h3>
                <p className="text-muted-foreground text-sm">
                  Computer Science
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Focus</h3>
                <p className="text-muted-foreground text-sm">
                  Building Foundations
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I'm currently a high school student with a deep passion for computer science 
                and technology. My journey in programming began with curiosity about how 
                software works, and it has grown into a dedicated pursuit of knowledge and skills.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I am actively learning <strong>HTML</strong> for web development, <strong>C programming</strong> 
                {" "}for understanding fundamental concepts, and <strong>Python</strong> for its versatility 
                and applications in various domains. Beyond technical skills, I'm also developing 
                my teamwork abilities, understanding that collaboration is essential in the tech world.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                My goal is to build a strong foundation in computer science that will enable me 
                to create meaningful projects and contribute to the tech community. I'm excited 
                about the journey ahead and the opportunities to learn and grow.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Code2, Database, Users, FileCode, Sparkles, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 60, icon: FileCode, color: "from-orange-500 to-red-500" },
    { name: "C Programming", level: 45, icon: Code2, color: "from-blue-500 to-cyan-500" },
    { name: "Python", level: 50, icon: Database, color: "from-green-500 to-emerald-500" },
  ];

  const softSkills = [
    { name: "Teamwork", level: 70, icon: Users, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Growing Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              My Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and abilities I'm currently developing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="group animate-fade-in hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-primary/10 bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform`}>
                          <skill.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-lg text-foreground">
                                {skill.name}
                              </h4>
                              <Badge variant="secondary" className="mt-1">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Learning
                              </Badge>
                            </div>
                            <span className="text-2xl font-bold text-primary">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Soft Skills
                </h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="group animate-fade-in hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-primary/10 bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${(technicalSkills.length + index) * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform`}>
                          <skill.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-lg text-foreground">
                                {skill.name}
                              </h4>
                              <Badge variant="secondary" className="mt-1">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Developing
                              </Badge>
                            </div>
                            <span className="text-2xl font-bold text-primary">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Learning Approach Card */}
                <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 backdrop-blur-sm shadow-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/20">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground mb-3">
                          Learning Approach
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          I believe in continuous learning and hands-on practice. 
                          Each day brings new opportunities to improve these skills 
                          through projects, courses, and collaboration with peers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

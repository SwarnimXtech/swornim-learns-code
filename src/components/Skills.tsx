import { Code2, Database, Users, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 60, icon: FileCode, color: "text-orange-500" },
    { name: "C Programming", level: 45, icon: Code2, color: "text-blue-500" },
    { name: "Python", level: 50, icon: Database, color: "text-green-500" },
  ];

  const softSkills = [
    { name: "Teamwork", level: 70, icon: Users, color: "text-purple-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            My Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Technologies and abilities I'm currently developing
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="animate-fade-in hover:shadow-lg transition-shadow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-muted ${skill.color}`}>
                          <skill.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-foreground">
                              {skill.name}
                            </h4>
                            <span className="text-sm text-muted-foreground">
                              Learning
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Soft Skills
              </h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="animate-fade-in hover:shadow-lg transition-shadow"
                    style={{ animationDelay: `${(technicalSkills.length + index) * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-muted ${skill.color}`}>
                          <skill.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-foreground">
                              {skill.name}
                            </h4>
                            <span className="text-sm text-muted-foreground">
                              Developing
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Learning Approach Card */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Learning Approach
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      I believe in continuous learning and hands-on practice. 
                      Each day brings new opportunities to improve these skills 
                      through projects, courses, and collaboration with peers.
                    </p>
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

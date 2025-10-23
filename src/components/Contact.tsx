import { Mail, Send, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-4">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Let's Talk</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              I'd love to hear from you! Let's connect.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm animate-fade-in overflow-hidden relative group" style={{ animationDelay: "0.2s" }}>
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500" />
            
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xl animate-pulse-glow">
                <Mail className="h-12 w-12 text-primary" />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Whether you want to discuss computer science, collaborate on a project, 
                or just say hello, I'm always happy to connect with fellow learners and 
                enthusiasts.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:swornimpoudel@gmail.com"
                  className="inline-block w-full max-w-md mx-auto"
                >
                  <Button size="lg" className="group shadow-xl hover:shadow-2xl text-base md:text-lg px-4 py-4 md:px-8 md:py-6 w-full">
                    <Mail className="mr-2 md:mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="truncate">swornimpoudel@gmail.com</span>
                    <Send className="ml-2 md:ml-3 h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-sm text-muted-foreground">
                    Available and ready to respond
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-muted-foreground">
                I typically respond within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

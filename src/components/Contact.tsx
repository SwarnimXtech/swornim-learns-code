import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            I'd love to hear from you! Let's connect.
          </p>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-2xl transition-shadow">
            <CardContent className="p-12 text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse-glow">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Whether you want to discuss computer science, collaborate on a project, 
                or just say hello, I'm always happy to connect with fellow learners and 
                enthusiasts.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:swornimpoudel@gmail.com"
                  className="inline-block"
                >
                  <Button size="lg" className="group">
                    <Mail className="mr-2 h-5 w-5" />
                    swornimpoudel@gmail.com
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                
                <p className="text-sm text-muted-foreground">
                  Click to send me an email
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              I typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

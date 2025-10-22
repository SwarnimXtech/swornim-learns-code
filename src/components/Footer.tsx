import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-muted/80 to-muted/50 backdrop-blur-sm border-t border-border/50 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg text-foreground mb-1">Swarnim Poudel</p>
            <p className="text-sm text-muted-foreground">
              Aspiring Computer Scientist
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg border border-border/50"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:swornimpoudel@gmail.com"
              className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg border border-border/50"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p className="mb-1">© {currentYear} Swarnim Poudel</p>
            <p className="flex items-center justify-center md:justify-end gap-1">
              Built with <Heart className="h-3 w-3 text-primary fill-primary" /> and dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

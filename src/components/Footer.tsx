import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">Swarnim Poudel</p>
            <p className="text-sm text-muted-foreground">
              Aspiring Computer Scientist
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:swornimpoudel@gmail.com"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© {currentYear} Swarnim Poudel</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

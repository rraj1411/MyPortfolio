
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 py-8">
      <div className="portfolio-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              © {currentYear} Rishabhraj Sharma. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1 text-center md:text-left">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/rraj1411" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rishabhraj-sharma/" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://www.kaggle.com/rishabhrajsharma" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Kaggle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 20H8v-4H2.6c-.4 0-.6-.3-.4-.6L12 0l9.8 15.4c.2.3 0 .6-.4.6H16v4z" />
                <path d="M8.3 10.4l4.1 2.8 4-2.8-1-1.8-3 2-3.1-2z" />
              </svg>
            </a>
            <a 
              href="mailto:rrajsharma2001@gmail.com" 
              className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

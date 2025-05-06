
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const navLinks = [{
  href: "#home",
  label: "Home"
}, {
  href: "#about",
  label: "About"
}, {
  href: "#education",
  label: "Education"
}, {
  href: "#experience",
  label: "Experience"
}, {
  href: "#projects",
  label: "Projects"
}, {
  href: "#skills",
  label: "Skills"
}, {
  href: "#contact",
  label: "Contact"
}];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md py-2 shadow-md" : "py-4"}`}>
      <div className="portfolio-container flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">Rishabhraj</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <Button onClick={() => window.open("https://drive.google.com/file/d/1Q7B8tK2QWJHkg2nMXz5OO9w0VgIxgGCq/view?usp=sharing", "_blank")}>
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`} 
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full" onClick={() => window.open("https://drive.google.com/file/d/1Q7B8tK2QWJHkg2nMXz5OO9w0VgIxgGCq/view?usp=sharing", "_blank")}>
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Add dark class to html element
    document.documentElement.classList.add('dark');
    
    // Scroll animation logic
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all sections to animate
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    // 3D animated background setup
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        
        // Configure particles
        const particlesArray: BackgroundParticle[] = [];
        const numberOfParticles = Math.min(150, Math.floor((canvas.width * canvas.height) / 15000));
        
        class BackgroundParticle {
          x: number;
          y: number;
          size: number;
          speedX: number;
          speedY: number;
          color: string;
          
          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            
            const opacity = Math.random() * 0.3 + 0.1;
            this.color = `rgba(147, 51, 234, ${opacity})`;
          }
          
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around edges
            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
          }
          
          draw() {
            if (!ctx) return;
            
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        // Create particles
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new BackgroundParticle());
        }
        
        // Animation loop for background
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Update and draw particles
          particlesArray.forEach(particle => {
            particle.update();
            particle.draw();
          });
          
          // Connect particles with lines if they are close
          connectParticles();
          
          requestAnimationFrame(animate);
        };
        
        // Connect particles with lines
        const connectParticles = () => {
          if (!ctx) return;
          
          for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
              const dx = particlesArray[a].x - particlesArray[b].x;
              const dy = particlesArray[a].y - particlesArray[b].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
              }
            }
          }
        };
        
        // Start animation
        animate();
        
        return () => {
          window.removeEventListener('resize', resizeCanvas);
        };
      }
    }
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Animated background canvas */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
      ></canvas>
      
      <div className="page-wrapper relative z-10 border-x border-primary/10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

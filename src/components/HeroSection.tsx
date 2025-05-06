
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // 3D Animation setup
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle configuration
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    const colors = ['rgba(147, 51, 234, 0.7)', 'rgba(168, 85, 247, 0.6)', 'rgba(139, 92, 246, 0.5)', 'rgba(124, 58, 237, 0.4)'];
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 5;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }
    }
    
    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update each particle
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Connect particles with lines if they are close enough
      connectParticles();
      
      requestAnimationFrame(animate);
    };
    
    // Connect particles
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(147, 51, 234, ${1 - distance / 100})`;
            ctx.lineWidth = 1;
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
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* 3D Background Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
      
      <div className="portfolio-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20">
              <span className="animate-pulse h-2 w-2 rounded-full bg-primary mr-2"></span>
              <p className="text-sm font-medium text-primary">Data Analyst & ML Enthusiast</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                Rishabhraj Sharma
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              I'm a Data Analyst, Machine Learning Enthusiast, Part-Time Lecturer, and Software Developer. 
              Passionate about innovative teaching methodologies, emerging technologies, and guiding students toward a better future.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity" asChild>
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center relative">
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 blur-3xl animate-pulse"></div>
              <div className="absolute h-64 w-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-full w-full rounded-full border-4 border-primary/20 animate-spin-slow flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full border-4 border-purple-500/20 animate-[spin_8s_linear_infinite_reverse] flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-purple-600 animate-pulse shadow-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="rgba(147, 51, 234, 0.1)" 
            fillOpacity="1" 
            d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,170.7C672,160,768,192,864,197.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

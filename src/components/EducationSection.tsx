import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const EducationSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionPosition = parallaxRef.current.offsetTop;
      const sectionHeight = parallaxRef.current.offsetHeight;
      
      // Check if section is in viewport
      if (scrollPosition + window.innerHeight > sectionPosition && 
          scrollPosition < sectionPosition + sectionHeight) {
        
        // Apply parallax effect to background and elements
        const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-element');
        const backgroundElement = parallaxRef.current.querySelector('.parallax-bg');
        
        if (backgroundElement) {
          const yPos = (scrollPosition - sectionPosition) * 0.2;
          (backgroundElement as HTMLElement).style.transform = `translateY(${yPos}px)`;
        }
        
        parallaxElements.forEach((element, index) => {
          const speed = 0.1 * (index + 1);
          const yPos = (scrollPosition - sectionPosition) * speed;
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };
    
    // Initialize 3D floating objects
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Set canvas dimensions
        const resizeCanvas = () => {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // 3D objects
        const shapes: Shape[] = [];
        const shapeCount = 15;
        
        class Shape {
          x: number;
          y: number;
          size: number;
          rotation: number;
          rotationSpeed: number;
          sides: number;
          color: string;
          
          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 30 + 20;
            this.rotation = 0;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            this.sides = Math.floor(Math.random() * 3) + 3; // 3 to 5 sides
            
            const colors = [
              'rgba(147, 51, 234, 0.3)',  // Primary (purple)
              'rgba(124, 58, 237, 0.3)',  // Violet
              'rgba(139, 92, 246, 0.3)',  // Purple
              'rgba(168, 85, 247, 0.3)',  // Fuchsia
            ];
            
            this.color = colors[Math.floor(Math.random() * colors.length)];
          }
          
          draw() {
            if (!ctx) return;
            
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.beginPath();
            
            if (this.sides === 3) {
              // Triangle
              ctx.moveTo(0, -this.size);
              ctx.lineTo(this.size * Math.cos(Math.PI / 6), this.size * Math.sin(Math.PI / 6));
              ctx.lineTo(-this.size * Math.cos(Math.PI / 6), this.size * Math.sin(Math.PI / 6));
            } else if (this.sides === 4) {
              // Square
              ctx.rect(-this.size/2, -this.size/2, this.size, this.size);
            } else {
              // Pentagon
              for (let i = 0; i < this.sides; i++) {
                const angle = (i * 2 * Math.PI / this.sides) - Math.PI / 2;
                const x = this.size * Math.cos(angle);
                const y = this.size * Math.sin(angle);
                
                if (i === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
            }
            
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
          }
          
          update() {
            this.rotation += this.rotationSpeed;
            this.y -= 0.2; // Move upwards slowly
            
            // Reset position when out of view
            if (this.y + this.size < 0) {
              this.y = canvas.height + this.size;
              this.x = Math.random() * canvas.width;
            }
          }
        }
        
        // Create shapes
        for (let i = 0; i < shapeCount; i++) {
          shapes.push(new Shape());
        }
        
        // Animation loop
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          shapes.forEach(shape => {
            shape.update();
            shape.draw();
          });
          
          requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
          window.removeEventListener('resize', resizeCanvas);
        };
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const education = [{
    institution: "Indian Institute of Technology, Madras",
    degree: "Bachelor of Science - BS",
    field: "Data Science and Programming",
    duration: "Jan 2021 - Aug 2026",
    logo: "/lovable-uploads/f6cffa70-d878-47e6-b068-e0b230a3fdbb.png", // IIT Madras logo
    color: "bg-blue-500/10 border-blue-500/20",
    badgeColor: "bg-blue-500/20 text-blue-700 dark:text-blue-300"
  }, {
    institution: "COEP Technological University",
    degree: "Master of Technology - MTech",
    field: "Data Science",
    duration: "Sep 2024 - May 2026",
    grade: "7.36",
    logo: "/lovable-uploads/68d9904d-cb55-4ebe-ba14-e62b4d2832ca.png", // COEP logo
    color: "bg-purple-500/10 border-purple-500/20",
    badgeColor: "bg-purple-500/20 text-purple-700 dark:text-purple-300"
  }, {
    institution: "GOVERNMENT COLLEGE OF ENGINEERING, JALGAON",
    degree: "Bachelor of Technology - BTech",
    field: "Computer Engineering",
    duration: "Aug 2020 - May 2024",
    grade: "8.37",
    logo: "/lovable-uploads/2137c5b5-7b89-45af-94c5-c8b1e4e10903.png", // Govt College Jalgaon logo
    color: "bg-green-500/10 border-green-500/20",
    badgeColor: "bg-green-500/20 text-green-700 dark:text-green-300"
  }];
  
  const projects = [{
    title: "Collegifyme - College Recommendation System",
    description: ["Using the MHT-CET dataset, a college recommendation system was developed, and it achieved 85% accuracy in making college recommendations.", "Employed machine learning techniques to evaluate student profiles and recommend appropriate universities.", "A Flask-based frontend and the backend machine learning model were integrated, resulting in a 40% faster page load time.", "Collaborated with a team of two members to complete the project, receiving a grade of A."],
    tech: ["Python", "Flask", "Machine Learning", "Data Analysis"]
  }, {
    title: "Interactive Chatbot with Speech Recognition",
    description: ["The project aims to develop a conversational agent using Python, TensorFlow, and GTTS.", "The project is divided between two team members, who collaborate to create an innovative chatbot with speech recognition capabilities."],
    tech: ["Python", "TensorFlow", "GTTS", "Speech Recognition", "NLP"]
  }, {
    title: "Realtime Fraud Detection in Online Transactions",
    description: ["Developed a real-time fraud detection system using machine learning.", "Tested models like Logistic Regression, Decision Trees, and Random Forest.", "Random Forest achieved the highest accuracy while minimizing false positives.", "Addressed deployment challenges like processing efficiency and scalability, enhancing digital transaction security."],
    tech: ["Machine Learning", "Random Forest", "Logistic Regression", "Data Security"]
  }];
  
  return (
    <section 
      id="education" 
      className="section-padding bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden"
      ref={parallaxRef}
    >
      {/* 3D Floating Objects Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      ></canvas>
      
      {/* Parallax Background Elements */}
      <div className="parallax-bg absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/20 filter blur-3xl"></div>
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-accent/20 filter blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-purple-500/20 filter blur-3xl"></div>
      </div>

      <div className="portfolio-container relative z-10">
        <div className="parallax-element" style={{transform: 'translateY(0px)'}}>
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 mb-6">
              <GraduationCap className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Academic Background</span>
            </div>
            <h2 className="section-header relative">
              Education
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-purple-500"></span>
            </h2>
            <p className="section-subheader mt-6">
              My academic journey in the field of Computer Science, Data Science, and Engineering
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border ${edu.color} transition-all hover:-translate-y-2 hover:shadow-lg shadow-primary/10 backdrop-blur-sm parallax-element`}
              style={{transform: `translateY(0px)`, transitionDelay: `${index * 100}ms`}}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/30"></div>
              <div className="p-1">
                <div className="h-32 overflow-hidden bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-t-lg flex items-center justify-center">
                  {edu.logo ? (
                    <div className="w-24 h-24 relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm"></div>
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={edu.logo} alt={edu.institution} className="object-contain p-1" />
                        <AvatarFallback>
                          <GraduationCap className="h-12 w-12 text-primary opacity-60" />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  ) : (
                    <GraduationCap className="h-16 w-16 text-primary opacity-40" />
                  )}
                </div>
                <CardContent className="p-5">
                  <Badge variant="secondary" className={`mb-2 ${edu.badgeColor}`}>
                    <Calendar className="h-3 w-3 mr-1" />
                    {edu.duration}
                  </Badge>
                  <h3 className="text-xl font-bold mb-1 line-clamp-2">{edu.institution}</h3>
                  <p className="text-muted-foreground mb-1">{edu.degree}</p>
                  <p className="text-sm font-medium">{edu.field}</p>
                  {edu.grade && <div className="mt-3 flex items-center">
                      <Award className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium">Grade: {edu.grade}</span>
                    </div>}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

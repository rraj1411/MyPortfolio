import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const ExperienceSection = () => {
  const experiences = [{
    company: "The Code Culture",
    position: "Part-time Lecturer",
    duration: "Jan 2025 - Present · 4 months",
    location: "Pune, Maharashtra, India · On-site",
    type: "Part-time",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    current: true
  }, {
    company: "Rinex Technologies",
    position: "Data Science Intern",
    duration: "Sep 2023 - Oct 2023 · 2 months",
    location: "Virtual · Remote",
    type: "Internship",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    current: false
  }, {
    company: "AI Varient",
    position: "Data Science Intern",
    duration: "May 2023 - Aug 2023 · 4 months",
    location: "Virtual · Remote",
    type: "Internship",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    current: false
  }, {
    company: "PHN Technology Pvt Ltd",
    position: "ML Intern",
    duration: "Apr 2023 - Jun 2023 · 3 months",
    location: "Virtual · Remote",
    type: "Internship",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    current: false
  }, {
    company: "SUN PHARMA",
    position: "Data Analyst Intern",
    duration: "Jan 2022 - Apr 2022 · 4 months",
    location: "Virtual · Remote",
    type: "Internship",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    current: false
  }];
  return <section id="experience" className="section-padding bg-secondary/30 border-t border-b border-border/50">
      <div className="portfolio-container">
        <h2 className="section-header">Professional Experience</h2>
        <p className="section-subheader">
          My career journey and professional experiences in the industry
        </p>

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => <div key={index} className={`relative ${index % 2 === 0 ? 'ml-auto pl-8 md:pl-0 md:mr-auto md:pr-8 md:ml-0' : 'mr-auto pr-8 md:pr-0 md:ml-auto md:pl-8 md:mr-0'} w-full md:w-[calc(50%-20px)]`}>
                {/* Timeline dot */}
                
                
                {/* Experience card */}
                <Card className={`border border-border/50 ${exp.current ? 'bg-primary/5 dark:bg-primary/10' : 'bg-card/30'} backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-1`}>
                  <CardContent className="p-6 px-[20px]">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={exp.current ? "default" : "secondary"} className="uppercase text-xs font-semibold">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="mr-3 bg-secondary/50 p-2 rounded-full">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.position}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>{exp.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;
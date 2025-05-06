
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Collegifyme - College Recommendation System",
    description: "Using the MHT-CET dataset, a college recommendation system was developed, achieving 85% accuracy in recommendations. Employed machine learning techniques to evaluate student profiles and recommend appropriate universities. A Flask-based frontend and the backend machine learning model were integrated, resulting in 40% faster page load time. Collaborated with a team of two members, receiving a grade of A.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Flask", "Data Science", "Recommendation System"]
  },
  {
    id: 2,
    title: "Interactive Chatbot",
    description: "The 'Interactive Chat Bot with Speech Recognition' project develops a conversational agent using Python, TensorFlow, and GTTS. The project is divided between team members who collaborate to create an innovative chatbot with speech recognition capabilities.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "TensorFlow", "Speech Recognition", "GTTS", "NLP"]
  },
  {
    id: 3,
    title: "Realtime Fraud Detection in Online Transactions",
    description: "Developed a real-time fraud detection system using machine learning, testing models like Logistic Regression, Decision Trees, and Random Forest. Random Forest achieved the highest accuracy while minimizing false positives. Also addressed deployment challenges like processing efficiency and scalability, enhancing digital transaction security.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "Random Forest", "Fraud Detection", "Data Analysis", "Python"]
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.length);
  
  return (
    <section id="projects" className="section-padding border-t border-border/50">
      <div className="portfolio-container">
        <h2 className="section-header">My Projects</h2>
        <p className="section-subheader">
          A collection of my data science and machine learning projects
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card key={project.id} className="project-card group h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t border-border/30 mt-auto">
                <span className="text-xs text-muted-foreground">Data Science & ML Project</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

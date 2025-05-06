
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BookOpen, GraduationCap, Code, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const achievements = [
    "Experienced in machine learning, data analytics, data engineering, and application development",
    "Developed College Recommendation System with 85% accuracy",
    "Created Real-Time Fraud Detection System",
    "Built AI-powered Chatbot with Speech Recognition",
    "Won multiple college-level chess tournaments"
  ];
  
  const skills = {
    dataAnalysis: ["Data Visualization", "Statistical Analysis", "SQL", "Python", "R", "Tableau", "Power BI"],
    machineLearning: ["Supervised & Unsupervised Learning", "Neural Networks", "NLP", "TensorFlow", "PyTorch", "Scikit-Learn"],
    development: ["Web Development", "Python", "C++", "Java", "JavaScript", "React", "Node.js", "Database Management"],
    cloud: ["AWS", "Azure", "Google Cloud", "Distributed Systems", "Cloud Computing"]
  };
  
  return (
    <section id="about" className="section-padding bg-secondary/30 border-t border-b border-border/50">
      <div className="portfolio-container">
        <h2 className="section-header">About Me</h2>
        <p className="section-subheader">
          Aspiring Data Scientist with expertise in machine learning, data analytics, and application development.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 z-0"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center relative z-10">
                  <BookOpen className="h-6 w-6 mr-2 text-primary" />
                  Hello!
                </h3>
                <div className="space-y-4 text-muted-foreground relative z-10">
                  <p>
                    I'm Rishabhraj Vijaykumar Sharma, an aspiring Data Scientist currently pursuing my M.Tech in Data Sciences at COEP Technological University (2026). I hold a Bachelor's degree in Computer Science and Engineering from Government College of Engineering, Jalgaon, and also completed an online UG degree in Data Science and Programming from IIT Madras.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 z-0"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center relative z-10">
                  <GraduationCap className="h-6 w-6 mr-2 text-primary" />
                  Academic Track Record
                </h3>
                <ul className="space-y-3 text-muted-foreground relative z-10">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>CGPA of 7.36 in M.Tech, 6.6 from IIT Madras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>78.7% in undergraduate CSE</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Scored 93.2% in Class X and 80.62% in Class XII</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 left-0 w-28 h-28 bg-primary/5 rounded-full -ml-14 -mt-14 z-0"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center relative z-10">
                  <Award className="h-6 w-6 mr-2 text-primary" />
                  Personal Interests
                </h3>
                <p className="text-muted-foreground relative z-10">
                  Outside the world of data, I'm a passionate chess player and have won multiple college-level chess tournaments. I enjoy tackling strategic challenges, whether it's across the board or in code.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm hover:shadow-md transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-primary" />
                  Professional Highlights
                </h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mt-0.5 mr-2 flex-shrink-0 h-6 w-6 flex items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                      </div>
                      <span className="group-hover:text-primary transition-colors">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-primary/5 rounded-full -mr-16 -mb-16 z-0"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center relative z-10">
                  <Code className="h-6 w-6 mr-2 text-primary" />
                  Technical Proficiency
                </h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Proficient in Python, SQL, R, C++, Java, and tools for data visualization and predictive modeling. Strong background in cloud computing, distributed systems, and artificial neural networks.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm hover:shadow-md transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-primary" />
                  Educational Counseling
                </h3>
                <p className="text-muted-foreground">
                  I believe in empowering students and peers through knowledge sharing. Having navigated complex academic paths like dual degrees and competitive tech programs, I regularly help juniors with academic planning, project mentorship, and career guidance in tech and data science.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-primary animate-pulse">Let's connect and collaborate on data-driven innovations!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

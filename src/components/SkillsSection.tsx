
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "data",
    label: "Data Analysis",
    skills: [
      { name: "Python for Data Analysis", level: 90 },
      { name: "SQL & Database Management", level: 85 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Data Visualization", level: 80 },
      { name: "Tableau/Power BI", level: 75 },
    ],
  },
  {
    id: "ml",
    label: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", level: 85 },
      { name: "TensorFlow/Keras", level: 80 },
      { name: "Natural Language Processing", level: 75 },
      { name: "Deep Learning", level: 75 },
      { name: "Computer Vision", level: 70 },
    ],
  },
  {
    id: "development",
    label: "Development",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 80 },
      { name: "Web Development", level: 75 },
      { name: "React", level: 70 },
      { name: "API Development", level: 65 },
    ],
  },
  {
    id: "education",
    label: "Education",
    skills: [
      { name: "Educational Counseling", level: 90 },
      { name: "Innovative Teaching", level: 85 },
      { name: "Career Guidance", level: 90 },
      { name: "Content Creation", level: 75 },
      { name: "Student Mentoring", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30 border-t border-b border-border/50">
      <div className="portfolio-container">
        <h2 className="section-header">My Skills</h2>
        <p className="section-subheader">
          A comprehensive overview of my technical and professional capabilities.
        </p>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="data" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Skills & Certifications</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["R Programming", "A/B Testing", "Predictive Modeling", "Feature Engineering", 
              "Data Mining", "Educational Psychology", "Career Counseling", "Content Writing",
              "Chess Strategy", "Technical Documentation", "Data Ethics", "Research Methods"].map((skill) => (
              <div key={skill} className="skill-pill text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return <section id="contact" className="section-padding">
      <div className="portfolio-container">
        <h2 className="section-header">Contact Me</h2>
        <p className="section-subheader">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <a href="mailto:rrajsharma2001@gmail.com" className="text-muted-foreground hover:text-primary">rrajsharma2001@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-medium">Phone</h4>
                      <a href="tel:+919660771471" className="text-muted-foreground hover:text-primary">+91 9660771471</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-medium">Location</h4>
                      <span className="text-muted-foreground">Pune, India</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/rraj1411" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/rishabhraj-sharma/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.kaggle.com/rishabhrajsharma" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 20H8v-4H2.6c-.4 0-.6-.3-.4-.6L12 0l9.8 15.4c.2.3 0 .6-.4.6H16v4z" />
                    <path d="M8.3 10.4l4.1 2.8 4-2.8-1-1.8-3 2-3.1-2z" />
                  </svg>
                  <span className="sr-only">Kaggle</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can I help you?" value={formData.subject} onChange={handleChange} required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message here..." rows={5} value={formData.message} onChange={handleChange} required />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span> : <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;

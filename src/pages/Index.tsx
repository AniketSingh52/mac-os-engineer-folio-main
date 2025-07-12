import { useState } from "react";
import { Terminal, Book, Code, Mail, LucideIcon } from "lucide-react";
import LoadingScreen from "../components/LoadingScreen";
import MacOSWindow from "../components/MacOSWindow";
import TechStack from "../components/TechStack";
import Timeline from "../components/Timeline";
import ProjectsGrid from "../components/ProjectCard";
import ContactSection from "../components/ContactLinks";

interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon | string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  const navigationItems: NavigationItem[] = [
    { id: "about", label: "About", icon: Terminal },
    { id: "education", label: "Education", icon: Book },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full glass-card p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl glow font-bold">
                  AS
                </div>
              </div>
              <div>
              <h1 className="text-4xl font-bold text-gradient mb-1">Aniket Singh</h1>
                <h4 className=" text-base font-bold text-cyan-500 mb-4 ">Software Engineer <br></br> & VFX Artist</h4>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Passionate software engineer with expertise in full-stack development, 
                  passionate about creating innovative solutions and building scalable applications. 
                  I enjoy tackling complex problems and turning ideas into reality through clean, 
                  efficient code.
                </p>
              </div>
            </div>
            <TechStack />
          </div>
        );
      
      case "education":
        return (
          <div>
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Educational Journey</h2>
            <Timeline />
          </div>
        );
      
      case "projects":
        return (
          <div>
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Featured Projects</h2>
            <ProjectsGrid />
          </div>
        );
      
      case "contact":
        return (
          <div>
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Let's Connect</h2>
            <ContactSection />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Dock */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card px-6 py-4 rounded-2xl">
          <nav className="flex space-x-6">
            {navigationItems.map((item) => {
              const isStringIcon = typeof item.icon === 'string';
              const IconComponent = isStringIcon ? null : item.icon as LucideIcon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                    activeSection === item.id 
                      ? 'bg-primary/20 text-primary glow' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isStringIcon ? (
                    <span className="text-lg">{item.icon as string}</span>
                  ) : (
                    IconComponent && <IconComponent className="w-5 h-5" />
                  )}
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 pb-32">
        <MacOSWindow title={navigationItems.find(item => item.id === activeSection)?.label}>
          {renderContent()}
        </MacOSWindow>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default Index;

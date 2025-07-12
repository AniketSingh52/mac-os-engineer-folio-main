// import { Code, Database } from "lucide-react";

import { Code, Database, Settings } from "lucide-react";

// const programmingLanguages = [
//   { name: "C", icon: "⚡" },
//   { name: "C++", icon: "🚀" },
//   { name: "C#", icon: "🔷" },
//   { name: "Java", icon: "☕" },
//   { name: "Python", icon: "🐍" },
//   { name: "JavaScript", icon: "🟨" },
//   { name: "PHP", icon: "🐘" },
//   { name: "HTML", icon: "🌐" },
//   { name: "Tailwind CSS", icon: "🎨" },
//   { name: "Node.js", icon: "🟢" },
//   { name: "React", icon: "⚛️" },
//   { name: "TypeScript", icon: "🔷" },
//   { name: "GSAP", icon: "✨" }
// ];

// const databases = [
//   { name: "MySQL", icon: "🐬" },
//   { name: "MongoDB", icon: "🍃" },
//   { name: "PostgreSQL", icon: "🐘" }
// ];

// const tools = [
//   { name: "Git", icon: "🔧" },
//   { name: "GitHub", icon: "🐙" },
//   { name: "Docker", icon: "🐳" },
//   { name: "Unreal Engine", icon: "🎮" },
//   { name: "Blender", icon: "🌀" },
//   { name: "Autodesk Maya", icon: "📐" }
// ];

const TechStack = () => {
  return (
    <div className="space-y-10 border-3 rounded-2xl p-2 md:p-4 border shadow-2xl">

       <div className=" w-full justify-items-center text-center mt-2">
        {/* <Code className="w-6 h-6 text-primary" /> */}
        <h3 className="text-3xl text-center font-bold text-gradient">Tech Stack</h3>
      </div>

    {/* Programming Languages */}
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold text-gradient">Programming Languages</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
          { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
          { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
          { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
          { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
          { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
          { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
          { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
          { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
          { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
          { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
          { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
          {name: "Kotlin", logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg" },
          { name: "GSAP", logo: "/gsap.svg" },
          { name: ".NET", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Dot-net-original-wordmark.svg" }
        ].map((tech) => (
          <div key={tech.name} className="glass p-4 rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-center space-y-2">
              <img src={tech.logo} alt={tech.name} className="h-10 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Databases */}
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <Database className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold text-gradient">Databases</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
          { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb.png" },
          { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" }
        ].map((db) => (
          <div key={db.name} className="glass p-4 rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-center space-y-2">
              <img src={db.logo} alt={db.name} className="h-10 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{db.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Tools */}
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold text-gradient">Tools</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
          { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
          { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
          { name: "Unreal Engine", logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg" },
          { name: "Blender", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" },
          { name: "Autodesk Maya", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Autodesk_Maya_logo.svg" }
        ].map((tool) => (
          <div key={tool.name} className="glass p-4 rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="text-center space-y-2">
              <img src={tool.logo} alt={tool.name} className="h-10 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{tool.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  </div>
  
  );
};

export default TechStack;
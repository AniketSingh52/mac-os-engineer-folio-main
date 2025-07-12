import { Github, Link } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  status: "Completed" | "In Progress" | "Planning" | "Designing";
}

const projects: Project[] = [
  {
    title: "Vaze College Leave Management System",
    description: "A web-based leave management system with role-based access, multi-level approval, and a streamlined application process for faculty, HODs, and administrators for managing their leaves.",
    technologies: ["Php", "Mysql", "Html", "TailwindCss", "Jquery"],
    image: "/VazeLMPr1.png",
    github: "https://github.com/NitinSingh0/vaze-leave-management",
    // demo: "#",
    status: "Completed"
  },
  {
    title: "Volunteer Management System",
    description: "A Social Welfare System for community building, Bringing Volunteers and Organizations on a single platform allowing streamlining of community service Programs and campaigns. with features like event creation, messaging, Posts , volunteer tracking, and user management.",
    technologies: ["Php", "Mysql", "Html", "TailwindCss", "Websocket","Redis","Ratchet"],
    image: "/VMS2.png",
    github: "https://github.com/AniketSingh52/Volunteer_Managment_System",
    demo: "https://volunteermanagement.42web.io/",
    status: "Completed"
  },
  {
    title: "Volunteer Management Admin Panel",
    description: "Admin dashboard for Monitoring & managing user activities, Status, Posts, Events, Admin Role Management,Access privileges and moderation the VolunteerHub platform.",
    technologies: ["Php", "Mysql", "Html", "TailwindCss","Redis"],
    image: "/VMSAP.png",
    github: "https://github.com/AniketSingh52/Volunteer_Managment_System",
    demo: "https://volunteermanagement.42web.io/main/pages/admin/login_in2.php",
    status: "Completed"
  },
  {
    title: "Wholesale Grocery Store For Sanjay Trading Company",
    description: "Wholesale Grocery Store for Sanjay Trading Company a web-based platform built to streamline bulk grocery sales and inventory management, allowing Sanjay Trading Company to manage products, handle wholesale orders, and serve retailers efficiently. Tailored for B2B grocery operations.",
    technologies: ["Vite", "React", "Html", "TypeScript", "TailwindCss"],
    image: "/WholesaleG.png",
    github: "https://github.com/Aniket52777/wholesale-grocer-hub",
    status: "Designing"
  },
  {
    title: "Vaze College Official Website",
    description: "Working on an official website for V.G. Vaze College, designed to provide an intuitive and informative digital presence for students and faculty. Features include announcements, academic resources, and event updates.",
    technologies: ["Php", "Mysql", "Html", "MySQL", "TailwindCss", "Javascript"],
    image: "/UnderConstruction.png",
    github: "https://github.com/rushiii3/KETS",
    status: "In Progress"
  },
  {
    title: "Vaze Supervision Website",
    description: "A streamlined Faculty Allotment Exam System designed for efficient professor allocation during exams. Features an intuitive dashboard for administrators to manage and track assignments seamlessly.",
    technologies: ["Php", "Mysql", "Html", "MySQL", "TailwindCss", "Javascript"],
    image: "/UnderConstruction.png",
    github: "https://github.com/NitinSingh0/Examination",
    status: "In Progress"
  },  
  {
    title: "Cyber Terminal Portfolio View",
    description: "A stunning Kali Linux-inspired portfolio website that captures the essence of cybersecurity and hacking aesthetics, With feature Like a dark terminal theme, Matrix-style effects, and professional sections showcasing One's Programing expertise.",
    technologies: ["Vite", "React", "Html", "TypeScript", "TailwindCss"],
    image: "/CyberTerminal.png",
    github: "https://github.com/Aniket52777/cyber-portfolio-terminal-view",
    demo: "#",
    status: "Designing"
  },  
  {
    title: "DronHub - For Buying and Selling Drones",
    description: "DronHub is an online platform designed for buying and selling drones. It connects drone enthusiasts, sellers, and buyers through a streamlined marketplace. The system includes product listings, user accounts, and various Other features tailored for the drone industry.",
    technologies: ["Vite", "React", "Html", "TypeScript", "TailwindCss"],
    image: "/image.png",
    github: "https://github.com/Aniket52777/drone-hub-aero-market",
    demo: "#",
    status: "Designing"
  },
  ,  
  {
    title: "EngineX- A Personalized 3d Render Engine",
    description: "A render engine that allows users to create and customize 3D models with ease. It features a user-friendly interface, real-time rendering, and a variety of tools for manipulating 3D objects.",
    technologies: ["Ruby", "Rust", "React", "Java", "Express"],
    image: "/UnderConstruction.png",
    github: "https://camo.githubusercontent.com/48d882ed04114aa37cc9aead70d4e8ef72ef9165933ae484f5a286c132cd5f13/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d53616d616c6153756d616e746830323632266c616e67735f636f756e743d35267468656d653d636f6465535441434b722626686964655f626f726465723d66616c7365266c61796f75743d636f6d70616374",
    status: "Planning"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-green-400";
      case "In Progress": return "text-yellow-400";
      case "Designing": return "text-fuchsia-400";
      case "Planning": return "text-red-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
      <div className="space-y-3">
        {/* Project image and status */}
        <div className="flex items-center justify-between">
          <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="flex justify-end -mt-16 relative z-10 pr-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full glass hover:scale-105 hover:bg-green-600 hover:text-white transition-all duration-300  ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Project title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Project description */}
        <p className="text-muted-foreground text-sm font-medium leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 glass rounded-full text-primary font-bold border border-primary/20 hover:scale-105 hover:bg-pink-500 hover:text-black transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex space-x-3 pt-2">
          {project.github && (
            <a href={project.github}   target="_blank"
            rel="noopener noreferrer" className=" group font-medium flex items-center space-x-2 px-3 py-2 glass rounded-lg hover:bg-gray-600 transition-all text-sm hover:scale-110 duration-300">
              <span>GitHub</span>
              <Github className="w-4 h-4 group-hover:animate-bounce transition-transform" />
            </a>
          )}
          {project.demo && (
            <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex font-medium items-center space-x-2 px-3 py-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all text-sm text-primary hover:scale-110 duration-300"
          >
            <span>Live Demo</span>
            <Link className="w-4 h-4 group-hover:animate-bounce transition-transform" />
          </a>
          
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  gpa?: string;
  logo: string; // Added logo field
}

const timelineData: TimelineItem[] = [
  {
    year: "April 2022 - Present",
    title: "Bachelor of Science in Information Technology",
    institution: "University of Mumbai",
    description:
      "Achieved a 9.98 SGPA while gaining expertise in software development, databases, and web technologies. Worked on projects involving redis, php, Typescript, .NET and database management. Active participant in tech clubs, hackathons, and research competitions. Developed a leave management system and Volunteer Management System.",
    gpa: "3.8/4.0",
    logo: "/image3.png"
  },
  {
    year: "April 2021 - Mar 2022",
    title: "Higher Secondary Education (HSC - 12th Grade)",
    institution: "Ramanand Arya DAV College",
    description: "Focused on foundational programming, problem-solving, and mathematics.",
    gpa: "3.9/4.0",
    logo: "/image2.png"
  },
  {
    year: "April 2019 - Mar 2020",
    title: "Secondary School Education (SSC - 10th Grade)",
    institution: "St Pius X High School",
    description: "Built a strong academic foundation in science and mathematics with early exposure to computer programming.",
    gpa: "3.7/4.0",
    logo: "/image1.png"
  }
];

const Timeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
      
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-start space-x-6">
            {/* Timeline dot */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16">
              <div className="w-4 h-4 bg-primary rounded-full glow"></div>
              <div className="absolute w-8 h-8 border-2 border-primary/30 rounded-full animate-ping"></div>
            </div>
            
            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <span className="text-primary font-semibold text-sm">{item.year}</span>
                  {item.gpa && (
                    <span className="text-green-400 font-medium text-sm w-10 h-10"><img
                    src={item.logo}
                    alt={item.institution}
                    className="w-12 h-12 rounded-md object-contain bg-white p-1 shadow-md">
                      </img></span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <h4 className="text-accent font-medium mb-3">{item.institution}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
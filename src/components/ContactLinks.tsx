import { useState } from "react";
import { Github, Instagram, Link, Linkedin, Mail, Youtube } from "lucide-react";

const contactLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/NotYetAniket",
    icon: Linkedin,
    color: "from-blue-600 via-blue-700 to-blue-400",
    description: "Professional Network",
  },
  {
    name: "GitHub",
    url: "https://github.com/aniketsingh52",
    url: "https://github.com/aniketsingh52",
    icon: Github,
    color: "from-gray-600 via-gray-800 to-gray-400",
    description: "Code Repository",
  },
  {
    name: "Email",
    url: "mailto:walfra52777@gmail.com",
    icon: Mail,
    color: "from-green-500 via-green-700 to-teal-400",
    description: "Send me an email",
  },
  {
    name: "Portfolio",
    url: "https://aniketportfolio3d.vercel.app/",
    url: "https://aniketportfolio3d.vercel.app/",
    icon: Link,
    color: "from-purple-600 via-purple-700 to-purple-400",
    description: "Personal Website",
  },
];

const ContactLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <link.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {link.name}
              </h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </div>
            <Link className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </a>
      ))}
    </div>
  );
};

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="space-y-8">
      <ContactLinks />

      {/* Resume Download */}
      <div className="glass-card p-6 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-gradient mb-4">Download Resume</h3>
        <p className="text-muted-foreground mb-6">
          Get a comprehensive overview of my experience, skills, and achievements.
        </p>
        <a
          href="Resume.pdf"
          download="Aniket_Singh_Resume.pdf"
          className="bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-xl font-semibold text-primary-foreground hover:scale-105 transition-all duration-300 glow"
        >
          Download PDF Resume
        </a>
        </a>
      </div>

      {/* Contact Form */}
      <div className="glass-card p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gradient mb-6">Get In Touch</h3>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setFormSubmitted(true);
            e.target.reset();
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 glass rounded-lg border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 glass rounded-lg border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 glass rounded-lg border border-white/10 focus:border-primary/50 focus:outline-none transition-colors resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-accent py-3 rounded-lg font-semibold text-primary-foreground hover:scale-[1.02] transition-all duration-300 glow"
          >
            Send Message
          </button>
          {formSubmitted && (
            <p className="text-green-500 text-sm font-medium mt-4">
              ✅ Thank you for reaching out! I’ll get back to you soon.
            </p>
          )}
        </form>
      </div>

      {/* Current Availability */}
      <div className="glass-card p-6 rounded-xl border border-green-500 text-center space-y-6">
        <h3 className="text-2xl text-gradient font-bold flex items-center justify-center gap-2 animate-pulse">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          Current Availability
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm md:text-base font-medium">
          <div className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <p className="text-gradient font-bold">Status</p>
            <p className="text-cyan-500 font-semibold font-mono text-lg">Available for Projects</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <p className="text-gradient font-bold">Response Time</p>
            <p className="text-cyan-500 font-semibold text-lg font-mono">Within 24 Hours</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <p className="text-gradient font-bold">Preferred Contact</p>
            <p className="text-cyan-500 font-semibold text-lg font-mono">Email or LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;


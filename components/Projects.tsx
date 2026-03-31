import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Server, Database, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Multi-Tenant Config-Driven Commerce Platform",
    description: "Built a multi-tenant, configuration-driven commerce platform enabling dynamic client onboarding and customizable business workflows. Designed scalable RESTful APIs with JWT-based authentication, role-based access control (RBAC), and optimized database queries with pagination to improve performance by 30%. Integrated Razorpay payment gateway for seamless online transactions. Integrated AWS S3 for secure image uploads and implemented CloudFront CDN URLs for optimized media delivery, reducing image load time by 40%.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "AWS (S3, CloudFront)", "Razorpay"],
    github: "https://github.com/devAnkit0543",
    link: "", // You can update this with a live link if you have one
    icon: <Globe className="w-6 h-6" />
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="project" className="relative max-w-containerSmall mx-auto py-24 px-4 mdl:px-10 xl:px-4">
      
      {/* Background glow patches */}
      <div className={`absolute top-40 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none ${isDark ? "bg-textGreen" : "bg-textGreen-light"}`} />
      <div className={`absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 pointer-events-none ${isDark ? "bg-blue-600" : "bg-blue-400"}`} />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className={`font-monoFont text-sm ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
          03.
        </span>
        <h2 className={`text-2xl font-bold font-titleFont tracking-tight ${isDark ? "text-textLight" : "text-textLight-light"}`}>
          Featured Projects
        </h2>
        <div className={`flex-1 h-px ${isDark ? "bg-gradient-to-r from-textGreen/30 to-transparent" : "bg-gradient-to-r from-textGreen-light/30 to-transparent"}`} />
      </motion.div>

      <div className="flex flex-col gap-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className={`relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border ${
              isDark 
                ? "bg-[#0d1a2d]/80 border-white/10 hover:border-textGreen/30 backdrop-blur-md" 
                : "bg-white border-gray-200 hover:border-textGreen-light/30"
            }`}>
              {/* Highlight bar effect */}
              <div className={`absolute top-0 left-0 w-full h-1 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 ${
                isDark ? "bg-textGreen" : "bg-textGreen-light"
              }`} />

              <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                
                {/* Text Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className={`font-monoFont text-sm mb-2 ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
                        Commercial Implementation
                      </p>
                      <h3 className={`text-2xl md:text-3xl font-bold font-titleFont ${isDark ? "text-textLight" : "text-textLight-light"}`}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className={`p-5 rounded-lg mb-6 leading-relaxed relative ${
                    isDark ? "bg-white/5 border border-white/5 text-textDark" : "bg-gray-50 border border-gray-100 text-textDark-light"
                  }`}>
                    {project.description}
                  </div>
                  
                  <ul className={`flex flex-wrap text-sm font-monoFont tracking-wide gap-3 md:gap-5 mb-8 ${isDark ? "text-textDark" : "text-textDark-light"}`}>
                    {project.tech.map((t, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={`w-1 h-1 rounded-full ${isDark ? "bg-textGreen" : "bg-textGreen-light"}`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`flex items-center gap-6 text-2xl ${isDark ? "text-textLight" : "text-textLight-light"}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 hover:-translate-y-1 ${isDark ? "hover:text-textGreen" : "hover:text-textGreen-light"}`}
                      aria-label="GitHub Repository"
                    >
                      <TbBrandGithub />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-all duration-300 hover:-translate-y-1 ${isDark ? "hover:text-textGreen" : "hover:text-textGreen-light"}`}
                        aria-label="Live Demo"
                      >
                        <RxOpenInNewWindow />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

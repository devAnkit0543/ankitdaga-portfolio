import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Ant Design"],
  },
  {
    title: "Database & Caching",
    skills: ["MongoDB", "MS SQL Server", "Redis"],
  },
  {
    title: "Security & Auth",
    skills: ["JWT", "RBAC", "2FA", "OAuth"],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["AWS (EC2, S3, IAM, CloudFront)", "Git", "Jira", "Axios"],
  },
];

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className="relative max-w-containerSmall mx-auto py-20 px-4 mdl:px-10 xl:px-4"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-14"
      >
        <span className={`font-monoFont text-sm ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
          01.
        </span>
        <h2 className={`text-2xl font-bold font-titleFont tracking-tight ${isDark ? "text-textLight" : "text-textLight-light"}`}>
          About Me
        </h2>
        <div className={`flex-1 h-px ${isDark ? "bg-gradient-to-r from-textGreen/30 to-transparent" : "bg-gradient-to-r from-textGreen-light/30 to-transparent"}`} />
      </motion.div>

      <div className="flex flex-col lgl:flex-row gap-14 items-start">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 flex flex-col gap-6"
        >
          <p className={`text-base leading-relaxed ${isDark ? "text-textDark" : "text-textDark-light"}`}>
            I am a <span className={isDark ? "text-textGreen font-medium" : "text-textGreen-light font-medium"}>MERN Stack Developer with 3+ years of experience</span> building scalable web applications and RESTful APIs using React, Next.js, Node.js, Express, MongoDB, and MSSQL.
          </p>
          <p className={`text-base leading-relaxed ${isDark ? "text-textDark" : "text-textDark-light"}`}>
            I have strong expertise in both <span className={isDark ? "text-textLight font-medium" : "text-textLight-light font-medium"}>frontend and backend development</span>, implementing secure authentication systems (JWT, RBAC, 2FA), and executing performance optimizations in production environments. I thrive in dynamic, Agile environments where I can tackle critical production issues and improve application architecture.
          </p>
          
          {/* Education Section */}
          <div className="mt-2">
            <h3 className={`flex items-center gap-2 font-titleFont font-semibold text-lg mb-4 ${isDark ? "text-textLight" : "text-textLight-light"}`}>
              <BookOpen className={`w-5 h-5 ${isDark ? "text-textGreen" : "text-textGreen-light"}`} />
              Education
            </h3>
            <div className={`p-4 rounded-xl border ${isDark ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"}`}>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h4 className={`font-bold ${isDark ? "text-textLight" : "text-textLight-light"}`}>Master of Computer Application (MCA)</h4>
                  <p className={`text-sm mt-1 ${isDark ? "text-textDark" : "text-textDark-light"}`}>Rajasthan Technical University</p>
                </div>
                <div className="text-right">
                  <Badge variant="glow" className={isDark ? "" : "border-textGreen-light/50 bg-textGreen-light/10 text-textGreen-light"}>
                    2020 - 2022
                  </Badge>
                  <p className={`text-xs mt-2 font-monoFont ${isDark ? "text-textDark" : "text-textDark-light"}`}>Jaipur, India</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Right - Skills & Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lgl:w-[400px] shrink-0 flex flex-col gap-8"
        >
          {/* Image card */}
          <div className="relative group mx-auto w-full max-w-[300px] lgl:max-w-full">
            <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
              isDark ? "bg-textGreen" : "bg-textGreen-light"
            }`} />
            
            <Card className={`relative overflow-hidden rounded-2xl border transition-all duration-500 group-hover:-translate-y-2 ${
              isDark
                ? "border-textGreen/20 bg-[#0d1a2d] group-hover:border-textGreen/50 group-hover:shadow-[0_20px_60px_rgba(100,255,218,0.15)]"
                : "border-textGreen-light/20 bg-white group-hover:border-textGreen-light/50 group-hover:shadow-xl"
            }`}>
              <div className="relative overflow-hidden">
                <img
                  alt="Ankit Daga - MERN Stack Developer"
                  className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/profile.jpg"
                  loading="lazy"
                />
                <div className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 ${
                  isDark ? "bg-textGreen/10" : "bg-textGreen-light/10"
                }`} />
              </div>
            </Card>
            
            <div className={`absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 -z-10 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 ${
              isDark ? "border-textGreen/20" : "border-textGreen-light/20"
            }`} />
          </div>

          {/* Categorized Skills */}
          <div className="flex flex-col gap-5 mt-4">
            <h3 className={`font-titleFont font-semibold text-lg flex items-center gap-2 ${isDark ? "text-textLight" : "text-textLight-light"}`}>
              Technical Expertise
            </h3>
            {skillCategories.map((cat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className={`text-xs font-monoFont tracking-wide uppercase ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
                  {cat.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span 
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                        isDark 
                          ? "bg-white/5 text-textDark border border-white/10 hover:border-textGreen/30 hover:text-textGreen" 
                          : "bg-gray-100 text-gray-600 border border-gray-200 hover:border-textGreen-light/30 hover:text-textGreen-light"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;

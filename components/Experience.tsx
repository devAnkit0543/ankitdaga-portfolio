import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { TiArrowForward } from "react-icons/ti";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: "truworth-l2",
    company: "Truworth Health Technologies",
    role: "Software Engineer L2",
    period: "April 2023 - Present",
    type: "Full Time",
    bullets: [
      "Developed and maintained scalable REST APIs using Node.js and Express.js to support core business workflows in production environment.",
      "Implemented RBAC, JWT authentication, and 2FA to secure multi-user access across admin and client panels.",
      "Built and optimized React.js frontend components with efficient API integration and state management.",
      "Improved API response time by 35% using indexing and query optimization.",
      "Reduced production bugs by 40% through unit testing & code reviews.",
      "Resolved critical production issues and performed root cause analysis (RCA), to minimize recurring defects.",
      "Collaborated with cross-functional teams (Product, QA, Design) in Agile sprints, contributing to sprint planning, feature development, and peer code reviews.",
      "Contributed to continuous improvements in application architecture, scalability, and code quality standards.",
    ],
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "JWT", "RBAC", "Agile"],
  },
  {
    id: "truworth-intern",
    company: "Truworth Health Technologies",
    role: "Software Developer Intern",
    period: "November 2022 – March 2023",
    type: "Internship",
    bullets: [
      "Developed frontend features using React.js and Ant Design.",
      "Built backend routes and middleware using Express.js.",
      "Integrated REST APIs with frontend using Axios.",
      "Fixed UI and API-related bugs in production and staging environments.",
    ],
    tech: ["React.js", "Ant Design", "Express.js", "Axios", "REST APIs"],
  },
];

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
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
          02.
        </span>
        <h2 className={`text-2xl font-bold font-titleFont tracking-tight ${isDark ? "text-textLight" : "text-textLight-light"}`}>
          Where I've Worked
        </h2>
        <div className={`flex-1 h-px ${isDark ? "bg-gradient-to-r from-textGreen/30 to-transparent" : "bg-gradient-to-r from-textGreen-light/30 to-transparent"}`} />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tab Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:w-56 flex flex-row md:flex-col overflow-x-auto md:overflow-visible shrink-0 scrollbarHide"
        >
          {experiences.map((exp, i) => (
            <button
              key={exp.id}
              onClick={() => setActive(i)}
              className={`relative px-4 py-4 md:py-3 text-sm font-medium text-left whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 ${
                active === i
                  ? isDark
                    ? "border-textGreen text-textGreen bg-textGreen/5"
                    : "border-textGreen-light text-textGreen-light bg-textGreen-light/5"
                  : isDark
                  ? "border-white/10 text-textDark hover:text-textLight hover:bg-white/5"
                  : "border-gray-200 text-textDark-light hover:text-textLight-light hover:bg-gray-50"
              }`}
            >
              {exp.role} 
              <span className="block text-xs opacity-70 mt-0.5">{exp.company.split(' ')[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Experience Content */}
        <div className="flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            {experiences.map((exp, i) =>
              active === i ? (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`border transition-all duration-300 ${
                    isDark
                      ? "border-white/10 bg-[#0d1a2d]/60 backdrop-blur-sm hover:border-textGreen/20 hover:shadow-[0_0_30px_rgba(100,255,218,0.05)]"
                      : "border-gray-200 bg-white hover:border-textGreen-light/30 hover:shadow-lg"
                  }`}>
                    <CardContent className="p-6 md:p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                          <div>
                            <h3 className={`text-xl font-bold font-titleFont ${isDark ? "text-textLight" : "text-textLight-light"}`}>
                              {exp.role}
                            </h3>
                            <span className={`text-base font-medium ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
                              @ {exp.company}
                            </span>
                          </div>
                          <Badge
                            variant="glow"
                            className={`shrink-0 ${isDark ? "" : "border-textGreen-light/50 bg-textGreen-light/10 text-textGreen-light"}`}
                          >
                            {exp.type}
                          </Badge>
                        </div>

                        <div className={`flex items-center gap-2 text-sm mt-2 ${isDark ? "text-textDark" : "text-textDark-light"}`}>
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="flex flex-col gap-4 mb-6">
                        {exp.bullets.map((bullet, bi) => (
                          <li key={bi} className={`flex gap-3 text-sm leading-relaxed ${isDark ? "text-textDark" : "text-textDark-light"}`}>
                            <TiArrowForward className={`shrink-0 mt-0.5 text-base ${isDark ? "text-textGreen" : "text-textGreen-light"}`} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className={`pt-4 border-t ${isDark ? "border-white/5" : "border-gray-100"}`}>
                        <p className={`text-xs font-monoFont mb-3 ${isDark ? "text-textDark" : "text-textDark-light"}`}>
                          Core Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className={`text-xs px-2.5 py-1 rounded-md font-monoFont ${
                                isDark
                                  ? "bg-white/5 text-textDark border border-white/10"
                                  : "bg-gray-100 text-gray-600 border border-gray-200"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;

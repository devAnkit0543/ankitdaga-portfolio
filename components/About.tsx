import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "JavaScript", "TypeScript", "React.js", "Node.js",
  "MongoDB", "Express.js", "Tailwind CSS", "Ant Design",
  "Git", "Jira", "AWS", "REST APIs",
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
          className="flex-1 flex flex-col gap-5"
        >
          <p className={`text-base leading-relaxed ${isDark ? "text-textDark" : "text-textDark-light"}`}>
            I am a <span className={isDark ? "text-textGreen font-medium" : "text-textGreen-light font-medium"}>Software Developer with 3+ years of experience</span> in full-stack web development, primarily focusing on the MERN stack (MongoDB, Express.js, React.js, Node.js).
          </p>
          <p className={`text-base leading-relaxed ${isDark ? "text-textDark" : "text-textDark-light"}`}>
            Throughout my career, I've honed my skills in <span className={isDark ? "text-textLight font-medium" : "text-textLight-light font-medium"}>Git, Jira,</span> and leveraged component libraries like <span className={isDark ? "text-textLight font-medium" : "text-textLight-light font-medium"}>Ant Design</span> to create user-friendly and visually appealing interfaces.
          </p>
          <p className={`text-base leading-relaxed ${isDark ? "text-textDark" : "text-textDark-light"}`}>
            I thrive in dynamic environments and am committed to delivering high-quality software that meets both user and business needs — whether working independently or in a team.
          </p>

          {/* Skills Grid */}
          <div className="mt-4">
            <p className={`text-sm font-monoFont mb-4 ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
              // Technologies I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Badge
                    variant="glow"
                    className={`px-3 py-1.5 text-xs font-monoFont cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                      isDark
                        ? "border-textGreen/30 bg-textGreen/5 text-textGreen hover:bg-textGreen/15"
                        : "border-textGreen-light/30 bg-textGreen-light/5 text-textGreen-light hover:bg-textGreen-light/15"
                    }`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lgl:w-[300px] shrink-0"
        >
          <div className="relative group">
            {/* Glow ring */}
            <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
              isDark ? "bg-textGreen" : "bg-textGreen-light"
            }`} />

            {/* Image card */}
            <Card className={`relative overflow-hidden rounded-2xl border transition-all duration-500 group-hover:-translate-y-2 ${
              isDark
                ? "border-textGreen/20 bg-[#0d1a2d] group-hover:border-textGreen/50 group-hover:shadow-[0_20px_60px_rgba(100,255,218,0.15)]"
                : "border-textGreen-light/20 bg-white group-hover:border-textGreen-light/50 group-hover:shadow-xl"
            }`}>
              <div className="relative overflow-hidden">
                <img
                  alt="Ankit Daga - MERN Stack Developer"
                  className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/profile.jpg"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 ${
                  isDark ? "bg-textGreen/10" : "bg-textGreen-light/10"
                }`} />
              </div>

              <CardContent className="p-4">
                <div className={`flex items-center gap-2 text-xs font-monoFont ${isDark ? "text-textDark" : "text-textDark-light"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? "bg-textGreen" : "bg-textGreen-light"}`} />
                  Based in India · Open to Remote
                </div>
              </CardContent>
            </Card>

            {/* Corner accent */}
            <div className={`absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 -z-10 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 ${
              isDark ? "border-textGreen/20" : "border-textGreen-light/20"
            }`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

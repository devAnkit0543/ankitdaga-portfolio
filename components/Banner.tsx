import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { ArrowDown, Mail } from "lucide-react";

const roles = [
  "MERN Stack Developer",
  "React.js Specialist",
  "Node.js Engineer",
  "Full Stack Developer",
];

const Banner = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative max-w-contentContainer mx-auto py-16 lgl:py-20 flex flex-col justify-center px-4 mdl:px-10 xl:px-4 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20 ${isDark ? "bg-textGreen" : "bg-textGreen-light"}`} />
        <div className={`absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10 ${isDark ? "bg-blue-500" : "bg-blue-400"}`} />
      </div>

      <div className="relative z-10 flex flex-col lgl:flex-row items-center gap-12 lgl:gap-20">
        {/* Left - Text Content */}
        <div className="flex-1 flex flex-col gap-5">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge
              variant="glow"
              className={`text-xs px-3 py-1.5 mb-4 font-monoFont tracking-wider ${isDark ? "" : "border-textGreen-light/50 bg-textGreen-light/10 text-textGreen-light"}`}
            >
              <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${isDark ? "bg-textGreen" : "bg-textGreen-light"}`} />
              Available for work
            </Badge>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`font-monoFont text-sm tracking-widest ${isDark ? "text-textGreen" : "text-textGreen-light"}`}
          >
            Hi there, I'm
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-5xl lgl:text-7xl font-bold font-titleFont tracking-tight ${isDark ? "text-textLight" : "text-textLight-light"}`}
          >
            Ankit Daga
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-2 h-10"
          >
            <span className={`text-xl lgl:text-3xl font-semibold font-titleFont ${isDark ? "text-textDark" : "text-textDark-light"}`}>
              {displayed}
              <span className={`inline-block w-0.5 h-6 ml-1 align-middle animate-pulse ${isDark ? "bg-textGreen" : "bg-textGreen-light"}`} />
            </span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-base max-w-[560px] leading-relaxed ${isDark ? "text-textDark" : "text-textDark-light"}`}
          >
            3+ years building high-performance web applications with the MERN stack.
            Passionate about crafting scalable, clean, and user-first digital experiences.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a href="mailto:ankit.dev0543@gmail.com">
              <Button
                size="lg"
                className={`font-titleFont tracking-wide group ${
                  isDark
                    ? "bg-textGreen text-bodyColor hover:bg-textGreen/90 shadow-[0_0_30px_rgba(100,255,218,0.2)] hover:shadow-[0_0_40px_rgba(100,255,218,0.35)]"
                    : "bg-textGreen-light text-white hover:bg-textGreen-light/90"
                }`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Say Hello
              </Button>
            </a>
            <a href="/assets/Ankit_Daga_CV.pdf" target="_blank">
              <Button
                variant="glow"
                size="lg"
                className={`font-titleFont tracking-wide ${
                  isDark
                    ? "border-textGreen text-textGreen hover:bg-textGreen/10"
                    : "border-textGreen-light text-textGreen-light hover:bg-textGreen-light/10"
                }`}
              >
                View Resume
              </Button>
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex items-center gap-4 mt-2"
          >
            {[
              { href: "https://github.com/devAnkit0543", icon: <TbBrandGithub className="text-lg" />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/ankit-daga-427523204/", icon: <SlSocialLinkedin className="text-lg" />, label: "LinkedIn" },
              { href: "https://www.instagram.com/ankit_daga5_/", icon: <SlSocialInstagram className="text-lg" />, label: "Instagram" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <span className={`w-10 h-10 rounded-xl inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-white/5 border border-white/10 text-textDark hover:text-textGreen hover:border-textGreen/40 hover:bg-textGreen/5"
                    : "bg-gray-100 border border-gray-200 text-gray-500 hover:text-textGreen-light hover:border-textGreen-light/40"
                }`}>
                  {s.icon}
                </span>
              </a>
            ))}
            <div className={`h-[1px] flex-1 max-w-[80px] ${isDark ? "bg-white/10" : "bg-gray-200"}`} />
            <span className={`text-xs font-monoFont tracking-widest ${isDark ? "text-textDark" : "text-textDark-light"}`}>
              @devAnkit0543
            </span>
          </motion.div>
        </div>

        {/* Right - Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="hidden lgl:flex flex-col w-[380px] shrink-0"
        >
          <div className={`rounded-2xl overflow-hidden border shadow-2xl float-animation ${
            isDark
              ? "border-white/10 bg-[#0d1a2d] shadow-[0_0_60px_rgba(100,255,218,0.07)]"
              : "border-gray-200 bg-white shadow-xl"
          }`}>
            {/* Window bar */}
            <div className={`flex items-center gap-2 px-4 py-3 border-b ${isDark ? "border-white/5 bg-[#0a1628]" : "border-gray-100 bg-gray-50"}`}>
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className={`ml-auto text-xs font-monoFont ${isDark ? "text-textDark" : "text-gray-400"}`}>ankit.js</span>
            </div>
            {/* Code content */}
            <pre className={`p-5 text-xs font-monoFont leading-relaxed overflow-x-auto ${isDark ? "text-textDark" : "text-gray-500"}`}>
              <code>
                <span className={isDark ? "text-purple-400" : "text-purple-600"}>const </span>
                <span className={isDark ? "text-textGreen" : "text-textGreen-light"}>developer</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>{" = {"}</span>{"\n"}
                <span className={isDark ? "text-textLight" : "text-gray-800"}>{"  "}</span>
                <span className={isDark ? "text-blue-300" : "text-blue-600"}>name</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>: </span>
                <span className={isDark ? "text-yellow-300" : "text-amber-600"}>'Ankit Daga'</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>,{"\n"}{"  "}</span>
                <span className={isDark ? "text-blue-300" : "text-blue-600"}>role</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>: </span>
                <span className={isDark ? "text-yellow-300" : "text-amber-600"}>'MERN Developer'</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>,{"\n"}{"  "}</span>
                <span className={isDark ? "text-blue-300" : "text-blue-600"}>experience</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>: </span>
                <span className={isDark ? "text-orange-300" : "text-orange-600"}>3</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>,{"\n"}{"  "}</span>
                <span className={isDark ? "text-blue-300" : "text-blue-600"}>skills</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>: [</span>
                <span className={isDark ? "text-yellow-300" : "text-amber-600"}>'React'</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>, </span>
                <span className={isDark ? "text-yellow-300" : "text-amber-600"}>'Node'</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>,{"\n"}{"           "}</span>
                <span className={isDark ? "text-yellow-300" : "text-amber-600"}>'MongoDB'</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>,</span>
                <span className={isDark ? "text-yellow-300" : "text-amber-600"}>'AWS'</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>],{"\n"}{"  "}</span>
                <span className={isDark ? "text-blue-300" : "text-blue-600"}>available</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>: </span>
                <span className={isDark ? "text-textGreen" : "text-textGreen-light"}>true</span>
                <span className={isDark ? "text-textLight" : "text-gray-800"}>,{"\n"}{"}"}</span>
              </code>
            </pre>
            {/* Status bar */}
            <div className={`px-5 py-2.5 border-t flex items-center gap-2 ${isDark ? "border-white/5 bg-textGreen/5" : "border-gray-100 bg-green-50"}`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? "bg-textGreen" : "bg-textGreen-light"}`} />
              <span className={`text-xs font-monoFont ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
                Ready to build something amazing
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-[10px] font-monoFont tracking-widest uppercase ${isDark ? "text-textDark" : "text-textDark-light"}`}>Scroll</span>
        <ArrowDown className={`w-4 h-4 animate-bounce ${isDark ? "text-textGreen" : "text-textGreen-light"}`} />
      </motion.div>
    </section>
  );
};

export default Banner;

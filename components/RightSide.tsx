import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const RightSide = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 pb-6">
      <motion.a
        href="mailto:ankit.dev0543@gmail.com"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className={`font-monoFont text-xs tracking-widest transition-all duration-300 hover:-translate-y-1 [writing-mode:vertical-rl] ${
          isDark
            ? "text-textDark hover:text-textGreen"
            : "text-textDark-light hover:text-textGreen-light"
        }`}
        style={{ writingMode: "vertical-rl" }}
      >
        ankit.dev0543@gmail.com
      </motion.a>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2.0, duration: 0.4 }}
        className={`w-px h-24 origin-top ${isDark ? "bg-gradient-to-b from-textGreen/50 to-transparent" : "bg-gradient-to-b from-textGreen-light/50 to-transparent"}`}
      />
    </div>
  );
};

export default RightSide;

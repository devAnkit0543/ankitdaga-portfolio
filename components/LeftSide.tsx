import { useTheme } from "@/contexts/ThemeContext";
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";

const socials = [
  { href: "https://github.com/devAnkit0543", icon: <TbBrandGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ankit-daga-427523204/", icon: <SlSocialLinkedin />, label: "LinkedIn" },
  { href: "https://www.facebook.com/profile.php?id=100007203700787/", icon: <SlSocialFacebook />, label: "Facebook" },
  { href: "https://www.instagram.com/ankit_daga5_/", icon: <SlSocialInstagram />, label: "Instagram" },
];

const LeftSide = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 pb-6">
      <div className="flex flex-col gap-3">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.1 }}
            whileHover={{ x: 4 }}
          >
            <span className={`w-9 h-9 text-base rounded-lg inline-flex items-center justify-center transition-all duration-300 ${
              isDark
                ? "text-textDark hover:text-textGreen bg-white/5 border border-white/10 hover:border-textGreen/30 hover:bg-textGreen/5"
                : "text-gray-500 hover:text-textGreen-light bg-gray-100 border border-gray-200 hover:border-textGreen-light/30"
            }`}>
              {s.icon}
            </span>
          </motion.a>
        ))}
      </div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.9, duration: 0.4 }}
        className={`w-px h-24 origin-top ${isDark ? "bg-gradient-to-b from-textGreen/50 to-transparent" : "bg-gradient-to-b from-textGreen-light/50 to-transparent"}`}
      />
    </div>
  );
};

export default LeftSide;

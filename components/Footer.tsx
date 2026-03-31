import { useTheme } from "@/contexts/ThemeContext";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { Heart } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const socials = [
    { href: "https://github.com/devAnkit0543", icon: <TbBrandGithub className="text-lg" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ankit-daga-427523204/", icon: <SlSocialLinkedin className="text-lg" />, label: "LinkedIn" },
    { href: "https://www.facebook.com/profile.php?id=100007203700787", icon: <SlSocialFacebook className="text-lg" />, label: "Facebook" },
    { href: "https://www.instagram.com/ankit_daga5_/", icon: <SlSocialInstagram className="text-lg" />, label: "Instagram" },
  ];

  return (
    <footer className={`w-full py-8 mt-10 border-t ${isDark ? "border-white/5" : "border-gray-100"}`}>
      <div className="max-w-contentContainer mx-auto px-4 flex flex-col items-center gap-5">
        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <span className={`w-9 h-9 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "bg-white/5 border border-white/10 text-textDark hover:text-textGreen hover:border-textGreen/30 hover:bg-textGreen/5"
                  : "bg-gray-100 border border-gray-200 text-gray-500 hover:text-textGreen-light hover:border-textGreen-light/30"
              }`}>
                {s.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className={`w-32 h-px ${isDark ? "bg-white/10" : "bg-gray-200"}`} />

        {/* Copyright */}
        <div className={`flex flex-col items-center gap-1.5 text-center ${isDark ? "text-textDark" : "text-textDark-light"}`}>
          <p className="text-xs font-monoFont tracking-wider">www.ankitdaga.in</p>
          <p className="text-xs flex items-center gap-1.5">
            Designed & Built by
            <span className={`font-semibold font-titleFont ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
              Ankit Daga
            </span>
            with
            <Heart className={`w-3 h-3 fill-current ${isDark ? "text-textGreen" : "text-textGreen-light"}`} />
          </p>
          <p className="text-[11px] opacity-60">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

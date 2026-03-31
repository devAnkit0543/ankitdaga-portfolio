import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#project" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  const isDark = theme === "dark";

  return (
    <nav
      className={`w-full h-20 sticky top-0 z-50 px-6 transition-all duration-500 ${
        isDark
          ? "bg-bodyColor/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="max-w-contentContainer h-full mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 group"
          >
            <div className={`relative w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg font-monoFont transition-all duration-300 ${
              isDark
                ? "bg-textGreen/10 text-textGreen border border-textGreen/30 group-hover:bg-textGreen/20 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                : "bg-textGreen-light/10 text-textGreen-light border border-textGreen-light/30 group-hover:bg-textGreen-light/20"
            }`}>
              AD
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-base font-bold font-titleFont tracking-wide ${isDark ? "text-textLight" : "text-textLight-light"}`}>
                Ankit Daga
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
                MERN Developer
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden mdl:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={handleScroll}
                  className={`nav-link relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${
                    isDark
                      ? "text-textDark hover:text-textGreen after:bg-textGreen"
                      : "text-textDark-light hover:text-textGreen-light after:bg-textGreen-light"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <a href="/assets/Ankit_Daga_CV.pdf" target="_blank">
              <Button
                variant="glow"
                size="sm"
                className={`font-titleFont text-xs tracking-widest uppercase ${
                  isDark
                    ? "border-textGreen text-textGreen"
                    : "border-textGreen-light text-textGreen-light hover:bg-textGreen-light/10"
                }`}
              >
                Resume
              </Button>
            </a>

            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border border-white/10 text-textGreen hover:bg-textGreen/10 hover:border-textGreen/40"
                  : "bg-black/5 border border-black/10 text-textGreen-light hover:bg-textGreen-light/10 hover:border-textGreen-light/40"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <HiOutlineSun className="text-lg" /> : <HiOutlineMoon className="text-lg" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Nav - Sheet */}
        <div className="mdl:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isDark
                ? "bg-white/5 border border-white/10 text-textGreen"
                : "bg-black/5 border border-black/10 text-textGreen-light"
            }`}
          >
            {isDark ? <HiOutlineSun className="text-lg" /> : <HiOutlineMoon className="text-lg" />}
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border border-white/10 text-textGreen"
                  : "bg-black/5 border border-black/10 text-textGreen-light"
              }`}>
                <Menu className="w-4 h-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className={`w-[300px] flex flex-col gap-8 pt-12 ${isDark ? "bg-[#0d1f3c] border-white/10" : "bg-white border-gray-200"}`}>
              <SheetHeader>
                <SheetTitle className={`text-left font-titleFont ${isDark ? "text-textLight" : "text-textLight-light"}`}>
                  Navigation
                </SheetTitle>
              </SheetHeader>

              <Separator className={isDark ? "bg-white/10" : "bg-gray-200"} />

              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={handleScroll}
                    className={`nav-link px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isDark
                        ? "text-textDark hover:text-textGreen hover:bg-white/5"
                        : "text-textDark-light hover:text-textGreen-light hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Separator className={isDark ? "bg-white/10" : "bg-gray-200"} />

              <div className="flex flex-col gap-4">
                <a href="/assets/Ankit_Daga_CV.pdf" target="_blank">
                  <Button variant="glow" className={`w-full ${isDark ? "border-textGreen text-textGreen" : "border-textGreen-light text-textGreen-light"}`}>
                    Download Resume
                  </Button>
                </a>
                <div className="flex items-center gap-3 justify-center">
                  {[
                    { href: "https://www.linkedin.com/in/ankit-daga-427523204/", icon: <SlSocialLinkedin /> },
                    { href: "https://www.facebook.com/profile.php?id=100007203700787", icon: <SlSocialFacebook /> },
                    { href: "https://www.instagram.com/ankit_daga5_/", icon: <SlSocialInstagram /> },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                      <span className={`w-10 h-10 text-lg rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 border border-white/10 text-textDark hover:text-textGreen hover:border-textGreen/40"
                          : "bg-gray-100 border border-gray-200 text-gray-600 hover:text-textGreen-light hover:border-textGreen-light/40"
                      }`}>
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
                <a href="mailto:ankit.dev0543@gmail.com" className={`text-xs text-center tracking-wider ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
                  ankit.dev0543@gmail.com
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

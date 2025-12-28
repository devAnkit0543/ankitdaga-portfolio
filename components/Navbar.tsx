import { useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShow(false);
    }
  }
  return (
    <div className={`w-full h-20 lg:h-[12vh] sticky top-0 z-50 px-4 transition-colors duration-300 ${theme === "dark"
      ? "bg-bodyColor shadow-navbarShadow"
      : "bg-bodyColor-light shadow-navbarShadowLight"
      }`}>
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        {/* ============ Logo Start here ============ */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="flex items-center gap-2"
          >
            {theme === "dark" ? (
              <img className="w-14" src="/assets/images/ankit_logo.png" alt="logo" loading="lazy" />
            ) : (
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xl font-bold font-titleFont text-textLight-light">
                  Ankit Daga
                </span>
                <motion.span
                  className="relative inline-block"
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-lg font-semibold text-textGreen-light">
                    ●
                  </span>
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-lg font-semibold text-textGreen-light">
                      ●
                    </span>
                  </motion.span>
                </motion.span>
                <motion.span
                  className="text-xs font-medium tracking-wider text-textGreen-light"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  LIVE
                </motion.span>
              </motion.div>
            )}
          </motion.div>
        </Link>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                ? "text-textDark hover:text-textGreen"
                : "text-textDark-light hover:text-textGreen-light"
                }`}
              href="#home"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                ? "text-textDark hover:text-textGreen"
                : "text-textDark-light hover:text-textGreen-light"
                }`}
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                {/* <span className="text-textGreen">01.</span> */}
                About
              </motion.li>
            </Link>

            <Link
              className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                ? "text-textDark hover:text-textGreen"
                : "text-textDark-light hover:text-textGreen-light"
                }`}
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                {/* <span className="text-textGreen">02.</span> */}
                Experience
              </motion.li>
            </Link>
            <Link
              className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                ? "text-textDark hover:text-textGreen"
                : "text-textDark-light hover:text-textGreen-light"
                }`}
              href="#project"
              onClick={handleScroll}
            >
              {/* <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textGreen">03.</span>
                Project
              </motion.li> */}
            </Link>
            <Link
              className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                ? "text-textDark hover:text-textGreen"
                : "text-textDark-light hover:text-textGreen-light"
                }`}
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                {/* <span className="text-textGreen">04.</span> */}
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/Ankit Daga CV .pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`px-4 py-2 rounded-md text-[13px] border duration-300 ${theme === "dark"
                ? "text-textGreen border-textGreen hover:bg-hoverColor"
                : "text-textGreen-light border-textGreen-light hover:bg-hoverColor-light"
                }`}
            >
              Resume
            </motion.button>
          </a>
          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.1, 1],
              }}
              transition={{
                delay: 0.6,
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center border duration-300 transition-colors relative ${theme === "dark"
                ? "text-textGreen border-textGreen hover:bg-hoverColor"
                : "text-textGreen-light border-textGreen-light hover:bg-hoverColor-light"
                }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <HiOutlineSun className="text-xl" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </motion.button>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`absolute top-12 right-0 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap z-50 ${theme === "dark"
                  ? "bg-bodyColor border border-textGreen text-textGreen"
                  : "bg-bodyColor-light border border-textGreen-light text-textGreen-light"
                  }`}
              >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                <div className={`absolute -top-1 right-3 w-2 h-2 rotate-45 ${theme === "dark" ? "bg-bodyColor border-l border-t border-textGreen" : "bg-bodyColor-light border-l border-t border-textGreen-light"
                  }`}></div>
              </motion.div>
            )}
          </div>
        </div>
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className={`w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl cursor-pointer overflow-hidden group ${theme === "dark" ? "text-textGreen" : "text-textGreen-light"
            }`}
        >
          <span className={`w-full h-[2px] inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300 ${theme === "dark" ? "bg-textGreen" : "bg-textGreen-light"
            }`}></span>
          <span className={`w-full h-[2px] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300 ${theme === "dark" ? "bg-textGreen" : "bg-textGreen-light"
            }`}></span>
          <span className={`w-full h-[2px] inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300 ${theme === "dark" ? "bg-textGreen" : "bg-textGreen-light"
            }`}></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className={`w-[80%] h-full overflow-y-scroll scrollbarHide flex flex-col items-center px-4 py-10 relative transition-colors duration-300 ${theme === "dark" ? "bg-[#112240]" : "bg-gray-100"
                }`}
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className={`text-3xl cursor-pointer hover:text-red-500 absolute top-4 right-4 ${theme === "dark" ? "text-textGreen" : "text-textGreen-light"
                  }`}
              />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  delay: 0.1,
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-full flex items-center justify-center border duration-300 transition-colors absolute top-4 left-4 ${theme === "dark"
                  ? "text-textGreen border-textGreen hover:bg-hoverColor"
                  : "text-textGreen-light border-textGreen-light hover:bg-hoverColor-light"
                  }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <HiOutlineSun className="text-xl" />
                ) : (
                  <HiOutlineMoon className="text-xl" />
                )}
              </motion.button>
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                      ? "text-textDark hover:text-textGreen"
                      : "text-textDark-light hover:text-textGreen-light"
                      }`}
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                      ? "text-textDark hover:text-textGreen"
                      : "text-textDark-light hover:text-textGreen-light"
                      }`}
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      {/* <span className="text-textGreen">01.</span> */}
                      About
                    </motion.li>
                  </Link>
                  <Link
                    className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                      ? "text-textDark hover:text-textGreen"
                      : "text-textDark-light hover:text-textGreen-light"
                      }`}
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      {/* <span className="text-textGreen">02.</span> */}
                      Experience
                    </motion.li>
                  </Link>
                  {/* <Link
                    className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                      ? "text-textDark hover:text-textGreen"
                      : "text-textDark-light hover:text-textGreen-light"
                      }`}
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">03.</span>
                      Project
                    </motion.li>
                  </Link> */}
                  <Link
                    className={`flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link ${theme === "dark"
                      ? "text-textDark hover:text-textGreen"
                      : "text-textDark-light hover:text-textGreen-light"
                      }`}
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      {/* <span className="text-textGreen">04.</span> */}
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/Ankit Daga CV .pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className={`w-32 h-10 rounded-md text-[13px] border duration-300 ${theme === "dark"
                      ? "text-textGreen border-textGreen hover:bg-hoverColor"
                      : "text-textGreen-light border-textGreen-light hover:bg-hoverColor-light"
                      }`}
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  {/* <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/devAnkit0543"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a> */}
                  {/* <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.85, ease: "easeIn" }}
                    href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialYoutube />
                    </span>
                  </motion.a> */}
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/ankit-daga-427523204/"
                    target="_blank"
                  >
                    <span className={`w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ${theme === "dark"
                      ? "bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 hover:text-textGreen"
                      : "bg-bodyColor-light border-[1px] border-gray-300 hover:border-textGreen-light text-gray-700 hover:text-textGreen-light"
                      }`}>
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.95, ease: "easeIn" }}
                    href="https://www.facebook.com/profile.php?id=100007203700787"
                    target="_blank"
                  >
                    <span className={`w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ${theme === "dark"
                      ? "bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 hover:text-textGreen"
                      : "bg-bodyColor-light border-[1px] border-gray-300 hover:border-textGreen-light text-gray-700 hover:text-textGreen-light"
                      }`}>
                      <SlSocialFacebook />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.instagram.com/ankit_daga5_/"
                    target="_blank"
                  >
                    <span className={`w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ${theme === "dark"
                      ? "bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 hover:text-textGreen"
                      : "bg-bodyColor-light border-[1px] border-gray-300 hover:border-textGreen-light text-gray-700 hover:text-textGreen-light"
                      }`}>
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className={`text-sm w-72 tracking-widest text-center mt-4 ${theme === "dark" ? "text-textGreen" : "text-textGreen-light"
                  }`}
                href="mailto:ankit.dev0543@gmail.com"
              >
                <p>www.ankitdaga.in</p>
              </motion.a>
            </motion.div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;

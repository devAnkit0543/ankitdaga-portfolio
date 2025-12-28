import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Banner = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={`text-lg font-titleFont tracking-wide ${theme === "dark" ? "text-textGreen" : "text-textGreen-light"
          }`}
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={`text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col ${theme === "dark" ? "text-textLight" : "text-textLight-light"
          }`}
      >
        Ankit Daga.
        <span className={`mt-2 lgl:mt-4 ${theme === "dark" ? "text-textDark" : "text-textDark-light"
          }`}>
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={`text-base md:max-w-[650px] font-medium ${theme === "dark" ? "text-textDark" : "text-textDark-light"
          }`}
      >
        with 3+ years of hands-on experience specializing in the MERN (MongoDB, Express.js, React.js, and Node.js) stack. i have successfully contributed to building dynamic, high-performance web applications and APIs, focusing on creating efficient, scalable, and user-friendly solutions.{" "}
        {/* <a href="https://www.noormohammad.live/" target="_blank">
          {" "}
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a> */}
      </motion.p>


      {/* <a href="https://github.com/noorjsdivs" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </a> */}

    </section>
  );
};

export default Banner;

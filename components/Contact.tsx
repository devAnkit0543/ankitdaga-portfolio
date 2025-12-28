import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto flex flex-col gap-4 items-center justify-center"
    >
      <p className={`font-titleFont text-lg font-semibold flex items-center tracking-wide ${theme === "dark" ? "text-textGreen" : "text-textGreen-light"
        }`}>
        03. What's Next?
      </p>
      <h2 className={`font-titleFont text-5xl font-semibold ${theme === "dark" ? "text-textLight" : "text-textLight-light"
        }`}>
        Get In Touch
      </h2>
      <p className={`max-w-[600px] text-center ${theme === "dark" ? "text-textDark" : "text-textDark-light"
        }`}>
        I'm always open to new opportunities and collaborations! Whether you have a project in mind, a question about my work, or just want to connect, feel free to reach out. I'll do my best to respond and look forward to hearing from you!
      </p>

      <a href="mailto:ankit.dev0543@gmail.com">
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          className={`w-40 h-14 border mt-6 mb-10 font-titleFont text-sm tracking-wider rounded-md duration-300 transition-all ${theme === "dark"
            ? "border-textGreen text-textGreen hover:bg-hoverColor"
            : "border-textGreen-light text-textGreen-light hover:bg-hoverColor-light"
            }`}
        >
          Say Hello
        </motion.button>
      </a>
    </section>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, ArrowRight, Phone } from "lucide-react";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className="relative max-w-containerSmall mx-auto py-24 px-4 mdl:px-10 xl:px-4"
    >
      {/* Background glow */}
      <div className={`pointer-events-none absolute inset-0 overflow-hidden`}>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10 ${isDark ? "bg-textGreen" : "bg-textGreen-light"}`} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className={`font-monoFont text-sm mb-3 ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
          04. What's Next?
        </span>

        <h2 className={`text-4xl lgl:text-5xl font-bold font-titleFont tracking-tight mb-6 ${isDark ? "text-textLight" : "text-textLight-light"}`}>
          Get In Touch
        </h2>

        <p className={`max-w-[560px] text-base leading-relaxed mb-10 ${isDark ? "text-textDark" : "text-textDark-light"}`}>
          I'm always open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to connect — feel free to reach out. I'll do my best to get back to you!
        </p>

        {/* CTA Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a href="mailto:ankit.dev0543@gmail.com">
            <Button
              size="lg"
              className={`font-titleFont tracking-wide ${
                isDark
                  ? "bg-textGreen text-bodyColor hover:bg-textGreen/90 shadow-[0_0_30px_rgba(100,255,218,0.2)] hover:shadow-[0_0_40px_rgba(100,255,218,0.35)]"
                  : "bg-textGreen-light text-white hover:bg-textGreen-light/90"
              }`}
            >
              <Mail className="w-4 h-4 mr-2" />
              Say Hello
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/ankit-daga" target="_blank" rel="noopener noreferrer">
            <Button
              variant="glow"
              size="lg"
              className={`font-titleFont tracking-wide ${isDark ? "border-textGreen text-textGreen" : "border-textGreen-light text-textGreen-light"}`}
            >
              <SlSocialLinkedin className="mr-2 text-base" />
              LinkedIn
            </Button>
          </a>
        </div>

        {/* Divider */}
        <div className={`w-full max-w-[400px] h-px mb-10 ${isDark ? "bg-gradient-to-r from-transparent via-white/10 to-transparent" : "bg-gradient-to-r from-transparent via-gray-200 to-transparent"}`} />

        {/* Contact cards row */}
        <div className="grid grid-cols-1 sml:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[800px]">
          {[
            {
              icon: <Phone className="w-5 h-5" />,
              label: "Phone",
              value: "+91-7742770543",
              href: "tel:+917742770543",
            },
            {
              icon: <Mail className="w-5 h-5" />,
              label: "Email",
              value: "ankit.dev0543@gmail",
              href: "mailto:ankit.dev0543@gmail.com",
            },
            {
              icon: <TbBrandGithub className="text-xl" />,
              label: "GitHub",
              value: "devAnkit0543",
              href: "https://github.com/devAnkit0543",
            },
            {
              icon: <SlSocialLinkedin className="text-lg" />,
              label: "LinkedIn",
              value: "ankit-daga",
              href: "https://www.linkedin.com/in/ankit-daga",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className={`p-4 text-center cursor-pointer transition-all duration-300 ${
                isDark
                  ? "border-white/10 bg-white/5 hover:border-textGreen/30 hover:bg-textGreen/5 hover:shadow-[0_0_20px_rgba(100,255,218,0.08)]"
                  : "border-gray-200 bg-gray-50 hover:border-textGreen-light/30 hover:bg-white hover:shadow-lg"
              }`}>
                <div className={`flex items-center justify-center w-9 h-9 rounded-lg mx-auto mb-3 ${
                  isDark ? "bg-textGreen/10 text-textGreen" : "bg-textGreen-light/10 text-textGreen-light"
                }`}>
                  {item.icon}
                </div>
                <p className={`text-xs font-medium mb-1 ${isDark ? "text-textDark" : "text-textDark-light"}`}>{item.label}</p>
                <p className={`text-xs font-monoFont truncate ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>{item.value}</p>
              </Card>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

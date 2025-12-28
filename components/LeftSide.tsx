import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { useTheme } from "@/contexts/ThemeContext";

const LeftSide = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-full h-full flex flex-col items-center justify-end gap-4 ${theme === "dark" ? "text-textLight" : "text-textLight-light"
      }`}>
      <div className="flex flex-col gap-4">
        {/* <a href="https://github.com/devAnkit0543" target="_blank">
          <span className={`w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ${
            theme === "dark"
              ? "bg-hoverColor hover:text-textGreen"
              : "bg-hoverColor-light hover:text-textGreen-light"
          }`}>
            <TbBrandGithub />
          </span>
        </a> */}
        {/* <a
          href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
          target="_blank"
        >
          <span className={`w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ${
            theme === "dark"
              ? "bg-hoverColor hover:text-textGreen"
              : "bg-hoverColor-light hover:text-textGreen-light"
          }`}>
            <SlSocialYoutube />
          </span>
        </a> */}
        <a
          href="https://www.linkedin.com/in/ankit-daga-427523204/"
          target="_blank"
        >
          <span className={`w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ${theme === "dark"
            ? "bg-hoverColor text-textLight hover:text-textGreen"
            : "bg-hoverColor-light text-textDark-light hover:text-textGreen-light"
            }`}>
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100007203700787/" target="_blank">
          <span className={`w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ${theme === "dark"
            ? "bg-hoverColor text-textLight hover:text-textGreen"
            : "bg-hoverColor-light text-textDark-light hover:text-textGreen-light"
            }`}>
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/ankit_daga5_/" target="_blank">
          <span className={`w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ${theme === "dark"
            ? "bg-hoverColor text-textLight hover:text-textGreen"
            : "bg-hoverColor-light text-textDark-light hover:text-textGreen-light"
            }`}>
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className={`w-[2px] h-32 ${theme === "dark" ? "bg-textDark" : "bg-textDark-light"
        }`}></div>
    </div>
  );
};

export default LeftSide;

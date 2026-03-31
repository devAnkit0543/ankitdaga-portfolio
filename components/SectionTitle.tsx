import { useTheme } from "@/contexts/ThemeContext";

interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-4 mb-10">
      <span className={`font-monoFont text-sm ${isDark ? "text-textGreen" : "text-textGreen-light"}`}>
        {titleNo}.
      </span>
      <h2 className={`text-2xl font-bold font-titleFont tracking-tight ${isDark ? "text-textLight" : "text-textLight-light"}`}>
        {title}
      </h2>
      <div className={`flex-1 h-px ${isDark ? "bg-gradient-to-r from-textGreen/30 to-transparent" : "bg-gradient-to-r from-textGreen-light/30 to-transparent"}`} />
    </div>
  );
};

export default SectionTitle;

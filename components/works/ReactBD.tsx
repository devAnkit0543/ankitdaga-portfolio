import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer
        <span className="text-textGreen tracking-wide">@Truworth Health Technology</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Started as an intern in November 2022, transitioning to a full-time role after three months.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and maintained admin panels, such as CRM configurations, using React.js, TypeScript, and MongoDB to support internal and external product-based projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with cross-functional teams, including engineers, designers, and project managers, to ensure smooth project execution and deliver high-quality software solutions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Focused on building scalable, maintainable, and high-performance applications that align with business objectives and customer requirements.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;

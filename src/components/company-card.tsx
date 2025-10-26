import { motion } from "framer-motion";
import { CompaniesProps } from "../types/type";
import { Tooltip } from "./tooltip";

const CompanyCard = ({
  name,
  image,
  index,
}: CompaniesProps & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      className="flex flex-col gap-y-2"
    >
      <Tooltip content={name}>
        <div className="flex items-center size-20 justify-center">{image}</div>
      </Tooltip>
    </motion.div>
  );
};

export default CompanyCard;

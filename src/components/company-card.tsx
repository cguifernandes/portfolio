import { motion } from "framer-motion";
import type { CompaniesProps } from "../types/type";

const CompanyCard = ({ image, index }: CompaniesProps & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
    >
      <div className="flex items-center size-20 justify-center">{image}</div>
    </motion.div>
  );
};

export default CompanyCard;

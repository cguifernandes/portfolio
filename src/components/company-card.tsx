import { motion } from "framer-motion";
import type { CompaniesProps } from "../types/type";

const CompanyCard = ({
  image,
  name,
  index,
}: CompaniesProps & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      className="group flex h-24 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 p-5 transition duration-300 ease-in-out hover:border-neutral-700"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        // logos vem em cores e formatos diferentes: dessaturar unifica a
        // linha e o hover devolve a cor original de cada uma
        className="max-h-full max-w-full object-contain opacity-60 grayscale transition duration-300 ease-in-out group-hover:opacity-100 group-hover:grayscale-0"
      />
    </motion.div>
  );
};

export default CompanyCard;

import { motion } from "framer-motion";

type BadgeProps = {
  skill: string;
  index: number;
};

const Badge = ({ skill, index }: BadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.05,
      }}
      className="text-white bg-neutral-900 border border-neutral-800 rounded-md text-xs px-2 py-0.5"
    >
      {skill}
    </motion.span>
  );
};

export default Badge;

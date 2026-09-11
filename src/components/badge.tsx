import { motion } from "framer-motion";

type BadgeProps = {
  skill: string;
  index: number;
  animate?: boolean;
};

const Badge = ({ skill, index, animate = true }: BadgeProps) => {
  return (
    <motion.span
      initial={animate ? { opacity: 0, filter: "blur(4px)", y: -5 } : false}
      whileInView={
        animate ? { opacity: 1, filter: "blur(0px)", y: 0 } : undefined
      }
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.05,
      }}
      className="text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md text-xs px-2 py-0.5"
    >
      {skill}
    </motion.span>
  );
};

export default Badge;

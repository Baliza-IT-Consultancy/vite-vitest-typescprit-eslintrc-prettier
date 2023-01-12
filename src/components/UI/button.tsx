import type { IButton } from "@MyTypes/button.type";
import { motion } from "framer-motion";

export default function Button(prop: IButton) {
  const duration = (prop.index && prop.index / 10) || 0;

  return (
    <motion.button
      layout
      onClick={prop.onclick}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: duration,
          ease: "easeIn",
        },
      }}
      whileHover={{
        scale: 1.05,
        color: "Highlight",
      }}
      exit={{
        opacity: 0,
      }}
    >
      {prop.label || "click me"}
    </motion.button>
  );
}

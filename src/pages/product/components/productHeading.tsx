import { motion } from "framer-motion";
type IProductHeading = {
  title?: string;
  size?: string | number;
};

export default function ProductHeading(prop: IProductHeading) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      style={{
        fontSize: prop.size || 50,
        color: "GrayText",
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      {prop.title}
    </motion.p>
  );
}

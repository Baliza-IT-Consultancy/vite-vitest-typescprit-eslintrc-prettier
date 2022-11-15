import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";
type IProductCard = {
  title?: string;
  image: string;
  description?: string;
};

const productAnimationConfig: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    backgroundColor: "Background",
    x: 1,

    transition: {
      delay: 0.05,
      staggerChildren: 1,
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export default function ProductCard(prop: IProductCard): JSX.Element {
  const parentRef = useRef(null);
  const isInView = useInView(parentRef, { once: true });

  return (
    <AnimatePresence>
      <motion.div
        variants={productAnimationConfig}
        initial={isInView ? "visible" : "hidden"}
        animate={isInView ? "visible" : "hidden"}
        ref={parentRef}
        style={{ width: 300, display: "flex", gap: 4, flexDirection: "column" }}
        exit={{ x: -100 }}
      >
        <img
          loading="lazy"
          src={prop.image}
          alt={prop.title}
          style={{
            height: 200,
            width: "100%",
          }}
        />

        <motion.h3>{prop.title}</motion.h3>
      </motion.div>
    </AnimatePresence>
  );
}

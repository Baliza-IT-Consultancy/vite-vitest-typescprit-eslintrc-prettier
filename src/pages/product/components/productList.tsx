import { Loading } from "@components";
import { useProductList } from "@hooks";
import { AnimatePresence, motion } from "framer-motion";

// import { NavigateFunction, useNavigate } from "react-router-dom";
import ProductCard from "./productCard";
export default function ProductList(): JSX.Element {
  // const navigate: NavigateFunction = useNavigate();

  const { data, isLoading, isError } = useProductList();

  // function HandleNavigation(id: number) {
  //   navigate(`/products/${id}`);
  // }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>please try again something is wrong</p>;
  }

  return (
    <motion.div
      animate={{
        transition: {
          staggerChildren: 0.08,
        },
      }}
      layout
      style={{ display: "flex", flexDirection: "column", gap: 9 }}
    >
      {data?.products
        ? data?.products.map((el, idx) => {
            return (
              <AnimatePresence key={el.id}>
                <ProductCard image={el.thumbnail} title={el.title} />
              </AnimatePresence>
            );
          })
        : "no products found"}
    </motion.div>
  );
}

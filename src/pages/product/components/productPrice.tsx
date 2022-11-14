import React from "react";

type IProductPrice = {
  price?: string | number;
};
export default function ProductPrice(prop: IProductPrice) {
  return (
    <p
      style={{
        color: "HighlightText",
        fontFamily: "sans-serif",
      }}
    >
      ₹ {prop.price}
    </p>
  );
}

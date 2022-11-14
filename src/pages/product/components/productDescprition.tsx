import React from "react";
type IProductDescription = {
  description?: string;
};
export default function ProductDescription(prop: IProductDescription) {
  return (
    <p
      style={{
        color: "burlywood",
        fontFamily: "sans-serif",
      }}
    >
      {prop.description}
    </p>
  );
}

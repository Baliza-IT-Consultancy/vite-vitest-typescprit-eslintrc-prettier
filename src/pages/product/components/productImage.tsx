type IProductImage = {
  thumbnail?: string;
  title?: string;
};

export default function ProductImage(prop: IProductImage) {
  return (
    <img
      style={{
        height: "25em",
        width: "100%",
      }}
      src={prop.thumbnail}
      alt={prop.title}
    />
  );
}

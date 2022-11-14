type IProductHeading = {
  title?: string;
  size?: string | number;
};

export default function ProductHeading(prop: IProductHeading) {
  return (
    <p
      style={{
        fontSize: prop.size || 50,
        color: "GrayText",
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      {prop.title}
    </p>
  );
}

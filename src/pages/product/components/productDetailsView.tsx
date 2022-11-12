import { PrimaryLayout } from "@components";
import { useProductDetails } from "@hooks";
import { useParams } from "react-router-dom";

import Loading from "@/components/UI/loading";

export default function ProductDetailsView() {
  const { id } = useParams();
  const { data, isLoading } = useProductDetails(id); //hook based approach

  if (isLoading) return <Loading />;

  return (
    <PrimaryLayout>
      <h3>{data?.title}</h3>
      <img
        style={{
          height: "25em",
          width: "100%",
        }}
        // loading="lazy"
        src={data?.images[0]}
        alt="product_image"
      />

      <p>{data?.description}</p>
      <p>$ {data?.price}</p>
    </PrimaryLayout>
  );
}

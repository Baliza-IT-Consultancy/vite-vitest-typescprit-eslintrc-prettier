import { Loading, PrimaryLayout } from "@components";
import { useProductDetails } from "@hooks";
import { useParams } from "react-router-dom";

import ProductDescription from "./productDescprition";
import ProductHeading from "./productHeading";
import ProductImage from "./productImage";
import ProductPrice from "./productPrice";

export default function ProductDetailsView() {
  const { id } = useParams();
  const { data, isLoading } = useProductDetails(id); //hook based approach

  if (isLoading) return <Loading />;

  return (
    <PrimaryLayout>
      <ProductHeading title={data?.title} />
      <ProductImage title={data?.title} thumbnail={data?.thumbnail} />
      <ProductDescription description={data?.description} />
      <ProductPrice price={data?.price} />
    </PrimaryLayout>
  );
}

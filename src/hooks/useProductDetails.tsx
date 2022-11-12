import queries from "@constants/query";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { IProductService } from "@/services/ProductService.Service";
import { IDispatch } from "@/store/store";

export default function UseProductDetails(id?: string) {
  const productService = new IProductService();
  const dispatch: IDispatch = useDispatch();
  return useQuery(
    [queries.singleProduct, id],
    () => {
      return productService.getSingleProduct(id);
    },
    {
      onSuccess(data) {
        dispatch.productModel.setSingleProduct(data);
      },
    }
  );
}

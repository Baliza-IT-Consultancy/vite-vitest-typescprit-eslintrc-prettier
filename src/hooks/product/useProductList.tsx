import queries from "@constants/query";
import { IInitialProductState } from "@MyTypes/product.type";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";

import { IProductService } from "@/services/ProductService.Service";
import { IDispatch } from "@/store/store";

export default function UseProductList() {
  const queryClient = useQueryClient();
  const dispatch: IDispatch = useDispatch();
  const productService = new IProductService();
  // const previousState = useSelector((state: IRootState) => state.productModel.products);
  // if (previousState?.length) {
  //   queryClient.invalidateQueries({ queryKey: [queries.ProductQuery] });
  //   return {
  //     isLoading: false,
  //     data: { products: previousState },
  //     isError: false,
  //   };
  // }
  return useQuery(
    [queries.ProductQuery],
    () => {
      return productService.getProducts();
    },
    {
      initialData: () => {
        const previousResult = queryClient.getQueryData(queries.ProductQuery);

        if (previousResult) {
          const typedResponse = previousResult as IInitialProductState;

          return typedResponse;
        }
        return undefined;
      },
      onSuccess: (data: IInitialProductState) => {
        data && dispatch.productModel.setProducts({ ...data, loading: false });
      },
    }
  );
}

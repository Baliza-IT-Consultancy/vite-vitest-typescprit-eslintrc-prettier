import { IInitialProductState } from "@MyTypes/product.type";
import { createModel } from "@rematch/core";

import { IProductService } from "@/services/ProductService.Service";

import { IRootModel } from ".";

const initialState: IInitialProductState = {
  total: 0,
  skip: 0,
  limit: 0,
  products: [],
  error: "",
  selectedProduct: undefined,
};

const productModel = createModel<IRootModel>()({
  state: initialState, // initial state
  reducers: {
    // handle state changes with pure functions
    setProducts(state, payload: IInitialProductState) {
      return {
        ...state,
        products: payload.products,
        loading: payload.loading,
        error: payload.error,
        limit: payload.limit,
        skip: payload.skip,
        total: payload.total,
      };
    },
    setSingleProduct(state, payload) {
      return {
        ...state,
        selectedProduct: payload,
      };
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async getProducts() {
      const productService = new IProductService();
      return productService.getProducts();
    },
  }),
});
export default productModel;

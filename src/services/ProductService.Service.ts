import { IInitialProductState, IProduct } from "@MyTypes/product.type";
import Request from "@utils/axios.util";

class IProductService {
  request;

  constructor() {
    this.request = Request;
  }
  //get list of products
  getProducts(): Promise<IInitialProductState> {
    return this.request({ url: "products" });
  }
  //get single product details
  getSingleProduct(id?: string): Promise<IProduct> {
    return this.request({ url: `products/${id}` });
  }
}

export { IProductService };

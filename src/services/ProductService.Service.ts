import { IInitialProductState, IProduct } from "@MyTypes/product.type";

import { IBaseService } from "./BaseService.service";

type IPayload = {
  title: string;
};

class IProductService extends IBaseService {
  constructor() {
    super();
  }
  //get list of products
  getProducts(): Promise<IInitialProductState> {
    return this.request({ url: "products" });
  }
  //get single product details
  getSingleProduct(id?: string): Promise<IProduct> {
    return this.request({ url: `products/${id}` });
  }
  postAProduct(payload: IPayload): Promise<IProduct> {
    return this.request({
      url: "products/add",
      method: "post",
      data: {
        title: payload.title,
      },
    });
  }
}

export { IProductService };

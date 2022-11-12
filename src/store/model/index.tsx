import { Models } from "@rematch/core";

import productModel from "./products";

export interface IRootModel extends Models<IRootModel> {
  productModel: typeof productModel;
}

export const models: IRootModel = { productModel };

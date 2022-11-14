import { Models } from "@rematch/core";

import { contactUsModel } from "./contactUs";
import productModel from "./products";

export interface IRootModel extends Models<IRootModel> {
  productModel: typeof productModel;
  contactUsModel: typeof contactUsModel;
}

export const models: IRootModel = { productModel, contactUsModel };

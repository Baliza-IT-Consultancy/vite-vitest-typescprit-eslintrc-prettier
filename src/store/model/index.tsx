import { Models } from "@rematch/core";

import { codeEditorModel } from "@/features/codeEditor/model/editorModel";

import { contactUsModel } from "./contactUs";
import productModel from "./products";

export interface IRootModel extends Models<IRootModel> {
  productModel: typeof productModel;
  contactUsModel: typeof contactUsModel;
  codeEditorModel: typeof codeEditorModel;
}

export const models: IRootModel = { productModel, contactUsModel, codeEditorModel };

import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import persistPlugin from "@rematch/persist";
import selectPlugin from "@rematch/select";
import updatedPlugin, { ExtraModelsFromUpdated } from "@rematch/updated";
// import createCachedSelector from "re-reselect";
import storage from "redux-persist/lib/storage";

import { IRootModel, models } from "./model";

type IFullModel = ExtraModelsFromLoading<IRootModel, { type: "full" }> &
  ExtraModelsFromUpdated<IRootModel>;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productModel", "contactUsModel"],
};

export const store = init<IRootModel, IFullModel>({
  models,
  plugins: [
    selectPlugin({
      // selectorCreator: createCachedSelector,
    }),
    updatedPlugin(),
    loadingPlugin({ type: "full" }),
    immerPlugin(),
    persistPlugin(persistConfig),
  ],
});

export type IStore = typeof store;
export type IDispatch = RematchDispatch<IRootModel>;
export type IRootState = RematchRootState<IRootModel, IFullModel>;
export const { select } = store;

export default store;

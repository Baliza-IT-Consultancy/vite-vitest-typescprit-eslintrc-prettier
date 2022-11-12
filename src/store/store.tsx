import { init, RematchDispatch, RematchRootState } from "@rematch/core";

import { IRootModel, models } from "./model";

export const store = init({
  models,
});

export type IStore = typeof store;
export type IDispatch = RematchDispatch<IRootModel>;
export type IRootState = RematchRootState<IRootModel>;

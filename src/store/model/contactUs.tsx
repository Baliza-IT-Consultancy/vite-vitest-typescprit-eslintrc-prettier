import { createModel } from "@rematch/core";

import { IRootModel } from "./index";

type IInitialState = {
  name: string;
  phone: number | string;
  address: string;
};

const initialState: IInitialState = {
  name: "",
  phone: "",
  address: "",
};

export const contactUsModel = createModel<IRootModel>()({
  state: initialState,
  reducers: {
    HandleName(state, payload: string) {
      return {
        ...state,
        name: payload,
      };
    },
    HandlePhone(state, payload: string) {
      return {
        ...state,
        phone: payload,
      };
    },
    HandleAddress(state, payload: string) {
      return {
        ...state,
        address: payload,
      };
    },
    ResetForm() {
      return {
        ...initialState,
      };
    },
  },
});

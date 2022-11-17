import { createModel } from "@rematch/core";

import { IRootModel } from "@/store/model";

type IInitialEditorState = {
  code: string;
  defaultLanguage: string;
  defaultValue: string;
};

const initialEditorState: IInitialEditorState = {
  code: "",
  defaultLanguage: "javascript",
  defaultValue: "// some comment",
};

export const codeEditorModel = createModel<IRootModel>()({
  state: initialEditorState,
  reducers: {
    setCode(state, payload) {
      return {
        ...state,
        code: payload,
      };
    },
    setDefaultValue(state, payload) {
      return {
        ...state,
        defaultValue: payload,
      };
    },
    setDefaultLanguage(state, payload) {
      return {
        ...state,
        defaultLanguage: payload,
      };
    },
  },
});

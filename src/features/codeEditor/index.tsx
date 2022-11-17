import Editor from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";

import { IDispatch, IRootState } from "@/store/store";

export default function CodeEditor() {
  const dispatch: IDispatch = useDispatch();
  const codeState = useSelector((state: IRootState) => state.codeEditorModel);
  return (
    <Editor
      onChange={(e) => dispatch.codeEditorModel.setCode(e)}
      width={"40vh"}
      height="40vh"
      defaultLanguage={codeState.defaultLanguage}
      defaultValue={codeState.defaultValue}
    />
  );
}

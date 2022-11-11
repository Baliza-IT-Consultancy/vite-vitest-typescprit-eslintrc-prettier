import type { IButton } from "@MyTypes/button.type";
import React from "react";

export default function Button(prop: IButton) {
  return <button onClick={prop.onclick}>{prop.label || "click me"}</button>;
}

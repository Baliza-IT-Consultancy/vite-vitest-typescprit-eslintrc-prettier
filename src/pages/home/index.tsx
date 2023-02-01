import { Button } from "@components";
import { NavigateFunction, useNavigate } from "react-router-dom";

import logo from "../../assets/react.svg";

export default function Home() {
  const navigate: NavigateFunction = useNavigate();

  function HandleNav(): void {
    navigate("/products");
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <img alt="react-logo" src={logo} />
      <Button label="show Products" onclick={HandleNav} />
    </div>
  );
}

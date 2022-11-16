// import { Button, ContactUs } from "@components";
// import { NavigateFunction, useNavigate } from "react-router-dom";

import MapComponent from "@/features";

export default function Home() {
  // const navigate: NavigateFunction = useNavigate();

  // function HandleNav(): void {
  //   navigate("/products");
  // }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* <ContactUs /> */}
      <MapComponent />
      {/* <Button label="show Products" onclick={HandleNav} /> */}
    </div>
  );
}

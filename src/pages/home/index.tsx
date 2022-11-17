// import { Button, ContactUs } from "@components";
// import { NavigateFunction, useNavigate } from "react-router-dom";

import CodeEditor from "@/features/codeEditor";

export default function Home() {
  // const navigate: NavigateFunction = useNavigate();

  // function HandleNav(): void {
  //   navigate("/products");
  // }
  return (
    <div>
      {/* <ContactUs /> */}
      {/* <MapComponent /> */}
      <CodeEditor />
      {/* <Button label="show Products" onclick={HandleNav} /> */}
    </div>
  );
}

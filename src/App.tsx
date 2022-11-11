import "./App.css";

import { Button, PrimaryLayout } from "@components";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <PrimaryLayout>
      <Button onclick={() => setCount((Prev) => Prev + 1)} label={`count ${count}`} />
    </PrimaryLayout>
  );
}

export default App;

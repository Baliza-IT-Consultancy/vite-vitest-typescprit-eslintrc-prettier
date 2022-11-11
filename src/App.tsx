import "./App.css";

import { Button } from "@components";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return <Button onclick={() => setCount((prev) => prev + 1)} label={`count ${count}`} />;
}

export default App;

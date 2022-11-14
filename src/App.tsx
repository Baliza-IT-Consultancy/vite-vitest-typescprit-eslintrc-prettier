import "./App.css";

import AppRoutes from "@pages";
import queryClient from "@utils/reactQuery.util";
import { QueryClientProvider } from "react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;

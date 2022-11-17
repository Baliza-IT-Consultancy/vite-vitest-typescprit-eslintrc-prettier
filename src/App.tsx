import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

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

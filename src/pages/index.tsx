import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./home";
import ProductPage from "./product";
import ProductDetailsView from "./product/components/productDetailsView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route
        path={"/products"}
        element={
          <Suspense fallback="loading..">
            <ProductPage />
          </Suspense>
        }
      />
      <Route
        path={"/products/:id"}
        element={
          <Suspense fallback="loading..">
            <ProductDetailsView />
          </Suspense>
        }
      />
    </Routes>
  );
}

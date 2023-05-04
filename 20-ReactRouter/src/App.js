import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/Product";
import HomePage from "./pages/Home";
import RootLayuout from "./pages/Root";
import Error from "../src/pages/Error";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayuout />,
    errorElement: <Error></Error>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductPage></ProductPage>,
        errorElement: <Error></Error>
      },
      { path: "products/:productId", element: <ProductDetails /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

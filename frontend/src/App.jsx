import { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router1 = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router1} />
    </>
  );
}

export default App;

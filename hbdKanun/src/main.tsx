import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Q from "./pages/q.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHbd from "./pages/main-hbd.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/q",
    element: <Q />,
  },
  {
    path: "/nunnunday",
    element: <MainHbd />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

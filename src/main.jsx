import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { routes } from "./routing/routes";
import StaysTypesProvider from "./contexts/stays_types_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={routes} />
  </React.StrictMode>
);

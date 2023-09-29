import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { routes } from "./routing/routes";
import CarsTypesProvider from "./contexts/cars_types_context.jsx";
import ExperiencesTypesProvider from "./contexts/experiences_types_context.jsx";
import StaysTypesProvider from "./contexts/stays_types_context.jsx";

// import StaysTypesProvider from "./contexts/stays_types_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StaysTypesProvider>
      <ExperiencesTypesProvider>
        <CarsTypesProvider>
          <RouterProvider router={routes} />
        </CarsTypesProvider>
      </ExperiencesTypesProvider>
    </StaysTypesProvider>
  </React.StrictMode>
);

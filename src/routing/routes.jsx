import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Stays from "../pages/homepage/stays/stays";
import Cars from "../pages/homepage/cars/cars";
import Experience from "../pages/homepage/experience/experience";

export const routes = createBrowserRouter([
  {
    path: "/",

    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Stays />,
      },
      {
        index: true,
        path: "/stays",
        element: <Stays />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/experiences",
        element: <Experience />,
      },
    ],
  },
]);

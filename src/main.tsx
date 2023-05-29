import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/root";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import History from "./components/history";
import { addItem, getItem } from "./controllers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    action: addItem,
    loader: getItem,
    children: [
      {
        index: true,
        element: <History />,
        loader: getItem,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

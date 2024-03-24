import LayoutApp from "@layouts/LayoutApp";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

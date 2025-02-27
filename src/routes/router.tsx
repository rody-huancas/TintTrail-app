import LayoutApp from "@layouts/LayoutApp";
import { ExtractColorPalette } from "@pages/ExtractColorPalette";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { UploadImage } from "@pages/UploadImage";
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
      {
        path: "/upload-image",
        element: <UploadImage />,
      },
      {
        path: "/extract-color-palette",
        element: <ExtractColorPalette />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

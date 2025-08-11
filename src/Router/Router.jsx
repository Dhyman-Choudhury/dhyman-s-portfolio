import { createBrowserRouter } from "react-router";
import RootLayouts from "../RootLayouts/RootLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
  },
]);
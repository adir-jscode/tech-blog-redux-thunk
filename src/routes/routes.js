import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Main/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;

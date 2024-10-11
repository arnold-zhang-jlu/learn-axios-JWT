import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element: <div>register</div>,
  },
]);

export default router;

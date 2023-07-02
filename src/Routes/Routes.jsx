import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import FrontLayout from "../Components/Layout/FrontLayout";
import ErrorPage from "../Page/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>This is home page</div>,
      },
      {
        path: "/shop",
        element: <div>This is shop page</div>,
      },
      {
        path: "/about",
        element: <div>This is about page</div>,
      },
      {
        path: "/blog",
        element: <div>This is blog page</div>,
      },
      {
        path: "/contact",
        element: <div>This is contact page</div>,
      },
    ],
  },
  {
    path: "admin",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <div>This is dashboard page</div>,
      },
      {
        path: "products",
        element: <div>This is products page</div>,
      },
      {
        path: "sales",
        element: <div>This is sales page</div>,
      },
      {
        path: "delivery",
        element: <div>This is delivery page</div>,
      },
      {
        path: "reports",
        element: <div>This is reports page</div>,
      },
    ],
  },
]);

export default router;

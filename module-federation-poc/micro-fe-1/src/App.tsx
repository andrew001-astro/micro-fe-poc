import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  UserCreateForm,
  UserEditForm,
  UserLayout,
  UserList,
} from "./pages/users";

const router = createBrowserRouter([
  {
    path: "",
    element: <>Welcome to Micro FE 1</>,
  },
  {
    path: "/users",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <UserList />,
      },
      {
        path: "create",
        element: <UserCreateForm />,
      },
      {
        path: "edit/:id",
        element: <UserEditForm />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);

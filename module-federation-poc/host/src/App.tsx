import React from "react";
import ReactDOM from "react-dom/client";
import {
  UserLayout,
  UserList,
  UserCreateForm,
  UserEditForm,
} from "micro-fe-1/Users";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/default";
const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <>Welcome to Host</>,
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
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);

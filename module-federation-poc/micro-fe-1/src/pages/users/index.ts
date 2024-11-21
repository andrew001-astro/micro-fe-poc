import { lazy } from "react";
const UserLayout = lazy(() => import("./layout"));
const UserList = lazy(() => import("./list"));
const UserCreateForm = lazy(() => import("./create"));
const UserEditForm = lazy(() => import("./edit"));

export { UserList, UserCreateForm, UserEditForm, UserLayout };

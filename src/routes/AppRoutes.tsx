import React from "react";
import { Route, Routes } from "react-router";

import { standaloneRoutes } from "./standaloneRoutes";
import { layoutAdminRoutes } from "./layoutAdminRoutes";
import LayoutAdmin from "../components/Layout/SideLayout/LayoutAdmin";
import LayoutManager from "../components/Layout/SideLayout/LayoutManager";
import { layoutManagerRoutes } from "./layoutManagerRoutes";

import LayoutStudent from "../components/Layout/TopLayout/LayoutStudent";
import { layoutStudentRoutes } from "./layoutStudentRoutes";
import { useSelector } from "react-redux";

import LayoutCoordinator from "../components/Layout/TopLayout/LayoutCoordinator";
import { layoutCoordinatorRoutes } from "./layoutCoordinator";
import LayoutGuest from "../components/Layout/TopLayout/LayoutGuest";
import { layoutGuestRoutes } from "./layoutGuest";
import { RootState } from "../store";

export default function AppRoutes() {
  const { userProfile } = useSelector(
    (state: RootState) => state.userProfileState,
  );

  return (
    <Routes>
      {userProfile?.role === "ADMIN" && (
        <Route path="/" element={<LayoutAdmin />}>
          {layoutAdminRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      )}
      {userProfile?.role === "MANAGER" && (
        <Route path="/" element={<LayoutManager />}>
          {layoutManagerRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      )}

      {userProfile?.role === "STUDENT" && (
        <Route path="/" element={<LayoutStudent />}>
          {layoutStudentRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      )}

      {userProfile?.role === "COORDIONATOR" && (
        <Route path="/" element={<LayoutCoordinator />}>
          {layoutCoordinatorRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      )}

      {userProfile?.role === "GUEST" && (
        <Route path="/" element={<LayoutGuest />}>
          {layoutGuestRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      )}

      {standaloneRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
}

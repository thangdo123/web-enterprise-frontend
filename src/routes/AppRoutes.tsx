import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";

import { standaloneRoutes } from "./standaloneRoutes";
import { decodeCookie, getCookie } from "../utils/cookies.utils";
import { layoutAdminRoutes } from "./layoutAdminRoutes";
import LayoutAdmin from "../components/Layout/SideLayout/LayoutAdmin";
import LayoutManager from "../components/Layout/SideLayout/LayoutManager";
import { layoutManagerRoutes } from "./layoutManagerRoutes";

import LayoutStudent from "../components/Layout/TopLayout/LayoutStudent";
import { layoutStudentRoutes } from "./layoutStudentRoutes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { getAdminProfile, getUserProfile } from "../store/slices/userProfile";
import LayoutCoordinator from "../components/Layout/TopLayout/LayoutCoordinator";
import { layoutCoordinatorRoutes } from "./layoutCoordinator";

export default function AppRoutes() {
  const dispatch = useDispatch<AppDispatch>();
  const token = getCookie("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (decodeCookie(token) === "ADMIN") {
      dispatch(getAdminProfile());
    } else {
      dispatch(getUserProfile());
    }
  }, []);

  return (
    <Routes>
      {decodeCookie(token) === "ADMIN" && (
        <Route path="/" element={<LayoutAdmin />}>
          {layoutAdminRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      )}
      {decodeCookie(token) === "MANAGER" && (
        <Route path="/" element={<LayoutManager />}>
          {layoutManagerRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      )}

      {decodeCookie(token) === "STUDENT" && (
        <Route path="/" element={<LayoutStudent />}>
          {layoutStudentRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      )}

      {decodeCookie(token) === "COORDIONATOR" && (
        <Route path="/" element={<LayoutCoordinator />}>
          {layoutCoordinatorRoutes.map(({ path, component }) => (
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

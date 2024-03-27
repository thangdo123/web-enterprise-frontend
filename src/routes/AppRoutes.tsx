import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";

import { standaloneRoutes } from "./standaloneRoutes";
import { decodeCookie, getCookie } from "../utils/cookies";
import { layoutAdminRoutes } from "./layoutAdminRoutes";
import LayoutAdmin from "../components/Layout/LayoutAdmin";
import LayoutManager from "../components/Layout/LayoutManager";
import { layoutManagerRoutes } from "./layoutManagerRoutes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { getAdminProfile } from "../store/slices/userProfile";

export default function AppRoutes() {
  const dispatch = useDispatch<AppDispatch>();
  const token = getCookie("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    dispatch(getAdminProfile());
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

      {standaloneRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
}

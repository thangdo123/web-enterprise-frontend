import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Layout from "../components/Layout/Layout";
import { layoutRoutes } from "./layoutRoutes";
import { standaloneRoutes } from "./standaloneRoutes";
import { getCookie } from "../utils/cookies";

export default function AppRoutes() {
  const token = getCookie("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {layoutRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>

      {standaloneRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
}

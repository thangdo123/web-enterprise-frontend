import React from "react";
import "./assets/css/global.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

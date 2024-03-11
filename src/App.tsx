import React from "react";
import "./assets/css/global.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

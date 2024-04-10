import React, { useEffect } from "react";
import "./assets/css/global.css";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./providers/AppProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import socket from "./socket";


function App() {
  useEffect(()=>{
    socket;
  }, []);
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;

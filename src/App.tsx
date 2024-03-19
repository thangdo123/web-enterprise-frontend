import React from "react";
import "./assets/css/global.css";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./providers/AppProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;

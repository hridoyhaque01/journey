import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import "./index.css";
import("preline");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <WallpaperProvider> */}
      <App />
      {/* </WallpaperProvider> */}
    </AuthProvider>
  </React.StrictMode>
);

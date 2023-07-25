import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { PostProvider } from "./contexts/postContext.jsx";
import "./index.css";
import("preline");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PostProvider>
        {/* <WallpaperProvider> */}
        <App />
        {/* </WallpaperProvider> */}
      </PostProvider>
    </AuthProvider>
  </React.StrictMode>
);

import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLoader from "./assets/ui/AuthLoader";
import { useAuth } from "./contexts/AuthContext";
import { routes } from "./routes/Router";

function App() {
  const Router = routes;
  const { isLoading } = useAuth();
  return isLoading ? (
    <AuthLoader></AuthLoader>
  ) : (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;

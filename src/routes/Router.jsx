import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/authentication/Login";
import Comments from "../pages/comments/Comments";
import Home from "../pages/home/Home";
import Popular from "../pages/popular/Popular";
import Posts from "../pages/posts/Posts";
import Users from "../pages/users/Users";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout></Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/comments",
        element: <Comments></Comments>,
      },
      {
        path: "/popular",
        element: <Popular></Popular>,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);

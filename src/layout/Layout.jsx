import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location);

  const permissons = useMemo(() => [], []);

  useEffect(() => {
    const path = localStorage.getItem("location");
    if (path) {
      navigate(`/${path}`);
    } else if (permissons?.length > 0) {
      navigate(`/${permissons[0]}`);
    } else if (permissons?.length === 0) {
      navigate(`/404`);
    }
  }, [navigate, permissons]);

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (permissons?.includes(path)) {
      localStorage.setItem("location", path);
    }
  }, [location.pathname, permissons]);

  return (
    <div className="h-screen w-full overflow-hidden bg-whiteLow">
      <Navbar></Navbar>
      <div className="flex flex-col lg:flex-row h-[calc(100%-83px)] overflow-auto">
        <Sidebar></Sidebar>
        <div className="w-full relative">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;

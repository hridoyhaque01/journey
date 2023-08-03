import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import { useAuth } from "../contexts/AuthContext";

function Layout() {
  const { permissions } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const permit = permissions?.sort();
  console.log(permissions);
  // console.log(location);

  useEffect(() => {
    const path = localStorage.getItem("location");
    if (path) {
      navigate(`/${path}`);
    } else if (permissions?.length > 0) {
      const permit = permissions?.sort();
      const path = permit[0]?.substring(1);
      navigate(`/${path}`);
    }
  }, [navigate, permissions]);

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

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";

function Layout() {
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
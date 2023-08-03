import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Popular() {
  const navigate = useNavigate();
  const { sortedPermissions } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const path = location?.pathname.substring(1);
    if (sortedPermissions?.includes(path)) {
      navigate(`/${path}`);
      localStorage.setItem("location", path);
    } else {
      navigate("/404");
    }
  }, [location?.pathname, navigate, sortedPermissions]);

  return <div>Popular</div>;
}

export default Popular;

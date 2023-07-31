import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Redirect() {
  const navigate = useNavigate();

  const permissons = useMemo(() => ["dashboard", "users", "posts"], []);

  useEffect(() => {
    if (permissons?.length > 0) {
      navigate("/dashboard");
    }
  }, [navigate, permissons]);

  return <div>hello</div>;
}

export default Redirect;

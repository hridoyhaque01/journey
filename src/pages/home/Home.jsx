import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(false);
    }
  };

  return (
    <section className="py-8 h-full overflow-auto relative">
      <h1>hello</h1>
      <button
        className="px-8 py-3 text-lg bg-green text-white rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
      <br />
      <br />
      <Link to="/post">post</Link>
    </section>
  );
}

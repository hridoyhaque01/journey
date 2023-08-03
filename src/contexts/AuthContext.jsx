import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  const [permissions, setPermissions] = useState([
    "2users",
    "3posts",
    "1dashboard",
  ]);

  const sortedPermissions = permissions
    ?.map((permission) => permission.slice(1))
    .sort();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = {
    isLoading,
    login,
    user,
    logout,
    permissions,
    sortedPermissions,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

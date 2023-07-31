import { useAuth } from "../contexts/AuthContext";

const useGetAuthChecked = () => {
  const { isLoading, user } = useAuth();
  //   const navigate = useNavigate();
  const permisson = "user";

  return isLoading;
};

export default useGetAuthChecked;

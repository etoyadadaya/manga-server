import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const useRequireAuth = (redirectUrl: string) => {
  const navigate = useNavigate();

  useEffect(() => {}, []);
};

export default useRequireAuth;

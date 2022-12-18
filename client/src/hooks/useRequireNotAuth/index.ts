import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const useRequireNotAuth = (redirectUrl: string) => {
  const navigate = useNavigate();

  useEffect(() => {}, []);
};

export default useRequireNotAuth;

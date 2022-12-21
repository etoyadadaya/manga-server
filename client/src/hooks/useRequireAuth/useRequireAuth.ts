import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import authAtom from "../../store/auth/atom";

const useRequireAuth = (redirectUrl = "/") => {
  const navigate = useNavigate();
  const { isAuth } = useRecoilValue(authAtom);

  useEffect(() => {
    if (!isAuth) {
      navigate(redirectUrl);
    }
  }, [isAuth, redirectUrl, navigate]);
};

export default useRequireAuth;
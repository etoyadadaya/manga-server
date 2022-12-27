/* eslint react-hooks/exhaustive-deps: "off" */
import {useRecoilState, useSetRecoilState} from "recoil";
import {useTokenizedApiCall} from "../useTokenizedApiCall/useTokenizedApiCall";
import auth from "../../store/auth/atom";
import user from "../../store/user/atom";
import UserCache from "../../services/userCache/userCache";
import {User} from "../../types";
import {useEffect} from "react";

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const useCheckAuth = () => {
  const authHost = useTokenizedApiCall();
  const [Auth, setAuth] = useRecoilState(auth);
  const setUser = useSetRecoilState(user);

  useEffect(() => {
    if (UserCache.checkStore()) {
      authHost
        .post<Tokens>("/auth/refresh")
        .then(res => {
          setAuth({
            isAuth: true,
            isLoading: Auth.isLoading,
            token: res.data.accessToken,
          });
          if (UserCache.checkStore()) {
            let user: User;
            try {
              user = UserCache.getStore();
            } catch (e) {
              authHost.get<User>("/users").then(res => {
                user = res.data;
              });
            }
            setUser({
              id: user.id,
              email: user.email,
            });
            setAuth({
              isAuth: true,
              isLoading: false,
              token: Auth.token,
            });
          } else {
            authHost
              .get<User>("/users")
              .then(res => {
                setUser({
                  id: res.data.id,
                  email: res.data.email,
                });
                UserCache.setStore({
                  id: res.data.id,
                  email: res.data.email,
                } as User);
              })
              .finally(() => {
                setAuth({
                  isAuth: true,
                  isLoading: false,
                  token: Auth.token,
                });
              });
          }
        })
        .catch(() => {
          UserCache.clearStore();
        });
    }
  }, []);
};

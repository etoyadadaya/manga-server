import axios from "axios";
import { useRecoilState } from "recoil";
import auth from "../../store/auth/atom";

const authHost = axios.create({
  baseURL: "http://127.0.0.1:666",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export const useTokenizedApiCall = () => {
  const [{ token }, setAuth] = useRecoilState(auth);

  authHost.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  authHost.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest.retry) {
        originalRequest.retry = true;
        return authHost
          .post<{ accessToken: string; refreshToken: string }>("/auth/refresh")
          .then((res) => {
            if (res.status === 201) {
              setAuth({
                isAuth: false,
                isLoading: true,
                token: res.data.accessToken,
              });
              return authHost(originalRequest);
            }
          });
      }
      await Promise.resolve(error);
    }
  );

  return authHost;
};
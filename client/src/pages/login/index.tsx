import React, { useState } from "react";
import styles from "./styles.scss";
import { useSetRecoilState } from "recoil";
import auth from "../../store/auth/atom";
import user from "../../store/user/atom";
import { useForm } from "react-hook-form";
import { useTokenizedApiCall } from "../../hooks/useTokenizedApiCall/useTokenizedApiCall";
import { User } from "../../types/user/user";
import useApiCall from "../../hooks/useApiCall";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import UserCache from "../../services/userCache/userCache";
import useRequireNotAuth from "../../hooks/useRequireNotAuth/useRequireNotAuth";

const Login = () => {
  useRequireNotAuth("/?name=berserk");
  const authHost = useTokenizedApiCall();
  const apiCall = useApiCall();
  const setAuth = useSetRecoilState(auth);
  const setUser = useSetRecoilState(user);
  const [signIn, setSignIn] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const submit = handleSubmit((data) => {
    apiCall
      .post(signIn ? "/auth/registration" : "auth/login", data)
      .then((res) => {
        getUser(res.data.access_token);
      });
  });

  const getUser = (token: string) => {
    setAuth({
      isAuth: true,
      isLoading: true,
      token: token,
    });
    setTimeout(() => {
      authHost.get<User>("/users/@me").then((res) => {
        UserCache.setStore({
          id: res.data.id,
          email: res.data.email,
        });
        setUser({
          id: res.data.id,
          email: res.data.email,
        });
        setAuth({
          isAuth: true,
          isLoading: false,
          token: token,
        });
      });
    }, 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.welcome}>Welcome Back!</h1>
        <form onSubmit={submit} className={styles.wrap}>
          <Input
            register={register("email", {
              required: "Required field",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email",
              },
            })}
            placeholder="Enter your email"
          />
          <Input
            register={register("password", {
              required: "Required field",
              minLength: {
                value: 4,
                message: "Min 4 characters",
              },
              maxLength: {
                value: 50,
                message: "Max 50 characters",
              },
            })}
            placeholder="Enter your password"
          />
          <div className={styles.buttons}>
            <Button type={"submit"} variant="primary">
              {signIn ? "Registration" : "Login"}
            </Button>
            <div className={styles.switch}>
              <p className={styles.needAcc}>
                {!signIn ? "Need an account?" : "Already have account?"}
              </p>
              <Button onClick={() => setSignIn(!signIn)} variant="switch">
                {!signIn ? "Registration" : "Login"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
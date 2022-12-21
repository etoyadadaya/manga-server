import React, {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./main";
import Admin from "./admin";
import Login from "./login";
import {useCheckAuth} from "../hooks/useCheckAuth/useCheckAuth";

const Router: FC = () => {
  useCheckAuth();

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/admin"
          element={<Admin />}
        />
      </Routes>
    </Suspense>
  );
};

export default Router;

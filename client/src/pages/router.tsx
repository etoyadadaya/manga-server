import React, {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./main";
import Admin from "./admin";
import Login from "./login";
import Settings from "./settings";
import {useCheckAuth} from "../hooks/useCheckAuth/useCheckAuth";
import Public from "./settings/public";
import Account from "./settings/account";
import Appearance from "./settings/appearance";
import Notifications from "./settings/notifications";

const Router: FC = () => {
  useCheckAuth();

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        >
          <Route
            path="public"
            element={<Public />}
          />
          <Route
            path="account"
            element={<Account />}
          />
          <Route
            path="appearance"
            element={<Appearance />}
          />
          <Route
            path="notifications"
            element={<Notifications />}
          />
        </Route>
        <Route
          path="/admin"
          element={<Admin />}
        />
      </Routes>
    </Suspense>
  );
};

export default Router;

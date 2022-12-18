import React, {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./main";
import Admin from "./admin";

const Router: FC = () => (
  <Suspense fallback="Loading...">
    <Routes>
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

export default Router;

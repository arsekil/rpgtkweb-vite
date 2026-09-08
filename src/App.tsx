"use client";

import { Routes, Route } from "react-router";
import {
  LandingLayout,
  LandingPage,
  AuthLayout,
  AuthScreen,
} from "./components/index";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="auth/:mode" element={<AuthScreen />} />
      </Route>
      //TODO create site routes
      {/* <Route element={<ProtectedLayout />}>

      </Route> */}
    </Routes>
  );
}

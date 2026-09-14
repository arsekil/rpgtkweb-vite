"use client";

import { Routes, Route } from "react-router";
import {
  LandingLayout,
  LandingPage,
  AuthLayout,
  AuthScreen,
} from "./components/index";
import { SiteLayout as ProtectedLayout, Home } from "./components/Site/index";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="auth/:mode" element={<AuthScreen />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

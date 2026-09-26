"use client";

import { Outlet } from "react-router";
import { Header, Footer, Tidbit, Powered } from "../index";

export default function Layout() {
  return (
    <div
      id="home"
      className={`bg-[url('/tk/core/bkg.png')] bg-repeat min-h-screen flex flex-col items-center justify-center gap-4`}
    >
      <div
        id="container"
        className="relative z-2 w-237.5 h-200 my-0 mx-auto mt-2.5 bg-black flex flex-col items-center justify-items-start justify-between"
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
      <Tidbit />
      <Powered route="home"/>
    </div>
  );
}

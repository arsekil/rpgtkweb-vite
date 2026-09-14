import React from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@appwrite.io/react";
import { Icon } from "@mdi/react";
import { mdiMagnify, mdiLogout } from "@mdi/js";
import { Menu } from "../index";

// TODO: add dynamically changing background image into "header" - e.g. bg-[url('/tk/core/2.jpg')] bg-no-repeat bg-center bg-cover
// TODO: add Search input functionality

export default function Header() {
  const [authError, setAuthError] = React.useState<string>();
  const { error, user, signOut } = useAuth();
  const navigate = useNavigate();

  if (error) {
    setAuthError(error.message);
  }

  if (authError) {
    return (
      <div className="w-2xs h-screen flex justify-center items-center border rounded-lg border-orange-900 bg-zinc-700 text-white">
        {authError}
      </div>
    );
  }

  return (
    <header
      id="header"
      className="relative w-full h-52.5 bg-[url('/tk/core/2.jpg')] bg-no-repeat bg-center bg-cover"
    >
      <div
        id="barA"
        className="absolute w-full position top-0 right-0 left-0 h-16 bg-[url('/tk/core/bar-bkg.png')] flex flex-row justify-between items-center"
      >
        <div id="logo" className="pt-4 pl-4 w-52 h-16">
          <Link to="/">
            <img
              src="/tk/logo.png"
              alt="RPGToolkit Logo"
              width={200}
              height={49}
              loading="eager"
              className="no-underline aspect-200/49"
            />
          </Link>
        </div>
        <div
          id="userbox"
          className="flex flex-row justify-center items-center gap-6 w-60 h-16"
        >
          <div className="text-white text-sm font-bold">
            Welcome, {user?.name}!
          </div>
          <div
            className="cursor-pointer"
            onClick={() => signOut.signOut({ onSuccess: () => navigate("/") })}
          >
            <Icon path={mdiLogout} size={0.8} color={"white"} />
          </div>
        </div>
        <div
          id="search"
          className="flex flex-row items-center justify-center m-4 w-46 h-7 bg-[url('/tk/core/search-bkg.png')] bg-no-repeat bg-center"
        >
          <input
            id="search-input"
            type="text"
            placeholder="enter keyword(s)"
            className="w-36 h-4 bg-transparent border-none focus:outline-none"
          />
          <Icon
            path={mdiMagnify}
            size={0.7}
            className="cursor-pointer"
            rotate={90}
          />
        </div>
      </div>
      <div
        id="barB"
        className="absolute w-full right-0 bottom-0 left-0 h-7 bg-[url('/tk/core/menu-bkg.png')]"
      >
        <Menu />
      </div>
    </header>
  );
}

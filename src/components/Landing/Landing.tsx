"use client";

import { Link } from "react-router";
import { Icon } from "@mdi/react";
import { mdiLogin, mdiAccountPlus, mdiSword, mdiLogout } from "@mdi/js";
import { useAuth, useUser } from "@appwrite.io/react";

export default function Landing() {
  const { isLoading, signOut } = useAuth();
  const { user } = useUser();
  return (
    <section className="w-full box-border flex flex-col items-center justify-center p-4">
      <video
        className="pb-8"
        width={512}
        height={512}
        autoPlay
        loop
        playsInline
        muted
      >
        <source src="/tk/tksword.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-max flex flex-col items-center justify-center text-center">
        <div className="pb-4">
          <p className="text-3xl font-bold">rpgtoolkit.net</p>
        </div>
        <div className="pb-4">
          <p className="text-sm font-medium">
            A free and open-source toolkit with 2D, 2.5D and 3D capabilities
          </p>
        </div>
      </div>
      {isLoading && !user ? (
        <div className="w-full box-border flex flex-col justify-center items-center gap-4">
          <img
            src="/tk/core/loading-edited.gif"
            width={30}
            height={30}
            alt="Loading..."
          />
        </div>
      ) : null}
      {user && !isLoading ? (
        <div className="flex flex-row justify-center gap-8 p-4">
          <div className="bg-white p-2 hover:text-white hover:bg-black">
            <Link to="/home" className="flex flex-row gap-2 ">
              <Icon
                path={mdiSword}
                title="Toolkit Homepage"
                size={1}
                rotate={225}
              />
              <p className="text-md font-medium">Home</p>
            </Link>
          </div>
          <div
            onClick={() => signOut.signOut()}
            className="flex flex-row gap-2 bg-white p-2 hover:text-white hover:bg-black cursor-pointer"
          >
            <Icon path={mdiLogout} size={1} title="Log Out Button" />
            <p className="text-md font-medium">Log Out</p>
          </div>
        </div>
      ) : null}
      {!user && !isLoading ? (
        <div className="flex flex-row justify-center gap-8 p-4">
          <div className=" p-2 bg-white hover:text-white hover:bg-black">
            <Link
              to="/auth/signin"
              className="flex flex-row gap-2 text-medium font-medium"
            >
              <Icon path={mdiLogin} title="Sign In" size={1} />
              Sign In
            </Link>
          </div>
          <div className=" bg-white p-2 hover:text-white hover:bg-black">
            <Link
              to="/auth/signup"
              className="flex flex-row gap-2 text-medium font-medium"
            >
              <Icon path={mdiAccountPlus} title="Sign Up" size={1} />
              Sign Up
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}

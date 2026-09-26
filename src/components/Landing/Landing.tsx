"use client";

import { Link, Navigate } from "react-router";
import { Icon } from "@mdi/react";
import { mdiLogin, mdiAccountPlus } from "@mdi/js";
import { Powered } from "../../components/index";
import useAuthUser from "../../hooks/useAuthUser";

export default function Landing() {
  const { user } = useAuthUser();

  if (user) return <Navigate to="/home" replace />;

  return (
    <section className="w-full box-border flex flex-col items-center justify-center gap-5 p-4">
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
      <Powered route="landing"/>
    </section>
  );
}

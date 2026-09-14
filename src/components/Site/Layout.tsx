import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "@appwrite.io/react";
import { Header, Footer, Tidbit } from "../index";

export default function Layout() {
  // const [authError, setAuthError] = React.useState<Error>();
  // const navigate = useNavigate();
  // const { user, error } = useAuth();

  // React.useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, [navigate, user]);

  // React.useEffect(() => {
  //   if (!user) {
  //     setAuthError(error as Error);
  //   }
  // }, [user]);

  // if (authError) {
  //   return (
  //     <div className="w-2xs h-screen flex justify-center items-center border rounded-lg border-orange-900 bg-zinc-700 text-white">
  //       {authError as unknown as string}
  //     </div>
  //   );
  // }

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
    </div>
  );
}

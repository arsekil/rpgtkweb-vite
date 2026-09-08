import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-zinc-950">
      <Outlet />
    </div>
  );
}

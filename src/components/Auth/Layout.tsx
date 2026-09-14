import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white">
      <Outlet />
    </div>
  );
}

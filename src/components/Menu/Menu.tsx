import { Link, useLocation } from "react-router";

type TMenuItems = {
  label: string;
  href: string;
}[];

const menuItems: TMenuItems = [
  { label: "home", href: "/home" },
  { label: "software", href: "/software/toolkit" },
  { label: "extend", href: "/extend/latest" },
  { label: "tutorials", href: "/tutorials/latest" },
  { label: "games", href: "/games/latest" },
  { label: "devlog", href: "/devlog/feed" },
  { label: "forum", href: "/community" },
];

export default function Menu() {
  const { pathname } = useLocation();
  return (
    <div className="ml-3 flex flex-row justify-start items-center gap-2 h-full font-bold text-sm">
      {menuItems.map((item) => (
        <div
          key={item.href}
          className={`p-2 pb-0 rounded-t-xl ${pathname === item.href ? "bg-menu-selected-bg" : "transition-colors ease-in-out duration-300 hover:bg-menu-selected-bg"}`}
        >
          <Link
            to={item.href}
            className="text-white"
            title={`${pathname === item.href ? `You are in the ${item.label} section` : `Go to the ${item.label} section`}`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

import firebaseLogo from "../../assets/Logomark_Full_Color.png";
import tsLogo from "../../assets/typescript.svg";
import viteLogo from "../../assets/vite_logo.jpeg";
import tailwindLogo from "../../assets/tailwind.svg";
import reactLogo from "../../assets/react.svg";
import zodLogo from "../../assets/Zod.svg";

export default function PoweredBy({route}: {route: string}) {
  return (
    <section>
      <span className="flex flex-row justify-center gap-1 text-xs text-semibold">
        <p className={`${route === "home" ? "text-white" : "text-black"}`}>Powered by</p>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React Logo" width="16" height="16" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite Logo and Link" width="16" height="16" />
        </a>
        <a href="https://typescriptlang.org" target="_blank">
          <img
            src={tsLogo}
            alt="Typescript Logo and Link"
            width="16"
            height="16"
          />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img
            src={tailwindLogo}
            alt="TailwindCSS Logo and Link"
            width="16"
            height="16"
          />
        </a>
        <a href="https://firebase.google.com/" target="_blank">
          <img
            src={firebaseLogo}
            alt="Firebase Logo and Link"
            width="16"
            height="16"
          />
        </a>
        <a href="https://zod.dev" target="_blank">
          <img src={zodLogo} alt="Zod Logo and Link" width="16" height="16" />
        </a>
      </span>
    </section>
  );
}

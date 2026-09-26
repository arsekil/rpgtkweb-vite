import {
  ForgotPasswordAuthForm,
  SignInAuthForm,
  SignUpAuthForm,
} from "@firebase-oss/ui-react";
import { Navigate, useNavigate, useParams } from "react-router";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import type { UserCredential } from "firebase/auth";
import PoweredBy from "../Powered/Powered";

type Mode = "signin" | "signup" | "reset";

async function ensureProfile(credential: UserCredential) {
  await setDoc(
    doc(db, "profiles", credential.user.uid),
    {
      displayName: credential.user.displayName ?? "",
      email: credential.user.email,
      orgType: ["TKUser"],
      isCurator: false,
      createdAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export default function AuthScreen() {
  let { mode } = useParams<{ mode: Mode }>();
  const navigate = useNavigate();

  if (mode !== "signin" && mode !== "signup" && mode !== "reset") {
    return <Navigate to="/auth/signin" replace />;
  }

  return (
    <div className="w-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl font-bold text-zinc-800">
        RPG Toolkit Community
      </h1>
      {mode === "signin" ? (
        <SignInAuthForm
          onSignIn={() => navigate("/home")}
          onForgotPasswordClick={() => navigate("/auth/reset")}
          onSignUpClick={() => navigate("/auth/signup")}
        />
      ) : mode === "signup" ? (
        <SignUpAuthForm
          onSignInClick={() => navigate("/auth/signin")}
          onSignUp={async (credential) => {
            try {
              await ensureProfile(credential);
              navigate("/home");
            } catch (err) {
              console.error("ensureProfile failed:", err);
              //TODO error messages spot
            }
          }}
        />
      ) : mode === "reset" ? (
        <ForgotPasswordAuthForm
          onBackToSignInClick={() => navigate("/auth/signin")}
        />
      ) : null}
      <PoweredBy route="auth"/>
    </div>
  );
}

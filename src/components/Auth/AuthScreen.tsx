import React from "react";
import {
  useForm,
  type SubmitHandler,
  // type SubmitErrorHandler,
} from "react-hook-form";
import { useAuth } from "@appwrite.io/react";
import { Link, Navigate, useNavigate, useParams } from "react-router";

type Mode = "signin" | "signup";

type IAuthFormInput = {
  name?: string;
  email: string;
  password: string;
};

//TODO error messages
export default function AuthScreen() {
  const { mode } = useParams<{ mode: string }>();
  const { signIn, signUp, isLoading, error } = useAuth();
  const { register, handleSubmit, reset } = useForm<IAuthFormInput>();
  const navigate = useNavigate();

  if (mode !== "signin" && mode !== "signup") {
    return <Navigate to="/auth/signin" replace />;
  }
  const currentMode = mode as Mode;

  const onLogin: SubmitHandler<IAuthFormInput> = async (data) => {
    try {
      signIn.emailPassword({ email: data.email, password: data.password });
      if (error) {
        //TODO implement error UI with reset option between attempts
      }
    } catch (error) {}
    navigate("/");
  };

  const onSignup: SubmitHandler<IAuthFormInput> = async (data) => {
    try {
      signUp.emailPassword({
        email: data.email,
        password: data.password,
        name: data.name!,
      });
      if (error) {
        //TODO implement error UI with reset option between attempts
      }
    } catch (error) {}
    navigate("/");
  };

  React.useEffect(() => {
    reset();
  }, [currentMode, reset, signIn.error, signUp.error]);

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h1 className="mb-2 text-2xl font-bold text-zinc-800">
        RPG Toolkit Community
      </h1>
      <p className="mb-6 text-base text-zinc-700">
        {currentMode === "signin"
          ? "Sign in to continue"
          : "Create your account"}
      </p>
      <React.Fragment>
        {currentMode === "signup" && (
          <>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Username"
              className="mb-3 w-2xs rounded-lg border border-zinc-500 bg-white px-4 py-2.5
                         text-sm text-zinc-800 placeholder-zinc-800
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}
        <input
          {...register("email", { required: true })}
          required
          type="email"
          placeholder="Email"
          className="mb-3 w-2xs rounded-lg border border-zinc-500 bg-white px-4 py-2.5
                     text-sm text-zinc-800 placeholder-zinc-800
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
          })}
          type="password"
          placeholder="Password"
          className="mb-4 w-2xs rounded-lg border border-zinc-500 bg-white px-4 py-2.5
                     text-sm text-zinc-800 placeholder-zinc-800
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          onClick={handleSubmit(mode === "signin" ? onLogin : onSignup)}
          disabled={isLoading}
          className="w-2xs rounded-lg bg-indigo-600 py-2.5 text-sm
                     font-semibold text-white transition hover:bg-indigo-500
                     disabled:opacity-50"
        >
          {isLoading
            ? "Please wait..."
            : currentMode === "signin"
              ? "Sign in"
              : "Create account"}
        </button>
      </React.Fragment>
      <Link
        to={currentMode === "signin" ? "/auth/signup" : "/auth/signin"}
        className="mt-4 w-2xs text-center text-sm text-zinc-900 hover:text-zinc-600"
      >
        {currentMode === "signin"
          ? "Don't have an account? Sign up"
          : "Already have an account? Sign in"}
      </Link>
    </div>
  );
}

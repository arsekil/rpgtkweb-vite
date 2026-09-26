"use client";

import React from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function useAuthUser() {
  const [user, setUser] = React.useState<User | null>(auth.currentUser);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (value) => {
      setUser(value);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return { user, isLoading };
}

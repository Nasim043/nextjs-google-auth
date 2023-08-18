"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex justify-center items-center"
    >
      <FcGoogle className="h-10 w-10 me-1 shadow-lg"></FcGoogle>
      <span className="px-4 py-2 text-white bg-blue-500 rounded-r-md">
        Sign In to Google
      </span>
    </button>
  );
};

export default SignInButton;

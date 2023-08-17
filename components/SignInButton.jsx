import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignInButton = () => {
  return (
    <div className="flex justify-center items-center bg-blue-500 text-white rounded-md px-4 py-2">
      <FcGoogle className="h-8 w-8 me-2"></FcGoogle>
      <span>Sign In to Google</span>
    </div>
  );
};

export default SignInButton;

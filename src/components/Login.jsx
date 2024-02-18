import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <form className="absolute  z-10 w-3/12 p-12 my-24 mx-auto right-0 left-0 bg-black bg-opacity-90 h-4/6">
        <h1 className="text-3xl font-bold text-white pb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className="w-full relative group mb-6">
            <input
              type="text"
              id="username"
              required
              className="w-full h-10 px-4 text-sm peer bg-gray-800 outline-none rounded text-white"
            />
            <label
              for="username"
              className=" text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Your Name
            </label>
          </div>
        )}
        <div className="w-full relative group ">
          <input
            type="text"
            id="username"
            required
            className="w-full h-10 px-4 text-sm peer bg-gray-800 outline-none rounded text-white"
          />
          <label
            for="username"
            className=" text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Email or Phone
          </label>
        </div>
        <div className="w-full relative group mt-7">
          <input
            type="text"
            id="username"
            required
            className="w-full h-10 px-4 text-sm peer bg-gray-800 outline-none text-white rounded"
          />
          <label
            for="username"
            className="text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Password
          </label>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-full my-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn ? "New to Netflix? Sign Up" : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

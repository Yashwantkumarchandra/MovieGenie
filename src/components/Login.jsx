import React, { useRef, useState } from "react";
import CheckValidateData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const handleButtonClick = () => {
    const message = CheckValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  z-10 w-3/12 p-12 my-24 mx-auto right-0 left-0 bg-black bg-opacity-90 h-4/6"
      >
        <h1 className="text-3xl font-bold text-white pb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className="w-full relative group mb-6">
            <input
              type="text"
              id="name"
              required
              className="w-full h-10 px-4 text-sm peer bg-gray-800 outline-none rounded text-white"
            />
            <label
              htmlFor="name"
              className=" text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Your Name
            </label>
          </div>
        )}
        <div className="w-full relative group ">
          <input
            type="text"
            ref={email}
            id="email"
            required
            className="w-full h-10 px-4 text-sm peer bg-gray-800 outline-none rounded text-white"
          />
          <label
            htmlFor="email"
            className=" text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Email or Phone
          </label>
        </div>
        <div className="w-full relative group mt-7">
          <input
            type="text"
            ref={password}
            id="password"
            required
            className="w-full h-10 px-4 text-sm peer bg-gray-800 outline-none text-white rounded"
          />
          <label
            htmlFor="password"
            className="text-white transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Password
          </label>
        </div>
        <p className="text-red-500 ">{errorMsg}</p>
        <button
          className="bg-red-500 text-white p-3 rounded-md w-full my-6"
          onClick={handleButtonClick}
        >
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

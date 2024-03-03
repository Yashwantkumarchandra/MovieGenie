import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/Constant";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstans";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/UserSlice";

const Header = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.GptSearch.showGptSearch);
  const user = useSelector((store) => store.user);
  const [isOpen, setIsopen] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const toggleNavbar = () => {
    setIsopen(!isOpen);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => unSubscribe();
  }, []);
  return (
    <div className="absolute z-10 sm:flex-row container flex justify-between md:flex-row flex-col bg-gradient-to-b from-black bg-opacity-20 w-full px-4">
      <div className="flex justify-between  items-center">
        <div className="">
          <img src={NETFLIX_LOGO} alt="logo" className="px-2 py-3  w-44 " />
        </div>
        <div>
          <button
            onClick={toggleNavbar}
            className="md:hidden sm:hidden focus:outline-none text-white focus:text-red-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row sm:flex-row gap-3 transition-all duration-1000 ease-in-out ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        {user && (
          <div className="flex">
            <select
              className="my-6 mx-2 rounded-lg bg-gray-700 bg-opacity-50 hover:border hover:bg-gray-900 text-white font-semibold "
              onChange={handleLangChange}
            >
              <option value="en">English</option>
              <option value="hindi">हिंदी</option>
              <option value="spanish">española</option>
            </select>
            <button
              className="bg-violet-800 hover:bg-violet-700 mx-3 my-6 pb-3  text-white font-bold p-2  rounded"
              onClick={handleGptClick}
            >
              {showGptSearch
                ? `${lang[langKey].homepage}`
                : `${lang[langKey].gptSearch}`}
            </button>
            {showGptSearch ? (
              <></>
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                className="w-14 h-12 mt-5 "
                alt="signInLogo"
              />
            )}
            <button
              className=" bg-red-500 hover:bg-red-700 mx-6  my-6 pb-3  text-white font-bold p-2  rounded "
              onClick={handleSignOut}
            >
              {`${lang[langKey].signout}`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

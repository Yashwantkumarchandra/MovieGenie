import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/Constant";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstans";

const Header = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.GptSearch.showGptSearch);
  const user = useSelector((store) => store.user);
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
  return (
    <div className="absolute z-10 flex justify-between bg-gradient-to-b from-black bg-opacity-20 w-full">
      <div>
        <img src={NETFLIX_LOGO} alt="logo" className="px-2 py-3  w-44 " />
      </div>
      {user && (
        <div className="flex">
          <select
            className="my-6 mx-2 rounded-lg bg-gray-700 bg-opacity-50 hover:border hover:bg-gray-900 text-white font-semibold"
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="w-14 h-12 mt-5 "
            alt="signInLogo"
          />
          <button
            className=" bg-red-500 hover:bg-red-700 mx-3 my-6 pb-3  text-white font-bold p-2  rounded "
            onClick={handleSignOut}
          >
            {`${lang[langKey].signout}`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

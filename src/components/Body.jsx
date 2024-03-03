import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="">
      <div className="bg-black  sm:h-full md:h-full aspect-video   bg-opacity-55 ">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

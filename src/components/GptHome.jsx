import React from "react";
import GptSearch from "./GptSearch";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptHome = () => {
  return (
    <div className="bg-fixed">
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptHome;

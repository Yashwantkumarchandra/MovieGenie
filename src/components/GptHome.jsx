import React from "react";
import GptSearch from "./GptSearch";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptHome = () => {
  return (
    <div>
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptHome;

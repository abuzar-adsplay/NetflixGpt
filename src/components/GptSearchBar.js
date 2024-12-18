import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
const langkey = useSelector((store)=>store.config.lang)
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br  via-gray-800 to-black">
      <form className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6 flex items-center">
        <input
          className="flex-grow p-4 text-lg text-gray-100  border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 placeholder-gray-400"
          placeholder= {lang[langkey].gptSearchPlaceholder}
          type="text"
        />
        <button
          type="submit"
          className="ml-2 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-r-lg hover:bg-red-700 transition duration-300"
        >
          {/* {lang.en.search} */}
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
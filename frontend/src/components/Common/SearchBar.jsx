import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
    // Reset search term after search
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-2 pl-2 pr-12 bg-gray-100 rounded-lg focus:outline-none placeholder:text-gray-700"
            />
            {/*searchbtn*/}
            <button
              type="submit"
              className="absolute text-gray-600 transform -translate-y-1/2 right-2 top-1/2 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>
          </div>
          <button
            type="button"
            className="absolute text-gray-600 transform -translate-y-1/2 right-4 top-1/2 hover:text-gray-800"
            onClick={handleSearchToggle}
          >
            <HiMiniXMark className="w-6 h-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

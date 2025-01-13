import React from "react";

const SearchSuggestion = ({ suggestion, onSelect }) => {
  return (
    <div
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={() => onSelect(suggestion.GeoObject.Point.pos)}
    >
      {suggestion.GeoObject.name}
    </div>
  );
};

export default SearchSuggestion;

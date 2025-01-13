import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { searchLocations, parseCoordinates } from "../utils/geocoder";
import { MAP_CONFIG } from "../config/mapConfig";
import SearchSuggestion from "./SearchSuggestion";

const SearchBar = ({ onSelectLocation }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {
        const results = await searchLocations(query, MAP_CONFIG.apiKey);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSearch = (coordinates) => {
    onSelectLocation(parseCoordinates(coordinates));
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск..."
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {query.length > 0 && query.length < 3 && (
        <p className="absolute top-full left-0 w-full text-red-500 text-sm mt-1">
          Введите не менее 3 символов
        </p>
      )}

      {query.length >= 3 && suggestions.length > 0 && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <SearchSuggestion
              key={index}
              suggestion={suggestion}
              onSelect={handleSearch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

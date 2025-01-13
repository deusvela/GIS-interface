import React from "react";
import { Navigation } from "lucide-react";
import { getCurrentPosition } from "../utils/geolocation";

const LocationButton = ({ onLocationUpdate }) => {
  const handleClick = async () => {
    try {
      const coordinates = await getCurrentPosition();
      onLocationUpdate(coordinates);
    } catch (error) {
      console.error("Ошибка получения данных:", error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors"
      title="Найти мою локацию"
    >
      <Navigation className="h-5 w-5" />
    </button>
  );
};

export default LocationButton;

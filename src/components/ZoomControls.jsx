import React from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

const ZoomControls = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="absolute right-4 top-64 flex flex-col gap-2">
      <button
        onClick={onZoomIn}
        className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        title="Приблизить"
      >
        <ZoomIn className="h-5 w-5 text-gray-700" />
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        title="Отдалить"
      >
        <ZoomOut className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};

export default ZoomControls;

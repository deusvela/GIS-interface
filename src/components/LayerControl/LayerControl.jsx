import React, { useState } from "react";
import { Layers } from "lucide-react";
import LayerPanel from "./LayerPanel";
import { LAYER_GROUPS } from "../../config/layerConfig";

const LayerControl = ({ activeLayer, onLayerChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute flex flex-col gap-2 right-4 top-4 z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        title="Управление слоями"
      >
        <Layers className="h-5 w-5 text-gray-700" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-0 mt-12 mr-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-30 transition-all duration-300 transform translate-x-0">
          <div className="px-4 py-2 bg-gray-50 border-b">
            <h3 className="font-medium text-gray-700">Управление слоями</h3>
          </div>

          {LAYER_GROUPS.map((group) => (
            <LayerPanel
              key={group.id}
              group={group}
              activeLayer={activeLayer}
              onLayerChange={onLayerChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LayerControl;

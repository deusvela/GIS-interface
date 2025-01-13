import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import LayerItem from "./LayerItem";

const LayerPanel = ({ group, activeLayer, onLayerChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border-b last:border-b-0">
      {/* Group Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-2 flex items-center justify-between hover:bg-gray-50"
      >
        <span className="text-sm font-medium text-gray-700">{group.name}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-gray-400" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-400" />
        )}
      </button>

      {/* Layer List */}
      {isExpanded && (
        <div className="px-2 py-1 space-y-1">
          {group.layers.map((layer) => (
            <LayerItem
              key={layer.id}
              layer={layer}
              isActive={activeLayer === layer.id}
              onChange={() => onLayerChange(layer.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LayerPanel;

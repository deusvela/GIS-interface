import React from "react";
import * as Icons from "lucide-react";

const LayerItem = ({ layer, isActive, onChange }) => {
  const Icon = layer.icon ? Icons[layer.icon] || Icons.Layers : null;

  return (
    <label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
      <input
        type="radio"
        name="layer-selection"
        checked={isActive}
        onChange={onChange}
        className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
      />
      {Icon && <Icon className="h-4 w-4 text-gray-500" />}
      <span className="text-sm text-gray-700">{layer.name}</span>
    </label>
  );
};

export default LayerItem;

// import { useState, useCallback } from "react";

// export const useMapLayers = (initialLayer = "map") => {
//   const [activeLayer, setActiveLayer] = useState(initialLayer);

//   const handleLayerChange = useCallback((map, layerId) => {
//     if (!map) return;

//     setActiveLayer(layerId);

//     // Base layer handling
//     const baseLayerTypes = {
//       map: "yandex#map",
//       satellite: "yandex#satellite",
//       hybrid: "yandex#hybrid",
//     };

//     if (baseLayerTypes[layerId]) {
//       map.setType(baseLayerTypes[layerId]);
//       return;
//     }

//     // Custom layer handling
//     switch (layerId) {
//       case "parcels":
//       case "buildings":
//       case "zones":
//         console.log("Switching cadastral layer:", layerId);
//         // Implement cadastral layer logic here
//         break;
//       case "construction":
//       case "infrastructure":
//       case "development":
//         console.log("Switching thematic layer:", layerId);
//         // Implement thematic layer logic here
//         break;
//       default:
//         console.warn("Unknown layer type:", layerId);
//     }
//   }, []);

//   return {
//     activeLayer,
//     handleLayerChange,
//   };
// };

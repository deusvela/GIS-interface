import React, { useState, useCallback, useEffect } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { MAP_CONFIG } from "../config/mapConfig";
import ZoomControls from "./ZoomControls";
import LayerControl from "./LayerControl/LayerControl";
import LocationButton from "./LocationButton";

const MapComponent = ({ center, setCenter }) => {
  const [zoom, setZoom] = useState(MAP_CONFIG.defaultZoom);
  const [map, setMap] = useState(null);
  const [activeLayer, setActiveLayer] = useState("map");
  const [placemarkCoords, setPlacemarkCoords] = useState(center);

  // Обновляем метку при изменении центра карты
  useEffect(() => {
    if (center) {
      setPlacemarkCoords(center);
    }
  }, [center]);

  // Обработчик клика по карте
  const handleMapClick = useCallback(
    (e) => {
      const coords = e.get("coords");
      setPlacemarkCoords(coords); // Устанавливаем метку на место клика
      setCenter(coords); // Обновляем центр карты
      console.log("Координаты клика:", coords);
      if (map && coords) {
        map.balloon.open(coords, {
          contentHeader: "Координаты точки",
          contentBody: `
                  <div>
                    <strong>Широта:</strong> ${coords[0].toFixed(6)}<br />
                    <strong>Долгота:</strong> ${coords[1].toFixed(6)}
                  </div>
                `,
        });
      }
    },
    [map, setCenter]
  );

  // Обновление центра карты при нахождении местоположения
  const handleLocationUpdate = useCallback(
    (coords) => {
      setCenter(coords); // Центрируем карту
      setPlacemarkCoords(coords); // Устанавливаем метку
      console.log(coords);
    },
    [setCenter]
  );

  const handleBoundsChange = useCallback(
    (e) => {
      const newCenter = e.get("target").getCenter();
      const newZoom = e.get("target").getZoom();
      setCenter(newCenter);
      setZoom(newZoom);
    },
    [setCenter]
  );

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg relative">
      <YMaps query={{ apikey: MAP_CONFIG.apiKey }}>
        <Map
          // defaultState={{ center, zoom }}
          width="100%"
          height="100%"
          state={{ center, zoom }}
          onBoundsChange={handleBoundsChange}
          onClick={handleMapClick}
          instanceRef={(ref) => setMap(ref)}
        >
          {/* Метка с координатами */}
          {placemarkCoords && (
            <Placemark
              geometry={placemarkCoords}
              properties={{
                balloonContent: `
                  <div style="padding: 10px;">
                    <strong>Координаты:</strong><br />
                    Широта: ${placemarkCoords[0].toFixed(6)}<br />
                    Долгота: ${placemarkCoords[1].toFixed(6)}
                  </div>
                `,
              }}
              options={{
                balloonCloseButton: true,
                preset: "islands#blueDotIcon", // Стиль метки
              }}
            />
          )}
        </Map>
      </YMaps>
      {/* Кнопка поиска местоположения */}
      <div className="absolute top-4 right-4">
        <LocationButton onLocationUpdate={handleLocationUpdate} />
      </div>
      <LayerControl
        activeLayer={activeLayer}
        onLayerChange={(layer) => setActiveLayer(layer)}
      />
      <ZoomControls
        onZoomIn={() => map && map.setZoom(zoom + 1)}
        onZoomOut={() => map && map.setZoom(zoom - 1)}
      />
    </div>
  );
};

export default MapComponent;

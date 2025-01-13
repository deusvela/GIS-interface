import React, { useState, useEffect, useRef } from "react";
import MapComponent from "./components/Map";
import SearchBar from "./components/SearchBar";
import LocationButton from "./components/LocationButton";
import FileUploadButton from "./components/FileUploadButton";
import { MAP_CONFIG } from "./config/mapConfig";
import { sendMonitoringData } from "./services/monitoringService";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [center, setCenter] = useState(MAP_CONFIG.defaultCenter);

  const hasReportedRef = useRef(false);

  useEffect(() => {
    // Если уже отправляли, выходим
    if (hasReportedRef.current) return;

    // Ставим флажок, что запрос уже отправлялся
    hasReportedRef.current = true;

    const processID = uuidv4();

    // Формируем объект данных для мониторинга
    const monitorData = {
      processID,
      timestamp: new Date().toISOString(),
      receiver_service: "front_end_app",
      object_type: "page_load",
      data_size_bytes: 0, // Можно поставить 0 или любое число
      status: "init", // Например, статус инициализации
      request_type: "page_view",
    };
    sendMonitoringData(MAP_CONFIG.MONITORING_SERVICE_URL, monitorData).then(
      (resp) => {
        if (resp.status === 200) {
          console.log("Мониторинг: данные успешно отправлены", resp.data);
        } else {
          console.error("Мониторинг: произошла ошибка", resp);
        }
      }
    );
    console.log("Отправляемые данные: ", monitorData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <SearchBar className="w-10" onSelectLocation={setCenter} />
            <LocationButton onLocationUpdate={setCenter} />
          </div>
          <FileUploadButton />
        </div>
        <MapComponent center={center} setCenter={setCenter} />
      </div>
    </div>
  );
}

export default App;

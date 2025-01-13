export const searchLocations = async (query, apiKey) => {
  try {
    const response = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${query}`
    );
    // try {
    //   // Формируем запрос к локальному сервису геокодирования
    //   const response = await fetch("http://geocoder123.ru:5000/", {
    //     method: "POST", // Используем POST, так как передаём данные в теле
    //     headers: {
    //       "Content-Type": "application/json", // Указываем, что тело запроса в формате JSON
    //     },
    //     body: JSON.stringify({ query }), // Передаём строку поиска как часть JSON
    //   });
    // Проверяем успешность запроса
    //     if (!response.ok) {
    //       const errorData = await response.json().catch(() => ({}));
    //       throw new Error(errorData.message || "Ошибка обращения к сервису геокодирования");
    //     }

    //     // Парсим ответ в формате JSON
    //     const data = await response.json();
    //     return data.results.slice(0, 5); // Возвращаем первые 5 найденных объектов
    //   } catch (error) {
    //     // Обработка ошибок
    //     console.error("Ошибка при запросе к сервису геокодирования:", error);
    //     return []; // Возвращаем пустой массив в случае ошибки
    //   }
    // };

    const data = await response.json();
    return data.response.GeoObjectCollection.featureMember.slice(0, 5);
  } catch (error) {
    console.error("Ошибка отправки данных:", error);
    return [];
  }
};

export const parseCoordinates = (coordinateString) => {
  const [lon, lat] = coordinateString.split(" ").map(Number);
  return [lat, lon];
};

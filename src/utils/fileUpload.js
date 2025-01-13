// import { MAP_CONFIG } from "../config/mapConfig";

// export const uploadFiles = async (files) => {
//   try {
// Проверяем форматы файлов
//     const allowedExtensions = ["zip"];
//     for (const file of files) {
//       const extension = file.name.split(".").pop().toLowerCase();
//       if (!allowedExtensions.includes(extension)) {
//         throw new Error(`Недопустимый формат файла: ${file.name}. Разрешен только zip`);
//       }
//     }

//     // 1. Создаём FormData, чтобы отправлять файл(ы)
//     const formData = new FormData();
//     for (const file of files) {
//       // Важно: ключ названия поля должен совпадать
//       // с тем, что ожидает ваш сервер
//       formData.append("file", file);
//     }

//     // 2. Отправляем POST-запрос на наш реальный эндпоинт
//     // "https://example.com/api/upload" - пример адреса отправки
//     const response = await fetch(MAP_CONFIG.FILE_SERVICE_URL, {
//       method: "POST",
//       body: formData,
//     });

//     // 3. Проверяем ответ
//     if (!response.ok) {
//       // Считаем, что произошла ошибка
//       // Можно получить подробности с сервера:
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(errorData.message || "Ошибка загрузки файла");
//     }

//     // 4. Если всё хорошо, возвращается JSON-ответ (или текст — зависит от API)
//     const responseData = await response.json().catch(() => ({}));
//     console.log(MAP_CONFIG.FILE_SERVICE_URL);
//     return responseData;
//   } catch (error) {
//     // Если где-то была ошибка (сеть, парсинг и т.п.), выбрасываем её дальше
//     console.error("Ошибка загрузки файла:", error);
//     throw error;
//   }
// };

// Симуляция отправки файла
export const uploadFiles = async (files) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        "Файл загружен:",
        files.map((f) => f.name)
      );
      resolve();
    }, 2000);
  });
};

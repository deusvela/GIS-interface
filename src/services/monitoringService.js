export async function sendMonitoringData(url, data) {
  try {
    // Проверяем, что data - это объект
    if (typeof data !== "object" || data === null) {
      throw new Error("Invalid JSON data.");
    }

    // Обязательные поля (примерный список)
    const requiredFields = [
      "processID",
      "timestamp",
      "receiver_service",
      "object_type",
      "data_size_bytes",
      "status",
      "request_type",
    ];

    for (const field of requiredFields) {
      if (!data.hasOwnProperty(field)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Также можно добавить sender_ip, table_name и другие
    // data.sender_ip = "127.0.0.1";
    // data.table_name = "exchange_logs";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        status: response.status,
        data: errorData,
      };
    }

    const responseData = await response.json().catch(() => ({}));
    return { status: 200, data: responseData };
  } catch (error) {
    return {
      status: 400,
      data: { error: error.message },
    };
  }
}

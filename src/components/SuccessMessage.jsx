import React from "react";
import { CheckCircle } from "lucide-react";

const SuccessMessage = () => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
      <CheckCircle className="h-5 w-5" />
      <span>Файл отправлен успешно!</span>
    </div>
  );
};

export default SuccessMessage;

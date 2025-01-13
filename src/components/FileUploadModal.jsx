import React, { useState } from "react";
import { X } from "lucide-react";
import DropZone from "./DropZone";
import SuccessMessage from "./SuccessMessage";
import { uploadFiles } from "../utils/fileUpload";

function ErrorMessage({ message }) {
  return (
    <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded">
      Произошла ошибка: {message}
    </div>
  );
}

const FileUploadModal = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleUpload = async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    setErrorMessage("");

    try {
      const result = await uploadFiles(files);
      console.log("Успешная загрузка:", result);

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFiles([]);
      }, 2000);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setErrorMessage(error.message || "Не удалось загрузить файл");
    }

    setIsUploading(false);
  };

  const handleFileAdd = (newFiles) => {
    const allowedExtensions = ["zip"];
    const invalidFiles = [];
    const validFiles = [];

    newFiles.forEach((file) => {
      const extension = file.name.split(".").pop().toLowerCase();
      if (allowedExtensions.includes(extension)) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file.name);
      }
    });

    if (invalidFiles.length > 0) {
      setErrorMessage(`Недопустимый формат файлов: ${invalidFiles.join(", ")}`);
    } else {
      setErrorMessage("");
    }

    setFiles([...files, ...validFiles]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Отправка файла</h2>

        <DropZone files={files} setFiles={handleFileAdd} />

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Отмена
          </button>
          <button
            onClick={handleUpload}
            disabled={files.length === 0 || isUploading}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
              files.length === 0 || isUploading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            {isUploading ? "Отправка..." : "Отправить"}
          </button>
        </div>

        {showSuccess && <SuccessMessage />}
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    </div>
  );
};

export default FileUploadModal;

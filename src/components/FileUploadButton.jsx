import React, { useState } from "react";
import { Upload } from "lucide-react";
import FileUploadModal from "./FileUploadModal";

const FileUploadButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        title="Загрузка файлов"
      >
        <Upload className="h-5 w-5" />
        <span>Загрузить файл</span>
      </button>

      <FileUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default FileUploadButton;

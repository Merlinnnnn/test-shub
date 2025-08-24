import React from "react";
import { Upload, FileText } from "lucide-react";

interface Props {
  onFileUpload: (file: File) => void;
}

export const FileUpload: React.FC<Props> = ({ onFileUpload }) => {
  return (
    <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-400 transition">
      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-lg font-medium text-gray-700 mb-2">
        Upload Excel Report
      </p>
      <label className="cursor-pointer">
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onFileUpload(file);
          }}
          className="hidden"
        />
        <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <FileText className="h-4 w-4 mr-2" />
          Choose File
        </span>
      </label>
    </div>
  );
};

import { useState } from "react";

const UploadField = () => {
  const [file, setFile] = useState(null);

  const fileHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <p className="text-lg">Upload a document</p>
      <label>
        <input
          type="file"
          className="hidden"
          accept=".pdf"
          onChange={fileHandler}
        />
        <p className="w-full p-2 border rounded mt-1 border-gray-700 h-32 cursor-pointer font-medium flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 hover:text-white text-xl">
          {file ? file.name : "Upload"}
        </p>
      </label>
    </div>
  );
};

export default UploadField;

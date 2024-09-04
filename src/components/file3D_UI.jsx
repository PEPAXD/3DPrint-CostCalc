import React, { useState } from "react";

function file3D_UI({ file }) {
  const [uploadedFile, setUploadedFile] = useState(file);

  let FileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  return (
    <>
      <div className="w-full h-full mt-32">
        <h2 className="flex justify-center text-white text-4xl underline underline-offset-4">
          {uploadedFile.name.length > 40
            ? uploadedFile.name.substring(0, 40)
            : uploadedFile.name}
        </h2>
      </div>
      <button
        onClick={() => document.getElementById("fileInput").click()}
        className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add New 3DFile
      </button>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={FileChange}
      />
    </>
  );
}

export default file3D_UI;

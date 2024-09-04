import React, { useState } from "react";

import "font-awesome/css/font-awesome.min.css";

//import Components
import Input3D from "./input3D";
import File3D_UI from "./file3D_UI";
import Model3D from "./model3D";

function modelViewer() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    console.log(`Archivo subido: ${file.name}`);
  };

  return (
    <div className="flex h-full w-full p-3">
      {!uploadedFile ? (
        <div className="relative w-full rounded-xl border-dashed border-2 border-white-900 flex justify-center items-center">
          <Input3D onFileUpload={handleFileUpload} />
        </div>
      ) : (
        <div className="relative w-full rounded-xl border-2 border-white-900 flex justify-center items-center">
          <File3D_UI file={uploadedFile} />

          {/* TODO: Add the model object here */}
          <div className="absolute w-full flex justify-center">
            <Model3D />
          </div>
        </div>
      )}
    </div>
  );
}

export default modelViewer;

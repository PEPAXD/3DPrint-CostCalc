import React, { useState } from "react";

import "font-awesome/css/font-awesome.min.css";

//import Components
import Input3D from "../components/input3D";

function modelViewer() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    console.log(`Archivo subido: ${file.name}`);
  };

  return (
    <div className="flex h-full w-full p-3">
      <div className="relative w-full rounded-xl border-dashed border-2 border-white-900 flex justify-center items-center">
        {!uploadedFile && <Input3D onFileUpload={handleFileUpload} />}
      </div>
    </div>
  );
}

export default modelViewer;

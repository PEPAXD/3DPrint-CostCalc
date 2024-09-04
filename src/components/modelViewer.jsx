import React from "react";

import "font-awesome/css/font-awesome.min.css";

//import Components
import Input3D from "../components/input3D";

function modelViewer() {
  return (
    <div className="flex h-full w-full p-3">
      <div className="relative w-full rounded-xl border-dashed border-2 border-white-900 flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-20">
          <div className="h-full  bg-gray-600 flex justify-center items-center">
            <input type="file" className="h-full w-full opacity-0" name="" />
          </div>
        </div>

        <Input3D />
      </div>
    </div>
  );
}

export default modelViewer;

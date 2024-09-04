import React from "react";

import "font-awesome/css/font-awesome.min.css";

//import Components
import Input3D from "../components/input3D";

function modelViewer() {
  return (
    <div className="flex h-full w-full p-3">
      <div className="relative w-full rounded-xl border-dashed border-2 border-white-900 flex justify-center items-center">
        <Input3D />
      </div>
    </div>
  );
}

export default modelViewer;

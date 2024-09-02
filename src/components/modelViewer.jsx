import React from "react";

import "font-awesome/css/font-awesome.min.css";

function modelViewer() {
  return (
    <div className="flex h-full w-full p-3">
      <div className="relative w-full rounded-xl border-dashed border-2 border-white-900 flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-20"></div>
      </div>
    </div>
  );
}

export default modelViewer;

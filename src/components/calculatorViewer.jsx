import React from "react";

function calculatorViewer() {
  return (
    <div className="flex h-full w-full p-3">
      <div className="relative w-full border-2 border-white-900 flex justify-center items-center">
        <div className="drop-shadow-xl h-full w-full overflow-hidden  bg-[#3d3c3d]">
          <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 inset-0.5 bg-[#002244]">
            Smart 3D Print Price Checker
          </div>
        </div>
      </div>
    </div>
  );
}

export default calculatorViewer;

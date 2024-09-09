import React from "react";

function calculatorViewer() {
  return (
    <div className="flex h-full w-full p-3">
      <div className="relative w-full rounded-xl border-2 border-white-900 flex justify-center items-center  bg-slate-800">
        <div className="w-full h-full mt-32">
          <h3 className="flex pl-8 text-white text-2xl">
            CostCalculator
          </h3>
          <hr className="mx-4"/>
        </div>
      </div>
    </div>
  );
}

export default calculatorViewer;

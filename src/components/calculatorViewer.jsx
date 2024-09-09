import React from "react";

function calculatorViewer() {
  return (
    <div className="flex h-full w-full p-3 ">
      <div className="relative w-full flex justify-center items-cente">
        <div className="drop-shadow-xl h-full w-full overflow-hidden">
          <div className="absolute flex items-center justify-center text-white z-[1]">
            <div className="h-full w-full flex items-center justify-center ">
              <div className="dark:bg-slate-900 relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
                <div className="w-full sm:w-auto flex flex-col items-center sm:items-start px-8">
                  <h4
                    className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
                    itemprop="titleCalculator"
                  >
                    Smart 3D Print Price Checker
                  </h4>

                  <div className="mb-4 md:text-lg text-gray-400">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eligendi placeat at quia error consequatur, alias iste
                      architecto doloribus magni ratione eum dignissimos commodi
                      nam a maxime excepturi perferendis assumenda vero!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default calculatorViewer;

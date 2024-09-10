import React from "react";

//import Component
import Dropdowns from "./dropdowns";

function calculatorViewer() {
  return (
    <div className="flex h-full w-full p-3 dark:bg-gray-900 shadow-lg">
      <div className="relative w-full flex justify-center items-center">
        <div className="drop-shadow-xl h-full w-full overflow-hidden">
          <div className="absolute flex items-center justify-center text-white z-[1]">
            <div className="h-full w-full flex items-center justify-center">
              <div className="relative w-full max-w-2xl my-8 md:my-10 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8">
                <div className="w-full sm:w-auto flex flex-col items-center sm:items-start px-4">
                  <h4
                    className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
                    itemprop="titleCalculator"
                  >
                    Smart 3D Print Price Checker
                  </h4>

                  <hr className="border-t-1 border-white w-full" />

                  <div className=" text-gray-400 my-4 text-base">
                    <p className="pl-4">
                      Calcula el costo total de impresión 3D, teniendo en cuenta
                      la amortización de la máquina, los costos de fabricación,
                      postproducción e impuestos.
                    </p>
                  </div>

                  <hr className="border-t-1 border-white w-full" />
                  <br />

                  <div class="xl:mt-0 w-full">
                    <h5>Tipo de Filamento</h5>
                    <cite className="pl-4 text-sm font-semibold text-gray-400 tracking-wider ">
                      * Material &amp; Marca ($/Kg)
                    </cite>

                    <form className="my-4 flex gap-3">
                      <Dropdowns />
                    </form>
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

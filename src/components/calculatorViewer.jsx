import React from "react";

//import Component
import Dropdowns from "./dropdowns";
import NumbersInputs from "./numbersInputs";

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
                      Calculate the total cost of 3D printing by considering the
                      amortization of the machine, manufacturing costs,
                      post-production expenses, and taxes.
                    </p>
                  </div>

                  <hr className="border-t-1 border-white w-full" />
                  <br />

                  <div class="xl:mt-0 w-full">
                    <h5>Filament Type</h5>
                    <cite className="pl-4 text-sm font-semibold text-gray-400 tracking-wider ">
                      * Material &amp; Brand ($/Kg)
                    </cite>

                    <form className="my-4 flex gap-3">
                      <Dropdowns />
                    </form>
                  </div>

                  <div class="xl:mt-0 w-full">
                    <h5>3D Printer Model</h5>
                    <cite className="pl-4 text-sm font-semibold text-gray-400 tracking-wider ">
                      * Brand &amp; Model ($)
                    </cite>

                    <form className="my-4 flex gap-3">
                      <Dropdowns />
                    </form>
                  </div>

                  <div className="flex gap-4">
                    <NumbersInputs />
                    <NumbersInputs />
                  </div>

                  <div className="w-full mb-4">
                    <label htmlFor="postCost" className="block mb-2">
                      <h6>POST-PRODUCCION</h6>
                    </label>
                    <input
                      type="text"
                      name="postCost"
                      id="postCost"
                      placeholder="E.g: [Additional services $150.000]"
                      className="w-full py-2 pl-8 border border-gray-400 focus:outline-none focus:border-gray-100 bg-transparent"
                    />
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

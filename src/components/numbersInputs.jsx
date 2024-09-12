import React from "react";

function numbersInputs() {
  return (
    <div className="col-span-2 sm:col-span-1 mb-4">
      <label htmlFor="weight" className="block mb-2">
        <h6>Weight in grams</h6>
      </label>
      <input
        type="number"
        name="weight"
        id="weight"
        placeholder="1.000g"
        className="w-full py-2 px-2 border border-gray-400 focus:outline-none focus:border-gray-100 bg-transparent text-right"
      />
    </div>
  );
}

export default numbersInputs;

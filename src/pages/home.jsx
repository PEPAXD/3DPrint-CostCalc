import React from "react";
import "./styles/home.css";

//import Components
import ModelViewer from "../components/modelViewer";
import CalculatorViewer from "../components/calculatorViewer";

function home() {
  return (
    <main className="bg-gray-900 h-screen">
      <div className="container max-w-full flex">
        <ModelViewer />

        <div className="w-3/5 overflow-y-scroll">
          <CalculatorViewer />
        </div>
      </div>
    </main>
  );
}

export default home;

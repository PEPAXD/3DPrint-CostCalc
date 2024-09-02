import React from "react";
import "./styles/home.css";

function home() {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="container max-w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-8xl text-white font-bold">3DCostify</h1>
          <p className="text-white text-2xl mt-2">
            3D printing cost calculator
          </p>
        </div>
      </div>
    </div>
  );
}

export default home;

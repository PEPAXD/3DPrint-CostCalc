import React from "react";
import "./styles/home.css";

//import Components
import ModelViewer from "../components/modelViewer";

function home() {
  return (
    <main className="bg-gray-900 h-screen">
      <div className="container max-w-full flex">
        <ModelViewer />
        
      </div>
    </main>
  );
}

export default home;

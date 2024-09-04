import React from "react";

function file3D_UI({ file }) {
  return (
    <>
      <h2 className="absolute top-16 left-1/2 transform -translate-x-1/2 text-white text-4xl underline underline-offset-4">
        {file.name}
      </h2>
    </>
  );
}

export default file3D_UI;

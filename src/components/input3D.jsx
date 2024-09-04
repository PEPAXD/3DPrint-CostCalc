import React from "react";

import { TbFile3D } from "react-icons/tb";

function input3D() {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-20">
        <div className="h-full  bg-gray-600 flex justify-center items-center">
          <input type="file" className="h-full w-full opacity-0" name="" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <TbFile3D className="text-[10rem] text-gray-400 stroke-1" />

        <span className="block text-[2rem] text-gray-400 font-bold">
          Attach your 3Dfiles here
        </span>

        <p class="mt-1 text-ls text-gray-400">STL, OBJ, GLTF, GLB up to 10MB</p>
      </div>
    </div>
  );
}

export default input3D;

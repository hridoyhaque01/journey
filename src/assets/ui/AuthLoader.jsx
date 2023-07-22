import React from "react";
import { travelLoading } from "../getAssets";

function AuthLoader() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center">
      <div>
        <img src={travelLoading} alt="" className="w-[36rem] max-w-[36rem]" />
      </div>
    </div>
  );
}

export default AuthLoader;

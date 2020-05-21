import React from "react";
import loading from "../imgs/gif/loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;

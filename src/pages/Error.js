import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div
        style={{ marginTop: "-72px" }}
        className="bg-gray-900 w-full h-screen flex flex-col text-white justify-center items-center"
      >
        <h1 className="text-6xl tracking-widest">404</h1>
        <p className="text-2xl">Страница не найдена</p>
        <button className="py-1 px-4 border rounded-full my-10 bg-red-700 border-transparent">
          <Link to="/">На главную</Link>
        </button>
      </div>
    </>
  );
};

export default Error;

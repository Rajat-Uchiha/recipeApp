import React from "react";
import Footer from "../components/Footer";
const Pagenotfound = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center space-x-6 bg-gray-500 ">
        <div className=" flex flex-col text-center space-y-6">
          <h1 className="font-Nunito text-8xl font-bold text-gray-200 underline underline-offset-4">
            Page Not Found
          </h1>
          <h1 className="font-Nunito text-7xl font-bold text-gray-200">
            ERROR 404
          </h1>
        </div>
      </div>
    </>
  );
};

export default Pagenotfound;

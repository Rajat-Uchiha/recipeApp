import React from "react";
import myLogo from "./myLogo.png";
const Footer = () => {
  return (
    <div className="bg-gray-800 py-4 flex justify-center items-center space-x-6">
      <img className="w-20 invert" src={myLogo} alt="logo" />
      <h1 className="text-gray-100 font-Nunito text-lg font-bold underline underline-offset-4">
        &#169; letscooktasty
      </h1>
    </div>
  );
};

export default Footer;

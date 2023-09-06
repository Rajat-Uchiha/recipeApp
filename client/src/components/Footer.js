import React from "react";
import myLogo from "./myLogo.png";
const Footer = () => {
  return (
    <div className="bg-white font-Crimson py-4 flex justify-center items-center space-x-6 z-40">
      <img className="w-20 " src={myLogo} alt="logo" />
      <h1 className=" font-Crimson md:text-lg">
        &#169; letscooktasty.netlify.app
      </h1>
    </div>
  );
};

export default Footer;

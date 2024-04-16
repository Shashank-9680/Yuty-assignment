import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-3 text-xs">
        <p>Get the Juice: NewsLetter</p>
        <p>Watch Live: Glowcast </p>
      </div>
    </>
  );
};

export default Header;

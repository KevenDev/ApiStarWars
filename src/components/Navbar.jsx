import { useState } from "react";
import LogoStarWars from "../assets/logo.png"


const Navbar = () => {
  return (
    <div className="h-20 bg-black flex justify-center">
        <img className="h-full" src={LogoStarWars} alt="" />
    </div>
  );
};
export default Navbar;

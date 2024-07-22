import Link from "next/link";
import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
interface props {
  openNav: () => void;
}
const Nav = ({ openNav }: props) => {
  return (
    // first nav
    <div className="h-[12vh] bg-white shadow-md">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
          <span className="text-[27px] md:text-[40px] text-red-600">A</span>
          GENCY
        </h1>
        {/* larger screen nav list */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[17px] cursor-pointer text-red-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
            <Link href="/">About</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
            <Link href="/">Services</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
            <Link href="/">Customer</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
            <Link href="/">Blog</Link>
          </li>
        </ul>
        <div className="flex space-x-2 md:space-x-5">
          {/* LogIn */}
          <ButtonBlue text="Login" />
          {/* SignUp */}
          <ButtonRed text="SignUP" />
          <Bars3BottomRightIcon
            onClick={openNav}
            className="w-[3.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

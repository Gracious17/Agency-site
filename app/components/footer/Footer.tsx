import React from "react";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start">
        {/* first footer info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem] cursor-context-menu">
            Company
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            About
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Affiliate
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Careers & Culture
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Blog
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Press
          </p>
        </div>
        {/* second footer info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem] cursor-context-menu ">
            My Account
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Press inquiries
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Social Media
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Directories
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Images & 8-rolls
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Permission
          </p>
        </div>
        {/* 3rd footer info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]  cursor-context-menu">
            Our Information
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Return policies
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Privacy policy
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Terms and Conditions
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Site map
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Store hours
          </p>
        </div>
        {/* 4th footer info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem] cursor-context-menu">
            About Us
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Support Center
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Customer Support
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            About us
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Copyright
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Popular Campaign
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-[1rem] text-[15px] opacity-75">
        &copy; {new Date().getFullYear()} LatterWorld. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import logoImg from "@/public/images/logos.jpg";

const Company = () => {
  return (
    <div className="pt-[6rem] pb-[3rem]">
      <h1 className="mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e]">
        Company who also worked with Us
      </h1>
      <p className="w-[90%] sm:w-[85%] md:w-[75%] text-center lg:w-[65%]xl:w-[55%] mx-auto text-[17px] text-gray-950 opacity-80">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quam
        obcaecati veritatis amet. Cum porro voluptas veritatis tempore
        consectetur commodi explicabo cupiditate? Tempora, illo! Iste commodi
        quod modi ducimus ea.
      </p>
      <p className="text-blue-600 text-center cursor-pointer mt-[1.5rem] font-[500]">
        Explore Details
      </p>
      <div className="mt-[2rem] text-center w-[80%] mx-auto">
        <Image src={logoImg} alt="logos" />
      </div>
    </div>
  );
};

export default Company;

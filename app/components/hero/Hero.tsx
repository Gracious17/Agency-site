import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import construct from "@/public/images/construct.jpg";
import Image from "next/image";
import Img2 from "@/public/images/disscusion.jpg";
const Hero = () => {
  return (
    <div className=" h-[70vh] lg:h-[80vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center sm:mt-2 ">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2 ">
          <h1
            data-aos="fade-right"
            className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]"
          >
            Exploring Innovative Paths to cultivate your business
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-[15px] md:text-[17px] mb-[2rem] text-black opacity-90 font-[400]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            distinctio cupiditate neque dolorum in earum tenetur omnis dicta
            iure aliquam!
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex items-center space-x-4 md:space-x-6"
          >
            <ButtonBlue text="Get Started" />
            <ButtonRed text="Explore Features" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="col-span-2 hidden sm:block md:mt- "
        >
          <Image src={Img2} alt="hero image" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

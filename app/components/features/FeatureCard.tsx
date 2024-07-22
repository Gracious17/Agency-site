import Image from "next/image";
import React from "react";
interface props {
  image: string;
  title: string;
}
const FeatureCard = ({ image, title }: props) => {
  return (
    <div className="text-center bg-gray-200 p-4 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105">
      <Image
        src={image}
        alt="icon"
        width={70}
        height={70}
        className="m-auto rounded-[100%] "
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-[#02073e]">
        {title}
      </h1>
      <p className="mt-[1rem] text-black opacity-50 text-[15px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum illo
        labore accusantium enim consequuntur exercitationem vero sint officiis
        harum iste!
      </p>
      <p className="mt-[1.4rem] text-red-600 font-[500] cursor-pointer hover:text-red-800">
        Learn More
      </p>
    </div>
  );
};

export default FeatureCard;

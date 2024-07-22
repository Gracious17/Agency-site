import React from "react";
import icon1 from "@/public/images/aticon.jpg";
import icon2 from "@/public/images/icon2.jpg";
import sportImg from "@/public/images/support.jpg";
import Img from "@/public/images/trans.jpg";
import Image from "next/image";
const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div className="w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Do you need help? Our support team is ready to help you
          </h1>
          <p className="text-gray-900 opacity-900 mt-[1rem] text-[17px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            iste magni harum facilis magnam quos praesentium, sunt expedita
            suscipit voluptates! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Earum, aliquid.
          </p>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image
              src={icon1}
              alt="icon"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[600] mb-[0.5rem]">
                Email client support
              </h1>
              <p className="md:w-[75%] w-[90%] text-[15px] text-black opacity-85">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt commodi consequuntur sapiente a eligendi praesentium,
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image
              src={icon2}
              alt="icon"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[600] mb-[0.5rem]">
                Live ticket support
              </h1>
              <p className="md:w-[75%] w-[90%] text-[15px] text-black opacity-85">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt commodi consequuntur sapiente a eligendi praesentium,
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <Image
            src={sportImg}
            alt="support"
            className="bg-white rounded-r-full opacity-900 shadow-inner rounded-bl-full "
          />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;

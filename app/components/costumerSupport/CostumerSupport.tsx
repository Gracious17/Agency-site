import Image from "next/image";
import React from "react";
import supportImg from "@/public/images/service.jpg";
import { CheckIcon } from "@heroicons/react/16/solid";

const CostumerSupport = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="order-2 lg:order-1"
        >
          <Image src={supportImg} alt="support" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
            className="text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]"
          >
            Costumer Support Is Our Main Piority And Their Hundred Percent
            Satisfaction
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
            className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            qui at. Nemo, maiores. Tempora quaerat fugit, maiores nesciunt
            repudiandae quo.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor-placement="top-center"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600 " />
            <p className="text-[17px] text-[#02073e] font-[500]">
              Medical and Vision
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-anchor-placement="top-center"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600 " />
            <p className="text-[17px] text-[#02073e] font-[500]">
              Life Insurance
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-anchor-placement="top-center"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600 " />
            <p className="text-[17px] text-[#02073e] font-[500]">
              400(k) Savings
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-anchor-placement="top-center"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600 " />
            <p className="text-[17px] text-[#02073e] font-[500]">
              MSAs and FSAs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostumerSupport;

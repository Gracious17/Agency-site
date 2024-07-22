import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <SectionHeading
        headingMini="Deal For Your Business"
        headingPrimary="Meet Our Pricing Plan That Suit You"
      />
      <div className="w-[80%] mx-auto grid gap-[2rem]   pt-[6rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <PriceCard bg="bg-[#81124e]" price="19.99" num="1" plan="Starter" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <PriceCard
            bg="bg-[#22840e]"
            price="20.99"
            num="2"
            plan="Premium Pack"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <PriceCard bg="bg-[#112c60]" price="25.99" num="3" plan="Ultimate" />
        </div>
      </div>
    </div>
  );
};

export default Price;

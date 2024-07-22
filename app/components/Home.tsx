"use client";
import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import CostumerSupport from "./costumerSupport/CostumerSupport";
import Price from "./price/Price";
import SupportTeam from "./supportTeam/SupportTeam";
import Company from "./company/Company";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div>
      <Hero />
      <Features />
      <CostumerSupport />
      <Price />
      <SupportTeam />
      <Company />
    </div>
  );
};

export default Home;

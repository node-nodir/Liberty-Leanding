import React from "react";

// ---> Css
import "./hero.css";

// ---> Images
import HeroBg from "../../Assets/Images/hero-bg.png";
import HeroMobileBg from "../../Assets/Images/hero-mobile-bg.png";

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="hero max-w-[790px] w-full mx-auto mt-[56px] sm:mt-[120px] px-[15px] sm:px-[100px] py-[15px] sm:py-[28px] rounded-md relative">
          <h1 className="font-bold text-center text-[35px] sm:text-[60px] leading-[42px] sm:leading-[75px] text-[#FFFFFF] mb-[10px] sm:mb-5">
            Lorem expensive
          </h1>
          <p className="text-white text-[18px] sm:text-[20px] leading-[25px] sm:leading-[30px] text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, earum. Tenetur libero
            inventore in enim fugiat, quas cupiditate qui quaerat voluptate aliquam esse similique
            repellat debitis.
          </p>
        </div>
        <div className="-mt-[60px] sm:-mt-[80px]">
          <img className="hidden sm:block w-full h-[480px]" src={HeroBg} alt="hero-bg" />
        </div>
      </div>
      <img
        className="block sm:hidden w-full h-[258px] sm:h-[480px]"
        src={HeroMobileBg}
        alt="hero-bg"
      />
    </section>
  );
}

export default Hero;

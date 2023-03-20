import React from "react";

// ---> Css
import "./hero.css";

function HeroSecnond() {
  return (
    <section className="container hero2 mt-[56px] sm:mt-[92px]">
      <div className="flex items-center pt-[165px]">
        <div className="max-w-[450px] w-full">
          <button className="font-medium relative py-[5px] px-2 border text-white rounded-tr-[5px] rounded-bl-[5px] border-[#D2E66A] duration-300 hover:text-[#FDE753]">
            We are creative
            <span className="inline-block absolute max-w-[150px] w-full h-[35px] top-[5px] left-[5px] border border-[#FDE753]  rounded-tr-[5px] rounded-bl-[5px] hover:top-0 hover:left-0 duration-300"></span>
          </button>
          <h2 className="font-bold text-[50px] leading-[60px] mt-4 text-white">Digital studio</h2>
          <p className="font-normal text-[18px] leading-[28px] text-gray-300 mt-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSecnond;

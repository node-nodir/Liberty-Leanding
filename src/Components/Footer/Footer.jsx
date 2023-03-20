import React from "react";

// ---> Css
import "./footer.css";

// ---> Images
import Logo from "../../Assets/Images/logo.svg";
import Telegram from "../../Assets/Images/telegram.svg";

function Footer() {
  return (
    <footer className="footer mt-[50px] py-5">
      <div className="container flex flex-col sm:flex-row sm:items-center items-start sm:justify-between">
        <div className="flex space-x-[67px]">
          <img src={Logo} alt="logo" />
          <div>
            <p className="font-medium text-[15px] leading-[18px] text-gray-300 mt-[17px]">
              © 2021 liberty code
            </p>
            <p className="font-medium text-[15px] leading-[18px] text-gray-300 mt-[5px]">
              Lorem ipsum dolor.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-[50px] gap-y-5 mt-[30px] sm:mt-0">
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              About
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              Portfolio
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              Certificat
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              Contract
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              Abroad
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              Contact
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              Sertificat
            </a>
          </li>
        </ul>
        <div className="max-w-[282px] w-full mt-[30px] sm:mt-0">
          <h3 className="font-semibold text-base text-gray-300">Congratulation</h3>
          <p className="font-medium text-[15px] leading-[18px] text-gray-300 mt-[5px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <form className="flex items-center mt-[15px]">
            <input
              className="h-[41px] text-sm bg-[#444444] text-gray-300 border-[0.5px] border-[#B8B8B8] rounded-l-[20px] px-4 outline-none w-full"
              type="text"
              placeholder="Your email address"
            />
            <button
              id="submitBtn"
              className="flex items-center justify-center ml-[5px] rounded-r-[10px] w-[48px] h-[41px] px-[10px] border"
              type="submit"
            >
              <img className="" src={Telegram} alt="telegram" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

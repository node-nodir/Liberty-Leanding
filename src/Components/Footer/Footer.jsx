import React from "react";

// ---> Css
import "./footer.css";

// ---> Images
import Logo from "../../Assets/Images/logo.svg";
import Telegram from "../../Assets/Images/telegram.svg";

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container flex items-center justify-between">
        <div>
          <img src={Logo} alt="logo" />
          <p className="font-medium text-[15px] leading-[18px] text-gray-300 mt-[17px]">
            © 2021 liberty code
          </p>
          <p className="font-medium text-[15px] leading-[18px] text-gray-300 mt-[5px]">
            Lorem ipsum dolor.
          </p>
        </div>
        <ul className="grid grid-cols-4 gap-x-[50px] gap-y-5">
          <l>
            <a className="font-normal text-base text-gray-300" href="/">
              About
            </a>
          </l>
          <l>
            <a className="font-normal text-base text-gray-300" href="/">
              Portfolio
            </a>
          </l>
          <l>
            <a className="font-normal text-base text-gray-300" href="/">
              Certificat
            </a>
          </l>
          <l>
            <a className="font-normal text-base text-gray-300" href="/">
              Contract
            </a>
          </l>
          <l>
            <a className="font-normal text-base text-gray-300" href="/">
              Home
            </a>
          </l>
          <l>
            <a className="font-normal text-base text-gray-300" href="/">
              Abroad
            </a>
          </l>
          <l>
            <a className="font-normal text-base text-gray-300" href="/">
              Contact
            </a>
          </l>
          <li>
            <a className="font-normal text-base text-gray-300" href="/">
              Sertificat
            </a>
          </li>
        </ul>
        <div className="max-w-[282px] w-full">
          <h3 className="font-semibold text-base text-gray-300">Congratulation</h3>
          <p className="font-medium text-[15px] leading-[18px] text-gray-300 mt-[5px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <form className="flex items-center mt-[15px]">
            <input
              className="h-[41px] bg-[#444444] text-gray-300 border-[0.5px] border-[#B8B8B8] rounded-l-[20px] px-4 outline-none w-full"
              type="text"
            />
            <button
              className="btnsent flex items-center justify-center ml-[5px] rounded-r-[10px] w-[48px] h-[41px] px-[10px] border"
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

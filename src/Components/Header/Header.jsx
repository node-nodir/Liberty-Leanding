import React, { useState } from "react";

// ---> Images
import Logo from "../../Assets/Images/logo.svg";
import Down from "../../Assets/Images/down.svg";
import Call from "../../Assets/Images/call.svg";
import Rus from "../../Assets/Images/rus.png";
import Uzb from "../../Assets/Images/uzb.png";
import Eng from "../../Assets/Images/eng.png";
import Burger from "../../Assets/Images/burger.svg";

function Header() {
  const [drop, setDrop] = useState(false);
  // ---> Change Languages
  const [uzb, setUzb] = useState(true);
  const [rus, setRus] = useState(false);
  const [eng, setEng] = useState(false);

  const ChangeUzb = () => {
    setUzb(true);
    setRus(false);
    setEng(false);
  };
  const ChangeRus = () => {
    setRus(true);
    setUzb(false);
    setEng(false);
  };
  const ChangeEng = () => {
    setEng(true);
    setRus(false);
    setUzb(false);
  };

  window.addEventListener("click", (e) => {
    if (e.target.id !== "wrapper") setDrop(false);
  });

  return (
    <header>
      <div className="container flex items-center justify-between">
        <div className="flex items-center py-4">
          <a className="inline-block" href="/">
            <img className="w-[103px] sm:w-[124px] h-[50px] sm:h-[60px]" src={Logo} alt="logo" />
          </a>
          <button
            id="wrapper"
            onClick={() => setDrop(!drop)}
            className="hidden relative z-0 sm:flex items-center font-normal text-lg text-white ml-16"
          >
            {uzb ? "UZB" : rus ? "RUS" : eng ? "ENG" : ""}
            <img
              className={`w-6 h-6 ml-2 duration-200 ${drop ? "-rotate-180" : ""}`}
              src={Down}
              alt="down"
            />
            {/* ------ Dropdown ------ */}
            {drop ? (
              <ul className="absolute z-50 -left-4 top-[50px] w-[140px] bg-[#6F6F6F] rounded-[10px] duration-300">
                <li
                  onClick={ChangeUzb}
                  className="flex items-center font-normal text-base text-white pt-[10px] pb-[5px] px-[10px]"
                >
                  <img className="w-6 h-6 mr-2" src={Uzb} alt="country" />
                  Uzbek
                </li>
                <li
                  onClick={ChangeRus}
                  className="flex items-center font-normal text-base text-white py-[5px] px-[10px]"
                >
                  <img className="w-6 h-6 mr-2" src={Rus} alt="country" />
                  Russian
                </li>
                <li
                  onClick={ChangeEng}
                  className="flex items-center font-normal text-base text-white pb-[10px] pt-[5px] px-[10px]"
                >
                  <img className="w-6 h-6 mr-2" src={Eng} alt="country" />
                  English
                </li>
              </ul>
            ) : null}
          </button>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-[21px]">
            <li className="nav_item">
              <a className="nav_link font-normal text-lg text-white tracking-[0.48px]" href="/">
                About
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link font-normal text-lg text-white tracking-[0.48px]" href="/">
                About
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link font-normal text-lg text-white tracking-[0.48px]" href="/">
                About
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link font-normal text-lg text-white tracking-[0.48px]" href="/">
                About
              </a>
            </li>
          </ul>
        </nav>
        <a
          className="hidden lg:flex items-center font-normal text-lg text-white tracking-[0.48px]"
          href="tel:+998 933354018"
        >
          <img className="w-6 h-6 mr-2" src={Call} alt="call" />
          +998 93 335-40-18
        </a>
        <button className="block sm:hidden">
          <img className="w-[38px] h-[38px]" src={Burger} alt="menu-burger" />
        </button>
      </div>
    </header>
  );
}

export default Header;

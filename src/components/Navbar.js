import React, { useState } from "react";
import menu from "../assets/Hamburger Menu.svg"

export default function Navbar() {
  const [openNav, setOpenNav] = useState(true);

  function handleMenuClick() {
    setOpenNav(prevState => !prevState);
  }

  return (
    <div>
      <div className="p-6 pb-2 md:hidden hover:cursor-pointer">
        <img src={menu} alt="menu" onClick={handleMenuClick}/>
      </div>

      <div className={`${openNav ? 'max-md:hidden' : ''} h-45 md:h-[12%] max-md:w-1/2 flex flex-col md:flex-row p-4 md:justify-evenly text-xl`}>
        <a href="#home">
          <button className="px-3 py-2 text-white rounded-md">Home</button>
        </a>
        <a href="#skills">
          <button className="px-3 py-2 text-white rounded-md">Skills</button>
        </a>
        <a href="#projects">
          <button className="px-3 py-2 text-white rounded-md">Projects</button>
        </a>
        <a href="#achievements">
          <button className="px-3 py-2 text-white rounded-md">
            Achievements
          </button>
        </a>
      </div>
    </div>
  );
}

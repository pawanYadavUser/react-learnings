import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import {TbTruckReturn} from 'react-icons/tb';
import {FaGoogleWallet} from 'react-icons/fa';
import {MdHelp, MdOutlineFavorite} from 'react-icons/md';


export const TopNav = () => {

  const [navBar, setNavbar] = useState(false);

  return (
    <div className="max-w-[380] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNavbar(!navBar)} className="cursor-pointer ">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          yum
          <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search meals"
        />
      </div>

      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} />Cart
      </button>

      {
        navBar ? (<div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" 
        onClick={()=>setNavbar(!navBar)}></div>)
          : ("")
      }

      <div className={navBar ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200"
        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"
      }>
        <AiOutlineClose onClick={() => setNavbar(false)} size={25}
          className="absolute right-4 top-4 bg-color-white cursor-pointer hover:bg-gray-200"
        />
        <h2 className="text-2xl p-4">Yum <span className="text-orange-900 font-bold">Eats</span></h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <BsPerson className="mr-4 text-white bg-black rounded-full" size={25} />
              My Account
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckReturn className="mr-4 text-white bg-black rounded-full" size={25} />
              Delivery
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavorite className="mr-4 text-white bg-black rounded-full" size={25} />
              My Favorite
            </li>
            <li className="text-xl py-4 flex">
              <FaGoogleWallet className="mr-4 text-white bg-black rounded-full" size={25} />
              My Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp className="mr-4 text-white bg-black rounded-full" size={25} />
              Help
            </li>
          </ul>
        </nav>

      </div>




    </div>
  );
};

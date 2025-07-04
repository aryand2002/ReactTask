import React, { useState } from "react";
import { Bell, UserCircle2 } from "lucide-react";
import Grid from "../Image/images.png";
import Profile from "./Profile";

const Topbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  return (
    <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between sticky top-0 z-40 w-full">
   
      <div className="flex-1">
        <div className="relative text-gray-400 w-[140px] sm:w-[200px] md:w-[250px]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fa-solid fa-magnifying-glass text-gray-500 text-sm"></i>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 w-full text-xs sm:text-sm rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>

     
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-4">
        
        <button className="hidden md:flex text-gray-600 hover:text-black transition border-[2px] border-[#d4d5d588] px-4 py-2 rounded-[15px] items-center text-sm">
          <img src={Grid} alt="" className="w-[20px] h-[20px] rounded-xl mr-2" />
          Change view
        </button>

        <button className="text-gray-600 hover:text-black transition">
          <Bell size={20} />
        </button>

        <div
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleDrawerOpen}
        >
          <UserCircle2 className="text-gray-600" size={22} />
        </div>
      </div>

     
      <Profile open={openDrawer} onClose={handleDrawerClose} />
    </div>
  );
};

export default Topbar;

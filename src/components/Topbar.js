import React, { useState } from "react";
import { Bell, UserCircle2 } from "lucide-react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Grid from "../Image/images.png";
import Profile from "./Profile";

const Topbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  return (
    <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between sticky top-0 z-40 w-full">
      <div className="flex-1">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          allowClear
          className="w-[140px] sm:w-[200px] md:w-[250px] rounded-[10px] border-none shadow-none focus:shadow-none focus:border-none"
          style={{
            border: "none",
            borderRadius: "10px",
            boxShadow: "none",
            backgroundColor: "#f3f4f6",
          }}
        />
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

import React from "react";
import {
  Home,
  BarChart2,
  MessageCircle,
  User,
  FileText,
} from "lucide-react";
import MeterIcon from '../Image/speedMeter.png';
import PdfImg from '../Image/pdf.png';

const navItems = [
  { icon: <Home size={22} />, label: "Overview" },
  { icon: <BarChart2 size={22} />, label: "Analytics" },
  { icon: <MessageCircle size={22} />, label: "Messages" },
  { icon: <User size={22} />, label: "User" },
  { icon: <FileText size={22} />, label: "Documents" },
];

const Sidebar = () => {
  return (
    <>
   
      <div className="hidden md:flex h-screen w-[220px] bg-white shadow-lg border-r border-gray-200 p-4 flex-col sticky top-0 z-50">
      
        <div className="text-lg font-bold mb-6 flex flex-col justify-center gap-4 pt-4">
          <img
            src={MeterIcon}
            alt="MeterIcon"
            className="w-[60px] h-[60px] ml-10 rounded-2xl"
          />
          <h1 className="ml-4">Financial CRM</h1>
        </div>

     
        <nav className="flex flex-col gap-4 mt-4 flex-1">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-2 rounded-md cursor-pointer transition-all
                ${index === 0 ? "text-indigo-600 bg-indigo-50 font-medium" : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

       
        <div className="mt-auto pt-4 flex flex-col gap-5">
          <img src={PdfImg} alt="pdf" className="mt-[-20px]" />
          <p>Annual detailed report</p>
          <button className="flex items-center gap-3 py-5 bg-[#4030ef] text-white font-bold text-center px-10 rounded-[28px]">
            Download
          </button>
        </div>
      </div>

    
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md py-3 flex justify-around items-center md:hidden z-50">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`transition ${index === 0 ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

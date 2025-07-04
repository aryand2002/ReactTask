import React from 'react';
import { Drawer, Divider } from 'antd';
import {
  X,
  Settings,
  ArrowDownCircle,
  ArrowUpCircle,
  BarChart3,
} from 'lucide-react';
import MyProfile from '../Image/ProfilePic.jpg';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 200 },
  { name: 'Wed', value: 150 },
  { name: 'Thu', value: 300 },
  { name: 'Fri', value: 250 },
];

const Profile = ({ open, onClose }) => {
  return (
    <Drawer
      title={
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-semibold">My Profile</span>
          <div className="flex items-center gap-3">
            <Settings className="text-gray-500 hover:text-black cursor-pointer" size={20} />
            <X className="text-gray-500 hover:text-black cursor-pointer" onClick={onClose} />
          </div>
        </div>
      }
      placement="right"
      closable={false}
      onClose={onClose}
      open={open}
      width={320}
    >
      
      <div className="flex flex-col items-center gap-2 mb-6">
        <img
          src={MyProfile}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
        />
        <h3 className="text-lg font-semibold">Aryan Dewangan</h3>
        <p className="text-gray-500 text-sm">aryan@gmail.com</p>
      </div>

      
      <div className="bg-gray-50 p-3 rounded-xl shadow mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
          <BarChart3 size={16} /> Weekly Overview
        </h4>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

   
      <Divider className="my-4">Recent Activity</Divider>

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">Today</p>

        <div className="flex items-start gap-2 mb-2">
          <ArrowDownCircle className="text-green-500 mt-1" size={18} />
          <div>
            <p><strong>From Aman</strong> ₹500</p>
            <p className="text-xs text-gray-400">Today, 11:00 AM</p>
          </div>
        </div>

        <div className="flex items-start gap-2 mb-2">
          <ArrowUpCircle className="text-red-500 mt-1" size={18} />
          <div>
            <p><strong>To Riya</strong> ₹300</p>
            <p className="text-xs text-gray-400">Today, 2:15 PM</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2">Yesterday</p>

    
        <div className="flex items-start gap-2 mb-2">
          <ArrowDownCircle className="text-green-500 mt-1" size={18} />
          <div>
            <p><strong>From Rahul</strong> ₹1000</p>
            <p className="text-xs text-gray-400">Yesterday, 5:00 PM</p>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Profile;

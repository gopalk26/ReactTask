import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <div className="p-5 shadow-lg w-52 h-screen bg-gray-800 text-white">
        <div className="p-4 shadow-lg bg-red-400 rounded-xl">
          <p className="text-start">
            post your opportunity and Find your perfect candidate today
          </p>
          <div className="py-2">
            <button className="py-2 px-2 rounded-lg bg-white text-red-400 hover:bg-blue-600 hover:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              + Post a Job
            </button>
          </div>
        </div>
        <h1 className="mb-4 text-xl font-bold my-2 text-start">General</h1>
        <ul className="space-y-5">
          <SidebarItem icon={<FaHome color="white " />} text="Dashboard" />
          <SidebarItem
            icon={<FaUserFriends color="white" />}
            text="Candidates"
          />
          <SidebarItem icon={<FaBriefcase color="white" />} text="Jobs" />
          <SidebarItem
            icon={<FaCalendarAlt color="white" />}
            text="Interview Schedule"
          />
          <SidebarItem icon={<FaChartBar color="white" />} text="Reports" />
          <SidebarItem icon={<FaCog color="white" />} text="Profile Settings" />
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => {
  return (
    <li className="flex items-center space-x-2">
      {icon}
      <span className="text-sm">{text}</span>
    </li>
  );
};

export default Sidebar;

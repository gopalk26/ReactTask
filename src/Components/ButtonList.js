
import React from "react";
import {
  FaClipboardList,
  FaCalendarDay,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

const ButtonList = () => {
  return (
    <div className="ml-3 py-2">
      <h1 className="text-start font-semibold">Quick Search</h1>
      <div className="flex justify-start items-center mt-3 space-x-4">
        <ButtonListItem
          icon={<FaClipboardList color="#6366F1" />}
          number="02"
          text="Total Job Post"
          bgColor="#FFFFFF"
        />
        <ButtonListItem
          icon={<FaCalendarDay color="#F87171" />}
          number="01"
          text="Interview Today"
          bgColor="#FFFFFF"
        />
        <ButtonListItem
          icon={<FaUserFriends color="#A78BFA" />}
          number="02"
          text="Open Positions"
          bgColor="#FFFFFF"
        />
        <ButtonListItem
          icon={<FaUsers color="#34D399" />}
          number="02"
          text="Candidate Applied"
          bgColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

const ButtonListItem = ({ icon, number, text, bgColor }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4">
      <div
        style={{ backgroundColor: bgColor }}
        className="rounded-full p-3 mr-3 shadow-md"
      >
        {icon}
      </div>
      <div>
        <span className="text-2xl font-bold">{number}</span>
        <span className="ml-1">{text}</span>
      </div>
    </div>
  );
};

export default ButtonList;


import React from "react";
import {
  FaUser,
  FaImages,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaTools,
} from "react-icons/fa";
import CircularProgress from "./CircularProgress";

const Head = () => {
  return (
    <div>
      <h1 className="text-xl text-start mb-2 ml-4 overflow-x-hidden">
        DashBoard{" "}
      </h1>
      <div className="ml-4 p-8 mr-4 w-screen shadow-lg rounded-xl rounded-r-lg bg-blue-500 flex items-center">
        <img
          className="w-16 h-18 rounded-lg mr-4"
          alt="logo"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBnaXJsfGVufDB8fDB8fHww"
        />
        <div className="mr-5 flex-grow">
          <h2 className="text-white text-start text-lg">
            Welcome Back Renuka,
          </h2>
          <p className="text-white text-start">
            You're almost there! To unleash the full potential of our services,
          </p>
          <div className="text-white flex py-1 space-x-4">
            <button className="flex items-center px-4 py-2 rounded-lg bg-white text-blue-700 shadow-md hover:bg-blue-100 transition duration-300">
              <FaUser className="mr-2" /> Description
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg bg-white text-blue-700 shadow-md hover:bg-blue-100 transition duration-300">
              <FaImages className="mr-2" /> Profile Photos
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg bg-white text-blue-700 shadow-md hover:bg-blue-100 transition duration-300">
              <FaGraduationCap className="mr-2" /> Qualifications
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg bg-white text-blue-700 shadow-md hover:bg-blue-100 transition duration-300">
              <FaBriefcase className="mr-2" /> Experience
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg bg-white text-blue-700 shadow-md hover:bg-blue-100 transition duration-300">
              <FaTrophy className="mr-2" /> Achievements
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg bg-white text-blue-700 shadow-md hover:bg-blue-100 transition duration-300">
              <FaTools className="mr-2" /> Skills
            </button>
            <div className="flex items-center ml-auto">
              <CircularProgress progress={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;

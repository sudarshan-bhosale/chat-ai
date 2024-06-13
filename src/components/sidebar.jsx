import React, { useState, useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Context } from "../context/context";
function Sidebar({hide,sethide}) {

  const {prevPrompts, onSent, recentPrompt, shorResult, loading, resultData, input, setInput } = useContext(Context);
    return (
    <>
      <div
        className={`${hide ? "w-56" : "w-20"} ${
          hide ? "" : "items-center justify-center pr-3"
        } h-screen flex flex-col justify-between bg-gray-800 text-white`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex gap-4 text-2xl m-2">
            <MdOutlineMenu onClick={(e)=>sethide(prev=>!prev)} className="text-3xl mt-1" />
            {hide ? (
              <div className="flex ">
                <h2 className="text-2xl font-semibold">Gemini</h2>
                <IoMdArrowDropdown className="m-2" />
              </div>
            ) : null}
          </div>
          <div
            className={`${
              hide ? "" : "w-10 h-10 flex rounded-full pr-1"
            } m-2 pl-1 flex bg-gray-600 gap-2 h-10 items-center justify-center rounded-3xl`}
          >
            <MdAdd className="text-3xl" />
            {hide ? <p className=" text-lg mr-5">New chat</p> : null}
          </div>
          {hide ? (
            <div className=" flex flex-col gap-2 m-2">
              <p className="font-semibold text-lg">Recent</p>
              <div className="flex bg-blue-400 gap-2 h-10 items-center justify-center rounded-3xl">
                <FaRegMessage />
                <p>{recentPrompt}</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 mb-10">
          <div className=" flex  gap-2 font-semibold ml-4">
            <IoMdHelpCircleOutline className="text-2xl" />
            {hide ? <p>Help</p> : null}
          </div>
          <div className=" flex gap-2 font-semibold ml-4">
            <FaHistory className="text-lg mt-1" />
            {hide ? <p>Activity</p> : null}
          </div>
          <div className=" flex gap-2 font-semibold ml-4">
            <IoSettings className="text-lg mt-1" />
            {hide ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;

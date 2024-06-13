import React from "react";
import { FaRegMessage } from "react-icons/fa6";

function Box({item})
{
    return(
        <>
        <div className="w-48 h-48 bg-gray-200 p-3 text-gray-700 rounded-xl hover:bg-gray-300 flex flex-col justify-between mt-12">
            <div>
                {item.name}
            </div>
            <div className="ml-32 bg-white w-8 h-8 items-center flex justify-center rounded-full">
                <img className="rounded-full" src={item.img} alt="" />
            </div>
        </div>
        </>
    )
}
export default Box;
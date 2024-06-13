import React from "react";

function Navbar({hide,sethide})
{
    

    return(
        <>
        <div className="flex justify-between border">
            <div>
                {hide ? null :<p className="text-2xl font-semibold text-gray-700 m-2 ">Gemini</p>}
            </div>
            <div className="">
                <img className="m-2 w-10 h-10 rounded-full" src="https://th.bing.com/th/id/OIP.JtOrgieD2K1Ho_2LjZnaUAHaH4?rs=1&pid=ImgDetMain" alt="" />
            </div>
        </div>
        </>
    )
}
export default Navbar;
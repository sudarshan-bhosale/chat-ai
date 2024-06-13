import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Section from "./components/section";
import Navbar from "./components/navbar";

function App()
{
  const [hide, sethide] = useState(false);

  return(
    <>
    <div className="w-full h-screen">
      <div className="flex">
      <Sidebar hide={hide} sethide={sethide}/>
      <div className="w-full">
      <Navbar hide={hide} sethide={sethide}/>
      <Section/>
      </div>
      </div>
    </div>
    </>
  )
}
export default App;
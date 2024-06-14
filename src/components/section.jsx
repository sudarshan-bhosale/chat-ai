import React, { useContext } from "react";
import Box from "./box";
import { LuImagePlus } from "react-icons/lu";
import { TiMicrophoneOutline } from "react-icons/ti";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../context/context";
import ReactMarkdown from "react-markdown";

function Section() {
  const suggested = [
    {
      name: "Explain the concept of machine learning and its different types?",
      img: "https://th.bing.com/th/id/OIP.xpBvsM0w031CG9fBG1mjJwHaG3?rs=1&pid=ImgDetMain",
    },
    {
      name: "What are the latest advancements in renewable energy technologies and their potential impacts?",
      img: "https://w7.pngwing.com/pngs/711/457/png-transparent-stopwatch-icon-timer-clock-stopwatch-stopwatch-time-hourglass-stopwatch.png",
    },
    {
      name: "What are some effective techniques for improving time management skills?",
      img: "https://th.bing.com/th/id/OIP.nhfXb2iIhXo27kjqVKfuewHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "What emerging technologies will shape the future of tech?",
      img: "https://static.vecteezy.com/system/resources/previews/000/573/624/original/map-pointer-gps-icon-vector.jpg",
    },
  ];

  const {
    onSent,
    recentPrompt,
    shorResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <>
      {!shorResult ? (
        <>
          <div className="text-6xl font-semibold text-center m-2 mt-6">
            <p className="text-gradient">Hello, Dev.</p>
            <h2 className="text-gray-400">How can I help you today?</h2>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {suggested.map((item, index) => {
              return <Box key={index} item={item} />;
            })}
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center h-96">
          <div className="w-[75%]">
            <div className="flex gap-4 items-center">
              <img
                className="m-2 w-10 h-10 rounded-full"
                src="https://th.bing.com/th/id/OIP.JtOrgieD2K1Ho_2LjZnaUAHaH4?rs=1&pid=ImgDetMain"
                alt=""
              />
              <p className="text-lg font-semibold">{recentPrompt}</p>
            </div>
            {loading ? (
              <div className="flex gap-4 w-full">
                <img
                  className="w-12 h-12"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
                  alt=""
                />
                <div className="w-full h-32 space-y-2">
                  <div className="w-full h-6 bg-gradient-to-r from-sky-400 via-pink-200 to-sky-400 animate-shimmer rounded"></div>
                  <div className="w-full h-6 bg-gradient-to-r from-sky-400 via-pink-200 to-sky-400 animate-shimmer rounded"></div>
                  <div className="w-full h-6 bg-gradient-to-r from-sky-400 via-pink-200 to-sky-400 animate-shimmer rounded"></div>
                </div>
              </div>
            ) : (
              <div className="flex gap-4 w-full">
                <img
                  className="w-12 h-12"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
                  alt=""
                />
                <div className="w-full h-96 overflow-y-auto">
                  <ReactMarkdown>
                    { resultData }
                  </ReactMarkdown>
                    {/* <p dangerouslySetInnerHTML={{ __html: resultData }}></p> */}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="w-full flex justify-center mt-24 items-center md:mt-44">
        <div className="flex w-[70%] justify-between bg-gray-200 p-3 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-gray-200 h-8 border-none focus:outline-none focus:ring-0"
            type="text"
            placeholder="Enter a prompt here"
            value={input}
          />
          <div className="flex gap-2 text-xl items-center">
            <LuImagePlus />
            <TiMicrophoneOutline />
            <IoSendSharp onClick={onSent} />
          </div>
        </div>
      </div>

      <div className="w-full text-center text-sm mt-2">
        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses.{" "}
          <a
            target="_blank"
            className="underline"
            href="https://support.google.com/gemini/answer/13594961?visit_id=638535096360952903-2214999210&p=privacy_notice&rd=1#privacy_notice"
            rel="noopener noreferrer"
          >
            Your privacy and Gemini Apps
          </a>
        </p>
      </div>
    </>
  );
}

export default Section;
